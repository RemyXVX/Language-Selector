window.addEventListener("load", function() {

  const form = document.querySelector("form");
  let resetBtn = document.querySelector("reset");
  let answer = document.querySelector("answer");

  form.addEventListener("submit", function(event) {
    const question1 = document.getElementById("question1").value;
    const question2 = document.getElementById("question2").value;
    const question3 = document.getElementById("question3").value;
    const question4 = document.getElementById("question4").value;
    const question5 = document.getElementById("question5").value;

    document.querySelector("")
  });

  /*form.addEventListener("reset")*/

  resetBtn.addEventListener("click", function() {
    answer.setAttribute("class", "hidden");
    document.getElementById("question1").value = null;
    document.getElementById("question2").value = null;
    document.getElementById("question3").value = null;
    document.getElementById("question4").value = null;
    document.getElementById("question5").value = null;
  });
});