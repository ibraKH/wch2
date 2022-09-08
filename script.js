

const ad = document.getElementById("ad");
const parent = document.getElementById("parent");
const preload = document.getElementById("preload");
const closed = document.getElementById("closed");

const timer = setInterval(() => {
    preload.classList.add("hide");
    parent.classList.remove("hide");
    parent.classList.add("show");
    AOS.init();
    clearInterval(timer);
}, 2000)

closed.addEventListener('click', () => {
    ad.classList.add("hide");
})