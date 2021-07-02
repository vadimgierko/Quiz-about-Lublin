const data = [
  {
      question: "Jaka rzeka płynie w Lublinie?",
      answers: ["Bystra", "Bystrzyca", "Wisła"],
      correct: "Bystrzyca",
  },
  {
      question: "Jakie jest oznaczenie tablic rejestracyjnych pojazdów zarejestrowanych w Lublinie?",
      answers: ["LU", "LUB", "LLU"],
      correct: "LU",
  },
  {
      question: "Kto jest aktualnym prezydentem Lublina",
      answers: ["Jarosław Pakuła", "Krzysztof Cugowski", "Krzysztof Żuk"],
      correct: "Krzysztof Żuk",
  },
  {
      question: "W którym roku Lublin uzyskał prawa miejskie?",
      answers: ["1317", "1217", "1417"],
      correct: "1317",
  },
  {
      question: "Jaką unię zawarto w Lublinie w 1569 roku?",
      answers: ["perejasławską", "lubelską", "europejską"],
      correct: "lubelską",
  },
  {
      question: "Którego z tych placów nie ma w Lublinie?",
      answers: ["Plac Bohaterów Monte Cassino", "Plac Po Farze", "Plac Litewski"],
      correct: "Plac Bohaterów Monte Cassino",
  },
  {
      question: "Którego z tych uniwersytetów nie ma w Lublinie?",
      answers: ["UMCS", "KUL", "LSM"],
      correct: "LSM",
  },
  {
      question: "Ilu mieszkańców obecnie (2021) ma Lublin?",
      answers: ["ok. 340 000", "ok. 250 000", "ok. 410 000"],
      correct: "ok. 340 000",
  },
  {
      question: "Lublin jest jednym z 3 miast w Polsce, w którym...",
      answers: ["...są wypożyczalnie rowerów miejskich", "...jeżdżą trolejbusy", "...jest zarówno KFC, jak i McDonalds"],
      correct: "...jeżdżą trolejbusy",
  },
  {
      question: "Której z tych instytucji nie ma w Lublinie?",
      answers: ["Centrum Kultury Lubelskiej", "Centrum Kultury", "Centrum Spotkania Kultur"],
      correct: "Centrum Kultury Lubelskiej",
  },
  {
      question: "Której z tych corocznych imprez nie ma w Lublinie?",
      answers: ["Noc Kultury", "Carnaval Sztukmistrzów", "Festiwal Lubelskich Pączków"],
      correct: "Festiwal Lubelskich Pączków",
  },
  {
      question: "Którego z tych zabytków nie ma w Lublinie?",
      answers: ["Pałac Prezydencki", "Kaplica św. Trójcy", "Wieża Trynitarska"],
      correct: "Pałac Prezydencki",
  }
];

function App(props) {
  const [qNum, setQnum] = React.useState(0);
  const [answer, setAnswer] = React.useState("Bystrzyca");
  const [correctAnum, setCorrectAnum] = React.useState(0);
  const [answers, setAnswers] = React.useState(props.data[qNum].answers);
  const [endOfQuiz, setEndOfQuiz] = React.useState(false);

  function handleChange(e) {
    console.log(e.target.value);
    let chosenAnswer = e.target.value;
    setAnswer(chosenAnswer);
  }

  /*
  let randomNum = Math.floor(Math.random()*answers.length);
    console.log("randomNum = " + randomNum)
    let randomizedAnswers = [];
    if (randomNum === 0) {
      randomizedAnswers.push(answers[0], answers[1], answers[2]);
    } else if (randomNum === 1) {
      randomizedAnswers.push(answers[1], answers[2], answers[0]);
    } else {
      randomizedAnswers.push(answers[2], answers[0], answers[1]);
    }
    setAnswers(randomizedAnswers);
    console.log(answers);
    console.log(randomizedAnswers)
  */

  function showQ(e) {
    e.preventDefault();
    let num = qNum;

    answer === props.data[qNum].correct ? setCorrectAnum(correctAnum + 1) : setCorrectAnum(correctAnum);;

    num++;
    num <= (props.data.length - 1) ? setQnum(num) : setEndOfQuiz(true);
    num <= (props.data.length - 1) ? setAnswers(props.data[num].answers) : setAnswers(answers);
    setAnswer("");
  }

  return (
    <div className="container-sm" style={{textAlign: "center"}}>
      <div class="jumbotron">
        <h1>Quiz o Lublinie</h1>
        <h3 className="text-muted">Sprawdź swoją wiedzę na temat Lublina!</h3>
        <p>
          Możesz najpierw przeczytać
          <a target="_blank" rel="noreferrer" href="https://pl.wikipedia.org/wiki/Lublin"> artykuł o Lublinie na Wikipedii</a>, 
          z którego zaczerpnąłem pytania.
          Albo... od razu przejdź do rozwiązywania quizu poniżej!</p>
        <button
          className="btn btn-outline-primary">Zacznij quiz!</button>
      </div>
      {endOfQuiz ? null : (
        <form>
          <div className="form-group">
            <label
              className="form-label"
              htmlFor={`question${qNum}`}
            >
              <h3>{`${qNum + 1}/${props.data.length}. ${props.data[qNum].question}`}</h3>
            </label>
            <select
              className="form-control"
              style={{textAlign: "center", cursor: "pointer"}}
              id={`question${qNum}`}
              value={answer}
              multiple
              onChange={handleChange}
            >
              {answers.map((option, i) => (
                <option
                  key={`question${qNum}.option${i}`}
                  value={option}
                >
                  {option}
                </option>
              ))}
            </select>
            <br></br>
            <button className="btn btn-primary" onClick={showQ}>Kolejne pytanie</button>
          </div>
        </form>
      )}
      <div className={endOfQuiz ? "alert alert-danger" : "alert alert-success"}>
        {endOfQuiz ? `Koniec quizu! Twój wynik to: ${correctAnum}/${props.data.length}!` : `Na razie udzieliłeś/aś ${correctAnum} poprawnych odpowiedzi na ${qNum}!`}
      </div>
      <footer>Designed and programmed by Vadim Gierko 2021</footer>
    </div>
  ); 
}

ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);
