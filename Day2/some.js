// 배열 속 모든 값을 함수로 넘겨준 후 
// 리턴값으로 or연산 수행

var even = [2,4,6,8]
var num = [1,2,3,4]
var odd = [1,3,5,7]

function isEven(num){
    if(num % 2 == 0){
        return true
    } else return false
}

console.log(even.some(isEven))
console.log(num.some(isEven))
console.log(odd.some(isEven))
