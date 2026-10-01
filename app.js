// let divs = document.querySelectorAll(".register")
// for(div1 of divs){
//     div1.addEventListener("click", function(){
//     const fmContainer = document.getElementById("formContainer");
//     fmContainer.classList.toggle("hidden");
//     console.log("div clicked");
// })
// }
const trigger = document.querySelectorAll('.register');
const closeBtn = document.getElementById('closeFormBtn');
const modal = document.getElementById('fullscreenForm');

// Opens the form full-screen natively
for(trig of trigger){
    trig.addEventListener('click', () => {
  modal.showModal(); 
});
}

// Closes it, returning the user back to the card view
closeBtn.addEventListener('click', () => {
  modal.close();
});
