
    let globalCodeMap = {};
    
    function copyToClipboard(elementId, button) {
      const element = document.getElementById(elementId);
      const text = element.textContent;
      
      if (!text.trim()) {
        alert("Nothing to copy!");
        return;
      }
      
      navigator.clipboard.writeText(text).then(() => {
        // Visual feedback
        const originalText = button.textContent;
        button.textContent = '✓ Copied!';
        button.classList.add('copied');
        
        setTimeout(() => {
          button.textContent = originalText;
          button.classList.remove('copied');
        }, 2000);
      }).catch(err => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        // Visual feedback
        const originalText = button.textContent;
        button.textContent = '✓ Copied!';
        button.classList.add('copied');
        
        setTimeout(() => {
          button.textContent = originalText;
          button.classList.remove('copied');
        }, 2000);
      });
    }
    
    function showLoading(button) {
      button.textContent = 'Processing...';
      button.disabled = true;
      button.style.opacity = '0.6';
    }
    
    function hideLoading(button, originalText) {
      button.textContent = originalText;
      button.disabled = false;
      button.style.opacity = '1';
    }
    
    function showOutput(element, content) {
      element.textContent = content;
      element.classList.add('fade-in');
      setTimeout(() => element.classList.remove('fade-in'), 500);
    }
    
    async function encrypt() {
      const input = document.getElementById("inputText").value;
      const button = event.target;
      
      if (!input.trim()) {
        alert("Please enter some text to encrypt");
        return;
      }
      
      showLoading(button);
      
      try {
        const res = await fetch("/encrypt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: input })
        });
        
        const data = await res.json();
        
        if (data.error) {
          alert(data.error);
          return;
        }
        
        globalCodeMap = data.codes;
        showOutput(document.getElementById("hashedKeyOutput"), data.hash);
        showOutput(document.getElementById("codeMapOutput"), JSON.stringify(globalCodeMap, null, 2));
        
      } catch (error) {
        alert("Encryption failed. Please try again.");
        console.error(error);
      } finally {
        hideLoading(button, 'Encrypt Text');
      }
    }
    
    async function decrypt() {
      const hash = document.getElementById("hashedInput").value;
      const userCodeMap = document.getElementById("codeMapInput").value;
      const button = event.target;
      let codeMapToUse = globalCodeMap;
      
      if (!hash.trim()) {
        alert("Please enter the encrypted hash key");
        return;
      }
      
      try {
        if (userCodeMap.trim()) {
          codeMapToUse = JSON.parse(userCodeMap);
        }
      } catch (e) {
        alert("Invalid code map format. Please check your input.");
        return;
      }
      
      if (!codeMapToUse || Object.keys(codeMapToUse).length === 0) {
        alert("Code map is required for decryption. Please provide the code map.");
        return;
      }
      
      showLoading(button);
      
      try {
        const res = await fetch("/decrypt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ hash: hash, codes: codeMapToUse })
        });
        
        const data = await res.json();
        
        if (data.error) {
          alert(data.error);
          return;
        }
        
        showOutput(document.getElementById("originalTextOutput"), data.original);
        
      } catch (error) {
        alert("Decryption failed. Please check your inputs and try again.");
        console.error(error);
      } finally {
        hideLoading(button, 'Decrypt Text');
      }
    }