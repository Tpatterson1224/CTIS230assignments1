myitem = document.getElementById("firsttest")
myitem.addEventListener("click", onClick);
function onClick() {  
    myitem.style.color = "green";  // Change text color to green
    myitem.style.fontSize = "36px";  // Change font size
}
myitem.addEventListener("mouseout", onMouseOut);
function onMouseOut() {
    myitem.style.color = ""; // Reset the color
    myitem.style.fontSize = ""; // Reset the font size
}
thebutton = document.getElementById("thebutton");
otheritem = document.getElementById("buttontest");
thebutton.addEventListener("click", onButtonClick);
function onButtonClick() {
    otheritem.style.color = "red";  // Change the text color to red
}
textentry = document.getElementById("myinput");
textentry.addEventListener("change", onChange);
function onChange() {
    newtext = textentry.value;  // Get the value from the input field
    otheritem.innerHTML = newtext;  // Update the content of the other element
}

<a href="PattersonAssignment2.html"></a>