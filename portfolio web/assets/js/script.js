const toggle = document.getElementById('toggle');
const body = document.querySelector('body');

toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
};

function clicked(){
    const element = document.getElementById("about-me");
    element.scrollIntoView();
};

function clicked1(){
    const element = document.getElementById("projects");
    element.scrollIntoView();
}
