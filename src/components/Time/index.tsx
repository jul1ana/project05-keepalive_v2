import { useState, useEffect } from "react";
import * as C from "./styles";

export const Time = () => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <C.TimeDay>

      <p>
        {dateState.toLocaleString("pt-BR", {
          hour: "numeric",
          minute: "numeric",
        })}
      </p>
      
      <span>
        {" "}
        {dateState.toLocaleDateString("pt-BR", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </span>

    </C.TimeDay>
  );
}