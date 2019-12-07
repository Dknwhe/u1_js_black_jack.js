window.addEventListener('load', function() {
    init();
  });

/**
 * @param {object} [chest1] - contain img
 * @param {object} [chest2] - contain img
 * @param {object} [chest3] - contain img
 * @param {number} [score] - count score
 * @param {string} [image] - holds photo from pexel 
 */
  var chest1 = document.createElement("img");
  var chest2 = document.createElement("img");
  var chest3 = document.createElement("img");
  var score = 0; 
  var image = "";

/*
* Function that initiates the whole Game application.
*/

function init(){
    initGameUI();

  }
  
  
  
  function initGameUI(){
    // Call functions that creates the Game UI
    initChests();
    initScoreBoard();
    initRefreshButton();
    initChestEventListeners();
    getImageFromPexels();
  }
  
  /**
   * @description Putting 3 image inside div(img)
   * @param {object} [function] -initChests() - visible chest 
   */
  function initChests(){
    chest1.setAttribute("src", "images/chest-closed.png");
    chest2.setAttribute("src", "images/chest-closed.png");
    chest3.setAttribute("src", "images/chest-closed.png");
    
    document.getElementById("chests").appendChild(chest1);
    document.getElementById("chests").appendChild(chest2);
    document.getElementById("chests").appendChild(chest3);
    chest1.style.margin = "10px";
    chest3.style.margin = "10px";
  }
  /**
   * @description Creating a Element tag h2, and giving a text that counting the score.
   * @param {object} [function] - initScoreBoard(); - visible text score.  
   */

  function initScoreBoard(){
    var board = document.getElementById("game-wrapper");
    var header = document.createElement("h2");
    header.getElementsByTagName("h2");
    let para = document.createElement("p");
    para.setAttribute("id", "score");
    para.textContent = "Score: " + score;
    para.setAttribute("style", ("text-align: center; color: #f4f4f4;"));
    board.appendChild(header);
    header.appendChild(para);

  }

  /**
   * @description Adds a eventListerner to make the "Try Again! button refresh.
   * @param {object} [function] - initRefreshButton(); - Refresh chest, after pick.
   */
  function initRefreshButton(){
    var btn = document.getElementById("refresh-button");
    btn.addEventListener("click", refresh);
  }
  
/**
 * @description Adds eventlisterners on the chests.
 * @param {object} [function] initChestEventListerners(); - Click on chest
 */

  function initChestEventListeners() {
    chest1.addEventListener("click", function(){
    chestClicked(1); 
  });
    chest2.addEventListener("click", function(){
    chestClicked(2);   
   });
    chest3.addEventListener("click", function(){
    chestClicked(3); 
   });
  }

// function placeTreassure(){

// }

  
  
  function chestClicked(e){
    console.log(e);
    var random = Math.floor(Math.random()*3+1);
    var chest = document.getElementById("score");
    if (e == 1){
      if (random == 3){
        chest1.setAttribute("src", image);
        score += 5;
        chest.innerText = "Score: " + score;
       
      }else{
      chest1.setAttribute("src", "images/chest-open.png" );
      chest.innerText = "Score: " + score;
      }
  
    }else if (e == 2){
      if (random == 3){
        
        chest2.setAttribute("src", image);
        score += 5;
        chest.innerText = "Score:" +score;
        

      }else{
      chest2.setAttribute("src", "images/chest-open.png" );
      chest.innerText = "Score: " + score;

      }
  
    }else if (e == 3){
      if (random == 3){
        chest3.setAttribute("src", image);
        score += 5;
        chest.innerText = "Score: " +score;  
        
      }else{
      chest3.setAttribute("src", "images/chest-open.png");
      chest.innerText = "Score: " + score;

      }
  
    }
    removeChestEvents();
  }
  
    function removeChestEvents(){
    chest1.removeEventListener("click", function(){
      chestClicked(1);
    });
    chest2.removeEventListener("click",  function(){
      chestClicked(2);
    }); 
    chest3.removeEventListener("click",  function(){
      chestClicked(3);
    });
    console.log("stop");
    
  }

  /**
   * @description A random photo fom Pexel 
   * @param {object} [function] - getImageFromPexels(); - Acces from a website.
   */
  
  function getImageFromPexels(){
  // make a request towards pexels API and get 1 Diamond image
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.pexels.com/v1/search?query=treasure+query&curated?per_page=12&page=1', true);
    xhr.setRequestHeader('Authorization', '563492ad6f91700001000001c5238c09a6ef4bd3ad842d52f61bf053');
    xhr.addEventListener('load', function(){
      if (this.readyState == 4 && this.status == "200") {
         var imgObj = JSON.parse(this.responseText);
         image =  imgObj.photos[Math.floor(Math.random() *3+1)].src.small; 
      
      }
    });
    xhr.send();
  }
  
  /**
   * @description Reset the game, score will not be reset.
   * @param {object} [function] - refresh(); - All chests will close.
   */
  function refresh(){
    chest1.setAttribute("src", "images/chest-closed.png");
    chest2.setAttribute("src", "images/chest-closed.png");
    chest3.setAttribute("src", "images/chest-closed.png");
    initChestEventListeners()
  }
  
  
  
  // function removeChestEvents(){
  //   chest1.removeEventListener("click", chestClicked);
  //   chest2.removeEventListener("click", chestClicked);
  //   chest3.removeEventListener("click", chestClicked);
  // }
