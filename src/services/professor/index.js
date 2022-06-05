import {
  collection,
  query,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { database } from "../../db";

const ProfessorService = {
  getProfessors(callback) {
    const q = query(collection(database, "professors"));

    onSnapshot(q, (querySnapshot) => {
      let professor = [];
      querySnapshot.forEach((doc) => {
        const { name, university, degree } = doc.data();
        professor.push({ _id: doc.id, name, university, degree });
      });

      callback(professor);
    });
  },

  createProfessor(data, callback) {
    addDoc(collection(database, "professors"), data)
      .then(() => callback())
      .catch((error) => console.log(error));
  },

  updateProfessor(callback, _id, body) {
    const docRef = doc(database, "professors", _id);

    updateDoc(docRef, body)
      .then(() => callback())
      .catch((error) => console.log(error));
  },

  deleteProfessor(callback, _id) {
    const docRef = doc(database, "professors", _id);

    deleteDoc(docRef)
      .then(() => callback())
      .catch((error) => console.log(error));
  },

  searchProfessor(callback, _id) {
    const docRef = doc(database, "professors", _id);
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists) callback(docSnap.data());
      })
      .catch((error) => console.log(error));
  },
};

export default ProfessorService;
