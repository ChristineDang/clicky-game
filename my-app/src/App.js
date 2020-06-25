import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Jumbotron, Container } from 'react-bootstrap';
import Img from './components/cards/cards.js';
import Wrapper from './wrapper'
import './App.css';
import cards from "./cards.json";
import ReactAudioPlayer from 'react-audio-player';
import Audio from './components/OUAT.mp3';


class App extends Component {

  state = {
    cards,
    score: 0,
    topscore: 0,
  };


  clickCount = id => {
    //this is the area where we're going to count when a card has been clicked on
    //if card has been clicked on before, the second click ends the game, else add a count/point to user's score
    this.state.cards.find((x, i) => {
      if (x.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1});
          this.state.cards.sort(() => Math.random() - .25)
          return true; 
        } else {
          this.endGame();
        }
      }
    });
  }
  
  endGame = () => {
    //this will hold the code that sets the top score if the current ending score is higher than the top score
    if (this.state.score > this.state.topscore) {
      this.setState({topscore: this.state.score});
    }
    //this will hold the code that resets the cards back to zero
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over, Try Again! \nscore: ${this.state.score} \nHigh score: ${this.state.topscore}`);
    this.setState({score: 0});
    return true;
  }

  render () {
    return (
      <><Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="index.html">Reset Scores</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron fluid className="jumbotron">
        <Container>
          <h1>Once Upon A Clicky Game</h1>
          <h2>Featuring Once Upon A Time</h2>
          <p id="score">Score: {this.state.score}</p>
          <p id="topscore">High Score: {this.state.topscore}</p>

          <ReactAudioPlayer
            src= {Audio}
            autoPlay
            controls
            loop
            volume= {0.17}
          />

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
