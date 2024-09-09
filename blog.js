const homeButton = document.getElementById('homeButton');



//homeButton hover
homeButton.addEventListener('mouseover', function() {
    this.src = 'homebuttonhover.png'; 
});

homeButton.addEventListener('mouseout', function() {

    this.src = 'homebutton.png';
});

homeButton.addEventListener('mousedown', function() {

    this.src = 'homeCLICK.png';
});

homeButton.addEventListener('mouseup', function() {

    this.src = 'homebuttonhover.png';
});


const aboutButton = document.getElementById('aboutButton');



//aboutButton hover
aboutButton.addEventListener('mouseover', function() {
    this.src = 'aboutbuttonhover.png'; 
});

aboutButton.addEventListener('mouseout', function() {

    this.src = 'aboutbutton.png';
});

aboutButton.addEventListener('mousedown', function() {

    this.src = 'aboutCLICK.png';
});

aboutButton.addEventListener('mouseup', function() {
    this.src = 'aboutbuttonhover.png'; 
});




//infoButton
infoButton.addEventListener('mouseover', function() {
    this.src = 'infobuttonhover.png'; 
});

infoButton.addEventListener('mouseout', function() {

    this.src = 'infobutton.png';
});


//reviewButton
reviewButton.addEventListener('mouseover', function() {
    this.src = 'reviewbuttonhover.png'; 
});

reviewButton.addEventListener('mouseout', function() {

    this.src = 'reviewbutton.png';
});





