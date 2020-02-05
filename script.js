let counter = 0;
let counterElement = document.getElementById("counter-element");
let player = document.getElementById("pl");



setInterval(() => {
    let activeImgs = document.getElementsByClassName("active");
    activeImgs[0].className = "";

    let x = Math.floor(Math.random() * 25);
    let allImgs = document.getElementsByTagName("img");
    allImgs[x].className = "active";

    allImgs[x].onclick = () => {
        counter++;
        counterElement.innerText = counter;
        player.currentTime = 0;
        player.play();

    }
}, 1700);


function soundClick() {
    let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'background.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}