# **📜 Stone Sorter: Optimize Stone Row**
A JavaScript web application that allows users to process a row of stones (`R`, `G`, `B`) using different algorithms.  
Now includes **smooth removal animations** for a better user experience! 🎬

---

## **📂 Project Structure**
```
stone-sorter/
│── index.html       # Main HTML file
│── styles/
│   ├── styles.css   # Main CSS file (BEM methodology, animations added)
│── scripts/
│   ├── main.js      # Entry point script
│   ├── app/
│   │   ├── UIHandler.js       # Manages user interactions
│   │   ├── StoneProcessor.js  # Logic for processing stones
│   │   ├── Renderer.js        # Handles UI rendering & animations
│── README.md       # Documentation
```

---

## **🚀 Features**
✅ **Three processing algorithms:**
1. **Remove Adjacent Identical Stones** – Ensures no two adjacent stones are the same.
2. **Count Rows with All Colors** – Groups stones into rows that contain `R, G, B`.
3. **Remove Extra Colors** – Ensures each row contains a proper sequence of `RGB`, removing excess occurrences.

✅ **New Smooth Removal Animations!**  
✅ **Dropdown with Predefined Examples** – Makes testing easier.  
✅ **Improved Input Validation** – Ensures only `R, G, B` are used.  
✅ **Modular JavaScript Code** – Easy to expand and modify.

---

## **📜 How It Works**
1️⃣ **Enter a sequence of stones** (`RRGGBB`, `RGBRGB`, etc.).  
2️⃣ **Select an algorithm**:
- **Remove Adjacent Identical Stones**
- **Count Rows with All Colors**
- **Remove Extra Colors**  
  3️⃣ **Click "Process"** to see the results.  
  4️⃣ **Visual Output:** Stones are displayed, and removed stones smoothly fade out!

---

## **📊 Example Test Cases**
| **Input**        | **Algorithm**                     | **Output**              | **Animation**  |
|-----------------|---------------------------------|------------------------|--------------|
| `"RRGB"`        | Remove Adjacent Stones         | `"RGB"`                 | Shrinks & fades |
| `"RRGGB"`       | Remove Adjacent Stones         | `"RGB"`                 | Shrinks & fades |
| `"RRRRGB"`      | Remove Adjacent Stones         | `"RGB"`                 | Shrinks & fades |
| `"RGBRGBRGGB"`  | Remove Extra Colors            | `"RGBRGBRGB"`           | Shrinks & fades |
| `"RGGRGBBRGRR"` | Remove Extra Colors            | `"RGRGBRGR"`            | Shrinks & fades |
| `"RRRRGGGGBBBB"`| Remove Extra Colors            | `"RGB"`                 | Shrinks & fades |
| `"RGBRGBRGB"`   | Count Rows with All Colors     | `3 Rows`                | No removal |

---

## **🎬 New Animation Effect**
- Stones that need to be removed **shrink & fade out** smoothly.
- After **0.5s**, the cleaned-up row appears correctly.
- **Improves User Experience** and makes the process **more engaging**!

**Example:**  
✅ Input: `"RRRRGB"`  
✅ Output: `"RGB"`  
✅ Effect: The **extra "R" stones shrink & fade**!

---

## **📸 Screenshots**
### **User Interface**
![Stone Sorter UI](https://via.placeholder.com/600x400?text=Stone+Sorter+UI)

### **Example Output (Animated)**
#### **Before Processing**
🟥🟥🟩🟩🟦🟦
#### **After Processing (Animation Applied)**
🟥🟩🟦 (*🟥 fades out smoothly!*)

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
- **CSS3 (BEM Methodology, Animations)**
- **JavaScript (ES6+)**
- **Modular JS with Import/Export**
- **OOP Principles**
- **Smooth CSS Transitions**

---

## **📌 Future Enhancements**
🚀 **More animations!** Make stone removals **bouncy** instead of shrinking.  
🔄 **Undo button!** Restore the last removed sequence.  
📊 **Statistics Mode!** Show how many of each stone type appear in input.

---

## **📝 License**
This project is licensed under the **MIT License**.

---

## **💡 Author**
👨‍💻 Developed by **Your Name**  
🌍 Portfolio: [your-website.com](https://your-website.com)  
📧 Contact: your-email@example.com

---

### **✨ What’s New in This Version?**
✅ **Added animated stone removal**.  
✅ **Dropdown with predefined test cases**.  
✅ **Better UI feedback & validation**.
