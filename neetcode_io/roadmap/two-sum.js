/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const comparedSet = new Set();

    let index = 0;
    for (const el of nums) {
        if (el == 5) {
                debugger;
        }
        for (let i = index + 1; i < nums.length; i++) {
            if (i == 2) {
                debugger;
            }
            if ((el + nums[i]) === target) {
                return [index, i];

            }
        }
        index++;
    }
    return [];
};

console.log(twoSum([2, 5, 5, 11], 10)); // [1,2]