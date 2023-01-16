var a=0,b=1,sum=1;

function Promise(a,b,sum){
    return new Promise((resolve, reject) =>{
        setTimeout(_ => {
            if(a+b == sum){
                resolve("true")
            }
            else {
                reject("fail")
            }
        }, 1000)
    })
}

Promise(true)
    .then(console.log)
    .catch(console.error)