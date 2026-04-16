
window.onload = function () {
  document.getElementById("biggerButton").addEventListener("click", makeTextBigger);
  document.getElementById("mooButton").addEventListener("click", mooText);
};

function makeTextBigger(){
    let textInput = document.getElementById("textInput")
    textInput.style.fontSize = "24px"
}


function fancifyText(){
    alert("Button changed")

    let textArea = document.getElementById("textInput");
    let fancyRadio = document.getElementById("fancy");

    if (fancyRadio.checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "red";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function mooText() {
  let textArea = document.getElementById("textInput");
  let text = textArea.value.toUpperCase();

  let sentences = text.split(".");

  for (let i = 0; i < sentences.length - 1; i++) {
    let words = sentences[i].trim().split(" ");

    if (words.length > 0) {
      words[words.length - 1] += "-MOO";
      sentences[i] = words.join(" ");
    }
  }

  textArea.value = sentences.join(".");
}