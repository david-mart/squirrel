import React, { Component } from "react";
import List from "grommet/components/List";
import ListItem from "grommet/components/ListItem";
import { connect } from "react-redux";
import Form from "grommet/components/Form";
import FormField from "grommet/components/FormField";
import TextInput from "grommet/components/TextInput";
import Footer from "grommet/components/Footer";
import Button from "grommet/components/Button";
import {
  getMessages,
  watchMessagesAddedEvent,
  sendMessage
} from "../../../actions/chat-actions";
import R from "ramda";
import moment from "moment";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = { newMessage: "" };
    this.updateMessage = ({ target }) =>
      this.setState({ newMessage: target.value });
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(event) {
    event.preventDefault();
    this.props.sendMessage({
      user: this.props.userName,
      message: this.state.newMessage,
      timestamp: moment().unix()
    });
    this.setState({ newMessage: "" });
  }

  componentDidMount() {
    this.props.watchMessagesAddedEvent();
    this.props.getMessages();
  }

  render() {
    const messages = R.values(this.props.messages);
    const { newMessage } = this.state;
    return (
      <div>
        <List>
          {messages.map(message => (
            <ListItem
              justify="between"
              separator="horizontal"
              key={message.timestamp}
            >
              <span><strong>{message.user}</strong>: {message.message}</span>
              <span className="secondary">
                {moment(message.timestamp).format("HH:mm:ss")}
              </span>
            </ListItem>
          ))}
        </List>
        <Form onSubmit={this.sendMessage} pad={{ vertical: "medium" }}>
          <FormField>
            <TextInput value={newMessage} onDOMChange={this.updateMessage} />
          </FormField>
          <Footer pad={{ vertical: "medium" }}>
            <Button label="Send" type="submit" primary={true} />
          </Footer>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { chat } = state;
  return { ...chat };
};

export default connect(mapStateToProps, {
  getMessages,
  watchMessagesAddedEvent,
  sendMessage
})(Messages);
