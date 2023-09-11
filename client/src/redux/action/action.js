export const actionItem = (data) => {
    console.log("from action", data);
    return {
      type: "PRODUCT",
      payload: data,
    };
  };
  

  