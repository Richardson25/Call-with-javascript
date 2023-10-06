const egaliteIT = {
  cours: "Javascript",
  email: "egaliterichardson@gmail.com",
  etudiant: [],

  login(nom, prenom) {
    console.log(
      `${nom} ${prenom} you are in ${this.cours} your email is ${this.email}`
    );
    this.etudiant.push(`${nom} ${prenom}`);
  },
};

egaliteIT.login("Egalité", "Richardson");

console.log(egaliteIT.etudiant);



const richardsonIT = {
  cours: "html",
  email: "richardsonegalite@gmail.com",
  etudiant: [],
};

const utiliser = egaliteIT.login;

utiliser.call(richardsonIT, "Richardson", "Egal");

console.log(richardsonIT.etudiant);
