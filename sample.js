
let pro = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if ('usercreated') {
            resolve('user created')
        }
        else {
            reject('user not created')
        }
    }, 3000)
})

function getUserId() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if ('userId') {
                resolve('get user id')
            }
            else{
                reject('user id not found')
            }
        }, 2000)

    })
}
function getUserInfo() {
    return new Promise(function () {
        setTimeout(function () {
            if ('userInfo') {
                resolve('get user info')
            }
            else {
                reject('user info not found')
            }
        }, 1000)
    })
}
pro.then(function (str) {
    console.log(str)
    return getUserId()
})
    .then(function (str) {
        console.log(str)
        return getUserInfo()
    })
    .then(function (str) {
        console.log(str)
    })
    .catch(function (str) {
        console.log(str)
    })
    .finally(function () {
        console.log("i will run")
    })