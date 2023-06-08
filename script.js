let newQuotes = {
  "- John Smith":
    '"Computers: solving problems with lightning speed and precision."',
  "- Jane Doe": '"Coding: the art of teaching machines to think."',
  "- David Johnson": '"Bytes and bits power the world\'s digital revolution."',
  "- Sarah Wilson": '"Computers: the engines propelling us into the future."',
  "- Michael Anderson":
    '"Software: the invisible force shaping our digital lives."',
  "- Emily Thompson":
    '"Computers: turning imagination into reality with every keystroke."',
  "- Robert Martinez":
    '"In a digital age, computers are our trusted companions."',
  "- Jennifer Brown":
    '"Technology advances, but computers remain our constant problem solvers."',
  "- Daniel Wilson":
    '"Computers: the architects of the digital world we inhabit."',
  "- Samantha Adams":
    '"Coding: the language that enables humans to communicate with computers."',
  "- Matthew Davis":
    '"Artificial intelligence: the frontier of computer exploration."',
  "- Amanda Green":
    '"Computers: the tools that amplify human potential and creativity."',
  "- Richard Moore":
    '"Algorithms: the invisible magic behind our digital experiences."',
  "- Laura Turner":
    '"Computers: the gateways to limitless information and endless possibilities."',
  "- William Reed":
    '"Coding: the ultimate blend of logic, creativity, and problem-solving."',
  "- Samantha Foster":
    '"Computers: turning complex tasks into simple, automated routines."',
  "- Andrew Parker":
    '"Technology empowers us, but it\'s computers that make it happen."',
  "- Jessica Ramirez":
    '"Computers: the drivers of innovation and progress in the modern world."',
  "- Brian Powell":
    '"Coding: the digital brushstrokes that paint the canvas of technology."',
  "- Megan Brooks":
    '"Computers: our faithful partners in the pursuit of knowledge."',
  "- Christopher Hill":
    '"Software engineers: the architects of our virtual realities."',
  "- Rachel Ward":
    '"Computers: unlocking the doors to a connected and digital world."',
  "- Brandon Campbell":
    '"Coding: the modern language of problem-solving and innovation."',
  "- Stephanie Cox":
    '"Computers: the catalysts of transformation in the digital era."',
  "- Jonathan Green":
    '"Technology evolves, but computers remain the heartbeat of progress."',
};

document.querySelector("#generate-new").addEventListener("click", () => {
  generateNewQuote();
});

function generateNewQuote() {
  let authors = Object.keys(newQuotes);
  let author = authors[Math.floor(Math.random() * authors.length)];
  let quote = newQuotes[author];

  let quoteElement = document.querySelector("#new-quote");
  let authorElement = document.querySelector("#quote-author");

  quoteElement.innerHTML = "";
  authorElement.textContent = "";

  let i = 0;
  let typing = setInterval(() => {
    if (i < quote.length) {
      if (quote[i] === "<") {
        // Handle HTML tags
        let endIndex = quote.indexOf(">", i);
        quoteElement.innerHTML += quote.slice(i, endIndex + 1);
        i = endIndex + 1;
      } else {
        // Add one character at a time
        quoteElement.textContent += quote[i];
        i++;
      }
    } else {
      clearInterval(typing);
      authorElement.textContent = author;
    }
  }, 100);
}

window.onload = function () {
  generateNewQuote();
};
