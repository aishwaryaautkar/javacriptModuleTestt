
let USER_SCORE = 0;
let COMP_SCORE = 0;
const pickUserHand = (hand) => {
    console.log("user:",hand);

    let hands = document.querySelector(".triangle");
    hands.style.display = "none";

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    let choosed = document.querySelector(".handImgContainer");
    if(hand == "paper"){
        document.getElementById("userPickedImg").src ="img/paper.png"
        choosed.style.borderColor = "#FFA943";
    }
    else if (hand == "stone") {
        document.getElementById("userPickedImg").src ="img/stone.png"
        choosed.style.borderColor = "#0074B6";
    }
    
    else{
        document.getElementById("userPickedImg").src ="img/scissor.png"
        choosed.style.borderColor = "#BD00FF";
    }

    pickCompHand(hand);

    
};


const pickCompHand=(hand)=>{
    let hands = ["stone", "paper", "scissor"]
    let cpHand = hands[Math.floor(Math.random() * hands.length)];

    console.log("pc:", cpHand);
    let choosed = document.querySelector(".handImgContainer2");
    if(cpHand == "paper"){
        document.getElementById("compPickedImg").src ="img/paper.png"
        choosed.style.borderColor = "#FFA943";
    }
    else if (cpHand == "stone") {
        document.getElementById("compPickedImg").src ="img/stone.png"
        choosed.style.borderColor = "#0074B6";
    }
    
    else{
        document.getElementById("compPickedImg").src ="img/scissor.png"
        choosed.style.borderColor = "#BD00FF";
    }

    results(hand, cpHand);

    
  };
    


const results = (userHand, cpHand)=>{
  let choosed1 = document.querySelector(".handImgContainer2");
  let choosed2 = document.querySelector(".handImgContainer1");
  let user_win = true;
  let tie = false;
  let nxtbtn = document.querySelector(".next-btn");
  let rulesbtn = document.querySelector(".rules-btn");
    if (userHand == "paper" && cpHand == "scissor") {
        setDecision("YOU LOSE!");
        setScore(USER_SCORE, COMP_SCORE + 1);
        user_win = false;
        
      }
      else if (userHand == "paper" && cpHand == "stone") {
        setDecision("YOU WIN!");
        setScore(USER_SCORE + 1, COMP_SCORE);

      }
      else if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
        tie = true;
      }
      else if (userHand == "stone" && cpHand == "scissor") {
        setDecision("YOU WIN!");
        setScore(USER_SCORE + 1, COMP_SCORE);
      }
      else if (userHand == "stone" && cpHand == "paper") {
        setDecision("YOU LOSE!");
        setScore(USER_SCORE, COMP_SCORE + 1);
        user_win = false;
      }
      else if (userHand == "stone" && cpHand == "stone") {
        setDecision("It's a tie!");
        tie = true;
      }
      else if (userHand == "scissor" && cpHand == "scissor") {
        setDecision("It's a tie!");
        tie = true;
      }
      else if (userHand == "scissor" && cpHand == "stone") {
        setDecision("YOU LOSE!");
        setScore(USER_SCORE, COMP_SCORE + 1);
        user_win = false;
      }
      else if (userHand == "scissor" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(USER_SCORE + 1, COMP_SCORE);
      }

      if (user_win == false) {
        choosed1.classList.add("animate-ripple");
      } 
      else {
        choosed1.classList.remove("animate-ripple");
      }

    if (user_win == true) {
      choosed2.classList.add("animate-ripple");
      rulesbtn.style.right = "120px";
      nxtbtn.style.display = "flex"; 
    } 
    else {
      choosed2.classList.remove("animate-ripple");
    }

    if (tie == true){
      choosed1.classList.remove("animate-ripple");
      choosed2.classList.remove("animate-ripple");
      rulesbtn.style.right = "53px";
      nxtbtn.style.display = "none"; 
    };
    

    
    
  }
    

   
    

const setDecision = (decision) => {
    document.querySelector(".dispDecision").innerText = decision;
    
}


const setScore = (newScore, newSc) => {
    USER_SCORE = newScore;
    
    document.querySelector(".your_score").innerHTML = newScore;
    
    localStorage.setItem("userscore", newScore);
    COMP_SCORE = newSc;
    document.querySelector(".comp_score").innerHTML = newSc; // Use innerText instead of innerHTML
    
    localStorage.setItem("compscore", newSc);

}


window.onload = function () {
    restart();
    USER_SCORE = parseInt(localStorage.getItem("userscore")) || 0;
    // Update the score display
    document.querySelector(".your_score").innerHTML = USER_SCORE;

    COMP_SCORE = parseInt(localStorage.getItem("compscore")) || 0;
    // Update the score display
    document.querySelector(".comp_score").innerHTML = COMP_SCORE;
  };

const restart = () =>{
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
      
    let hands = document.querySelector(".triangle");
    hands.style.display = "flex";
        
    let sc = localStorage.getItem("userscore");
    document.querySelector(".your_score").innerHTML = sc;

    let sc_pc = localStorage.getItem("compscore");
    document.querySelector(".comp_score").innerHTML = sc_pc;

    let nxtbtn = document.querySelector(".next-btn");
    let rulesbtn = document.querySelector(".rules-btn");
    rulesbtn.style.right = "53px";
    nxtbtn.style.display = "none";

    }
      

const closeRules=()=>{
    let rules = document.querySelector(".rules");
    rules.style.display ="none";

    let cross = document.querySelector(".cross-btn");
    cross.style.display="none";

}



const displayRules = ()=>{
    let rules = document.querySelector(".rules");
    rules.style.display = "";

    let cross = document.querySelector(".cross-btn");
    cross.style.display="flex";
}
const displayRuleswin = ()=>{
  let rules = document.querySelector(".rules-win");
  rules.style.display = "flex";

  let cross = document.querySelector(".cross-btn-win");
  cross.style.display="flex";


}


const closeRuleswin=()=>{
  let rules = document.querySelector(".rules-win");
  rules.style.display ="none";

  let cross = document.querySelector(".cross-btn-win");
  cross.style.display="none";

}
