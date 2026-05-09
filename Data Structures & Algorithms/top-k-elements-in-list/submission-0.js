// class PriorityQueue {
//   constructor(comparator = (a, b) => a - b) {
//     this.heap = [];
//     this.comparator = comparator;
//   }

//   size() {
//     return this.heap.length;
//   }

//   isEmpty() {
//     return this.heap.length === 0;
//   }

//   peek() {
//     return this.heap[0];
//   }

//   push(value) {
//     this.heap.push(value);
//     this._siftUp(this.heap.length - 1);
//   }

//   pop() {
//     if (this.isEmpty()) return undefined;
//     const top = this.heap[0];
//     const last = this.heap.pop();
//     if (!this.isEmpty()) {
//       this.heap[0] = last;
//       this._siftDown(0);
//     }
//     return top;
//   }

//   _siftUp(i) {
//     while (i > 0) {
//       const parent = (i - 1) >> 1;
//       if (this.comparator(this.heap[i], this.heap[parent]) < 0) {
//         [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
//         i = parent;
//       } else break;
//     }
//   }

//   _siftDown(i) {
//     const n = this.heap.length;
//     while (true) {
//       const left = 2 * i + 1;
//       const right = 2 * i + 2;
//       let smallest = i;
//       if (
//         left < n &&
//         this.comparator(this.heap[left], this.heap[smallest]) < 0
//       ) {
//         smallest = left;
//       }
//       if (
//         right < n &&
//         this.comparator(this.heap[right], this.heap[smallest]) < 0
//       ) {
//         smallest = right;
//       }
//       if (smallest !== i) {
//         [this.heap[i], this.heap[smallest]] = [
//           this.heap[smallest],
//           this.heap[i],
//         ];
//         i = smallest;
//       } else break;
//     }
//   }
// }

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const pq = new PriorityQueue((a, b) => {
      return b[1] - a[1];
    });
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (!map.has(nums[i])) map.set(nums[i], 0);
      map.set(nums[i], map.get(nums[i]) + 1);
    }

    Array.from(map.entries()).map(([num, freq]) => {
      pq.push([num, freq]);
    });
    const result = [];
    for (let i = 0; i < k; i++) {
      result.push(pq.pop()[0]);
    }
    return result;
  }
}