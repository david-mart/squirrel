import React from "react";
import PhotosList from "./photos-list";
import Title from "grommet/components/Title";
import AddPhotos from "./add-photos";

const Photos = () => {
  return (
    <div>
      <Title>Photos</Title>
      <PhotosList />
      <AddPhotos />
    </div>
  );
};

export default Photos;
