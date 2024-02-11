/** 
* Calculate a person's age in years.
*
* @param {object}  An object representing a person, implementing a birth Date parameter. 
* @return {number} The age in years of p
*/

// export function calculateAge(p) {
   
//         if(!p) {
//             throw new Error("missing param p")
//             }
//             else if(!(typeof(p) === "object")){
//                 throw new Error("it's not an object")
//             }
//             else if(p.birth == null){
//                 throw new Error("birth is missing")
//             }
//             else if(!(p.birth instanceof Date)){
//                 throw new Error("birth is not a date")
//             }
//             else if(isNaN(p.birth)){
//                 throw new Error("date is false")
//             }
//         let dateDiff = new Date(Date.now() - p.birth.getTime())
//         let age = Math.abs(dateDiff.getUTCFullYear() - 1970);
//             return age;  
    
    
//    }

export function dateNaissanceValide(p){
    
 
    if(!(p.dateNaissance instanceof Date)) throw new Error("parametre date de naissance non valide ")

    
    
    if(p.dateNaissance.getTime() > Date.now()) throw new Error("age doit être superieur à 18")

    let dateDiff = new Date(Date.now() - p.dateNaissance.getTime())
    let age = Math.abs(dateDiff.getUTCFullYear() - 1970);
    return age > 18;
}

export function codePostalValide(c) {
    if (c.length !== 5){
        throw new Error("la taille de votre code postale est incorrecte")
    }else if(isNaN(c)){
        throw new Error("Votre code postale est faux")
    }
        return true; 
       
}

export function nomValide(nom) {
    const invalideCaractere = /[^\sa-zA-ZÀ-ÿ'-]/;
    if (nom.match(invalideCaractere)) {
        throw new Error("Le nom ne doit pas contenir de caractères spéciaux ou de chiffres.");
    }
    return true;
}

export function prenomValide(prenom) {
    const invalideCaractere = /[^\sa-zA-ZÀ-ÿ'-]/;
    if (prenom.match(invalideCaractere)) {
        throw new Error("Le prenom ne doit pas contenir de caractères spéciaux ou de chiffres.");
    }
    return true;
}

export function emailValide(email) {
    const invalideCaractere = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if (email.match(invalideCaractere)) {
        throw new Error("L'email doit être valide.");
    }
    return true;
}
