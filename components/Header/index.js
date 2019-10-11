// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const divElement = document.createElement('div');
    const spanDateElement = document.createElement('span');
    const h1Element = document.createElement('h1');
    const spanTempElement = document.createElement('span');

    divElement.classList.add('header');

    spanDateElement.classList.add('date');
    spanDateElement.textContent = 'SMARCH 28, 2019';
    h1Element.textContent = 'Lambda Times';

    spanTempElement.classList.add('temp');
    spanTempElement.textContent = '98°';

    divElement.appendChild(spanDateElement);
    divElement.appendChild(h1Element);
    divElement.appendChild(spanTempElement);

    return divElement;
}

const headerContainerSelector = document.querySelector('.header-container');

const headerComponent = Header();

headerContainerSelector.appendChild(headerComponent);
