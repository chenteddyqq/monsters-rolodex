import React from "react";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => {
        return resp.json();
      })
      .then(users => {
        this.setState({
          monsters: users
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filterdMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filterdMonster} />
      </div>
    );
  }
}

export default App;
