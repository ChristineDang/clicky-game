import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import Img from './components/cards/cards.js';
import Wrapper from './wrapper'
import './App.css';
import cards from "./cards.json";


class App extends Component {

  state = {
    cards,
    score: 0,
    topscore: 0
  };


  clickCount = id => {
    //this is the area where we're going to count when a card has been clicked on
    //if card has been clicked on before, the second click ends the game, else add a count/point to user's score
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.endGame();
        }
      }
    });
  }
  
  endGame = () => {
    if (this.state.score > this.state.topscore) {
      this.setState({topscore: this.state.score}, function() {
        console.log(this.state.topscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  render () {
    return (
      <><Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="#home">Once Upon A Clicky Game</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron fluid>
        <Container>
          <h1>Once Upon A Time</h1>
          <p id="score">Score: </p>
          <p id="topscore">High Score: </p>
        </Container>
      </Jumbotron>
      <Container>
        <Wrapper>
          {this.state.cards.map(card => (
          <Img
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
            />
        ))}
        </Wrapper>
      </Container>
     </>
    );
  }
}



export default App;
