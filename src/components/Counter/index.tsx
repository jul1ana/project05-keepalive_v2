import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Counter = () => {
  const [cont, setCont] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCont((cont) => cont - 1);
      if (cont === 0) {
        navigate("/");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [cont]);

  return (
    <h3>{cont}</h3>
  );
}