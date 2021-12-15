import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import store from "../../../../lib/store";
import { auth, storage } from "../../../../lib/utils/firebase";

// const dispatch = store.dispatch;

/**
 *
 * @param {*} e
 */
export const uploadProfileImage = (e) => {
  //   const state = store.getState();
  const uid = auth.currentUser.uid;
  const file = e.target.files[0];
  const extention = file.type.split("/")[1];
  const path = `admin/${uid}/userimage.${extention}`;
  const storageRef = ref(storage, path);
  uploadBytes(storageRef, file)
    .then((snapshot) => {
      getDownloadURL(storageRef)
        .then((url) => {
          updateProfile(auth.currentUser, {
            photoURL: url,
          })
            .then(() => {
              alert("updated");
            })
            .catch((err) => {
              console.log("profile update err image----->", err);
            });
        })
        .catch((err) => {
          console.log("download url upload profile image----->", err);
        });
    })
    .catch((err) => {
      console.log("upload image err profile------>", err);
    });
};
