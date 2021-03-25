
function showOption2(){
    document.getElementById("option3").style.display="none";
    document.getElementById("option4").style.display="none";
  }
  
  function showOption3() {
    showOption2();
    document.getElementById("option3").style.display="block";
    document.getElementById("option4").style.display="none";
  }
  
  function showOption4() {
    showOption3();
    document.getElementById("option4").style.display="block";
  }
  
  var header = document.getElementById("dropdown-btn");
  var btns = header.getElementsByClassName("dropdown-item");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
    });
  }
  
  function empty() {
    var questionString = document.getElementById("question").value;
    var opt1 = document.getElementById("opt1").value;
    var opt2 = document.getElementById("opt2").value;
    var opt3 = document.getElementById("opt3").value;
    var opt4 = document.getElementById("opt4").value;
    let answerVal = document.getElementsByName('Answer');
    let Answer = 0;
    var correctAnswer;
    for (let i = 0; i < answerVal.length; i++) {
        if (answerVal[i].checked) {
            Answer = answerVal[i].value;
            break;
        }
    }

    if(Answer == "1"){
      correctAnswer = opt1
    } else if(Answer == "2"){
      correctAnswer = opt2
    } else if(Answer == "3"){
      correctAnswer = opt3
    } else {
      correctAnswer = opt4
    }

    if(questionString == ""){
      alert("Kindly Fill out  the questio");
      return false;
    }else if((opt1 == "")||(opt2 == "")){
      alert("Kindly Fill out all the Options!");
      return false;
    }else if(Answer==""){
      alert("Select an Answer")
      return false;
    }
    else{
      checkAgain(questionString, opt1, opt2, opt3, opt4, correctAnswer);
    }
    window.location.reload();
    window.location.href = "./admin.html";
  }
  
  function loadFormData(question, opt1, opt2, opt3, opt4, Answer) {
    console.log(` ${question}, ${opt1}, ${opt2}, ${opt3}, ${opt4},  ${Answer}`);
    var url = "https://rajinder-quizdb.herokuapp.com/question"

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", url, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify({"question": question, "opt1": opt1, "opt2": opt2,"opt3": opt3,"opt4": opt4, "correctAnswer": Answer}));
  }
  
  function checkAgain(questionString, opt1, opt2, opt3, opt4, Answer){
    var txt;
    var check = confirm("Are you sure you want to save this question???");
    if(check==false){
      txt=alert("Question Not Saved");
    }else{
      loadFormData(questionString, opt1, opt2, opt3, opt4, Answer);
    }
  }
  