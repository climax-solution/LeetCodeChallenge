/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    let imin = 0;
    let imax = m;
    const halfLen = Math.floor((m + n + 1) / 2);

    while (imin <= imax) {
        const i = Math.floor((imin + imax) / 2);
        const j = halfLen - i;

        if (i < m && nums2[j - 1] > nums1[i]) {
            imin = i + 1;
        } else if (i > 0 && nums1[i - 1] > nums2[j]) {
            imax = i - 1;
        } else {
            let maxOfLeft;
            if (i === 0) {
                maxOfLeft = nums2[j - 1];
            } else if (j === 0) {
                maxOfLeft = nums1[i - 1];
            } else {
                maxOfLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            }

            if ((m + n) % 2 === 1) {
                return maxOfLeft;
            }

            let minOfRight;
            if (i === m) {
                minOfRight = nums2[j];
            } else if (j === n) {
                minOfRight = nums1[i];
            } else {
                minOfRight = Math.min(nums1[i], nums2[j]);
            }

            return (maxOfLeft + minOfRight) / 2.0;
        }
    }
};