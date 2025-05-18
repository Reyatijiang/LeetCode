var maxScore = function(nums1, nums2, k) {
    let totalSum = 0;
    let maxScore = 0;
    let min_heap = [];
  
    const merged = nums1.map((nums1Val, i) => [nums2[i], nums1Val]);
    merged.sort((a, b) => b[0] - a[0]);

    for (let [n2, n1] of merged) {
        min_heap.push(n1);
        totalSum += n1;

        if (min_heap.length > k) {
            // remove the smallest n1
            min_heap.sort((a, b) => a - b); // simulate min-heap
            totalSum -= min_heap.shift();
        }

        if (min_heap.length === k) {
            maxScore = Math.max(maxScore, totalSum * n2);
        }
    }

    return maxScore;
};
