const poll = {
    question: 'what is your favorite programming language?',
    options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
    //This generate [0, 0, 0, 0]. more in the next section
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        let languageOption = Number(prompt(`${this.question}\n${this.options.join('\n')}  \n(Write option number)`))

        //register answer: keeps track of our options by incrementing each element that is being selected
        typeof languageOption === 'number' && languageOption < this.answers.length && this.answers[languageOption]++


        this.displayResults();
        this.displayResults('string');
        // return languageOption;

    },
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        }
        else if (typeof type === 'string') {
            console.log(`Poll result are ${this.answers.join(', ')}`);
        }

    }
};


let pollBtn = document.querySelector('.poll');
pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll))

let testArr = [5, 2, 3];
let displayResult = poll.displayResults.call({ answers: testArr });