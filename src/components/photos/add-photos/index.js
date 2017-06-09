import React, { Component } from "react";
import Box from "grommet/components/Box";
import Form from "grommet/components/Form";
import FormField from "grommet/components/FormField";
import TextInput from "grommet/components/TextInput";

class AddPhotos extends Component {
  render() {
    return (
      <Box margin="small" colorIndex="light-2" align="stretch">
        <Form pad="small" plain={true}>
          <FormField label="Name">
            <TextInput value="test" />
          </FormField>
          <FormField label="UR11L">
            <TextInput value="12313" />
          </FormField>
          <FormField label="URL1">
            <TextInput value="1211313" />
          </FormField>
        </Form>
      </Box>
    );
  }
}

export default AddPhotos;
