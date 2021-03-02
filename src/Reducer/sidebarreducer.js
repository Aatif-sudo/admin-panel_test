const initalStore = false;
function sidebarreducer(sideBarToggle = initalStore, action) {
  switch (action.type) {
    case "HOVERED":
      return !sideBarToggle;
    case "NOTHOVERED":
      return !sideBarToggle;
    default:
      return sideBarToggle;
  }
}

export default sidebarreducer;
