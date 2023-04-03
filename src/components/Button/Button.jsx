import React from "react";

const Button = (props) => {
  //   console.log(props.children);
  const { children } = props;
  return (
    <>
      <div className="text-center my-4">
        <button className="btn btn-active btn-primary text-white">
          {children}
        </button>
      </div>
    </>
  );
};

export default Button;
