const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
yesBtn.addEventListener('click', () => {
    var image = document.getElementById("full-screen-image");
    if (image.style.display === "none") {image.style.display = "block";}
    var question = document.getElementById("question");
    question.style.display = "none";
    var yesButton = document.getElementById("yes-button");
    yesButton.style.display = "none";
    var noButton = document.getElementById("no-button");
    noButton.style.display = "none";
    var audio = document.getElementById("audio");
    audio.play();
    setTimeout(function () {
        var confirmation = confirm("Prete San Paolo III ti ha rubato l'ip :3");
        if (confirmation) {
            window.close();
        }
    }, 7000);
});
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});