// Programme for checking only does contains duplicates and return true or false.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums && nums.length>0){
        let set = new Set(nums)
        return set.size!==nums.length;
    }
};

console.log(containsDuplicate([1,1,2,2,3,4,5,7,8]))
