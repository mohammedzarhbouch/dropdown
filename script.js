// script.js
const expandButton = document.getElementById('expandButton');
const dropdownContent = document.getElementById('dropdownContent');

expandButton.addEventListener('click', () => {
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.opacity = '0';
        setTimeout(() => {
            dropdownContent.style.display = 'none';
        }, 300); // Adjust the time here to match the transition duration

    } else {
        dropdownContent.style.display = 'block';
        setTimeout(() => {
            dropdownContent.style.opacity = '1';
        }, 0); // You can adjust this time as needed
    }
});



var firstButton = document.getElementById("firstButton");
var secondButton = document.getElementById("secondButton");
var thirdButton = document.getElementById("thirdButton");

firstButton.addEventListener("click", function() {
    window.location.href = "test.html";
});

secondButton.addEventListener("click", function() {
    window.location.href = "test2.html";
});

thirdButton.addEventListener("click", function() {
    window.location.href = "test3.html";
});