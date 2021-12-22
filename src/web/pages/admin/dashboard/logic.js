import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import store from "../../../../lib/store";
import { utilAction } from "../../../../lib/store/util";
import { db, storage } from "../../../../lib/utils/firebase";
import { v4 } from "uuid";
import { doc, setDoc, getDoc } from "firebase/firestore";

const dispatch = store.dispatch;

/**
 *
 * @param {*} e
 */
export const uploadProfileImage = (formik) => (e) => {
  //   const state = store.getState();
  dispatch(utilAction.setKeyValue({ key: "uploading", value: true }));
  const file = e.target.files[0];
  const extention = file.type.split("/")[1];
  const path = `util/images/mainImage.${extention}`;
  const storageRef = ref(storage, path);
  uploadBytes(storageRef, file)
    .then((snapshot) => {
      getDownloadURL(storageRef)
        .then((url) => {
          formik.setFieldValue("image", url);
          dispatch(utilAction.setKeyValue({ key: "uploading", value: false }));
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
 *
 * @param {*} formik
 * @param {*} idx
 * @returns
 */
export const uploadSkillIcon = (formik, idx) => (e) => {
  const file = e.target.files[0];
  const extention = file.type.split("/")[1];
  const fileName = v4();
  const path = `util/icon/${fileName}-${Date.now()}.${extention}`;
  const storageRef = ref(storage, path);
  uploadBytes(storageRef, file)
    .then((snapshot) => {
      getDownloadURL(storageRef)
        .then((url) => {
          formik.setFieldValue(`skill[${idx}].icon`, url);
        })
        .catch((err) => {
          console.log("download url upload icon image----->", err);
        });
    })
    .catch((err) => {
      console.log("upload image err icon------>", err);
    });
};

/**
 *
 * @param {*} param0
 * @param {*} addToast
 */
export const saveAboutMe = (
  { image, about, name, skill, ...rest },
  addToast
) => {
  const docRef = doc(db, "profile", "about-me");
  setDoc(docRef, { image, about, name, skill })
    .then((res) => {
      addToast("Saved", { appearance: "success" });
    })
    .catch((err) => {
      addToast(err.message ? err.message : "Some error occured", {
        appearance: "error",
      });
    });
};

/**
 *
 * @param {*} formik
 */
export const fetchAboutMe = (formik, addToast) => {
  const docRef = doc(db, "profile", "about-me");
  getDoc(docRef)
    .then((snapshot) => {
      const { image, about, name, skill } = snapshot.data();
      formik.setFieldValue(`skill`, skill);
      formik.setFieldValue(`about`, about);
      formik.setFieldValue(`image`, image);
      formik.setFieldValue(`name`, name);
    })
    .catch((err) => {
      addToast(err.message ? err.message : "Some error occured", {
        appearance: "error",
      });
    });
};
