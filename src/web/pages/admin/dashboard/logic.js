import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import store from "../../../../lib/store";
import { utilAction } from "../../../../lib/store/util";
import { auth, storage } from "../../../../lib/utils/firebase";
import * as Yup from "yup";

const dispatch = store.dispatch;

/**
 *
 * @param {*} e
 */
export const uploadProfileImage = (setImgUrl) => (e) => {
  //   const state = store.getState();
  dispatch(utilAction.setKeyValue({ key: "uploading", value: true }));
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
              dispatch(
                utilAction.setKeyValue({ key: "uploading", value: false })
              );
              setImgUrl((prev) => prev + 1);
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

/**
 * @description education scheme for validation
 */
export const EducationValidationSchema = Yup.object().shape({
  course: Yup.string().required("This field is mandetory"),
  institute: Yup.string().required("This field is mandetory"),
  from: Yup.date().required("This field is mandetory"),
  to: Yup.date().required("This field is mandetory"),
  result: Yup.string().required("This field is mandetory"),
  present: Yup.boolean().default(false),
  cgpa: Yup.boolean().default(false),
});
