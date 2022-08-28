window.addEventListener("load", function() {

  let form = document.querySelector("form");
  let resetBtn = document.getElementById("reset");
  let answer = document.getElementById("answer");

  form.addEventListener("submit", function(event) {

    const question1 = parseInt(document.querySelector("#input[name='question']:checked").value);
    const question2 = parseInt(document.querySelector("#input[name='questionA']:checked").value);
    const question3 = parseInt(document.querySelector("#input[name='questionB']:checked").value);
    const question4 = parseInt(document.querySelector("#input[name='questionC']:checked").value);
    const question5 = parseInt(document.querySelector("#input[name='questionD']:checked").value);

    let result = question1 + question2 + question3 + question4 + question5

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