let twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        diff = target - nums[i];
        if (nums.includes(diff)) {
            return [i, nums.indexOf(diff)]
        }
    }
}

console.log(twoSum([8, 2, 7, 11, 15], 9))