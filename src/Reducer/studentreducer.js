let initialData = [
  {
    id: 1,
    firstName: "Zubin",
    lastName: "Khan",
    rollNo: "46",
  },
  {
    id: 2,
    firstName: "Jarvis",
    lastName: "Khan",
    rollNo: "36",
  },
];
function studentreducer(studentData = initialData, { type, data }) {
  switch (type) {
    case "STUDENT_DATA":
      // const studData = studentData.map(
      //   (stud) => (stud.firstName, stud.lastName, stud.rollNo)
      // );
      return studentData;
    case "ADD_STUDENT_DATA":
      // console.log("type--", type);
      // console.table(studentData);
      // console.log("data=----", data);
      // let tempstud = [...studentData]
      return [...studentData, data];
    case "DELETE_STUDENT_DATA":
      return data;
    case "EDIT_STUDENT_DATA":
      return data;
    default:
      return studentData;
  }
}

export default studentreducer;
