import React, { useState, useContext } from "react";
import { SignInBtn } from "../../components";
import { UserContext } from "../../contexts/user";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import "./style.css";
import makeid from "../../helpers/functions";
import { db, storage } from "../../firebase";

import firebase from "firebase";

const CreatePost = () => {
  const [user, setUser] = useContext(UserContext).user;
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);

      const selectedImageSrc = URL.createObjectURL(e.target.files[0]);

      const imagePreview = document.getElementById("image-preview");

      imagePreview.src = selectedImageSrc;

      imagePreview.style.display = "block";
    }
  };

  const handleUpload = () => {
    if (image) {
      const imageName = makeid(10);
      const uploadTask = storage.ref(`images/${imageName}.jpg`).put(image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progress function
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          //get download url and upload post info
          storage
            .ref("images")
            .child(`${imageName}.jpg`)
            .getDownloadURL()
            .then((imageUrl) => {
              db.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                caption: caption,
                photoUrl: imageUrl,
                username: user.email.replace("@gmail.com", ""),
                userPhoto: user.photoURL,
              });
            });

          setCaption("");
          setImage(null);
          setProgress(0);

          document.getElementById("image-preview").style.display = "none";
        }
      );
    }
  };

  return (
    <div className="createPost">
      {user ? (
        <div className="createPost__loggedIn">
          <p>Create Post</p>
          <div className="createPost__loggedInCenter">
            <textarea
              className="createPost__textarea"
              rows="3"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Enter Caption here"
            ></textarea>
            <div className="createPost__imagePreview">
              <img id="image-preview" alt="" />
            </div>
          </div>
          <div className="createPost__loggedInBottom">
            <div className="createPost__imageUpload">
              <label for="fileInput">
                <AddAPhotoIcon
                  style={{ cursor: "pointer", fontSize: "20px" }}
                />
              </label>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleChange}
                hidden="true"
              />
            </div>
            <button
              className="createPost__uploadBtn"
              disabled={caption === "" ? true : false}
              onClick={handleUpload}
            >
              {`Upload ${progress !== 0 ? progress + "%" : ""}`}
            </button>
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center" }}>
          <SignInBtn />
          <p style={{ marginLeft: "10px" }}>to Post & Comment</p>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
