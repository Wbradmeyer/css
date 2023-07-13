function swapName(e) {
    change = document.querySelector(e)
    change.innerText = 'Marge Simpson'
}

// click on "yes" or "no" class removes that entire ID
// decrement "connection requests"
// "yes" increments "Your Connections"
// take 2 parameters: boolean and id
// use the bool to alter counts, conditional for true
// use id to remove the user

let countDown = 2
let countUp = 418
var connectionRequests = document.querySelector('#conn-req')
var yourConnections = document.querySelector('#your-conn')

function answerRequest(bool, id) {
    if (bool) {
        // add to your connections
        countUp++
        yourConnections.innerText = countUp
    }
    
    // decrement connect req
    countDown--
    connectionRequests.innerText = countDown
    removeRequest = document.querySelector(id)
    removeRequest.remove()
}