const quizData = [
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
  {
    question:
      " Which of the following is true about variable naming conventions in JavaScript?",
    a: "JavaScript variable names must begin with a letter or the underscore character",
    b: "JavaScript variable names are case sensitive",
    c: "Both of the above",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      " Which built-in method returns the string representation of the number's value?",
    a: "toValue()",
    b: "toNumber()",
    c: "toString()",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Which of the following function of Array object joins all elements of an array into a string?",
    a: "concat()",
    b: "join()",
    c: "pop()",
    d: "map()",
    correct: "b",
  },
];
let index = 0;
let correct = 0,
  incorrect = 0,
  total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");
const loadQuestion = () => {
  if (total === index) {
    return quizEnd();
  }
  reset();
  const data = quizData[index];
  questionBox.innerHTML = `${index + 1}) ${data.question}`;
  allInputs[0].nextElementSibling.innerText = data.a;
  allInputs[1].nextElementSibling.innerText = data.b;
  allInputs[2].nextElementSibling.innerText = data.c;
  allInputs[3].nextElementSibling.innerText = data.d;
};

document.querySelector("#submit").addEventListener("click", function () {
  const data = quizData[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    correct++;
  } else {
    incorrect++;
  }
  index++;
  loadQuestion();
});

const getAnswer = () => {
  let ans;
  allInputs.forEach((inputEl) => {
    if (inputEl.checked) {
      ans = inputEl.value;
    }
  });
  return ans;
};

const reset = () => {
  allInputs.forEach((inputEl) => {
    inputEl.checked = false;
  });
};

const quizEnd = () => {
  // console.log(document.getElementsByClassName("container"));
  document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`;
};
loadQuestion(index);
