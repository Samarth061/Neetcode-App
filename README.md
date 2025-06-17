# 🔍 LeetCode Problem Search

A sleek, responsive web app to search and explore LeetCode problems with filters, complexity info, and direct solution links.

![LeetCode Search](https://img.shields.io/badge/LeetCode-Search-orange?style=for-the-badge&logo=leetcode)

## ✨ Features

- 🎨 **Modern UI**: LeetCode-inspired design, dark/light mode toggle, responsive layout
- 🔍 **Real-Time Search**: Filter by title, difficulty, or topic (Arrays, Trees, DP, etc.)
- 📊 **Problem Cards**: Show complexity, topic tags, and direct links to problems/solutions
- 📋 **Copy Tools**: One-click copy for links and complexities with animation
- 🎯 **Cool Visuals**: Animated banner, typing effects, code rain, and hover transitions

## 🚀 Getting Started

1. Clone/download the repo
2. Add problems in `script.js` under `leetcodeProblems` array
3. Open `index.html` and start searching!

## 🛠️ Add a Problem

```js
{
  id: 1,
  title: "Two Sum",
  difficulty: "easy",
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)",
  url: "https://leetcode.com/problems/two-sum/",
  solutionUrl: "https://github.com/your-repo/solution",
  topics: ["array", "hash-table"]
}
```

## 🧠 Supported Topics

`array`, `string`, `tree`, `graph`, `dp`, `math`, `sorting`, `binary-search`,
`hash-table`, `linked-list`, `stack`, `heap`, `two-pointers`, `sliding-window`, `backtracking`, `dfs`, `bfs`

## 🖌️ Tech Stack

- HTML5, CSS3 (Flexbox, Grid, Animations), JavaScript (ES6+)
- No frameworks, fully client-side
- Works on all modern browsers

## 🔧 Future Plans

- [ ] Charts for difficulty distribution
- [ ] LocalStorage-based progress tracking
- [ ] Export feature
- [ ] LeetCode API integration
- [ ] Problem recommendations

## 🤝 Contribute

- Add more problems
- Improve UX/UI
- Suggest features or report bugs

---
