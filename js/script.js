// Menu Dropdown functionality

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');


menu.onclick =()=>{
    navbar.classList.toggle('active')
}

window.onscroll = ()=>{
    navbar.classList.remove('active')
}


// Smooth scrolling with Jquery

$('a').on('click', function(event){
    //  we checked for #(hash)
if(this.hash !==""){
    event.preventDefault()
 //    we assign Hash in all nav links
    let hash = this.hash;
 //    we add animation on scroll
    $('html, body').animate({scrollTop: $(hash).offset().top - 80},1500,)
}
})


// Animate on scroll functionality

AOS.init({
    duration:3000,
    offset: 100,
})


