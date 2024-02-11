import {codePostalValide, emailValide, nomValide, prenomValide, dateNaissanceValide } from './module';
let FormulaireValide,FormulaireInvalide;

 beforeEach(() => {
   FormulaireValide = {
     nom: "gueddoura",
     prenom: "kheira",
     email: "gueddoura@gmail.fr",
     dateNaissance: new Date('08/05/2000'),
     ville: "Nice",
     codePostal: "06000",
   };

   FormulaireInvalide = {
     nom: "guedd12oura",
     prenom: "kheira&+",
     email: "kheiragmail",
     dateNaissance: new Date('08/05/2010'),
     ville: "Nice",
     codePostal:"0633333",
   };

 }); 

/**@function dateNaissanceValide*/
describe('dateNaissanceValide Unit test Suites', () => {
  it('should return a correct age', () => {
      const loise = {
          birth: new Date("11/07/1991")
      };
      expect(dateNaissanceValide(loise)).toEqual(32);
  })


  //le champs birth n'est pas une date
  it('should throw a "parametre date de naissance non valide" error', () => {
      expect(() => dateNaissanceValide(FormulaireInvalide.dateNaissance)).toThrow("parametre date de naissance non valide")
  })
  

  //lancé le test l'année prochaine de façon dynamique 
  it('doit retouner un age correcte', () => {
      const currentDate = new Date();
      const newDate = currentDate.setFullYear(currentDate.getFullYear() - 20);
      expect(dateNaissanceValide({birth:new Date(newDate)})).toBe(20);
  })

  // // l'age doit être supérieur à 18
  it('doit retouner age sup 18 ', () => {
      const currentDate = new Date();
      const newDate = currentDate.setFullYear(currentDate.getFullYear() - 17);
      expect(dateNaissanceValide({birth:new Date(newDate)})).toBe(17);
  })
});

/**@function codePostalValide*/
describe('codePostalValide Unit test Suites', () => {
  it ('should return true if the parameter is a string and have 5 characters', () => {
    expect(codePostalValide(FormulaireValide.codePostal)).toEqual(true);
  });
  it ('should return true if the parameter is a string and have 5 characters', () => {
    expect(() => codePostalValide(FormulaireInvalide.codePostal)).toThrow("Votre code postale est faux")
  });
});

/**@function nomValide*/
describe('nomValide Unit test Suites', () => {
  it ('should return true if the parametre is string and doesn t have special characters', () => {
    expect(nomValide(FormulaireValide.nom)).toEqual(true)
  });
  it ("should return false if the parametre isn't a string or doesn't have special character", () =>{
    expect(() => nomValide(FormulaireInvalide.nomValide)).toThrow("Votre nom est faux")
  })
});

/**@function prenomValide*/
describe('nomValide Unit test Suites', () => {
  it ('should return true if the parametre is string and doesn t have special characters', () => {
    expect(prenomValide(FormulaireValide.prenom)).toEqual(true)
  });
  it ("should return false if the parametre isn't a string or doesn't have special character", () =>{
    expect(() => prenomValide(FormulaireInvalide.prenomValide)).toThrow("Votre prenom est faux")
  })
});

/**@function emailValide*/
describe('emailValide Unit test Suites', () => {
  it ('should return true if the parametre is string and doesn t have special characters', () => {
    expect(emailValide(FormulaireValide.email)).toEqual(true)
  });
  it ("should return false if the parametre isn't a string or doesn't have special character", () =>{
    expect(() => emailValide(FormulaireInvalide.email)).toThrow("Votre email est faux")
  })
});