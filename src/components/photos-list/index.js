import React, { Component } from "react";
import { connect } from "react-redux";
import { getPhotos } from "../../actions/photo-actions";
import List from "grommet/components/List";
import ListItem from "grommet/components/ListItem";
import Box from "grommet/components/Box";

class PhotosList extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    const { photos } = this.props;
    return (
      <Box margin="small" colorIndex="light-2">
        <List>
          {photos.map(photo => (
            <ListItem key={photo.name}>{photo.name}</ListItem>
          ))}
        </List>
      </Box>
    );
  }
}

const mapStateToProps = state => {
  const { photos } = state;
  return { photos };
};

export default connect(mapStateToProps, { getPhotos })(PhotosList);
