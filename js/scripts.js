window.addEventListener("load", function() {

  const form = document.querySelector("form");
  let resetBtn = document.getElementById("reset");
  let answer = document.getElementById("answers");
  let submit = document.getElementById("submit1")

  form.addEventListener("submit", function(event) {
    answer.removeAttribute("class");
    event.preventDefault();

    const questionA = parseInt(document.querySelector("input[name='questionA']:checked").value);
    console.log(questionA);
    const questionB = parseInt(document.querySelector("input[name='questionB']:checked").value);
    console.log(questionB);
    const questionC = parseInt(document.querySelector("input[name='questionC']:checked").value);
    console.log(questionC);
    const questionD = parseInt(document.querySelector("input[name='questionD']:checked").value);
    console.log(questionD);
    const questionE = parseInt(document.querySelector("input[name='questionE']:checked").value);
    console.log(questionE);

    let result = questionA + questionB + questionC + questionD + questionE

    if (result = 1) {
      document.getElementById("resultJavascript").removeAttribute("class");
    } else if (result = 2) {
      document.getElementById("resultPython").removeAttribute("class");
    } else if (result = 3) {
      document.getElementById("resultC").removeAttribute("class");
    } else if (result = 4) {
      document.getElementById("resultRuby").removeAttribute("class");
    } else if (result = 5) {
      document.getElementById("resultSwift").removeAttribute("class");
    } else if (result = 0) {
      document.getElementById("resultNone").removeAttribute("class");
    };
  });

  form.addEventListener("submit", function() {
    resetBtn.removeAttribute("class");
  });

  resetBtn.addEventListener("click", function() {
    answer.setAttribute("class", "hidden");
    document.getElementById("questionA").value = null;
    document.getElementById("questionB").value = null;
    document.getElementById("questionC").value = null;
    document.getElementById("questionD").value = null;
    document.getElementById("questionE").value = null;
  });
});