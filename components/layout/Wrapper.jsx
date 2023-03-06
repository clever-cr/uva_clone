import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="max-w-[1400px] px-2 mx-auto container">{children}</div>
  );
};

export default Wrapper;
