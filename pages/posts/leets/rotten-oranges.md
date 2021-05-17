[Rotten oranges (LeetCode)](https://leetcode.com/problems/rotting-oranges/)

Uses [Breadth First Search](/data-structures/breadth-first-search):
>**Breadth First Search (BFS)** algorithm traverses a graph in a breadthward motion and uses a *queue* to remember to get the next vertex to start a search, when a dead end occurs in any iteration.

## Problem statement
>You are given an `m x n` grid where each cell can have one of three values:
> - 0 representing an empty cell,
> - 1 representing a fresh orange, or
> - 2 representing a rotten orange.
>
>Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
>
>Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

## Constraints
```js
m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.
```


## Test cases
*Input:*
```js
grid = [
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1]
]
```

*Output:* `-1`

*Explanation:* The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

---
*Input:*
```js
grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1]
]
```

*Output:* `4`

---

*Input:*
```js
grid = [
  [0,2]
]
```

*Output:* 0

*Explanation:* Since there are already no fresh oranges at minute 0, the answer is just 0.

---

### Explanation

The grid starts out with a bunch of fresh oranges. The rotten oranges want to take the fresh ones down to zero. Can they do it?
- If they can't, return `-1`.

The rotten oranges are the ones causing change 4-directionally. Their location in the grid is important.

|   | 0 | 1 | 2 |
|--:|---|---|---|
| **0** | 2 | 1 | 1 |
| **1** | 1 | 1 | 0 |
| **2** | 0 | 1 | 1 |

### Every minute:
- Rotten oranges infect the oranges around them.
- Rotten orange coordinates change to reflect newly rotten oranges.
- There are less fresh oranges.

### Pseudocode
1. Go through the whole grid (`O(n)`) to
    - get the initial coordinates of the rotten orange(s). Save them to `rottenOrangesXY = []`.
    - count the # of fresh oranges you start with. Save them to `numFresh = 0`. For each orange (where `grid[x][y] === 1`), increase `numFresh` by 1.
2. Every minute, the rotten oranges from before make new rotten oranges. They're going to keep making every orange they can touch rotten until there are no more left (`numFresh === 0`).
    - Rot the fresh oranges: remove a rotten orange from the queue, check if the adjacent cells have fresh oranges to rot up.
    - Push newly rotten oranges to the queue. 
    - Subtract number of new rotten oranges from `numFresh`.
    - Continue until `rottenCountXY.length === 0`.
    - Keep going until `numFresh === 0` or there's no more oranges left to rot. If `numFresh > 0`, return `-1`.

Minute: `0`
|   | 0 | 1 | 2 |
|--:|---|---|---|
| **0** | 2 | 1 | 1 |
| **1** | 1 | 1 | 0 |
| **2** | 0 | 1 | 1 |

Minute: `1`
|   | 0 | 1 | 2 |
|--:|---|---|---|
| **0** | 2 | 2 | 1 |
| **1** | 2 | 1 | 0 |
| **2** | 0 | 1 | 1 |

Minute: `2`
|   | 0 | 1 | 2 |
|--:|---|---|---|
| **0** | 2 | 2 | 2 |
| **1** | 2 | 2 | 0 |
| **2** | 0 | 1 | 1 |

Minute: `3`
|   | 0 | 1 | 2 |
|--:|---|---|---|
| **0** | 2 | 2 | 2 |
| **1** | 2 | 2 | 0 |
| **2** | 0 | 2 | 1 |

Minute: `4`
|   | 0 | 1 | 2 |
|--:|---|---|---|
| **0** | 2 | 2 | 2 |
| **1** | 2 | 2 | 0 |
| **2** | 0 | 2 | 2 |

```js
const orangesRotting = (grid) => {
  let rottenCountXY = [];
  let freshCount = 0;
  let minutes = 0;

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (grid[x][y] === 2) rottenCountXY.push([x, y]);
      if (grid[x][y] === 1) freshCount++;
    }
  }

  while (rottenCountXY.length && freshCount) {
    let newRottenCountXY = [];

    while (rottenCountXY.length) {
      let rottenOrange = rottenCountXY.shift();
      let rottenCount = infectOranges(
        grid,
        rottenOrange[0],
        rottenOrange[1],
        newRottenCountXY
      );

      freshCount -= rottenCount;
    }
    minutes++;
    rottenCountXY = newRottenCountXY;
  }

  if (freshCount !== 0) return -1;
  return minutes;
};

const infectOranges = (grid, x, y, newRottenCountXY) => {
  let rotten = 0;

  // infect ABOVE
  if (y > 0 && grid[x][y - 1] === 1) {
    grid[x][y - 1]++;
    rotten++;
    newRottenCountXY.push([x, y - 1]);
  }

  // infect BELOW
  if (y < grid[0].length - 1 && grid[x][y + 1] === 1) {
    grid[x][y + 1]++;
    rotten++;
    newRottenCountXY.push([x, y + 1]);
  }

  // infect LEFT
  if (x > 0 && grid[x - 1][y] === 1) {
    grid[x - 1][y]++;
    rotten++;
    newRottenCountXY.push([x - 1, y]);
  }

  // infect RIGHT
  if (x < grid.length - 1 && grid[x + 1][y] === 1) {
    grid[x + 1][y]++;
    rotten++;
    newRottenCountXY.push([x + 1, y]);
  }
  return rotten;
};

orangesRotting([
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
]); // 4

orangesRotting([
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
]) // -1

orangesRotting([[0, 2]]); // 0
```