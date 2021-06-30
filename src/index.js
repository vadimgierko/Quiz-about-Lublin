import {React, useState} from 'react';
import ReactDOM from 'react-dom';
import data from './Q&As';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function App(props) {
  const [qNum, setQnum] = useState(0);
  const [answer, setAnswer] = useState("Bystrzyca");
  const [correctAnum, setCorrectAnum] = useState(0);
  function handleChange(e) {
    console.log(e.target.value);
    let chosenAnswer = e.target.value;
    setAnswer(chosenAnswer);
  }
  function showQ() {
    
    let num = qNum;
    //check answer:
    let correctNum = correctAnum;
    answer === props.data[qNum].correct ? correctNum++ : (correctNum = correctAnum);
    setCorrectAnum(correctNum);
    console.log(correctAnum);

    num++;
    num <= (props.data.length - 1) ? setQnum(num) : alert("Koniec quizu");
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
          <Form.Label>{`${qNum + 1}. ${props.data[qNum].question}`}</Form.Label>
          <Form.Control
            style={{textAlign: "center"}}
            as="select"
            multiple
            onChange={handleChange}
            
          >
            {props.data[qNum].answers.map(option => (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            ))}
          </Form.Control>
          <Button onClick={showQ}>Kolejne pytanie</Button>
        </Form.Group>
      </Form>
      <footer>Designed and programmed by Vadim Gierko 2021</footer>
    </Container>
  ); 
}

ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);
