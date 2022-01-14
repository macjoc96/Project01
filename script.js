let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;



document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  
  // When no number
  if(!guess) {
    document.querySelector('.message').textContent = 'No number! :(';
    
    // When players win
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!' 
   
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    
    //when guess is too high
  } else if (guess > secretNumber) {
     if (score > 1) {
    document.querySelector('.message').textContent = 'too high :/'
    score --;
    document.querySelector('.score').textContent = score;
     } else {
       document.querySelector('.message').textContent = 'You lost';
       document.querySelector('.score').textContent = 0;
     }
    
    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
    document.querySelector('.message').textContent = 'too low :/'
    score --;
    document.querySelector('.score').textContent = score;
     } else {
       document.querySelector('.message').textContent = 'You lost'
       document.querySelector('.score').textContent = 0;
  }
  }})

document.querySelector('.again').addEventListener('click', function() {
   score = 20;  
   secretNumber = Math.trunc(Math.random()*20) + 1;
   document.querySelector('.score').textContent = score;
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.message').textContent = "Start guessing..."
   document.querySelector('.number').textContent = '?';
   document.querySelector('.number').style.width = '15rem';
  documnet.querySelector('.value').textContent = '';
   
   }
);
