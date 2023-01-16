// sort를 인자 없이 넣으면 사전 순 정렬, 
// order를 넣으면 실제 크기 순 정렬
var arr = [3,2,1,10]

function order(a,b){
    if(a>b) return 1
    else if(a==b) return 0
    else if(a<b) return -1
}

console.log(arr.sort())
console.log(arr.sort(order))