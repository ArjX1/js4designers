// this is the page counter
let pageNumber = 0;

// have the content for the pages

const pages = [
    
]

// pick relevant tags
const nextTag = document.querySelector('footer img.next');
const prevTag = document.querySelector('footer img.prev');
const outputTag = document.querySelector('h2');

// next function increases page number
const next = function() {
    pageNumber = pageNumber + 1;

    if (pageNumber > pages.length - 1) {
        pageNumber = 0
    }

    updateSection();
}

//previous function decreases page number
const previous = function() {
    pageNumber = pageNumber - 1;

    if (pageNumber < 0) {
        pageNumber = pages.length - 1;
    }

    updateSection();
}

// this updates section content and style
const updateSection = function() {
    outputTag.innerHTML = pages[pageNumber];
}


// on click, run the next function
nextTag.addEventListener('click', function() {
    
    next();
   
})

// on click, run the previous function
prevTag.addEventListener('click', function() {
    
    previous();
   
})
