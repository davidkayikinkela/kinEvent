const loader = document.querySelector('.section-l');









const hamburgerWrapper = document.querySelector('.hamburger-menu'); 
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
let body = document.querySelector('body');

hamburgerWrapper.addEventListener('click', () => {
    hamburgerWrapper.classList.toggle('active');
    menu.classList.toggle('mobile-menu');
    logo.classList.toggle('top');
    body.classList.toggle('bod');
})


// const dropdowns = document.querySelectorAll('.dropdown');
// dropdowns.forEach(dropdown => {
//     const select = dropdown.querySelector('.select');
//     const caret = dropdown.querySelector('.caret');
//     const menu = dropdown.querySelector('.mennu');
//     const options = dropdown.querySelector('.mennu li');
//     const selected = dropdown.querySelector('.selected');

//     select.addEventListener('click', () => {
//         select.classList.toggle('select-clicked');
//         caret.classList.toggle('caret-rotate');
//         menu.classList.toggle('mennu-open');
//     });
//     options.forEach(option => {
//         option.addEventListener('click', () => {
//             selected.innerText = option.innerText;
//             select.classList.remove('select-clicked');
//             caret.classList.remove('caret-rotate');
//             menu.classList.remove('mennu-open');
//             options.forEach(option => {
//                 option.classList.remove('actives'); 
//             });
//             option.classList.add('actives'); 

//         });  
//     });
      
// });




let nextDom = document.getElementById('next');
let prevDOm = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
}
prevDOm.onclick = function(){
    showSlider('prev');
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    nextDom.click();
}, timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
        
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=>{
        nextDom.click();
    }, timeAutoNext);
}

// a propos
const propos = document.querySelector(".propos"), 
    prop = document.querySelector(".prop"),
    croix = document.querySelector(".croixp");

prop.addEventListener("click", () => {
    propos.classList.toggle("start")
    

})
croix.addEventListener("click", () => { 
    propos.classList.toggle("start")

});
// politique de confidentialité
const politique = document.querySelector(".politique"), 
    poli = document.querySelector(".poli"),
    croixp = document.querySelector(".croixpp"); 

poli.addEventListener("click", () => {
    politique.classList.toggle("startt")
    

})
croixp.addEventListener("click", () => { 
    politique.classList.toggle("startt")

})



/* .politique cookies */
const cookies = document.querySelector(".cookies"), 
    lien = document.querySelector(".liencookies"),
    croixpp = document.querySelector(".croixppp"); 

lien.addEventListener("click", () => {
    cookies.classList.toggle("starttt")
    

})
croixpp.addEventListener("click", () => { 
    cookies.classList.toggle("starttt")

})

 
 

 

const cookieBox = document.querySelector(".wrapper"),
    buttons = document.querySelectorAll(".button");
 
window.addEventListener('load', () => {
    loader.classList.add('fondu-out');  
 
    if (document.cookie.includes("codinglab")) return; 
    cookieBox.classList.add("show");

    buttons.forEach((button) => {
            button.addEventListener("click", () => {
                cookieBox.classList.remove("show");

                if (button.id == "acceptBtn") {
                    document.cookie ="cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30; 
                } 
            }); 
        }); 
} );
 

setTimeout( () => { 
Notification.requestPermission( () => {
    if (Notification.permission == 'granted') { 
          
    } else {
        console.log('Veuillez accorder au navigateur la possibilité de recevoir des notifications !')
    } 
}) 

 
let notification = new Notification("DRCEvent" , { 
    body: "Actualisation des événement. Jetez un coup d'oeil sur notre liste d'événement ",
    icon:"../icone/logo2.png",
} ) 
    console.log('le premier délai est terminé');
}, // 1sec * 1min * 1heure * 1jours
1000 * 10
    )
 
    // setTimeout( () => { 
    //     Notification.requestPermission( () => {
    //         if (Notification.permission == 'granted') { 
                  
    //         } else {
    //             console.log('Veuillez accorder au navigateur la possibilité de recevoir des notifications !')
    //         } 
    //     }) 
        
         
    //     let notification = new Notification("DRCEvent" , { 
    //         body: "Actualisation des événement. Jetez un coup d'oeil sur notre liste d'événement ",
    //         icon:"../icone/logo2.png",
    //     } ) 
    //         console.log('le deuxieme délai est terminé');
    //     }, // 1sec * 1min * 1heure * 1jours
    //     9000  
    //         )

notification.onclick = () => {
    window.open("../tout_nos_evenement.html" , "_blank");
} 