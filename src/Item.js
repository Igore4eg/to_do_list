import React, { Component } from "react";
import "./Item.css";

const items = [
  {
    id: "1",
    name: "Learn React",
    complete: false
  },
  {
    id: "2",
    name: "Create React App",
    complete: false
  },
  {
    id: "3",
    name: "Learn Git",
    complete: false
  }
];

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { items };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass(id) {
    const updatedItems = this.state.items.map((item) => {
      if (id === item.id) {
        item.complete = !item.complete;
      }
    });
    this.setState({ updatedItems });
  }

  render() {
    return (
      <ul>
        {this.state.items.map((item) =>
          item.complete ? (
            <li
              key={item.id}
              className="checked"
              onClick={() => this.toggleClass(item.id)}
            >
              {item.name}
            </li>
          ) : (
            <li key={item.id} onClick={() => this.toggleClass(item.id)}>
              {item.name}
            </li>
          )
        )}
      </ul>
    );
  }
}

export default Item;
