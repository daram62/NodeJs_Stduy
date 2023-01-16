var result = null

function findUser(id) {
    if(id==1){
        setTimeout(_ => {
            result = {user: "tistory"}
        }, 1000)
    }
}

findUser(1)
console.log(result)