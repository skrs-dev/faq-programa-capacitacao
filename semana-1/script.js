const searchInput = document.querySelector('.faq-search__input');
const faqQuestions = document.querySelectorAll('.faq-category__link');
const faqSearchResults = document.querySelector('.faq-search__results');
const faqSearchResultsList = document.querySelector('.faq-search__results-list');

function searchQuestions(searchTerm) {
    faqSearchResultsList.innerHTML = '';

    if (searchTerm.length === 0) {
        faqSearchResults.style.display = 'none';
        return;
    }

    let foundResults = false;

    faqQuestions.forEach(question => {
        const questionText = question.textContent.toLowerCase();
        
        if (questionText.includes(searchTerm)) {
            createSearchResult(question);
            foundResults = true;
        }
    });

    faqSearchResults.style.display = foundResults ? 'block' : 'none';
}

function createSearchResult(question) {
    const newAnswer = document.createElement('li');
    const newLink = document.createElement('a');

    newLink.href = question.href;
    newLink.textContent = question.textContent;
    newLink.classList.add('faq-search__results-link');

    newAnswer.classList.add('faq-search__results-item');
    newAnswer.appendChild(newLink);

    faqSearchResultsList.appendChild(newAnswer);
}

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    searchQuestions(searchTerm);
});