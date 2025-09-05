# 🎲 Roll2Encrypt: Ludo-Based Data Encryption System

## ✨ An Innovative Approach to Data Security

Welcome to **Roll2Encrypt**! This project presents a novel, game-based data encryption system that uses the classic game of Ludo to secure and obfuscate data. By transforming traditional encryption methods into a fun, interactive, and unpredictable process, Roll2Encrypt offers a unique blend of security, innovation, and educational value.

---

## 🎯 The Problem

Traditional encryption methods, while secure, are often based on predictable mathematical transformations. As computational power grows, these methods become increasingly vulnerable to brute-force attacks. There is a need for a new approach that makes data difficult to predict or crack using conventional decryption methods.

---

## 💡 Why It's Important

* **Security Through Obfuscation:** Unlike standard techniques like AES or RSA, Roll2Encrypt's use of Ludo game mechanics makes pattern recognition and decryption significantly harder.
* **Novelty & Innovation:** This system breaks from the norm of direct mathematical transformations by mapping data to real-world gameplay movements, introducing an unconventional and unpredictable layer of security.
* **Educational Value:** It serves as an engaging and interactive tool for understanding the principles of cryptography and is perfect for educational purposes or cryptographic research.
* **Potential Real-World Use Cases:**
    * Secure Messaging Systems: Conceal encryption within game data.
    * Steganography: Hide secret messages within gameplay.
    * Gaming Industry Security: Secure in-game transactions and user data.

---

## 🚀 Project Significance

* **Game-Based Cryptography:** Introduces an innovative way to secure data by integrating game mechanics.
* **Efficient Encoding:** Utilizes Huffman coding to compress and encode text efficiently, reducing the size of the encrypted data.
* **Multi-Parameter Encryption:** Incorporates multiple game parameters (Ludo piece color, piece type, board position, dice values) for a multi-layered encryption process.
* **Enhanced Randomness:** The system provides an extra layer of randomness, making brute-force decryption far more challenging than with traditional methods.

---

## 💻 Tech Stack

### Frontend
* **HTML:** Structuring the user interface.
* **CSS:** Styling the game board and user elements for a beautiful and intuitive design.
* **JavaScript:** Handling user input, displaying real-time game state, and communicating with the backend.

### Backend
* **Python:** The core programming language for the encryption logic.
* **Flask:** A lightweight web framework to serve the frontend and handle API requests for encryption and decryption.

### Data Structures
* **Huffman Tree:** For variable-length character encoding based on frequency.
* **Hash Tables:** For fast and efficient lookup of dice value mappings.
* **Graph:** To represent the Ludo board and manage piece movements.
* **File Handling:** To securely store encrypted messages and related metadata.

---

## 🔒 How It Works: The Encryption Process

### **Step 1: Text Input & ASCII Conversion**
* The user provides the text message they wish to encrypt.
* Each character of the message is converted into its corresponding ASCII format.

### **Step 2: Apply Huffman Coding**
* The system builds a Huffman tree based on the frequency of each character in the input text.
* Each character is then assigned a unique, variable-length binary Huffman code.

### **Step 3: Map Huffman Codes to Ludo Game Elements**
* The binary Huffman code for each character is used to determine a specific set of Ludo game actions:
    * **Piece Color:** Which Ludo piece moves (e.g., Red, Blue, Green, Yellow).
    * **Piece Type:** The type of character (capital letter, lowercase, number, or symbol) determines which piece is moved.
    * **Board Square:** The destination square number on the Ludo board.
    * **Dice Value:** A pseudo-randomly generated dice value (1-99) is assigned to the move.

### **Step 4: Generate the Encrypted Output**
* The final encrypted message is a sequential series of Ludo movements, where each movement uniquely represents a character from the original text.
* This sequence, along with the necessary metadata (like the Huffman tree structure), is securely stored or transmitted.

---

## 🏃‍♀️ How to Run

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/shamak24/Roll2Encrypt.git
    ```
2.  **Install backend dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
3.  **Run the Flask application:**
    ```bash
    python app.py
    ```
4.  **Open in your browser:**
    Access the application at `http://127.0.0.1:5000` to start encrypting your messages!
