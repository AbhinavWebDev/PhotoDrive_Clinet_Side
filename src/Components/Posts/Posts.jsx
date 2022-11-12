import React, { useEffect } from "react";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";
import { getphotos } from "../../Redux/Actions/PostActions";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Posts() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getphotos());
  }, []);

  return (
    <div className="Postcard">
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {posts.map((post) => {
            return (
              <Grid xs={12} sm={6} md={4} lg={3}>
                <Post data={post} key={post._id} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}

export default Posts;
