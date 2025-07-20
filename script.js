let heading = document.querySelector("header");

let dice_1 = document.querySelectorAll(".dices")[0];
let dice_2 = document.querySelectorAll(".dices")[1];

let dice_1_ballsList = dice_1.querySelectorAll(".balls");
let dice_2_ballsList = dice_2.querySelectorAll(".balls");

function rollDice(ballsArray, value){
  if (value === 1) {
      for (let i = 0; i <= 5; i++) {
        ballsArray[i].classList.remove("balls");
      }
      ballsArray[6].style.backgroundColor = "white";
    } else if (value === 2) {
      for (let i = 0; i <= 5; i++) {
        if (i !== 2 && i !== 3) {
          ballsArray[i].classList.remove("balls");
        }
      }
    } else if (value === 3) {
      for (let i = 0; i <= 5; i++) {
        if (i !== 2 && i !== 3) {
          ballsArray[i].classList.remove("balls");
        }
      }
      ballsArray[6].style.backgroundColor = "white";
    } else if (value === 4) {
      for (let i = 0; i <= 5; i++) {
        if (i === 1 || i === 4) {
          ballsArray[i].classList.remove("balls");
        }
      }
    } else if (value === 5) {
      for (let i = 0; i <= 5; i++) {
        if (i === 1 || i === 4) {
          ballsArray[i].classList.remove("balls");
        }
      }
      ballsArray[6].style.backgroundColor = "white";
    }
}


// function resetDice(ballsArray) {
//   ballsArray.forEach((ball, i) => {
//     ball.classList.add("balls");
//     if (i === 6) {
//       ball.style.backgroundColor = "red"; // Reset center dot
//     }
//   });
// }



document.addEventListener("DOMContentLoaded", function () {
  if (sessionStorage.getItem("visited")) {
    let dice_1_value = Math.floor(Math.random() * 6) + 1;
    let dice_2_value = Math.floor(Math.random() * 6) + 1;


    // resetDice(dice_1_ballsList);
    // resetDice(dice_2_ballsList);

    rollDice(dice_1_ballsList, dice_1_value);
    rollDice(dice_2_ballsList, dice_2_value);



    if (dice_1_value > dice_2_value) {
      heading.textContent = "🚩 Player 1 Wins!";
    } else if (dice_1_value < dice_2_value) {
      heading.textContent = "🚩 Player 2 Wins!";
    } else {
      heading.textContent = "🤝 It's a Draw!";
    }


  } else {
    sessionStorage.setItem("visited", "true");
  }

});
