//This function saves the result of a click counter inside a variable of localstorage. It will remain even if you refresh site or close your window. You can reset the counter if you want.

window.onload(document.getElementById("countResult").innerHTML = localStorage.clickcount)

function clickCounter() {
    if(typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("countResult").innerHTML = localStorage.clickcount;
    } else {
      document.getElementById("countResult").innerHTML = "Error: your browser does not support web storage";
    }
  }

  function counterReset() {
    localStorage.clickcount = 0;
    document.getElementById("countResult").innerHTML = localStorage.clickcount;
  }