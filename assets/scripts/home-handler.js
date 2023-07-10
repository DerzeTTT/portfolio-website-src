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

savedData.socialMedia = {

    'Discord':`https://discord.com/users/478088654665940995/`,
    'Twitter':`https://twitter.com/DerzeTT1`

};

//Directories
const imageDir = '../assets/images';

//Elements
const descriptionText = document.querySelector('.description-text');
const downPointer = document.querySelector('.point-down');

const contactList = document.querySelector('.contact-list');

const contactItemSample = document.querySelector('.contact-item');

//Bindings
downPointer.addEventListener('click', () => {

    $(window).scrollTop(window.innerHeight/2);

});

const typeWriterEffect = (targetElement, fullText, duration) => {

    currentText = '';
    splitted = fullText.split(' ');

    let i = 0;

    const loopOnce = () => {

        if (i >= splitted.length){return};

        const newWord = splitted[i]+(i == splitted.length-1 ? '' : ' ');
        currentText += newWord;

        targetElement.innerText = currentText;

        i++;
        
        setTimeout(loopOnce, duration);

    };

    loopOnce();

};

const loadEffects = () => {

    typeWriterEffect(descriptionText, savedData.description, 30);

};

window.addEventListener('load', loadEffects);

const createNewContact = (contactLink, contactName) => {

    let sampleClone = contactItemSample.cloneNode(true);
    contactList.appendChild(sampleClone);

    sampleClone.style.display = 'flex';

    let sampleName = sampleClone.querySelector('.name');
    let sampleIcon = sampleClone.querySelector('.icon');

    const staticIcon = imageDir+`/${contactName.toLowerCase()}-static.svg`;

    sampleName.innerText = contactName;

    sampleClone.addEventListener('click', () => {

        window.open(contactLink, '_blank');

    });

    sampleIcon.style['background-image'] = `url(${staticIcon})`;

};

for (let contactName in savedData.socialMedia){

    let contactLink = savedData.socialMedia[contactName];
    createNewContact(contactLink, contactName);

};