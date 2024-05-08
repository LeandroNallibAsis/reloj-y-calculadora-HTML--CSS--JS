function appendToScreen(value) {
    document.getElementById("screen").value += value;
  }
  
  function clearScreen() {
    document.getElementById("screen").value = "";
  }
  
  function calculate() {
    try {
      var result = eval(document.getElementById("screen").value);
      document.getElementById("screen").value = result;
    } catch (error) {
      document.getElementById("screen").value = "Error";
    }
  }
  
  function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;
  }
  
  setInterval(updateTime, 1000);
  