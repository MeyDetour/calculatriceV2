let valeurAffichee = document.querySelector(".champstexte")
const boutons = document.querySelectorAll('.bouton')

let operateur = ["+", '-', "x",]
let operation = "0"


function verifier(val){
    if (operateur.includes(val) && operateur.includes(operation[operation.length-1])){
        return false

    }
    else {
        return true
    }

}

boutons.forEach(bouton => {
    bouton.addEventListener('click', () => {
        let valeurBouton = bouton.innerText
        console.log(operation)
        if (valeurBouton === "AC") {
            valeurAffichee.value = ''
         operation = ''}

        else if (valeurBouton === "=") {
            valeurAffichee.value =  eval(operation)

        } else {

            if(verifier(valeurBouton)){

                valeurAffichee.value += valeurBouton
                if ( valeurBouton ==="x"){valeurBouton = "*"}
                operation += valeurBouton

            }

        }
    })
})