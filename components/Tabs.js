// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

function createTab(item) {
const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = item;
return tab
}


const topicsDiv = document.querySelector('.topics');
const tabInfoAPI = 'https://lambda-times-backend.herokuapp.com/topics';

axios.get(tabInfoAPI)
.then(successData => successData.data.topics.forEach(x => topicsDiv.appendChild(createTab(x))))
.catch(failData => console.log(failData));