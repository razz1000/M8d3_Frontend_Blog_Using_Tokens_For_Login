import React from "react";

const LoginPage = () => {
  let fetchData = async () => {
    const response = await fetch("", {
      headers: { Authorization: "Bearer ${token}" },
    });
  };

  return (
    <div>
      <p>I am here</p>
    </div>
  );
};

export default LoginPage;
