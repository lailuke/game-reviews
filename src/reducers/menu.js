const menuDefaultState = [
  {
    PCTab: false,
    ConsoleTab: false,
    VRTab: false
  }
];

export default (state = menuDefaultState, action) => {
  switch (action.type) {
    case "ACTIVE_PC":
      return [...state, action.updates];
    case "ACTIVE_CONSOLE":
      return {
        ...state,
        ...action.updates
      };
    case "ACTIVE_VR":
      return {
        ...state,
        ...action.updates
      };
    default:
      return state;
  }
};
