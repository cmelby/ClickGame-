import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Characters from "./Characters.json";
import CharacterCard from "./components/CharacterCard";
import Navbar from "./components/Navbar";
import './App.css';


class App extends Component {

state = {
  Characters
}
removeCharacter = id => {
  const Characters = this.state.Characters.filter(character => character.id !== id);
  this.setState({ Characters });
};


render() {
  return (
    <Wrapper>
      
      <Navbar>
      </Navbar>
   
    <Title>Don't Click The Same Character!</Title>
    {this.state.Characters.map(character => (
      <CharacterCard
      removeCharacter={this.removeFriend}
        id={character.id}
        key={character.id}
        image={character.image}

      />
    ))}
  </Wrapper>
  );
}

}
export default App;

