// this is the page counter
let pageNumber = 0;

// have the content for the pages

const pages = [
    { copy: "A London-based web developer", background: "#edc7a9", circle: "#3e78ed"},
    { copy: "Japanese denim enthusiast", background: "#a1fffe", circle: "#e34a47"},
    { copy: "Available for collaboration", background: "#d3c7f3", circle: "#f7fe00"},
    { copy: `Take a look <a href="#">what he's worked on</a> `, background: "#faffb8", circle: "#b472e6"}
]

// pick relevant tags
const nextTag = document.querySelector('footer img.next');
const prevTag = document.querySelector('footer img.prev');
const randomTag = document.querySelector('footer img.random')
const outputTag = document.querySelector('h2');
const circleTag = document.querySelector('section div.circle');
const bodyTag = document.querySelector('body');


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

// pick and random slide

const random = function() {
    pageNumber = Math.floor(Math.random() * pages.length);

    updateSection();
}

// this updates section content and style
const updateSection = function() {
    outputTag.innerHTML = pages[pageNumber].copy;
    circleTag.style.backgroundColor = pages[pageNumber].circle;
    bodyTag.style.backgroundColor = pages[pageNumber].background;
}


// on click, run the next function
nextTag.addEventListener('click', function() {
    
    next();
   
})

// on click, run the previous function
prevTag.addEventListener('click', function() {
    
    previous();
   
})

// on click of random tag, run this

randomTag.addEventListener('click', function() {
    
    random()
});


// when user presses key check for arrow left or right
// and go back or forward accordingly

document.addEventListener("keyup", function(event) {
    console.log(event)

    // if key being pressed is ArrowRight
    if (event.key == "ArrowRight") {
        next();
    }

    // if key being pressed is ArrowLeft
    if (event.key == "ArrowLeft") {
        previous();
    }

     // if key being pressed is ArrowUp
     if (event.key == "ArrowUp") {
        random();
    }
});
