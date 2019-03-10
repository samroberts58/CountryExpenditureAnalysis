// Get the pop up window
var myModal = document.getElementById('myModal');

// Get the button that opens the window
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the window
var close = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the window 
btn.onclick = function() {
  myModal.style.display = "block";
}

// When the user clicks on <span> (x), close the window
close.onclick = function() {
  myModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == myModal) {
    myModal.style.display = "none";
  }
}