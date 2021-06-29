import React from 'react';
import ReactDOM from 'react-dom';
import { data } from './Q&As';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


class App extends React.Component {
  render() {
    return (
      <Container
        style={{textAlign: "center"}}
      >
        <Jumbotron>
          <h1>Quiz o Lublinie</h1>
          <h3>Sprawdź swoją wiedzę na temat Lublina!</h3>
          <p>
            Możesz najpierw przeczytać
            <a target="_blank" rel="noreferrer" href="https://pl.wikipedia.org/wiki/Lublin"> artykuł o Lublinie na Wikipedii</a>, 
            z którego zaczerpnąłem pytania.
            Albo... od razu przejdź do rozwiązywania quizu poniżej!</p>
          <Button variant="primary">Zacznij quiz!</Button>
        </Jumbotron>
        <Form>
          <Form.Group>
            <Form.Label>Przykładowe pytanie</Form.Label>
            <Form.Control style={{textAlign: "center"}} as="select" multiple>
              <option>Przykładowa odpowiedź 1</option>
              <option>Przykładowa odpowiedź 2</option>
              <option>Przykładowa odpowiedź 3</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <footer>Designed and programmed by Vadim Gierko 2021</footer>
      </Container>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);
