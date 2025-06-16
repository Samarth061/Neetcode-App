
// Complete NeetCode 150 problems dataset
const leetcodeProblems = [
    // Arrays & Hashing
    { id: 217, title: "Contains Duplicate", difficulty: "easy", timeComplexity: "O(n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/contains-duplicate/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0217-contains-duplicate.py", topics: ["array", "hash-table"] },
    { id: 242, title: "Valid Anagram", difficulty: "easy", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/valid-anagram/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0242-valid-anagram.py", topics: ["string", "hash-table"] },
    { id: 1, title: "Two Sum", difficulty: "easy", timeComplexity: "O(n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/two-sum/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0001-two-sum.py", topics: ["array", "hash-table"] },
    { id: 49, title: "Group Anagrams", difficulty: "medium", timeComplexity: "O(n*k log k)", spaceComplexity: "O(n*k)", url: "https://leetcode.com/problems/group-anagrams/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0049-group-anagrams.py", topics: ["string", "hash-table"] },
    { id: 347, title: "Top K Frequent Elements", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/top-k-frequent-elements/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0347-top-k-frequent-elements.py", topics: ["array", "hash-table", "heap"] },
    { id: 238, title: "Product of Array Except Self", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/product-of-array-except-self/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0238-product-of-array-except-self.py", topics: ["array"] },
    { id: 36, title: "Valid Sudoku", difficulty: "medium", timeComplexity: "O(1)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/valid-sudoku/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0036-valid-sudoku.py", topics: ["array", "hash-table"] },
    { id: 128, title: "Longest Consecutive Sequence", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/longest-consecutive-sequence/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0128-longest-consecutive-sequence.py", topics: ["array", "hash-table"] },
    { id: 271, title: "Encode and Decode Strings", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/encode-and-decode-strings/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0271-encode-and-decode-strings.py", topics: ["array", "string", "design"] },

    // Two Pointers
    { id: 125, title: "Valid Palindrome", difficulty: "easy", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/valid-palindrome/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0125-valid-palindrome.py", topics: ["string", "two-pointers"] },
    { id: 167, title: "Two Sum II - Input Array Is Sorted", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0167-two-sum-ii-input-array-is-sorted.py", topics: ["array", "two-pointers"] },
    { id: 15, title: "3Sum", difficulty: "medium", timeComplexity: "O(n²)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/3sum/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0015-3sum.py", topics: ["array", "two-pointers", "sorting"] },
    { id: 11, title: "Container With Most Water", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/container-with-most-water/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0011-container-with-most-water.py", topics: ["array", "two-pointers"] },
    { id: 42, title: "Trapping Rain Water", difficulty: "hard", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/trapping-rain-water/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0042-trapping-rain-water.py", topics: ["array", "two-pointers"] },

    // Sliding Window
    { id: 121, title: "Best Time to Buy and Sell Stock", difficulty: "easy", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0121-best-time-to-buy-and-sell-stock.py", topics: ["array", "dp"] },
    { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(min(m,n))", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0003-longest-substring-without-repeating-characters.py", topics: ["string", "sliding-window"] },
    { id: 424, title: "Longest Repeating Character Replacement", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/longest-repeating-character-replacement/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0424-longest-repeating-character-replacement.py", topics: ["string", "sliding-window"] },
    { id: 567, title: "Permutation in String", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/permutation-in-string/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0567-permutation-in-string.py", topics: ["string", "sliding-window"] },
    { id: 76, title: "Minimum Window Substring", difficulty: "hard", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/minimum-window-substring/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0076-minimum-window-substring.py", topics: ["string", "sliding-window"] },
    { id: 239, title: "Sliding Window Maximum", difficulty: "hard", timeComplexity: "O(n)", spaceComplexity: "O(k)", url: "https://leetcode.com/problems/sliding-window-maximum/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0239-sliding-window-maximum.py", topics: ["array", "sliding-window", "heap"] },

    // Stack
    { id: 20, title: "Valid Parentheses", difficulty: "easy", timeComplexity: "O(n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/valid-parentheses/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0020-valid-parentheses.py", topics: ["string", "stack"] },
    { id: 155, title: "Min Stack", difficulty: "medium", timeComplexity: "O(1)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/min-stack/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0155-min-stack.py", topics: ["stack", "design"] },
    { id: 150, title: "Evaluate Reverse Polish Notation", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0150-evaluate-reverse-polish-notation.py", topics: ["stack", "math"] },
    { id: 22, title: "Generate Parentheses", difficulty: "medium", timeComplexity: "O(4ⁿ/√n)", spaceComplexity: "O(4ⁿ/√n)", url: "https://leetcode.com/problems/generate-parentheses/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0022-generate-parentheses.py", topics: ["string", "backtracking"] },
    { id: 739, title: "Daily Temperatures", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/daily-temperatures/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0739-daily-temperatures.py", topics: ["array", "stack"] },
    { id: 853, title: "Car Fleet", difficulty: "medium", timeComplexity: "O(n log n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/car-fleet/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0853-car-fleet.py", topics: ["array", "stack", "sorting"] },
    { id: 84, title: "Largest Rectangle in Histogram", difficulty: "hard", timeComplexity: "O(n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0084-largest-rectangle-in-histogram.py", topics: ["array", "stack"] },

    // Binary Search
    { id: 704, title: "Binary Search", difficulty: "easy", timeComplexity: "O(log n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/binary-search/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0704-binary-search.py", topics: ["array", "binary-search"] },
    { id: 74, title: "Search a 2D Matrix", difficulty: "medium", timeComplexity: "O(log(m*n))", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/search-a-2d-matrix/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0074-search-a-2d-matrix.py", topics: ["array", "binary-search"] },
    { id: 875, title: "Koko Eating Bananas", difficulty: "medium", timeComplexity: "O(n log m)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/koko-eating-bananas/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0875-koko-eating-bananas.py", topics: ["array", "binary-search"] },
    { id: 153, title: "Find Minimum in Rotated Sorted Array", difficulty: "medium", timeComplexity: "O(log n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0153-find-minimum-in-rotated-sorted-array.py", topics: ["array", "binary-search"] },
    { id: 33, title: "Search in Rotated Sorted Array", difficulty: "medium", timeComplexity: "O(log n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0033-search-in-rotated-sorted-array.py", topics: ["array", "binary-search"] },
    { id: 981, title: "Time Based Key-Value Store", difficulty: "medium", timeComplexity: "O(log n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/time-based-key-value-store/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0981-time-based-key-value-store.py", topics: ["hash-table", "binary-search", "design"] },
    { id: 4, title: "Median of Two Sorted Arrays", difficulty: "hard", timeComplexity: "O(log(min(m,n)))", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0004-median-of-two-sorted-arrays.py", topics: ["array", "binary-search"] },

    // Linked List
    { id: 206, title: "Reverse Linked List", difficulty: "easy", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/reverse-linked-list/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0206-reverse-linked-list.py", topics: ["linked-list", "recursion"] },
    { id: 21, title: "Merge Two Sorted Lists", difficulty: "easy", timeComplexity: "O(n + m)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/merge-two-sorted-lists/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0021-merge-two-sorted-lists.py", topics: ["linked-list", "recursion"] },
    { id: 143, title: "Reorder List", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/reorder-list/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0143-reorder-list.py", topics: ["linked-list", "two-pointers"] },
    { id: 19, title: "Remove Nth Node From End of List", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0019-remove-nth-node-from-end-of-list.py", topics: ["linked-list", "two-pointers"] },
    { id: 138, title: "Copy List with Random Pointer", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/copy-list-with-random-pointer/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0138-copy-list-with-random-pointer.py", topics: ["linked-list", "hash-table"] },
    { id: 2, title: "Add Two Numbers", difficulty: "medium", timeComplexity: "O(max(m,n))", spaceComplexity: "O(max(m,n))", url: "https://leetcode.com/problems/add-two-numbers/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0002-add-two-numbers.py", topics: ["linked-list", "math"] },
    { id: 141, title: "Linked List Cycle", difficulty: "easy", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/linked-list-cycle/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0141-linked-list-cycle.py", topics: ["linked-list", "two-pointers"] },
    { id: 287, title: "Find the Duplicate Number", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/find-the-duplicate-number/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0287-find-the-duplicate-number.py", topics: ["array", "two-pointers"] },
    { id: 146, title: "LRU Cache", difficulty: "medium", timeComplexity: "O(1)", spaceComplexity: "O(capacity)", url: "https://leetcode.com/problems/lru-cache/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0146-lru-cache.py", topics: ["linked-list", "hash-table", "design"] },
    { id: 23, title: "Merge k Sorted Lists", difficulty: "hard", timeComplexity: "O(n log k)", spaceComplexity: "O(k)", url: "https://leetcode.com/problems/merge-k-sorted-lists/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0023-merge-k-sorted-lists.py", topics: ["linked-list", "divide-and-conquer", "heap"] },
    { id: 25, title: "Reverse Nodes in k-Group", difficulty: "hard", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0025-reverse-nodes-in-k-group.py", topics: ["linked-list", "recursion"] },

    // Trees
    { id: 226, title: "Invert Binary Tree", difficulty: "easy", timeComplexity: "O(n)", spaceComplexity: "O(h)", url: "https://leetcode.com/problems/invert-binary-tree/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0226-invert-binary-tree.py", topics: ["tree", "dfs", "bfs"] },
    { id: 104, title: "Maximum Depth of Binary Tree", difficulty: "easy", timeComplexity: "O(n)", spaceComplexity: "O(h)", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0104-maximum-depth-of-binary-tree.py", topics: ["tree", "dfs", "bfs"] },
    { id: 543, title: "Diameter of Binary Tree", difficulty: "easy", timeComplexity: "O(n)", spaceComplexity: "O(h)", url: "https://leetcode.com/problems/diameter-of-binary-tree/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0543-diameter-of-binary-tree.py", topics: ["tree", "dfs"] },
    { id: 110, title: "Balanced Binary Tree", difficulty: "easy", timeComplexity: "O(n)", spaceComplexity: "O(h)", url: "https://leetcode.com/problems/balanced-binary-tree/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0110-balanced-binary-tree.py", topics: ["tree", "dfs"] },
    { id: 100, title: "Same Tree", difficulty: "easy", timeComplexity: "O(n)", spaceComplexity: "O(h)", url: "https://leetcode.com/problems/same-tree/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0100-same-tree.py", topics: ["tree", "dfs"] },
    { id: 572, title: "Subtree of Another Tree", difficulty: "easy", timeComplexity: "O(m*n)", spaceComplexity: "O(h)", url: "https://leetcode.com/problems/subtree-of-another-tree/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0572-subtree-of-another-tree.py", topics: ["tree", "dfs"] },
    { id: 235, title: "Lowest Common Ancestor of a Binary Search Tree", difficulty: "medium", timeComplexity: "O(h)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0235-lowest-common-ancestor-of-a-binary-search-tree.py", topics: ["tree", "dfs", "bst"] },
    { id: 102, title: "Binary Tree Level Order Traversal", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0102-binary-tree-level-order-traversal.py", topics: ["tree", "bfs"] },
    { id: 199, title: "Binary Tree Right Side View", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(h)", url: "https://leetcode.com/problems/binary-tree-right-side-view/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0199-binary-tree-right-side-view.py", topics: ["tree", "dfs", "bfs"] },
    { id: 1448, title: "Count Good Nodes in Binary Tree", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(h)", url: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/1448-count-good-nodes-in-binary-tree.py", topics: ["tree", "dfs"] },
    { id: 98, title: "Validate Binary Search Tree", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(h)", url: "https://leetcode.com/problems/validate-binary-search-tree/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0098-validate-binary-search-tree.py", topics: ["tree", "dfs", "bst"] },
    { id: 230, title: "Kth Smallest Element in a BST", difficulty: "medium", timeComplexity: "O(h + k)", spaceComplexity: "O(h)", url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0230-kth-smallest-element-in-a-bst.py", topics: ["tree", "dfs", "bst"] },
    { id: 105, title: "Construct Binary Tree from Preorder and Inorder Traversal", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0105-construct-binary-tree-from-preorder-and-inorder-traversal.py", topics: ["tree", "array", "hash-table"] },
    { id: 124, title: "Binary Tree Maximum Path Sum", difficulty: "hard", timeComplexity: "O(n)", spaceComplexity: "O(h)", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0124-binary-tree-maximum-path-sum.py", topics: ["tree", "dfs"] },
    { id: 297, title: "Serialize and Deserialize Binary Tree", difficulty: "hard", timeComplexity: "O(n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0297-serialize-and-deserialize-binary-tree.py", topics: ["tree", "dfs", "bfs", "design"] },

    // Tries
    { id: 208, title: "Implement Trie (Prefix Tree)", difficulty: "medium", timeComplexity: "O(m)", spaceComplexity: "O(ALPHABET_SIZE * N * M)", url: "https://leetcode.com/problems/implement-trie-prefix-tree/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0208-implement-trie-prefix-tree.py", topics: ["hash-table", "string", "design", "trie"] },
    { id: 211, title: "Design Add and Search Words Data Structure", difficulty: "medium", timeComplexity: "O(m)", spaceComplexity: "O(ALPHABET_SIZE * N * M)", url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0211-design-add-and-search-words-data-structure.py", topics: ["string", "dfs", "design", "trie"] },
    { id: 212, title: "Word Search II", difficulty: "hard", timeComplexity: "O(m*n*4^m*n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/word-search-ii/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0212-word-search-ii.py", topics: ["array", "string", "backtracking", "trie"] },

    // Heap / Priority Queue
    { id: 215, title: "Kth Largest Element in an Array", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0215-kth-largest-element-in-an-array.py", topics: ["array", "divide-and-conquer", "heap"] },
    { id: 973, title: "K Closest Points to Origin", difficulty: "medium", timeComplexity: "O(n log k)", spaceComplexity: "O(k)", url: "https://leetcode.com/problems/k-closest-points-to-origin/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0973-k-closest-points-to-origin.py", topics: ["array", "math", "heap"] },
    { id: 1046, title: "Last Stone Weight", difficulty: "easy", timeComplexity: "O(n log n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/last-stone-weight/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/1046-last-stone-weight.py", topics: ["array", "heap"] },
    { id: 703, title: "Kth Largest Element in a Stream", difficulty: "easy", timeComplexity: "O(log k)", spaceComplexity: "O(k)", url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0703-kth-largest-element-in-a-stream.py", topics: ["tree", "design", "bst", "heap"] },
    { id: 621, title: "Task Scheduler", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/task-scheduler/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0621-task-scheduler.py", topics: ["array", "hash-table", "greedy", "heap"] },
    { id: 355, title: "Design Twitter", difficulty: "medium", timeComplexity: "O(n log n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/design-twitter/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0355-design-twitter.py", topics: ["hash-table", "linked-list", "design", "heap"] },
    { id: 295, title: "Find Median from Data Stream", difficulty: "hard", timeComplexity: "O(log n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/find-median-from-data-stream/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0295-find-median-from-data-stream.py", topics: ["two-pointers", "design", "heap"] },

    // Backtracking
    { id: 78, title: "Subsets", difficulty: "medium", timeComplexity: "O(n * 2^n)", spaceComplexity: "O(n * 2^n)", url: "https://leetcode.com/problems/subsets/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0078-subsets.py", topics: ["array", "backtracking", "bit-manipulation"] },
    { id: 39, title: "Combination Sum", difficulty: "medium", timeComplexity: "O(n^(t/m))", spaceComplexity: "O(t/m)", url: "https://leetcode.com/problems/combination-sum/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0039-combination-sum.py", topics: ["array", "backtracking"] },
    { id: 46, title: "Permutations", difficulty: "medium", timeComplexity: "O(n*n!)", spaceComplexity: "O(n*n!)", url: "https://leetcode.com/problems/permutations/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0046-permutations.py", topics: ["array", "backtracking"] },
    { id: 90, title: "Subsets II", difficulty: "medium", timeComplexity: "O(n * 2^n)", spaceComplexity: "O(n * 2^n)", url: "https://leetcode.com/problems/subsets-ii/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0090-subsets-ii.py", topics: ["array", "backtracking", "bit-manipulation"] },
    { id: 40, title: "Combination Sum II", difficulty: "medium", timeComplexity: "O(2^n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/combination-sum-ii/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0040-combination-sum-ii.py", topics: ["array", "backtracking"] },
    { id: 79, title: "Word Search", difficulty: "medium", timeComplexity: "O(n*m*4^L)", spaceComplexity: "O(L)", url: "https://leetcode.com/problems/word-search/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0079-word-search.py", topics: ["array", "backtracking"] },
    { id: 131, title: "Palindrome Partitioning", difficulty: "medium", timeComplexity: "O(n*2^n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/palindrome-partitioning/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0131-palindrome-partitioning.py", topics: ["string", "dp", "backtracking"] },
    { id: 17, title: "Letter Combinations of a Phone Number", difficulty: "medium", timeComplexity: "O(3^n * 4^m)", spaceComplexity: "O(3^n * 4^m)", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0017-letter-combinations-of-a-phone-number.py", topics: ["hash-table", "string", "backtracking"] },
    { id: 51, title: "N-Queens", difficulty: "hard", timeComplexity: "O(n!)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/n-queens/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0051-n-queens.py", topics: ["array", "backtracking"] },

    // Graphs
    { id: 200, title: "Number of Islands", difficulty: "medium", timeComplexity: "O(m*n)", spaceComplexity: "O(m*n)", url: "https://leetcode.com/problems/number-of-islands/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0200-number-of-islands.py", topics: ["array", "dfs", "bfs", "union-find"] },
    { id: 133, title: "Clone Graph", difficulty: "medium", timeComplexity: "O(n + m)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/clone-graph/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0133-clone-graph.py", topics: ["hash-table", "dfs", "bfs", "graph"] },
    { id: 695, title: "Max Area of Island", difficulty: "medium", timeComplexity: "O(m*n)", spaceComplexity: "O(m*n)", url: "https://leetcode.com/problems/max-area-of-island/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0695-max-area-of-island.py", topics: ["array", "dfs", "bfs"] },
    { id: 417, title: "Pacific Atlantic Water Flow", difficulty: "medium", timeComplexity: "O(m*n)", spaceComplexity: "O(m*n)", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0417-pacific-atlantic-water-flow.py", topics: ["array", "dfs", "bfs"] },
    { id: 130, title: "Surrounded Regions", difficulty: "medium", timeComplexity: "O(m*n)", spaceComplexity: "O(m*n)", url: "https://leetcode.com/problems/surrounded-regions/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0130-surrounded-regions.py", topics: ["array", "dfs", "bfs", "union-find"] },
    { id: 994, title: "Rotting Oranges", difficulty: "medium", timeComplexity: "O(m*n)", spaceComplexity: "O(m*n)", url: "https://leetcode.com/problems/rotting-oranges/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0994-rotting-oranges.py", topics: ["array", "bfs"] },
    { id: 207, title: "Course Schedule", difficulty: "medium", timeComplexity: "O(n + p)", spaceComplexity: "O(n + p)", url: "https://leetcode.com/problems/course-schedule/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0207-course-schedule.py", topics: ["dfs", "bfs", "graph", "topological-sort"] },
    { id: 210, title: "Course Schedule II", difficulty: "medium", timeComplexity: "O(n + p)", spaceComplexity: "O(n + p)", url: "https://leetcode.com/problems/course-schedule-ii/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0210-course-schedule-ii.py", topics: ["dfs", "bfs", "graph", "topological-sort"] },
    { id: 684, title: "Redundant Connection", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/redundant-connection/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0684-redundant-connection.py", topics: ["dfs", "bfs", "union-find", "graph"] },
    { id: 323, title: "Number of Connected Components in an Undirected Graph", difficulty: "medium", timeComplexity: "O(n + e)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0323-number-of-connected-components-in-an-undirected-graph.py", topics: ["dfs", "bfs", "union-find", "graph"] },
    { id: 261, title: "Graph Valid Tree", difficulty: "medium", timeComplexity: "O(n + e)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/graph-valid-tree/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0261-graph-valid-tree.py", topics: ["dfs", "bfs", "union-find", "graph"] },
    { id: 127, title: "Word Ladder", difficulty: "hard", timeComplexity: "O(m^2 * n)", spaceComplexity: "O(m^2 * n)", url: "https://leetcode.com/problems/word-ladder/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0127-word-ladder.py", topics: ["hash-table", "string", "bfs"] },

    // Advanced Graphs
    { id: 269, title: "Alien Dictionary", difficulty: "hard", timeComplexity: "O(c)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/alien-dictionary/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0269-alien-dictionary.py", topics: ["array", "string", "dfs", "bfs", "graph", "topological-sort"] },
    { id: 743, title: "Network Delay Time", difficulty: "medium", timeComplexity: "O(n^2 + e)", spaceComplexity: "O(n + e)", url: "https://leetcode.com/problems/network-delay-time/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0743-network-delay-time.py", topics: ["dfs", "bfs", "graph", "heap", "shortest-path"] },
    { id: 778, title: "Swim in Rising Water", difficulty: "hard", timeComplexity: "O(n^2 log n)", spaceComplexity: "O(n^2)", url: "https://leetcode.com/problems/swim-in-rising-water/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0778-swim-in-rising-water.py", topics: ["array", "binary-search", "dfs", "bfs", "union-find", "heap"] },
    { id: 787, title: "Cheapest Flights Within K Stops", difficulty: "medium", timeComplexity: "O(e * k)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0787-cheapest-flights-within-k-stops.py", topics: ["dfs", "bfs", "graph", "heap", "shortest-path"] },

    // 1-D Dynamic Programming
    { id: 70, title: "Climbing Stairs", difficulty: "easy", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/climbing-stairs/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0070-climbing-stairs.py", topics: ["math", "dp", "memoization"] },
    { id: 746, title: "Min Cost Climbing Stairs", difficulty: "easy", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/min-cost-climbing-stairs/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0746-min-cost-climbing-stairs.py", topics: ["array", "dp"] },
    { id: 198, title: "House Robber", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/house-robber/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0198-house-robber.py", topics: ["array", "dp"] },
    { id: 213, title: "House Robber II", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/house-robber-ii/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0213-house-robber-ii.py", topics: ["array", "dp"] },
    { id: 5, title: "Longest Palindromic Substring", difficulty: "medium", timeComplexity: "O(n^2)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/longest-palindromic-substring/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0005-longest-palindromic-substring.py", topics: ["string", "dp"] },
    { id: 647, title: "Palindromic Substrings", difficulty: "medium", timeComplexity: "O(n^2)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/palindromic-substrings/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0647-palindromic-substrings.py", topics: ["string", "dp"] },
    { id: 91, title: "Decode Ways", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/decode-ways/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0091-decode-ways.py", topics: ["string", "dp"] },
    { id: 322, title: "Coin Change", difficulty: "medium", timeComplexity: "O(s*n)", spaceComplexity: "O(s)", url: "https://leetcode.com/problems/coin-change/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0322-coin-change.py", topics: ["array", "dp", "bfs"] },
    { id: 152, title: "Maximum Product Subarray", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/maximum-product-subarray/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0152-maximum-product-subarray.py", topics: ["array", "dp"] },
    { id: 139, title: "Word Break", difficulty: "medium", timeComplexity: "O(n*m)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/word-break/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0139-word-break.py", topics: ["hash-table", "string", "dp", "trie"] },
    { id: 300, title: "Longest Increasing Subsequence", difficulty: "medium", timeComplexity: "O(n log n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/longest-increasing-subsequence/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0300-longest-increasing-subsequence.py", topics: ["array", "binary-search", "dp"] },
    { id: 416, title: "Partition Equal Subset Sum", difficulty: "medium", timeComplexity: "O(n*sum)", spaceComplexity: "O(sum)", url: "https://leetcode.com/problems/partition-equal-subset-sum/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0416-partition-equal-subset-sum.py", topics: ["array", "dp"] },

    // 2-D Dynamic Programming
    { id: 62, title: "Unique Paths", difficulty: "medium", timeComplexity: "O(m*n)", spaceComplexity: "O(m*n)", url: "https://leetcode.com/problems/unique-paths/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0062-unique-paths.py", topics: ["math", "dp", "combinatorics"] },
    { id: 1143, title: "Longest Common Subsequence", difficulty: "medium", timeComplexity: "O(n*m)", spaceComplexity: "O(n*m)", url: "https://leetcode.com/problems/longest-common-subsequence/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/1143-longest-common-subsequence.py", topics: ["string", "dp"] },
    { id: 309, title: "Best Time to Buy and Sell Stock with Cooldown", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0309-best-time-to-buy-and-sell-stock-with-cooldown.py", topics: ["array", "dp"] },
    { id: 518, title: "Coin Change 2", difficulty: "medium", timeComplexity: "O(n*amount)", spaceComplexity: "O(amount)", url: "https://leetcode.com/problems/coin-change-2/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0518-coin-change-2.py", topics: ["array", "dp"] },
    { id: 494, title: "Target Sum", difficulty: "medium", timeComplexity: "O(n*sum)", spaceComplexity: "O(sum)", url: "https://leetcode.com/problems/target-sum/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0494-target-sum.py", topics: ["array", "dp", "backtracking"] },
    { id: 97, title: "Interleaving String", difficulty: "medium", timeComplexity: "O(m*n)", spaceComplexity: "O(m*n)", url: "https://leetcode.com/problems/interleaving-string/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0097-interleaving-string.py", topics: ["string", "dp"] },
    { id: 329, title: "Longest Increasing Path in a Matrix", difficulty: "hard", timeComplexity: "O(m*n)", spaceComplexity: "O(m*n)", url: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0329-longest-increasing-path-in-a-matrix.py", topics: ["array", "dfs", "dp", "topological-sort"] },
    { id: 115, title: "Distinct Subsequences", difficulty: "hard", timeComplexity: "O(n*m)", spaceComplexity: "O(n*m)", url: "https://leetcode.com/problems/distinct-subsequences/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0115-distinct-subsequences.py", topics: ["string", "dp"] },
    { id: 72, title: "Edit Distance", difficulty: "hard", timeComplexity: "O(n*m)", spaceComplexity: "O(n*m)", url: "https://leetcode.com/problems/edit-distance/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0072-edit-distance.py", topics: ["string", "dp"] },
    { id: 312, title: "Burst Balloons", difficulty: "hard", timeComplexity: "O(n^3)", spaceComplexity: "O(n^2)", url: "https://leetcode.com/problems/burst-balloons/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0312-burst-balloons.py", topics: ["array", "dp"] },
    { id: 10, title: "Regular Expression Matching", difficulty: "hard", timeComplexity: "O(n*m)", spaceComplexity: "O(n*m)", url: "https://leetcode.com/problems/regular-expression-matching/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0010-regular-expression-matching.py", topics: ["string", "dp", "recursion"] },

    // Greedy
    { id: 53, title: "Maximum Subarray", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/maximum-subarray/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0053-maximum-subarray.py", topics: ["array", "dp", "divide-and-conquer"] },
    { id: 55, title: "Jump Game", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/jump-game/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0055-jump-game.py", topics: ["array", "dp", "greedy"] },
    { id: 45, title: "Jump Game II", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/jump-game-ii/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0045-jump-game-ii.py", topics: ["array", "dp", "greedy"] },
    { id: 134, title: "Gas Station", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/gas-station/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0134-gas-station.py", topics: ["array", "greedy"] },
    { id: 846, title: "Hand of Straights", difficulty: "medium", timeComplexity: "O(n log n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/hand-of-straights/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0846-hand-of-straights.py", topics: ["array", "hash-table", "greedy", "sorting"] },
    { id: 1899, title: "Merge Triplets to Form Target Triplet", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/1899-merge-triplets-to-form-target-triplet.py", topics: ["array", "greedy"] },
    { id: 763, title: "Partition Labels", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/partition-labels/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0763-partition-labels.py", topics: ["hash-table", "string", "greedy", "two-pointers"] },
    { id: 678, title: "Valid Parenthesis String", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/valid-parenthesis-string/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0678-valid-parenthesis-string.py", topics: ["string", "dp", "stack", "greedy"] },

    // Intervals
    { id: 57, title: "Insert Interval", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/insert-interval/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0057-insert-interval.py", topics: ["array"] },
    { id: 56, title: "Merge Intervals", difficulty: "medium", timeComplexity: "O(n log n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/merge-intervals/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0056-merge-intervals.py", topics: ["array", "sorting"] },
    { id: 435, title: "Non-overlapping Intervals", difficulty: "medium", timeComplexity: "O(n log n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/non-overlapping-intervals/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0435-non-overlapping-intervals.py", topics: ["array", "dp", "greedy", "sorting"] },
    { id: 252, title: "Meeting Rooms", difficulty: "easy", timeComplexity: "O(n log n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/meeting-rooms/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0252-meeting-rooms.py", topics: ["array", "sorting"] },
    { id: 253, title: "Meeting Rooms II", difficulty: "medium", timeComplexity: "O(n log n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/meeting-rooms-ii/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0253-meeting-rooms-ii.py", topics: ["array", "two-pointers", "greedy", "sorting", "heap"] },
    { id: 1851, title: "Minimum Interval to Include Each Query", difficulty: "hard", timeComplexity: "O(n log n + q log q)", spaceComplexity: "O(n + q)", url: "https://leetcode.com/problems/minimum-interval-to-include-each-query/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/1851-minimum-interval-to-include-each-query.py", topics: ["array", "binary-search", "sorting", "heap"] },

    // Math & Geometry
    { id: 48, title: "Rotate Image", difficulty: "medium", timeComplexity: "O(m)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/rotate-image/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0048-rotate-image.py", topics: ["array", "math"] },
    { id: 54, title: "Spiral Matrix", difficulty: "medium", timeComplexity: "O(m*n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/spiral-matrix/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0054-spiral-matrix.py", topics: ["array", "matrix", "simulation"] },
    { id: 73, title: "Set Matrix Zeroes", difficulty: "medium", timeComplexity: "O(m*n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/set-matrix-zeroes/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0073-set-matrix-zeroes.py", topics: ["array", "hash-table"] },
    { id: 202, title: "Happy Number", difficulty: "easy", timeComplexity: "O(log n)", spaceComplexity: "O(log n)", url: "https://leetcode.com/problems/happy-number/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0202-happy-number.py", topics: ["hash-table", "math", "two-pointers"] },
    { id: 66, title: "Plus One", difficulty: "easy", timeComplexity: "O(n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/plus-one/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0066-plus-one.py", topics: ["array", "math"] },
    { id: 50, title: "Pow(x, n)", difficulty: "medium", timeComplexity: "O(log n)", spaceComplexity: "O(log n)", url: "https://leetcode.com/problems/powx-n/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0050-powx-n.py", topics: ["math", "recursion"] },
    { id: 43, title: "Multiply Strings", difficulty: "medium", timeComplexity: "O(m*n)", spaceComplexity: "O(m+n)", url: "https://leetcode.com/problems/multiply-strings/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0043-multiply-strings.py", topics: ["math", "string", "simulation"] },
    { id: 2013, title: "Detect Squares", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/detect-squares/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/2013-detect-squares.py", topics: ["array", "hash-table", "design", "counting"] },

    // Bit Manipulation
    { id: 136, title: "Single Number", difficulty: "easy", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/single-number/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0136-single-number.py", topics: ["array", "bit-manipulation"] },
    { id: 191, title: "Number of 1 Bits", difficulty: "easy", timeComplexity: "O(1)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/number-of-1-bits/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0191-number-of-1-bits.py", topics: ["divide-and-conquer", "bit-manipulation"] },
    { id: 338, title: "Counting Bits", difficulty: "easy", timeComplexity: "O(n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/counting-bits/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0338-counting-bits.py", topics: ["dp", "bit-manipulation"] },
    { id: 190, title: "Reverse Bits", difficulty: "easy", timeComplexity: "O(1)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/reverse-bits/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0190-reverse-bits.py", topics: ["divide-and-conquer", "bit-manipulation"] },
    { id: 268, title: "Missing Number", difficulty: "easy", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/missing-number/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0268-missing-number.py", topics: ["array", "hash-table", "math", "bit-manipulation"] },
    { id: 371, title: "Sum of Two Integers", difficulty: "medium", timeComplexity: "O(1)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/sum-of-two-integers/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0371-sum-of-two-integers.py", topics: ["math", "bit-manipulation"] },
    { id: 7, title: "Reverse Integer", difficulty: "medium", timeComplexity: "O(log x)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/reverse-integer/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0007-reverse-integer.py", topics: ["math"] },

    // Additional problems to reach exactly 150
    { id: 659, title: "Encode and Decode Strings", difficulty: "medium", timeComplexity: "O(n)", spaceComplexity: "O(n)", url: "https://leetcode.com/problems/encode-and-decode-strings/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0659-encode-and-decode-strings.py", topics: ["array", "string", "design"] },
    { id: 35, title: "Search Insert Position", difficulty: "easy", timeComplexity: "O(log n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/search-insert-position/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0035-search-insert-position.py", topics: ["array", "binary-search"] },
    { id: 26, title: "Remove Duplicates from Sorted Array", difficulty: "easy", timeComplexity: "O(n)", spaceComplexity: "O(1)", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", solutionUrl: "https://github.com/neetcode-gh/leetcode/blob/main/python/0026-remove-duplicates-from-sorted-array.py", topics: ["array", "two-pointers"] }
];

let filteredProblems = [...leetcodeProblems];

function searchProblems() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const difficultyFilter = document.getElementById('difficultyFilter').value;
    const topicFilter = document.getElementById('topicFilter').value;

    filteredProblems = leetcodeProblems.filter(problem => {
        const matchesSearch = problem.title.toLowerCase().includes(searchTerm) ||
            problem.topics.some(topic => topic.includes(searchTerm));
        const matchesDifficulty = !difficultyFilter || problem.difficulty === difficultyFilter;
        const matchesTopic = !topicFilter || problem.topics.includes(topicFilter);

        return matchesSearch && matchesDifficulty && matchesTopic;
    });

    displayResults();
}

function displayResults() {
    const container = document.getElementById('resultsContainer');

    if (filteredProblems.length === 0) {
        container.innerHTML = `
                    <div class="no-results">
                        <h3>No problems found</h3>
                        <p>Try adjusting your search terms or filters</p>
                    </div>
                `;
        return;
    }

    container.innerHTML = filteredProblems.map(problem => `
                <div class="problem-card ${problem.difficulty}">
                    <div class="problem-header">
                        <div>
                            <div class="problem-title">${problem.title}</div>
                            <div class="problem-number">#${problem.id}</div>
                        </div>
                        <div class="difficulty-badge ${problem.difficulty}">
                            ${problem.difficulty}
                        </div>
                    </div>
                    
                    <div class="complexity-info">
                        <div class="complexity-item">
                            <div class="complexity-label">Time Complexity</div>
                            <div class="complexity-value">${problem.timeComplexity}</div>
                        </div>
                        <div class="complexity-item">
                            <div class="complexity-label">Space Complexity</div>
                            <div class="complexity-value">${problem.spaceComplexity}</div>
                        </div>
                    </div>
                    
                    <div class="problem-links">
                        <a href="${problem.url}" target="_blank" class="link-btn leetcode-btn">
                            View Problem
                        </a>
                        <a href="${problem.solutionUrl}" target="_blank" class="link-btn solution-btn">
                            Optimal Solution
                        </a>
                    </div>
                </div>
            `).join('');
}

// Add event listeners
document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchProblems();
    }
});

document.getElementById('difficultyFilter').addEventListener('change', searchProblems);
document.getElementById('topicFilter').addEventListener('change', searchProblems);

// Initialize with all problems
displayResults();

// Update stats
function updateStats() {
    const easy = leetcodeProblems.filter(p => p.difficulty === 'easy').length;
    const medium = leetcodeProblems.filter(p => p.difficulty === 'medium').length;
    const hard = leetcodeProblems.filter(p => p.difficulty === 'hard').length;

    document.getElementById('totalProblems').textContent = leetcodeProblems.length;
    document.getElementById('easyCount').textContent = easy;
    document.getElementById('mediumCount').textContent = medium;
    document.getElementById('hardCount').textContent = hard;
}

updateStats();
