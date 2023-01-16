var even = [2,4,6,8]
var num = [1,2,3,4]
var odd = [1,3,5,7]

function isEven(num){
    if(num % 2 == 0){
        return true
    } else return false
}

console.log(even.filter(isEven))
console.log(num.filter(isEven))
console.log(odd.filter(isEven))
