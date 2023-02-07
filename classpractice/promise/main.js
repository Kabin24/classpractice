// Syntax to create promise (which is asynchnorous in nature)

const promise = new Promise((resolve, reject) => {  // two parameters, resolve and reject.
    // As login example.

    const sum = 1+ 1;
    if (sum ===2){
        resolve();
    }
    else{
        reject();
    }

});


// promise.then(() => ){  --> If resolve then run this

// }
// promise.catch()   -> If reject run this

promise.then(() => {  // We can add then function as more we want.
    console.log("This is resolve.")

}).then(() => {
    console.log("THe final value must be updated to 10.")
});


promise.catch(() => {
    console.log("This is reject.")
});
