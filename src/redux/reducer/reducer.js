const initialState = {
  contactList: [],
  searchName: "",
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };
    case "SEARCH_NAME":
      return { ...state, searchName: payload.searchName };
    default:
      return { ...state };
  }
}

export default reducer;
