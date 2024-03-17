let elements = document.querySelectorAll(".animation");

window.onscroll = () => {
    elements.forEach((el) => {
        if (window.scrollY >= (el.offsetTop-150) && window.scrollY < (el.offsetTop-150) + el.offsetHeight) {
            el.classList.add('show-animate');
        } else {
            el.classList.remove('show-animate');
        }
    });
};

// let cls = document.querySelector(".habti-main")

// window.onscroll = () => {
//     cls.forEach((cl)=>{
//         if(window.scrollY >= cl.offsetTop && window.scrollY < cl.offsetTop + cl.offsetHeight){
//             cl.classList.add('show-animate')
//         }else{
//             cl.classList.remove('show-animate')
//         }
//     })
// }