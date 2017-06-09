import React, { Component } from "react";
import { connect } from "react-redux";
import Box from "grommet/components/Box";
import Button from "grommet/components/Button";
import Form from "grommet/components/Form";
import Title from "grommet/components/Title";
import FormField from "grommet/components/FormField";
import TextInput from "grommet/components/TextInput";
import Header from "grommet/components/Header";
import Footer from "grommet/components/Footer";
import { setUserName } from "../../../actions/chat-actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "" };
    this.updateUserName = ({ target }) =>
      this.setState({ userName: target.value });
    this.setUserName = event => {
      event.preventDefault();
      this.props.setUserName(this.state.userName);
    };
  }
  getBoxStyles() {
    return {
      align: "stretch",
      justify: "center",
      pad: "small",
      colorIndex: "light-2"
    };
  }

  onChange(event) {
    console.log(event);
  }
  render() {
    const { username } = this.state;
    return (
      <Box {...this.getBoxStyles()}>
        <Form onSubmit={this.setUserName}>
          <Header>
            <Title>Login</Title>
          </Header>
          <FormField label="Select username">
            <TextInput value={username} onDOMChange={this.updateUserName} />
          </FormField>
          <Footer pad={{ vertical: "medium" }}>
            <Button label="Submit" type="submit" primary={true} />
          </Footer>
        </Form>
      </Box>
    );
  }
}

export default connect(null, { setUserName })(Login);
