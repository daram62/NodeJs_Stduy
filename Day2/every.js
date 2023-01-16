// 배열 속 모든 값을 함수로 넘겨준 후 
// 리턴값으로 and연산 수행
var even = [2,4,6,8]
var num = [1,2,3,4]

function isEven(num){
    if(num % 2 == 0){
        return true
    } else return false
}

console.log(even.every(isEven))
console.log(num.every(isEven))

