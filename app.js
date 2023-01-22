const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
if (entry.isIntersecting){
    entry.target.classList.add('show');
} else {
    entry.target.classList.remove('show');
}
    });   
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

var loader = document.getElementById('preloader');
window.addEventListener('load', function(){
    loader.style.display = 'none';
})

//Back to Top Button
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}