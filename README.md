Here’s the updated documentation with the correct test cases and expected results:

---

## **📌 Stone Sorter: Optimize Stone Row**
A JavaScript web application that processes a row of stones (`R`, `G`, `B`) using two different algorithms:
1. **Remove adjacent identical stones** – Calculates the minimum number of stones that need to be removed so that no two adjacent stones are the same.
2. **Count rows containing all colors** – Determines how many full groups of stones contain all three colors (`R`, `G`, `B`).

---

## **📂 Project Structure**
```
stone-sorter/
│── index.html       # Main HTML file
│── styles/
│   ├── styles.css   # Main CSS file (BEM methodology)
│── scripts/
│   ├── main.js      # Entry point script
│   ├── app/
│   │   ├── StoneProcessor.js  # Logic for processing stones
│   │   ├── Renderer.js        # Handles UI rendering
│   │   ├── UIHandler.js       # Manages user interactions
│── README.md       # Documentation
```

---

## **🚀 Features**
✅ **Two algorithms for processing stones**  
✅ **Interactive UI with visualization**  
✅ **Clean architecture using OOP principles**  
✅ **CSS structured with BEM methodology**  
✅ **Modular JavaScript for better maintainability**

---

## **📜 How It Works**
1. Enter a sequence of stones (`R`, `G`, `B`) in the input field.
2. Select the algorithm:
    - **Remove adjacent identical stones** – Determines how many stones need to be removed.
    - **Count rows with all colors** – Counts how many groups contain all three colors.
3. Click **"Process"** to see the results and a visualization of the stones.

---

## **📊 Example Test Cases**
The **Remove Adjacent Identical Stones** algorithm will return the number of stones that must be removed to ensure that no two adjacent stones are the same.

| **Input**       | **Output (Removed Stones)** | **Final Result**  |
|---------------|-----------------|----------------|
| `"RRGB"`      | `1`             | `"RGB"`       |
| `"RRGGB"`     | `2`             | `"RGB"`       |
| `"RRRRGB"`    | `3`             | `"RGB"`       |
| `"RGBRGBRGGB"`| `1`             | `"RGBRGBRGB"` |
| `"RGGRGBBRGRR"` | `3`           | `"RGRGBRGR"`  |
| `"RRRRGGGGBBBB"` | `6`         | `"RGB"`       |

The **Count Rows with All Colors** algorithm will return how many full rows contain all three colors (`R`, `G`, `B`).

For example:

| **Input**       | **Output (Rows with all colors)** | **Visualization**  |
|---------------|-----------------|----------------|
| `"RGBRGBRRGGGB"` | `3`           | 🔴🟢🔵<br>🔴🟢🔵<br>🔴🔴🟢<br>🟢🟢🔵 |

---

## **📸 Screenshots**
### **User Interface**
![Stone Sorter UI](https://via.placeholder.com/600x400?text=Stone+Sorter+UI)

### **Example Output**
#### **Input:** `RRGGBB`
- **Removed Stones:** `3`
- **Rows with all colors:** `2`
- **Visualization:**
  ```
  🔴🔴🟢🟢🔵🔵
  ```

---

## **🔧 Setup & Usage**
### **1️⃣ Open Locally**
- Download or clone this repository:
  ```sh
  git clone https://github.com/your-username/stone-sorter.git
  cd stone-sorter
  ```
- Open `index.html` in your browser.

### **2️⃣ Live Preview (Recommended)**
You can run this project using **Live Server** in VS Code:
1. Install the **Live Server** extension.
2. Right-click `index.html` → **Open with Live Server**.

---

## **🔨 Technologies Used**
- **HTML5**
- **CSS3 (BEM Methodology)**
- **JavaScript (ES6+)**
- **Modular JS with Import/Export**
- **OOP Principles**

---

## **📌 Future Enhancements**
🚀 Add animation effects when stones are removed.  
🔄 Implement a backend for storing user inputs and results.  
📊 Add statistics about stone arrangements.

---

## **📝 License**
This project is licensed under the **MIT License**.

---

## **💡 Author**
👨‍💻 Developed by **Your Name**  
🌍 Portfolio: [your-website.com](https://your-website.com)  
📧 Contact: your-email@example.com

---

### **✨ What’s New?**
✅ **Test cases are now properly documented!**  
✅ **Examples now clearly show expected output.**  
✅ **Proper formatting for improved readability.**

Let me know if you need further refinements! 🚀