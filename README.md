# 🕹️ Routing Maze Game

An interactive **pathfinding visualizer** built using **HTML, CSS, and JavaScript** that demonstrates how shortest-path algorithms work in a grid-based maze environment.

Users can:
- Create walls dynamically
- Adjust grid size
- Control animation speed
- Visualize shortest-path traversal in real time

The project currently uses a **Breadth-First Search (BFS)** approach (often associated with unweighted Dijkstra-style traversal in grid visualizations).

---

# 🚀 Features

- ✅ Interactive grid-based maze
- ✅ Click-to-create walls/obstacles
- ✅ Adjustable grid sizes
- ✅ Speed control for visualization
- ✅ Real-time traversal animation
- ✅ Shortest path highlighting
- ✅ Responsive and beginner-friendly UI

---

# 🧠 Algorithm Used

## Breadth-First Search (BFS)

The application explores neighboring cells level by level until the destination is reached.

### Why BFS?
- Guarantees shortest path in an unweighted grid
- Easy to visualize
- Efficient for maze traversal

---

# 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure |
| CSS3 | Styling & Layout |
| JavaScript (Vanilla) | Logic & Visualization |

---

# 📂 Project Structure

```bash
Routing-Maze-Game/
│
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── script.js       # Pathfinding logic
└── README.md       # Documentation
```

---

# ⚙️ How It Works

## 1. Grid Generation
- A dynamic grid is generated based on selected size.
- Each cell acts as a node.

## 2. Wall Placement
- Clicking a cell toggles it between:
  - Empty cell
  - Wall/Obstacle

## 3. Pathfinding
- Clicking **Find Path** starts traversal.
- The algorithm:
  - Visits neighboring nodes
  - Avoids walls
  - Tracks previous nodes
  - Reconstructs shortest path

## 4. Visualization
- Visited nodes are animated.
- Final shortest path is highlighted separately.

---

# 🎮 Controls

| Control | Function |
|---|---|
| Grid Size | Changes maze dimensions |
| Find Path | Starts pathfinding visualization |
| Speed Slider | Controls animation speed |
| Cell Click | Toggle wall/obstacle |

---

# 📌 Grid Legend

| Color/Type | Meaning |
|---|---|
| 🟩 Start | Starting node |
| 🟥 End | Destination node |
| ⬛ Wall | Obstacle |
| 🟦 Visited | Explored node |
| 🟨 Path | Final shortest path |

---

# ▶️ Getting Started

## Clone the Repository

```bash
git clone https://github.com/your-username/routing-maze-game.git
```

## Open the Project

Simply open:

```bash
index.html
```

in your browser.

---

# 📖 Future Improvements

- 🔹 Add true Dijkstra’s Algorithm
- 🔹 Add A* Pathfinding
- 🔹 Maze generation algorithms
- 🔹 Drag-and-drop start/end nodes
- 🔹 Mobile optimization
- 🔹 Weighted nodes
- 🔹 Dark mode support

---

# 🧩 Possible Learning Outcomes

This project helps understand:
- Graph traversal
- Pathfinding algorithms
- BFS
- Grid-based simulations
- DOM manipulation
- Async animations in JavaScript

---

# 🤝 Contributing

Contributions are welcome!

You can:
- Improve UI/UX
- Add more algorithms
- Optimize performance
- Add mobile responsiveness

---

# 📜 License

This project is open-source and available under the MIT License.

---

# 👨‍💻 Author

Developed by **Abhishek Pothanagari** 🚀
