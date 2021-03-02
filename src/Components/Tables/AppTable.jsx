import React, { useState } from "react";
import "./AppTable.scss";
import { Table, Button } from "react-bootstrap";
import StudInputModal from "../Modals/StudInputModal";
import { useSelector, useDispatch } from "react-redux";

function AppTable() {
  const dispatch = useDispatch();
  // dispatch({ type: "STUDENT_DATA" });
  const studentData = useSelector((studentData) => studentData.studentreducer);
  // const [studData, setStudData] = useState(studentData);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState("");
  const [tempstudentData, setTempStudentData] = useState({
    firstName: "",
    lastName: "",
    rollNo: "",
  });

  function handleAdd() {
    dispatch({ type: "SHOW" });
    setEdit(false);
  }
  function handleDelete(stud) {
    const filterStudent = studentData.filter((x) => x.id !== stud.id);
    console.log(filterStudent, "stud");
    dispatch({ type: "DELETE_STUDENT_DATA", data: filterStudent });
  }
  function handleEdit(stud) {
    setTempStudentData(stud);
    dispatch({ type: "SHOW" });
    console.log("sdv");
    setEdit(true);
    setData(stud);
  }

  return (
    <div className="app_table">
      <h1 className="table_heading">
        <strong>Student's Data</strong>
      </h1>
      <Table className="student_table" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Roll Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((stud, index) => (
            <tr key={stud.id}>
              <td>{(stud.id = index + 1)}</td>
              <td>{stud.firstName}</td>
              <td>{stud.lastName}</td>
              <td>{stud.rollNo}</td>
              <td>
                {" "}
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleEdit(stud)}
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(stud)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>{" "}
      <Button className="add_button" variant="primary" onClick={handleAdd}>
        Add Data
      </Button>
      <StudInputModal
        tempstudentData={tempstudentData}
        setTempStudentData={setTempStudentData}
        edit={edit}
        setEdit={setEdit}
        data={data}
      />
    </div>
  );
}

export default AppTable;
