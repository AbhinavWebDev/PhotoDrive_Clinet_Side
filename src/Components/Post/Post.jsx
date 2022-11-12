import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import React from "react";

export default function Post(data) {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Card sx={{ maxWidth: 900 }}>
        <CardMedia
          component="img"
          height="100%"
          image={serverPublic + data.data.image}
        />
      </Card>
    </>
  );
}
