let images = document.querySelectorAll(".img-container");
let modal = document.querySelector("#modal");
let img = document.querySelector("#modal-img");
let btnModal = document.getElementById("modal-btn");

for(let i = 0; i < images.length; i++){
    images[i].addEventListener("click", function(e){
        modal.classList.toggle("active");
        let src = e.target.src;
        img.setAttribute("src", src);
    });
}

btnModal.addEventListener("click", () =>{
    modal.classList.toggle("active");
});