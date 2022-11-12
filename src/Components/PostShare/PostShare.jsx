import React, { useState, useRef } from "react";
import "./PostShare.css";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { uploadImage, uploadPost } from "../../Redux/Actions/PostActions";
import { Button } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

function PostShare() {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const dispatch = useDispatch();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };
  const reset = () => {
    setImage(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {};
    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;

      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }

    dispatch(uploadPost(newPost));

    reset();
  };
  return (
    <div className="AddImage">
      <div>
        <div className="Option" onClick={() => imageRef.current.click()}>
          <Button variant="contained" component="label">
            Add Photo
            <PhotoCamera />
          </Button>
        </div>

        <div style={{ display: "none" }}>
          <input
            type="file"
            name="myImage"
            ref={imageRef}
            onChange={onImageChange}
          />
        </div>
      </div>

      {image && (
        <div className="previewImage">
          <CloseIcon onClick={() => setImage(null)} />
          <img src={URL.createObjectURL(image)} alt="" />

          <Button variant="contained" component="label" onClick={handleSubmit}>
            Upload
          </Button>
        </div>
      )}
    </div>
  );
}

export default PostShare;
