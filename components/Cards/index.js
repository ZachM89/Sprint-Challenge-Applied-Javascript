// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainerSelector = document.querySelector('.cards-container');

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response => {
        for(let property1 in response.data.articles){
            for(let a = 0; a < response.data.articles[property1].length; a++){
                cardsContainerSelector.appendChild(articleComponent(response.data.articles[property1][a]));
            }
        }
    })
    .catch( err => {
        console.log(err);
    });

function articleComponent(object){
    const divCardElement = document.createElement('div');
    const divHeadlineElement = document.createElement('div');
    const divAuthorElement = document.createElement('div');
    const divImageContainerElement = document.createElement('div');
    const imageElement = document.createElement('img');
    const spanElement = document.createElement('span');

    divCardElement.classList.add('card');

    divHeadlineElement.classList.add('headline');
    divHeadlineElement.textContent = object.headline;

    divAuthorElement.classList.add('author');
    divImageContainerElement.classList.add('img-container');

    imageElement.src = object.authorPhoto;
    spanElement.textContent = `By: ${object.authorName}`;

    divCardElement.appendChild(divHeadlineElement);
    divCardElement.appendChild(divAuthorElement);

    divAuthorElement.appendChild(divImageContainerElement);
    divAuthorElement.appendChild(spanElement);
    divImageContainerElement.appendChild(imageElement);

    return divCardElement;
}