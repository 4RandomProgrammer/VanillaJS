window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const color = [
        "#60d494",
        "#d36060",
        "#c460d3",
        "#d3d160",
        "#6860d3",
        "#60b2d3",
        "#dad9d9"
    ];
    
    console.log(sounds);
    //fazendo som
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubble(index);
        });
    });

    //fUNC that creat bubbles
    const createBubble = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = color[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };
});
