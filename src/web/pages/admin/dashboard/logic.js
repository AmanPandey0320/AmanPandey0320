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
  getDocs,
  query,
  orderBy,
  deleteDoc,
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
  if (Boolean(file) === false) {
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

/**project */

/**
 *
 * @param {*} formik
 * @param {*} idx
 * @returns
 */
export const uploadTechIcon = (formik, idx) => (e) => {
  const file = e.target.files[0];
  // console.log(file);
  if (Boolean(file) === false) {
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
          // console.log(url);
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
  id,
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
    const newDoc = !Boolean(id);
    const docId = id ? id : `${v4()}-${Date.now()}`;
    const docRef = doc(db, "experience", docId);
    setDoc(docRef, { org, from, to, role, contri, tech, present })
      .then((snapshot) => {
        const data = { org, from, to, role, contri, tech, present, id: docId };
        resolve({
          newDoc,
          data,
          saved: true,
          id: docId,
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
  const q = query(ref, orderBy("to", "desc"));
  getDocs(q)
    .then((snapshots) => {
      let data = [];
      snapshots.forEach((snapshot) => {
        const expr = snapshot.data();
        expr.id = snapshot.id;
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
      handler(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 *
 * @param {*} idx
 * @param {*} data
 * @param {*} setData
 * @returns
 */
export const deleteExperience = (idx, data, setData, addToast) => (e) => {
  const newData = data?.filter((e, i) => i !== idx);
  const { id } = data[idx];
  const ref = doc(db, "experience", id);
  deleteDoc(ref)
    .then((res) => {
      setData(newData);
      addToast("Deleted successfully", {
        appearance: "info",
      });
      return;
    })
    .catch((err) => {
      console.log("delete experience err----->", err);
      addToast(err.message ? err.message : "Some error occured", {
        appearance: "error",
      });
      return;
    });
};

/**
 *
 * @param {*} idx
 * @param {*} data
 * @param {*} formik
 * @returns
 */
export const editExperience = (idx, data, formik) => (e) => {
  if (Boolean(data) === false) {
    return;
  }
  const doc = data[idx];
  if (Boolean(doc) === false) {
    return;
  }
  let { id, org, from, present, to, role, contri, tech } = doc;
  from = new Date(from.seconds * 1000);
  if (Boolean(to)) {
    to = new Date(to.seconds * 1000);
  }
  formik.setValues({
    id,
    org,
    from,
    present,
    to,
    role,
    contri,
    tech,
  });
};

/**PROJECTS */

export const saveProject = ({
  id,
  name,
  desc,
  repo,
  link,
  from,
  to,
  present,
  tech,
  ...rest
}) => {
  return new Promise((resolve, reject) => {
    const newDoc = !Boolean(id);
    const docId = id ? id : `${v4()}-${Date.now()}`;
    const docRef = doc(db, "project", docId);
    setDoc(docRef, { name, desc, repo, link, from, to, present, tech })
      .then((snapshot) => {
        const data = {
          name,
          desc,
          repo,
          link,
          from,
          to,
          present,
          tech,
          id: docId,
        };
        resolve({
          newDoc,
          data,
          saved: true,
          id: docId,
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
export const fetchAllProjects = (handler) => {
  const ref = collection(db, "project");
  const q = query(ref, orderBy("to", "desc"));
  getDocs(q)
    .then((snapshots) => {
      let data = [];
      snapshots.forEach((snapshot) => {
        const expr = snapshot.data();
        expr.id = snapshot.id;
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
      handler(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 *
 * @param {*} idx
 * @param {*} data
 * @param {*} formik
 * @returns
 */
export const editProject = (idx, data, formik) => (e) => {
  if (Boolean(data) === false) {
    return;
  }
  const doc = data[idx];
  if (Boolean(doc) === false) {
    return;
  }
  let { id, name, desc, repo, link, from, to, present, tech } = doc;
  from = new Date(from.seconds * 1000);
  if (Boolean(to)) {
    to = new Date(to.seconds * 1000);
  }
  formik.setValues({
    id,
    name,
    desc,
    repo,
    link,
    from,
    to,
    present,
    tech,
  });
};

/**
 *
 * @param {*} idx
 * @param {*} data
 * @param {*} setData
 * @returns
 */
export const deleteProject = (idx, data, setData, addToast) => (e) => {
  const newData = data?.filter((e, i) => i !== idx);
  const { id } = data[idx];
  const ref = doc(db, "project", id);
  deleteDoc(ref)
    .then((res) => {
      setData(newData);
      addToast("Deleted successfully", {
        appearance: "info",
      });
      return;
    })
    .catch((err) => {
      console.log("delete project err----->", err);
      addToast(err.message ? err.message : "Some error occured", {
        appearance: "error",
      });
      return;
    });
};

/**
 *
 * @param {*} formik
 * @returns
 */
export const uploadProjectApp = (formik, addToast) => (e) => {
  const file = e.target.files[0];
  console.log(file);
  if (Boolean(file) === false) {
    return;
  }
  const extention = file.type.split("/")[1];
  const fileName = v4();
  const path = `util/other-files/${fileName}-${Date.now()}.${extention}`;
  const storageRef = ref(storage, path);
  uploadBytes(storageRef, file)
    .then((snapshot) => {
      getDownloadURL(storageRef)
        .then((url) => {
          formik.setFieldValue("link", url);
          console.log(url);
        })
        .catch((err) => {
          console.log("download url upload exp app upload----->", err);
        });
    })
    .catch((err) => {
      console.log("upload image app upload err icon------>", err);
      addToast(err.message ? err.message : "Some error occured", {
        appearance: "error",
      });
    });
};
