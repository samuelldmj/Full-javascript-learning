
//solution

let form = document.getElementById('myForm')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let varName = document.querySelector('textarea').value
    // console.log(varName);

    let listVarName = function (elem2) {
        elem2 = varName;
        let varNameToArray = elem2.toLowerCase().trim().split('\n')

        for (let [i, chr] of varNameToArray.entries()) {
            let [firstWord, nextWord] = chr.split('_');
            let camelWord = `${firstWord}${nextWord.replace(nextWord[0], nextWord[0].toUpperCase())} ${'✅'.repeat(i + 1)}`
            console.log(camelWord);
        }

    }

    listVarName();

})