let btn = document.querySelector('#color-generator');
let heading = document.querySelector('h3');
let div = document.querySelector("#text");
let selectDirection = document.querySelector('select');
let Int1 = document.querySelector('#input1');
let Int2 = document.querySelector('#input2');
let copy = document.querySelector('#copy-code');

btn.addEventListener("click", function () {
    randomcolor();
    let direction = selectDirection.value;
    let gradient = `linear-gradient(${direction}, ${Int1.value}, ${Int2.value})`;
    heading.innerHTML = gradient;
    div.style.background = gradient;
})

copy.addEventListener("click", function () {
    navigator.clipboard.writeText(heading.textContent)
        .then(() => {
           alert("Copied the text: " + heading.textContent);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
});

function randomcolor() {
    Int1.value = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    Int2.value = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}