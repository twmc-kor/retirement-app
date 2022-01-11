import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/"), 3000);
  }, []);
  return (
    <div>
      <h1>LOADING PAGE</h1>
    </div>
  );
};

export default Loading;
