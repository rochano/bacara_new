function popup_refill() {
    var x = document.getElementById("popup_refill");
    var bgBlack = document.getElementById("bg_popup");
    if (x.style.display === "none", bgBlack.style.display === "none") {
        x.style.display = "block";
        bgBlack.style.display = "block"
    } else {
        x.style.display = "none";
        bgBlack.style.display = "none";
    }
}

function popup_refill_close() {
    var x = document.getElementById("popup_refill");
    var bgBlack = document.getElementById("bg_popup");
    {
        x.style.display = "none";
        bgBlack.style.display = "none";
    }
}

function refill_click() {
    var x = document.getElementById("refill_block");
    {
        x.style.display = "block";
    }
}

function refillConfirm_click() {
    var x = document.getElementById("refill_alert");
    var xx = document.getElementById("refill_alertBG");
    var xxx = document.getElementById("btAlertClose");
    {
        x.style.display = "block";
        xx.style.display = "block";
        xxx.style.display = "block";
    }
}

function refillCancel_click() {
    var x = document.getElementById("refill_block");
    {
        x.style.display = "none";
    }
}

function btAlertClose_click() {
    var x = document.getElementById("refill_alert");
    var xx = document.getElementById("refill_alertBG");
    var xxx = document.getElementById("btAlertClose");
    {
        x.style.display = "none";
        xx.style.display = "none";
        xxx.style.display = "none";
    }
}

function test_resultProcess() {
    var x = document.getElementById("main_body_col1_process");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function test_resultPlayer() {
    var x = document.getElementById("main_body_col1_player");
    //x.classList.add("playerActive");
  } function test_resultPlayerOff() {
      var x = document.getElementById("main_body_col1_player");
      //x.classList.remove("playerActive");
    }

function test_resultTie() {
    var x = document.getElementById("main_body_col1_tie");
    x.classList.add("tieActive");
  } function test_resultTieOff() {
      var x = document.getElementById("main_body_col1_tie");
      x.classList.remove("tieActive");
    }

function test_resultBanker() {
    var x = document.getElementById("main_body_col1_banker");
    //x.classList.add("bankerActive");
  } function test_resultBankerOff() {
      var x = document.getElementById("main_body_col1_banker");
      //x.classList.remove("bankerActive");
    }

  function myAudioFunction(letter) {
    var player = new Audio('/assets/click.mp3');
    var tie = new Audio('/assets/click.mp3');
    var banker = new Audio('/assets/click.mp3');
      if(letter == 'p') {
          player.play();
      } else if(letter == 't') {
          tie.play();
      }	else if(letter == 'b') {
          banker.play();
      }
  }

  function tableClear_click() {
    var x = document.getElementById("table_chips_player");
    var xx = document.getElementById("table_chips_tie");
    var xxx = document.getElementById("table_chips_banker");
      x.style.display = "none";
      xx.style.display = "none";
      xxx.style.display = "none";
    }

function alertBackspace() {
    var x = document.getElementById("alertBackspace");
    var xx = document.getElementById("alertClear");
    {
      x.style.display = "block";
      xx.style.display = "none";
    }
}
function alertClear() {
    var x = document.getElementById("alertBackspace");
    var xx = document.getElementById("alertClear");
    {
      x.style.display = "none";
      xx.style.display = "block";
    }
}

function randomNumber(result) {
  var result = Math.floor(Math.random()* 100);
  console.log(result);

  // 45% - 55%
  if (result > 45 && result < 55) {
    $(".resultChipPanel").css("background", "url(/bacara/assets/images/bg_chip_panel_tie.png)");
    $(".resultChipPanel span").text("TIE");
  // <= 45%
  } else if (result <= 45){
    $(".resultChipPanel").css("background", "url(/bacara/assets/images/bg_chip_panel_banker.png)");
    $(".resultChipPanel span").text("BANKER");
  // >= 55%
  } else if (result >= 55){
    $(".resultChipPanel").css("background", "url(/bacara/assets/images/bg_chip_panel_player.png)");
    $(".resultChipPanel span").text("PLAYER");
  }
  return result;
}

async function rotateChips() {
  if(choose.length> 1){
    credit = document.getElementById("credit");
    if (parseInt(credit.value) > 0) {
      x = document.getElementById("result_player");
      y = document.getElementById("result_banker");
      z = document.getElementById("lds-spinner-template");
      x.innerHTML= z.innerHTML;
      y.innerHTML= z.innerHTML;
    }
  }
}