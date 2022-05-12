import React from "react";

function WithListLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: "center", fontSize: "30px" }}>
        Hold on, fetching Data may take some Time!
      </p>
    );
  };
}
export default WithListLoading;

//The code above is a high-order React component that takes in another component.
// If the current isLoading tate is true, it will display a message, otherwise it will render the component it took in(the LIst Component)
