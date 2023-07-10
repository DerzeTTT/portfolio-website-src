//Constants/Variables
//Get time difference between 2 dates in years and months
const getTimeDiff = (date1, date2) => {

    const epochDiff = date1.getTime() - date2.getTime();

    const years = Math.floor(epochDiff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((epochDiff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12)));

    return {

        'years':years,
        'months':months

    };

};

//Data
let savedData = new Object();
const curDate = new Date();

savedData.startDate = new Date(2017, 10, 1);
savedData.timePassed = getTimeDiff(curDate, savedData.startDate);

savedData.dateOfBirth = new Date(2007, 5, 11);
savedData.age = getTimeDiff(curDate, savedData.dateOfBirth).years;

savedData.description = `I am a full-stack developer, currently have ${savedData.timePassed.years} years and ${savedData.timePassed.months} month${savedData.months === 1 ? '' : 's'} of experience (dynamically updated). ${savedData.age} years old and studying computer science. Have experience in making VFX as well including making particle emitters, meshes, trails etc.`;

//Elements
const descriptionText = document.querySelector('.description-text');

const typeWriterEffect = (targetElement, fullText, duration) => {

    currentText = '';
    splitted = fullText.split(' ');

    let i = 0;

    const loopOnce = () => {

        if (i >= splitted.length){return};

        const newWord = splitted[i]+' ';
        currentText += newWord;

        targetElement.innerText = currentText;

        i++;
        
        setTimeout(loopOnce, duration);

    };

    loopOnce();

};

const loadEffects = () => {

    typeWriterEffect(descriptionText, savedData.description, 50);

};

window.addEventListener('load', loadEffects);