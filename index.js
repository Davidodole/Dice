// DOM manipulation 
const button = document.querySelector(".roll")
const dice1 = document.querySelector("#dice1");
const dice2 = document.querySelector("#dice2")
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");
const image6 = document.getElementById("image6");
const result = document.getElementById("results");
const message = document.getElementById("message");
const wrap = document.getElementById("dice-wrap");

// declearing a dice image variables

const dice = {
      1: image1.src,
      2: image2.src,
      3: image3.src,
      4: image4.src,
      5: image5.src,
      6: image6.src
}


      //adding eventlistener to the button
button.addEventListener("click", rollDice);

//creating rollDice function  

function rollDice() {
      
   const num1 = Math.floor(Math.random() * 6) + 1;
   const num2 = Math.floor(Math.random() * 6) + 1;
   
   const imgRoll1 = dice[num1];
   
   const imgRoll2 = dice[num2]
   
   
      
      dice1.classList.add("active");
      dice2.classList.add("active");
      
     const diceShow = setInterval(()=>{
      
  
      
      wrap.style.display = "none";
      
      result.classList.toggle = "active";
      
      result.innerHTML = `
            <div id="display">
            <img src=${imgRoll1} alt="">
            
            <h3>Dice:  ${num1}</h3>
            </div>
            
            <div id="display">
            <img src=${imgRoll2} alt="">
            
            <h3>Dice:  ${num2}</h3>
            </div>
      `;
            setTimeout(()=>{
              result.innerHTML= "";
              wrap.style.display = "block"
              dice1.classList.remove("active");
              dice2.classList.remove("active");
            },1000)
           clearInterval(diceShow);
      
      }, 1000);
      
      if(num1 > num2) {
      message.textContent = `Dice 1 Won the Game ${num1}`
      }
      else if(num2 > num1){
            message.textContent = `Dice 2 Won the Game ${num2}`
      }else{
            message.textContent = `No winner`
      }

};

// digital Timing 

// setting interval 
setInterval(myTimer, 1000)

// function for timing

function myTimer() {

const current = new Date();
     //DOM manipulation 
      document.querySelector("span").textContent = current.toLocaleTimeString();
}
