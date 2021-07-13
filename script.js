//Opdracht 15 Gebruik Eventhandlers (defer)
//Deel 1 Variabele maken, attach click event aan button en geef alert:
const alertButton = document.getElementById('mybutton')
//console.log(alertButton)
alertButton.addEventListener('click', function(e){
    alert('Button clicked');
})
//Deel 2a Geef de body tag de class "blue-background"
const myBody = document.querySelector('body')
//console.log(myBody)
myBody.classList.add('blue-background')
//Deel 2b Maak klik event aan nieuwe button en voeg class "red-background toe aan body element"
const backgroundButton = document.getElementById('backgroundbutton') 
//console.log(backgroundButton)
//backgroundButton.addEventListener('click', function(e){
//    myBody.classList.add('red-background');    
//})
//Deel 3 changeColor functie toggelen
const toggleBackgroundColorBody=()=>{
    myBody.classList.toggle('red-background');
};
backgroundButton.addEventListener('click', toggleBackgroundColorBody);