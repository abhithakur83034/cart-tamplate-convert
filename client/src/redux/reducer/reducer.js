// reducers/reducer.js
const initialState = {
  data: [],
};

const Productreducer  = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case "PRODUCT":
      return {
        ...state,
        data:action.payload
      }
  
    default:
      return state;
  }
};

export default Productreducer ;
