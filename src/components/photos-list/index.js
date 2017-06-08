import React, { Component } from "react";
import { connect } from "react-redux";
import { getPhotos } from "../../actions/photo-actions";

class PhotosList extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    const { photos } = this.props;
    return (
      <div>
        <ul>
          {photos.map(photo => <li key={photo.name}>{photo.name}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { photos } = state;
  console.log(state);
  return { photos };
};

export default connect(mapStateToProps, { getPhotos })(PhotosList);
