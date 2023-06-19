window.onload = function(){
    setTimeout(function(){
      document.querySelector('.excellence').style.display = 'block'
    },1000)

    setTimeout(function(){
      document.querySelector('.creativity').style.display = 'block'
    },2000)

    setTimeout(function(){
      document.querySelector('.challenges').style.display = 'block'
    },3000)

    setTimeout(function(){
      document.querySelector('.arrow').style.display = 'block'
    },4000)
};

///////////////////////////////
// RESUME MODAL DISPLAY
///////////////////////////////
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
let resumebtn = document.querySelector('.resume-btn');
let modalImg = document.getElementById("resumepng");
resumebtn.onclick = function(){
  modal.style.display = "block";
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

///////////////////////////////
// CONTACT FORM ALERT MSGS
///////////////////////////////

let sendButton = document.querySelector('.contact-btn');
let formName = document.querySelector('.name');
let formEmail = document.querySelector('.email');
let formSubject = document.querySelector('.subject');
let formTextbox = document.querySelector('.textbox');

sendButton.addEventListener('click', () => {
    // All fields are required to send messages
    
    formName.required = true;
    formEmail.required = true;
    formSubject.required = true;
    formTextbox.required = true;

    // If any are blank show an alert, otherwise send the message
    if (formName.value === '' || formEmail.value === '' || formSubject === '' || formTextbox === '') {
        alert("Please complete all form fields to send a message.");
    } else {
        alert("Message sent. Thanks for reaching out!");
    }
});