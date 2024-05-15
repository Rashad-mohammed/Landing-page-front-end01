// /////////////////////     Le menu  burger    ///////////////////////

// Sélectionne le bouton hamburger et le menu de navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("ul");

// Ajoute un écouteur d'événements de clic au bouton hamburger
hamburger.addEventListener("click", mobileMenu);

// Fonction pour activer/désactiver le menu déroulant
function mobileMenu() {
    hamburger.classList.toggle("active"); // Ajoute ou supprime la classe .active du bouton hamburger
    navMenu.classList.toggle("active"); // Ajoute ou supprime la classe .active du menu de navigation
}

// Sélectionne tous les liens de navigation
const navLink = document.querySelectorAll("a");

// Ajoute un écouteur d'événements de clic à chaque lien de navigation
navLink.forEach(n => n.addEventListener("click", closeMenu));

// Fonction pour fermer le menu déroulant lorsqu'un lien est cliqué
function closeMenu() {
    hamburger.classList.remove("active"); // Supprime la classe .active du bouton hamburger
    navMenu.classList.remove("active"); // Supprime la classe .active du menu de navigation
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////     READ MORE ///////////////////////////////////////
// La fonction myFunction prend un argument 'button' qui est une référence
// au bouton "Read more" qui a été cliqué.
function myFunction(button) {                 // Récupère l'élément parent du bouton (l'élément article)
  var parent = button.parentNode;               // Récupère l'élément parent du bouton (l'élément article)
  var dots = parent.querySelector("#dots");      // Récupère l'élément avec l'ID "dots" dans le contexte de l'article actuel.
  var moreText = parent.querySelector("#more");  // Récupère l'élément avec l'ID "more" dans le contexte de l'article actuel.
  var btnText = button;                           // Récupère une référence au bouton "Read more" lui-même.

  // Vérifie si l'élément avec l'ID "dots" est actuellement invisible (caché)
  // ou s'il n'a pas de style défini (c'est-à-dire qu'il est invisible).
  if (dots.style.display === "none" || dots.style.display === "") {  
    dots.style.display = "inline";              // Si "dots" est caché, le rend visible en utilisant "display: inline".
    btnText.innerHTML = "Read more";            // Change le texte du bouton en "Read more".
    moreText.style.display = "none";            // Cache l'élément avec l'ID "more".

  } else {
    dots.style.display = "none";              // Si "dots" est visible, le cache en utilisant "display: none".
    btnText.innerHTML = "Read less";         // Change le texte du bouton en "Read less".
    moreText.style.display = "inline";        // Rend visible l'élément avec l'ID "more" pour afficher le texte complet.
  }
}
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////       bouton scroll to top      //////////////////////////////////////////////////

// JavaScript pour faire défiler vers le haut
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // Utilisez "smooth" pour une animation de défilement fluide
  });
}

// Afficher ou masquer le bouton "Scroll to Top" en fonction de la position de défilement
window.onscroll = function() {
  var button = document.getElementById("scrollToTopButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
  } else {
      button.style.display = "none";
  }
};
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
