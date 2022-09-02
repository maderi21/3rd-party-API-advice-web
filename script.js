const resDiv = document.querySelector('#results');
const resBtn = document.querySelector('#getData');



resBtn.addEventListener('click', () => {
    getAdvice();
});

window.onload = () => {
    getAdvice;
};

function getAdvice() {

fetch('https://api.adviceslip.com/advice').then((response) => {
    return response.json();
}).then(adviceData => {
    const AdviceObj = adviceData.slip;
    resDiv.innerHTML = `<p>${AdviceObj.advice}</p>`;

}).catch((error)=> {
console.log('rejected', err);
}); 

};