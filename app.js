let rossJumbo = document.querySelector('.ross-jumbo-img');

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


// Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
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