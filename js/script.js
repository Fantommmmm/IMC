
function calculerIMC() {

    // resupere les tailles/poids
    let taille = parseFloat(document.querySelector("#taille").value);
    let poids = parseFloat(document.querySelector("#poids").value);
  
    // si ne mets rien ou du texte --> aifficher
    if (!(taille) || !(poids)) {
      alert("Veuillez entrer des valeurs numériques valides pour la taille et le poids.");
      return;
    }
  
    //  calcul
    let tailleEnMetres = taille / 100; 
    let imc = poids / (tailleEnMetres * tailleEnMetres);
  
    // affiche dans le html
    let resultat = document.createElement("p");
    resultat.innerHTML = "Votre IMC est : " + imc.toFixed(2);
  
    //mets le reslutat dans la div créé dans l'html
    let resultPlace = document.querySelector(".resultPlace");
    resultPlace.innerHTML = "";
    resultPlace.appendChild(resultat);
  }
  
//   lie le button a la fonction qui fait le calcul
  let boutonCalculer = document.querySelector(".btn");
  boutonCalculer.addEventListener("click", calculerIMC);
  