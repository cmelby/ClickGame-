import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Characters from "./Characters.json";
import CharacterCard from "./components/CharacterCard";
import './App.css';


class App extends Component {

state = {
  Characters
}
removeCharacter = id => {
  // Filter this.state.friends for friends with an id not equal to the id being removed
  const Characters = this.state.Characters.filter(character => character.id !== id);
  // Set this.state.friends equal to the new friends array
  this.setState({ Characters });
};

render() {
  return (
    <Wrapper>
    <Title>Click A Character!</Title>
    {this.state.Characters.map(character => (
      <CharacterCard
      removeCharacter={this.removeFriend}
        id={character.id}
        key={character.id}
        name={character.name}
        image={character.image}
        occupation={character.occupation}
        location={character.location}
      />
    ))}
  </Wrapper>
  );
}

}
export default App;

