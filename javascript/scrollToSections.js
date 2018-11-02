var homeLink = document.getElementById('home-link');
var aboutLink = document.getElementById('about-link');
var skillsLink = document.getElementById('skills-link');
var projectsLink = document.getElementById('projects-link');
var resumeLink = document.getElementById('resume-link');
var contactLink = document.getElementById('contact-link');

var homePage = document.getElementById('intro-page');
var aboutPage = document.getElementById('about-me');
var skillsPage = document.getElementById('skills-page');
var projectsPage = document.getElementById('projects-page');

homeLink.addEventListener('click', function(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})
aboutLink.addEventListener('click', function(){
  aboutPage.scrollIntoView({behavior: 'smooth'});
})
skillsLink.addEventListener('click', function(){
  skillsPage.scrollIntoView({behavior: 'smooth'});
})
projectsLink.addEventListener('click', function(){
  projectsPage.scrollIntoView({behavior: 'smooth', block: "start"});
})

var pokeclimb = document.getElementById('pokeclimb-img');
var hangman = document.getElementById('hangman-img');
var boggle = document.getElementById('boggle-img');
var snake = document.getElementById('snake-img');
var pooter = document.getElementById('pooter-img');

pokeclimb.addEventListener('mouseover', function(){
  pokeclimb.src = "images/pokeclimb-demo.gif"
})
pokeclimb.addEventListener('mouseout', function(){
  pokeclimb.src = "images/pokeclimb-static.gif"
})

hangman.addEventListener('mouseover', function(){
  hangman.src = "images/hangman-demo.gif"
})
hangman.addEventListener('mouseout', function(){
  hangman.src = "images/hangman-static.gif"
})

boggle.addEventListener('mouseover', function(){
  boggle.src = "images/boggle-demo.gif"
})
boggle.addEventListener('mouseout', function(){
  boggle.src = "images/boggle-static.gif"
})

snake.addEventListener('mouseover', function(){
  snake.src = "images/pokesnake-demo.gif"
})
snake.addEventListener('mouseout', function(){
  snake.src = "images/pokesnake-static.gif"
})

pooter.addEventListener('mouseover', function(){
  pooter.src = "images/pooter-demo.gif"
})
pooter.addEventListener('mouseout', function(){
  pooter.src = "images/pooter-static.gif"
})
