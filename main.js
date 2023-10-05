const promise = new Promise((resolved, reject) => {
    let sum = 1 + 1
    if (sum == 2) {
        resolved('Success')
    } else {
        reject('Faild')
    }
})

promise.then((msg) => {
    console.log('this is resolve' + msg)
}).catch((msg) => {
    console.log('this is Reject' + msg)
})