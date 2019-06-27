import React from "react";

export class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  updateInput(key, value) {
    this.setState({ [key]: value });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    const list = [...this.state.list];
    list.push(newItem);
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div>
        <h2>Product Page</h2>
        <h3>Welcome, {this.props.supplierName}</h3>
        Add a product
        <br />
        <input
          type="text"
          placeholder="Product name"
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}
        />
        <button
          onClick={() => this.addItem()}
          disabled={!this.state.newItem.length}
        >
          &#43; Add
        </button>
        <br /> <br />
        <ul>
          {this.state.list.map(item => {
            return (
              <li key={item.id}>
                {item.value}
                <button onClick={() => this.deleteItem(item.id)}>Remove</button>
              </li>
            );
          })}
        </ul>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}
