import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "./StudInputModal.scss";

function StudInputModal({
  tempstudentData,
  setTempStudentData,
  edit,
  setEdit,
  data,
}) {
  const studentData = useSelector((studentData) => studentData.studentreducer);
  // const [userInput, setUserInput] = useState({
  //   firstName: "",
  //   lastName: "",
  //   rollNo: "",
  // });
  const togg = useSelector((modalToggle) => modalToggle.modalreducer);
  console.log(togg);
  const dispatch = useDispatch();
  // if (tempstudentData !== null) {
  //   setUserInput(tempstudentData);
  // }
  function handleSubmit() {
    if (edit === false) {
      if (
        tempstudentData.firstName &&
        tempstudentData.lastName &&
        tempstudentData.rollNo
      ) {
        dispatch({
          type: "ADD_STUDENT_DATA",
          data: tempstudentData,
        });
        dispatch({ type: "NOT_SHOW" });
        setTempStudentData("");
      } else {
        alert("field is empty");
      }
    }
    if (edit === true) {
      console.log(studentData, "babu");
      const id = studentData.findIndex((x) => x.id === data.id);
      let temp = [...studentData];
      temp[id] = tempstudentData;

      dispatch({
        type: "EDIT_STUDENT_DATA",
        data: temp,
      });
      dispatch({ type: "NOT_SHOW" });
    }
  }
  console.log(tempstudentData);
  function handleClose() {
    dispatch({ type: "NOT_SHOW" });
  }

  function handleChange(e) {
    setTempStudentData({ ...tempstudentData, [e.target.name]: e.target.value });
  }
  return (
    <div className="modal_container">
      <Modal show={togg} className="Modal">
        <Modal.Header>
          <Modal.Title>Student Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal_input">
            <input
              type="text"
              placeholder="Enter firstname"
              value={tempstudentData.firstName}
              name="firstName"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="Enter lastname"
              name="lastName"
              value={tempstudentData.lastName}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="Roll number"
              name="rollNo"
              value={tempstudentData.rollNo}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default StudInputModal;
