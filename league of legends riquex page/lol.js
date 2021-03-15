//eventos
const championsDemo = [
    { img: "./img/demostration/yasuo.jpg", name: "yasuo", color: "rgb(20, 134, 201)", description: "El guerrero imperdonable" },
    { img: "./img/demostration/lux.jpg", name: "Lux", color: "rgb(83, 20, 201)", description: "La dama luminosa" },
    { img: "./img/demostration/akali.jpg", name: "Akali", color: " rgb(20, 201, 74)", description: "La asesina furtiva" },
    { img: "./img/demostration/miss fortune.jpeg", name: "Miss fortune", color: "rgb(201, 40, 35)", description: "La cazarecompensas" },
    { img: "./img/demostration/garen.jpg", name: "Garen", color: "rgb(214, 218, 26)", description: "El poder de demacia" },
    { img: "./img/demostration/morgana.png", name: "Morgana", color: "rgb(82, 7, 26)", description: "La desolada" }
]
const champions = document.querySelectorAll(".champion-item");
champions.forEach((item, index) => {
    item.addEventListener("click", async () => {
        const championHover = document.querySelectorAll(".hover");
        const img = document.querySelector(".category-description img");
        championHover.forEach(item => {
            item.style.transform = "scale(0)";
        });
        //cambios
        championHover[index].style.transform = "scale(1)";
        img.src = championsDemo[index].img;
        await gsap.from(".category-description img",
            {
                y: -400,
                duration: 0.30
            });
        document.querySelector(".category-champion-description h3").textContent = championsDemo[index].name;
        document.querySelector(".category-champion-description p").textContent = championsDemo[index].description;
    })
});


const gameMode=[
    {img:"./img/game-modes/grieta.jpg", title:"La grieta del invocador"},
    {img:"./img/game-modes/aram.jpg", title:"ARAM"},
    {img:"./img/game-modes/tft.jpg", title:"Teamfight"}
]
const modeItems= document.querySelectorAll(".mode");
modeItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        const modeWallpaper=document.querySelector(".game-mode");
        modeWallpaper.style.backgroundImage=`url(${gameMode[index].img})`;
        modeWallpaper.style.backgroundSize="cover";
        modeWallpaper.style.backgroundAttachment="fixed";
        document.querySelector(".game-mode .title").textContent=gameMode[index].title;
    })
});
//consiguracion de tilt.js
VanillaTilt.init(document.querySelectorAll(".grid-item"), {
    max: 25,
    speed: 400,
    glare: true
});

//configuracion de swip js
const swipers = document.querySelectorAll(".swiper-container");

const swiperOptions1 =
{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    centerInsufficientSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    }
}

var swiper = new Swiper(".swiper-container", swiperOptions1);
//animaciones para los botones de navegacion
gsap.from(".swiper-button-next",
    {
        yoyo: true,
        x: "-20",
        duration: 1,
        repeat: -1
    });

gsap.from(".swiper-button-prev",
    {
        yoyo: true,
        x: "20",
        duration: 1,
        repeat: -1
    })


