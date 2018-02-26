

//Create variables for wins, losses, and target number; start wins and losses at 0//
//and generate random target number.

var winCounter = 0;

var lossCounter = 0;

//Generate random target number

var targetNumber = Math.floor(Math.random() * 101 + 19);

    $("#targetNumber").text(targetNumber);

//Create variables for each each crystal and generate random value for each crystal//

var cry1 = Math.floor(Math.random() * 11 + 1);

var cry2 = Math.floor(Math.random() * 11 + 1);

var cry3 = Math.floor(Math.random() * 11 + 1);

var cry4 = Math.floor(Math.random() * 11 + 1);

//Print wins and losses to page via html//

    $("#winCounter").html(winCounter);

    $("#lossCounter").html(lossCounter);


//Create variable for current score counter and start at 0//

var counter = 0;

    $("#curScore").text(counter);

//Game reset; generate new random target number and new random values for each crystal;
//Reset current score to 0//

function restartGame() {

    targetNumber = Math.floor(Math.random() * 101 + 19);

    $("#targetNumber").text(targetNumber);

    cry1 = Math.floor(Math.random() * 11 + 1);
    cry2 = Math.floor(Math.random() * 11 + 1);
    cry3 = Math.floor(Math.random() * 11 + 1);
    cry4 = Math.floor(Math.random() * 11 + 1);
    counter = 0;
    $("#curScore").text(counter);
    
    }
   
 //Function for winning; send alert, add to wins counter, and restart game.

    function win() {
    
        alert("You win!");
        winCounter ++;
        $("#winCounter").text(winCounter);
        restartGame();
    }
    
//Function for losing; send alert; add to loss counter, and restart game.

    function lose() {
    
        alert("You lose!");
        lossCounter ++;
        $("#lossCounter").text(lossCounter);
        restartGame();
    }

  //Click ons for crystals; add to current score, refer to win function if player wins//
  //refer to lose function if player loses.
    
    $('#cry1').on ('click', function(){
        counter = counter + cry1;
    
        $('#curScore').text(counter); 
              
            if (counter == targetNumber){
              win();
            }
            else if (counter > targetNumber){
              lose();
            }   
      });  
    
    $('#cry2').on ('click', function(){
        counter = counter + cry2;
        
        $('#curScore').text(counter); 
             
            if (counter == targetNumber){
              win();
            }
            else if (counter > targetNumber){
              lose();
            }   
      });  
    
    $('#cry3').on ('click', function(){
        counter = counter + cry3;
        
        $('#curScore').text(counter); 
              
            if (counter == targetNumber){
              win();
            }
            else if (counter > targetNumber){
              lose();
            }   
      });  
    
    $('#cry4').on ('click', function(){
        counter = counter + cry4;
        
        $('#curScore').text(counter); 
             
            if (counter == targetNumber){
              win();
            }
            else if (counter > targetNumber){
              lose();
            }   
      });  



