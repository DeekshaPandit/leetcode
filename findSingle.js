function findSingle(nums) {
    let single =0;
    for (let i = 0; i < nums.length; i++) {
       single = single ^ nums[i];
    }

    return single;
}

console.log(findSingle([5,1,1,2,2]))