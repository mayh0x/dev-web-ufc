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

const StudentService = {
  getStudents(callback) {
    const q = query(collection(database, "students"));

    onSnapshot(q, (querySnapshot) => {
      let students = [];
      querySnapshot.forEach((doc) => {
        const { name, course, ira } = doc.data();
        students.push({ _id: doc.id, name, course, ira });
      });

      callback(students);
    });
  },

  createStudent(data, callback) {
    addDoc(collection(database, "students"), data)
      .then(() => callback())
      .catch((error) => console.log(error));
  },

  updateStudent(callback, _id, body) {
    const docRef = doc(database, "students", _id);

    updateDoc(docRef, body)
      .then(() => callback())
      .catch((error) => console.log(error));
  },

  deleteStudent(callback, _id) {
    const docRef = doc(database, "students", _id);

    deleteDoc(docRef)
      .then(() => callback())
      .catch((error) => console.log(error));
  },

  searchStudent(callback, _id) {
    const docRef = doc(database, "students", _id);
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists) callback(docSnap.data());
      })
      .catch((error) => console.log(error));
  },
};

export default StudentService;
