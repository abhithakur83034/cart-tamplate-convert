// const productCart = (state = [], action) => {
//     switch (action.type) {
//       case "ADD_TO_CART": {
//         let productInState = state.find(
//           (product) => product._id === action.payload._id
//         );
//         if (productInState) return state;
//         return [...state, action.payload];
//       }
//       case "INCREMENT": {
//         let updateState = [...state];
      
//         state.forEach((product, index) => {
//           if (product._id === action.payload._id) {
//             updateState[index].quantity += 1;
//           }
//         });
//         return [...updateState];
//       }
      
  
//       case "DECREMENT": {
//         let updateState = [...state];
  
//         state.forEach((product, index) => {
//           if (
//             product._id === action.payload._id &&
//             updateState[index].quantity > 1
//           ){
            
//             updateState[index].quantity -= 1;
//           }
//         });
//         return [...updateState];
//       }
//       case "REMOVE_ITEM": {
//         let updateState = state.filter(
//           (product) => product._id !== action.payload._id
//         );
//         return [...updateState];
//       }
//       default:
//         return state;
//     }
//   };
  
//   export default productCart;
  

const productCart = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProduct = state.find((product) => product._id === action.payload._id);
    
      if (existingProduct) {
        // If product is already in the cart, increment its quantity
        return state.map((product) =>
          product._id === action.payload._id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        // If not in the cart, add it with quantity 1
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case "INCREMENT":
      return state.map((product) =>
        product._id === action.payload._id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

    case "DECREMENT":
      return state.map((product) =>
        product._id === action.payload._id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );

    case "REMOVE_ITEM":
      return state.filter((product) => product._id !== action.payload._id);

    default:
      return state;
  }
};

export default productCart;
