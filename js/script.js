const formImc = document.forms.formImc;

function handleFormImc(event) {
  event.preventDefault(); // Empêche l'envoi du formulaire

  let taille = parseFloat(formImc.taille.value);
  let poids = parseFloat(formImc.poids.value);

  if (isValidForm(poids, taille)) {
    const imc = calculateImc(taille, poids);
    afficherResultatIMC(formImc, imc);
  } else {
    afficherErreur(formImc, "Veuillez entrer des valeurs valides pour la taille et le poids.");
  }
}

formImc.addEventListener("submit", handleFormImc);

function calculateImc(taille, poids) {
  return poids / ((taille / 100) * (taille / 100));
}

function afficherErreur(elem, message) {
  const message1 = document.createElement("div");
  message1.innerHTML = `<p>${message}</p>`;
  message1.classList.add("errorPlace");
  elem.append(message1);
}

function isValidForm(poids, taille) {
  return !(!(taille) || !(poids));
}

function afficherResultatIMC(elem, imc) {
  const message = document.createElement("div");
  message.innerHTML = `<p>Votre IMC est : ${imc.toFixed(2)}</p>`;
  message.classList.add("resultPlace");
  elem.append(message);
}
