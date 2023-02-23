import React from "react";

export default function BodyWrapper({ children }) {
  return <div className="md:max-w-screen-md py-12 max-w-[90%] sm:px-0 m-auto">{children}</div>;
}
