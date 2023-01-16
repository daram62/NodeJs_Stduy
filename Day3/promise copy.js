// 문제 : promise 작성해서 문제풀이
function promise(a,b,sum) {
    return new Promise((resolve, reject) => {
        setTimeout(_ => {
            if(a+b == sum){
                resolve("정답")
            } else {
                reject("오답")
            }
        }, 1000)
    })
}

promise(1,1,2)
    .then(console.log)
    .catch(console.error)