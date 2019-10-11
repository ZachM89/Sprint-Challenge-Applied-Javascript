// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsSelector = document.querySelector('.topics');

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(response => {
        console.log(response);
        for(let a = 0; a < response.data.topics.length; a++){
            topicsSelector.appendChild(tab(response.data.topics[a]))
        }
    })
    .catch( err => {
        console.log(err);
    });

function tab(topic){
    const divElement = document.createElement('div');
    divElement.classList.add('tab');
    divElement.textContent = topic;

    return divElement;
}