//my code
const main = document.querySelector('main#main');
main.remove ();
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion'; 


document.body.appendChild(newHeader);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { newHeader };
}
