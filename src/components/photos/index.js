import React from "react";
import PhotosList from "./photos-list";
import Title from "grommet/components/Title";
import Box from "grommet/components/Box";
// // import Title from "grommet/components/Title";
import AddPhotos from "./add-photos";

const Photos = () => {
  return (
    <Box direction="row">
      <Title>Photos</Title>
      <Box>
        <PhotosList />
      </Box>
      <Box>
        <AddPhotos />
      </Box>
    </Box>
  );
};

export default Photos;
