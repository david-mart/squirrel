import React from "react";
import PhotosList from "../components/photos-list";
import Title from "grommet/components/Title";
import AddPhotos from "./add-photos";

const HomePage = () => {
  return (
    <div>
      <Title>Photos</Title>
      <PhotosList />
      <AddPhotos />
    </div>
  );
};

export default HomePage;
