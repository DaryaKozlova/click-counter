let countNumber = document.getElementById("clickCount");
count = 0;

function onButtonClick(){
    count += 1;
    countNumber.innerHTML = `Clicked ${count} Times`;
};

function reset(){
    countNumber.innerHTML = `Click me!`;
    count = 0;
}