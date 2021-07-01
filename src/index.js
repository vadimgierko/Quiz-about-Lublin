import {React, useState} from 'react';
import ReactDOM from 'react-dom';
import data from './Q&As';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Jumbotron, Form, Button, Alert} from "react-bootstrap";

function App(props) {
  const [qNum, setQnum] = useState(0);
  const [answer, setAnswer] = useState("Bystrzyca");
  const [correctAnum, setCorrectAnum] = useState(0);
  const [answers, setAnswers] = useState(props.data[qNum].answers);

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

  function showQ() {
    
    let num = qNum;

    //check answer:
    let correctNum = correctAnum;
    answer === props.data[qNum].correct ? correctNum++ : (correctNum = correctAnum);
    setCorrectAnum(correctNum);
    console.log(correctAnum);

    num++;
    num <= (props.data.length - 1) ? setQnum(num) : alert(`Koniec quizu! Twój wynik to ${correctAnum}/${props.data.length}`);
    console.log("num = " + num);
    setAnswers(props.data[num].answers);
    console.log(answers);
    
    setAnswer("");
  }

  return (
    <Container
      style={{textAlign: "center"}}
      fluid
    >
      <Jumbotron>
        <h1>Quiz o Lublinie</h1>
        <h3>Sprawdź swoją wiedzę na temat Lublina!</h3>
        <p>
          Możesz najpierw przeczytać
          <a target="_blank" rel="noreferrer" href="https://pl.wikipedia.org/wiki/Lublin"> artykuł o Lublinie na Wikipedii</a>, 
          z którego zaczerpnąłem pytania.
          Albo... od razu przejdź do rozwiązywania quizu poniżej!</p>
        <Button variant="outline-primary">Zacznij quiz!</Button>
      </Jumbotron>
      <Form>
        <Form.Group controlId={"question" + qNum}>
          <Form.Label>
            <h3>{`${qNum + 1}/${props.data.length}. ${props.data[qNum].question}`}</h3>
          </Form.Label>
          <Form.Control
            style={{textAlign: "center"}}
            as="select"
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
          </Form.Control>
          <Button onClick={showQ}>Kolejne pytanie</Button>
        </Form.Group>
      </Form>
      <Alert variant="primary">
        Na razie udzieliłeś/aś {correctAnum} poprawnych odpowiedzi na {qNum}!
      </Alert>
      <footer>Designed and programmed by Vadim Gierko 2021</footer>
    </Container>
  ); 
}

ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);