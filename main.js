// Defining text characters for the empty and full hearts for you to use later.
document.addEventListener("DOMContentLoaded", () => {})
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let heartsNodeArray = [...document.getElementsByClassName("like-glyph")]
let modal = document.getElementById('modal')
let modalParagraph = document.getElementById('modal-message')
// Your JavaScript code goes here!

let callServerAndCatch = (e) => {
  mimicServerCall()
  .then(() => handleResponse(e))
   .catch(error => handleError(error))
}

let handleError = (errorMessage) => {
  modal.classList.remove('hidden')
  let p = document.createElement('p')
  modalParagraph.innerText = errorMessage
  setTimeout(() => {
     modal.classList.add('hidden') 
     modalParagraph.innerText = ""
    }, 3000) 
}

let handleResponse = (e) => {
  if (e.target.textContent === EMPTY_HEART) {
    e.target.classList.add('activated-heart')
    e.target.textContent = FULL_HEART
  }else {
    e.target.classList.remove('activated-heart')
    e.target.textContent = EMPTY_HEART
  }
}

heartsNodeArray.map(heartNode => {
   heartNode.addEventListener('click', callServerAndCatch)
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  console.log("clicked!")
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
