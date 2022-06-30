import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const MePage = () => {
  const { token } = useParams();

  useEffect(() => {
    console.log("token:", token);
    localStorage.setItem("token", JSON.stringify(token));
  }, []);

  return <div></div>;
};
export default MePage;
