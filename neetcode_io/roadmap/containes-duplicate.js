// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function (nums) {
//     return nums.some((n1, i1) => {
//         return nums.some((n2, i2) =>
//             i1 !== i2 && n1 == n2
//         );
//     });
//
// };

// Solution 1
var containsDuplicate = function (nums) {
        const uniqueNums = new Set(nums);
        console.log(nums.size())
        return uniqueNums.size !== nums.length;
    };
containsDuplicate([1, 2, 3, 1]);

// Solution 2
var containsDuplicate2 = function (nums) {
    const hashSet = new Set();
    for (const n of nums) {
        if (hashSet.has(n)) {
            return true;
        }
        hashSet.add(n);
    }
    return false;

};
containsDuplicate2([1, 2, 3, 1]);