window.addEventListener("load", function() {

  let form = document.querySelector("form");
  let resetBtn = document.getElementById("reset");
  let answer = document.getElementById("answer");

  form.addEventListener("submit", function(event) {

    const question = parseInt(document.querySelector("#input[name='question']:checked").value);
    const questionA = parseInt(document.querySelector("#input[name='questionA']:checked").value);
    const questionB = parseInt(document.querySelector("#input[name='questionB']:checked").value);
    const questionC = parseInt(document.querySelector("#input[name='questionC']:checked").value);
    const questionD = parseInt(document.querySelector("#input[name='questionD']:checked").value);

    let result = question + questionA + questionB + questionC + questionD

    if (result === 1) {
      document.getElementById("resultJavascript");
    } else if (result === 2) {
      document.getElementById("resultPython");
    } else if (result === 3) {
      document.getElementById("resultC");
    } else if (result === 4) {
      document.getElementById("resultRuby");
    } else if (result === 5) {
      document.getElementById("resultSwift");

    result.removeAttribute("class");
    event.preventDefault();
    };
  });

  form.addEventListener("submit", function() {
    resetBtn.removeAttribute("class");
  });

  resetBtn.addEventListener("reset", function() {
    answer.setAttribute("class", "hidden");
    document.getElementById("question1").value = null;
    document.getElementById("question2").value = null;
    document.getElementById("question3").value = null;
    document.getElementById("question4").value = null;
    document.getElementById("question5").value = null;
  });
});