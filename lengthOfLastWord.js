var lengthOfLastWord = function(s) {
    if(s){
        const arr = s.trim().split(' ')
        const lastElement = arr[arr.length -1]
        return lastElement? lastElement.length: arr[arr.length-2].length
    }
    else {
        return 0;
    }
};

console.log(lengthOfLastWord("a  "))