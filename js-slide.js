let slideIndex = 0;
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// (Hvordan undgår jeg den løber al den anden kode igennem først)
// nextBtn.addEventListener('click', (slideIndex) => {
//   slideIndex = 2;
// });

// Selve funktionen (4-28) Hvorfor denne type funktion (arrow function) i stedet for function?
const showSlides = () => {

// Her tager vi fat i alle vores mySlides divs samt dot divs. Skal jeg bruge queryselector her?
  const slides = document.getElementsByClassName('mySlides')
  const dots = document.getElementsByClassName('dot')

// Her looper vi igennem dem allesammen og display er sat til none, så vi ikke kan se nogen af dem. for betyder loop, og efterfølgende er der 3 statements.
// Vi siger: variabel i er 0. Hvis i er mindre end antallet af slides, plus da i-værdien med 1.
for(let i=0; i < slides.length; i++){
  slides[i].style.display = "none"
  }

// Her fortæller vi JS at den skal plusse med 1 i vores array. Slideindex (l2) er 0, og næste gang skal den være 1.
  slideIndex++;

// Nu er vores slideindex 1. Hvis det tal er større end antallet af billeder, bliver indexet sat til 1 igen, så vi starter forfra.
  if(slideIndex > slides.length ) {
    slideIndex = 1;
  }

// Her looper vi igennem alle dots ligesom ved billederne.
  for(let i=0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "")
    }

//Her siger vi at slideindexet skal minus med 1. Vi har sagt index er 1 - giver 0. Så vi starter på det første billede i vores array, og det bliver vist som en blok.
// Udover det giver vi vores aktive dot en yderligere class, som hedder active. Den er kodet i css, og gør at vi kan se det aktive billede.
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

// Her viser vi i ms hvor lang tid hvert billede skal vises.
  setTimeout( showSlides , 3000 );

};

// Til sidst når alt er loaded, kører vi funktionen.
showSlides();

// TRINES COLLAPSIBLES
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("activeList");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
