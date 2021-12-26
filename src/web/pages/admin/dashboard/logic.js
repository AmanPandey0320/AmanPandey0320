import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import store from "../../../../lib/store";
import { utilAction } from "../../../../lib/store/util";
import { db, storage } from "../../../../lib/utils/firebase";
import { v4 } from "uuid";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

const dispatch = store.dispatch;

/**
 *
 * @param {*} e
 */
export const uploadProfileImage = (formik) => (e) => {
  //   const state = store.getState();
  dispatch(utilAction.setKeyValue({ key: "uploading", value: true }));
  const file = e.target.files[0];
  if (Boolean(file)) {
    return;
  }
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
  if (Boolean(file)) {
    return;
  }
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

/**Experience */

/**
 *
 * @param {*} formik
 * @param {*} idx
 * @returns
 */
export const uploadTechIcon = (formik, idx) => (e) => {
  const file = e.target.files[0];
  if (Boolean(file)) {
    return;
  }
  const extention = file.type.split("/")[1];
  const fileName = v4();
  const path = `util/icon/${fileName}-${Date.now()}.${extention}`;
  const storageRef = ref(storage, path);
  uploadBytes(storageRef, file)
    .then((snapshot) => {
      getDownloadURL(storageRef)
        .then((url) => {
          formik.setFieldValue(`tech[${idx}].icon`, url);
        })
        .catch((err) => {
          console.log("download url upload exp icon image----->", err);
        });
    })
    .catch((err) => {
      console.log("upload image exp err icon------>", err);
    });
};

/**
 * @param values
 * @param addToast
 * @returns
 */
export const saveExperience = ({
  org,
  from,
  to,
  role,
  contri,
  tech,
  present,
  ...rest
}) => {
  return new Promise((resolve, reject) => {
    const ref = collection(db, "experience");
    addDoc(ref, { org, from, to, role, contri, tech, present })
      .then((snapshot) => {
        resolve({
          saved: true,
          id: snapshot.id,
        });
        return;
      })
      .catch((err) => {
        reject(err);
        return;
      });
  });
};

/**
 *
 * @param {*} handler
 */
export const fetchAllExperiences = (handler) => {
  const ref = collection(db, "experience");
  const q = query(ref, orderBy("from", "desc"));
  getDocs(q)
    .then((snapshots) => {
      let data = [];
      snapshots.forEach((snapshot) => {
        const expr = snapshot.data();
        const from = new Date(expr.from.seconds * 1000);
        expr.kfrom = `${from.getMonth() + 1}/${from.getFullYear()}`;
        if (expr.to) {
          const to = new Date(expr.to.seconds * 1000);
          expr.kto = `${to.getMonth() + 1}/${to.getFullYear()}`;
        }
        if (expr.present === true) {
          expr.kto = "Present";
        }
        data.push(expr);
      });
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
