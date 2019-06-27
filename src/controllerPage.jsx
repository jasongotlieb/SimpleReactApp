import React from "react";
import { LoginForm } from "./loginForm";
import { ProductPage } from "./productPage";

export class ControllerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProductPage: false,
      supplierName: "",
      error: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  USERDB = {
    jgotlieb: "test",
    jason: "test"
  };

  handleSubmit = (username, password) => {
    if (this.USERDB[username] === password) {
      this.setState({
        supplierName: username,
        showProductPage: true,
        error: null
      });
    } else {
      this.setState({
        error: "bad username or password"
      });
    }
  };

  logout = () => {
    this.setState({
      showProductPage: false
    });
  };

  render() {
    return (
      <div>
        <h1>Little NSP</h1>
        {this.state.showProductPage ? (
          <ProductPage
            supplierName={this.state.supplierName}
            logout={this.logout}
          />
        ) : (
          <LoginForm handleSubmit={this.handleSubmit} />
        )}
        <p style={{ color: "red" }}>{this.state.error}</p>
      </div>
    );
  }
}
