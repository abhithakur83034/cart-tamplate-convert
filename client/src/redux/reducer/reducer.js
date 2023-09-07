const initialState = {
    data: [], // Initial state for your product data
    cartData: [], // Initial state for your cart data
  };
  
  const Productreducer = (state = initialState, action) => {
    switch (action.type) {
      case "PRODUCT":
        return {
          ...state,
          data: action.payload,
        };
      case 'CLEAR_CART':
        return {
          ...state,
          cartData: [], // Clear the cart by setting it to an empty array
        };
      default:
        return state;
    }
  };
  
  export default Productreducer;
  