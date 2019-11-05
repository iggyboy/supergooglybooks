import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Jumbotron from "./components/Jumbotron"
import Nav from "./components/Navbar";
import { Input, FormBtn } from "./components/Form"
import { List, ListItem } from "./components/List"
class App extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  }
  render() {
    return (
      <div>
        <Nav></Nav>
        <Jumbotron></Jumbotron>
        <Input></Input>
        <FormBtn>Submit</FormBtn>
      </div>
    );
  }
}

export default App;
