import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: "1",
          name: "Create React App",
          complete: true
        },
        {
          id: "2",
          name: "Learn React",
          complete: false
        },
        {
          id: "3",
          name: "Learn Git",
          complete: false
        }
      ]
    };
    // this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass = (i) => {
    this.setState((prevState) => {
      return !prevState.items[i].complete;
    });
  };

  render() {
    return (
      <ul>
        {this.state.items.map((arrItem, i) =>
          arrItem.complete ? (
            <li
              key={arrItem.id}
              className="checked"
              onClick={() => this.toggleClass(i)}
            >
              {arrItem.name}
            </li>
          ) : (
            <li key={arrItem.id} onClick={() => this.toggleClass(i)}>
              {arrItem.name}
            </li>
          )
        )}
      </ul>
    );
  }
}

export default Item;