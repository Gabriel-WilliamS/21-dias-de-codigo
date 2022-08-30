const questions = [
  {
    title: "____ Portuguese,and you?",
    alternatives: ["Welcome to", "I speak", "I have", "I am from"],
    correct: 1
  },
  {
    title: "O que está errado na frase a seguir? 'He were doing the exercise'",
    alternatives: ["The", "He", "Were", "doing"],
    correct: 2
  },
  {
    title: "Qual das frases está INCORRETA?",
    alternatives: [
      "You mustn't overpass this line",
      "I have a score troat",
      "He was doing the exercises",
      "Told is the past of Tell"
    ],
    correct: 1
  }
];

const app = {
  start: function () {
    this.questionCurrent = 0;
    this.totalPoints = 0;
    const alts = document.querySelectorAll(".alternative");

    alts.forEach((element, index) => {
      element.addEventListener("click", () => {
        this.checkAnswer(index);
      });
    });
    app.updatePoints();
    this.showQuestion(questions[this.questionCurrent]);
  },

  showQuestion: function (question) {
    this.question = question;
    const title = document.getElementById("question");
    title.textContent = question.title;

    const alts = document.querySelectorAll(".alternative");
    alts.forEach(function (element, index) {
      element.textContent = question.alternatives[index];
    });
  },

  nextQuestion: function () {
    this.questionCurrent++;
    if (this.questionCurrent == questions.length) {
      this.questionCurrent = 0;
    }
  },

  checkAnswer: function (user) {
    if (this.question.correct == user) {
      console.log("Correta");
      this.totalPoints++;
      this.showAnswer(true);
    } else {
      console.log("Errada");
      this.showAnswer(false);
    }
    this.updatePoints();
    this.nextQuestion();
    this.showQuestion(questions[this.questionCurrent]);
  },

  updatePoints: function () {
    const pointsDiv = document.querySelector("#points");

    pointsDiv.textContent = `Sua pontuação é : ${this.totalPoints}`;
  },

  showAnswer: function (correctQuestion) {
    const resultDiv = document.querySelector("#result");
    let result = "";
    if (correctQuestion == true) {
      result = "Responsta Correta";
    } else {
      let question = questions[this.questionCurrent];
      let correctIndex = question.correct;
      let answerText = question.alternatives[correctIndex];

      result = `Incorreto! A resposta correta é : ${answerText}`;
    }

    resultDiv.textContent = result;
  }
};

app.start();
