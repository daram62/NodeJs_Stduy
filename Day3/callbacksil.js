var result = null

function findUserAndCallback(id,callback) {
    if(id==1){
        setTimeout(_ => {
            result = {user: "tistory"}
            callback(result)
        }, 1000)
    }
}

findUserAndCallback(1,Object.entries)
console.log(result)