import React, { Component } from "react";
import Box from "grommet/components/Box";
import Form from "grommet/components/Form";
import FormField from "grommet/components/FormField";
import TextInput from "grommet/components/TextInput";
import Footer from "grommet/components/Footer";
import Button from "grommet/components/Button";
import { uploadPhoto } from "../../../actions/photo-actions";
import { connect } from "react-redux";

class AddPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = { fileName: "", file: "" };
    this.setFileName = ({ target }) =>
      this.setState({ fileName: target.value });

    this.setFile = event => {
      this.setState({ file: event.target.files[0] });
    };

    this.uploadPhoto = event => {
      event.preventDefault();
      this.props.uploadPhoto(this.state)
    }
  }

  render() {
    const { fileName } = this.state;
    return (
      <Box margin="small" colorIndex="light-2" align="stretch">
        <Form pad="small" plain={true} onSubmit={this.uploadPhoto}>
          <FormField label="Name">
            <TextInput value={fileName} onDOMChange={this.setFileName} />
          </FormField>
          <FormField label="URL1">
            <input type="file" onChange={this.setFile} />
          </FormField>
          <Footer pad={{ vertical: "medium" }}>
            <Button label="Send" type="submit" primary={true} />
          </Footer>
        </Form>
      </Box>
    );
  }
}

export default connect(null, { uploadPhoto })(AddPhotos);
