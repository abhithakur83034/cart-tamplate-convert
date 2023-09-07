export const actionItem = (data) => {
    console.log("from action", data);
    return {
      type: "PRODUCT",
      payload: data,
    };
  };
  
  export const clearCart = () => ({
    type: 'CLEAR_CART',
  });