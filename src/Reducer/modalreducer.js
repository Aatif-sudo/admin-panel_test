const initalStore = false;
function modalreducer(modalToggle = initalStore, action) {
  switch (action.type) {
    case "SHOW":
      return !modalToggle;
    case "NOT_SHOW":
      return !modalToggle;
    case "EDIT_SHOW":
      return !modalToggle;
    default:
      return modalToggle;
  }
}

export default modalreducer;
