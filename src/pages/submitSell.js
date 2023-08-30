import Submit from "@/components/Submit.component";
import Success from "@/components/Success";
import TimeInForce from "@/components/TimeInForce";
import React, { useState } from "react";

const SubmitSell = () => {
  const [currentMode, setCurrentMode] = useState("timeInForce");
  return (
    <div>
      {currentMode === "timeInForce" && (
        <TimeInForce
          currentMode={currentMode}
          setCurrentMode={setCurrentMode}
        />
      )}
      {currentMode === "submitAndBuy" && (
        <Submit
          currentMode={currentMode}
          setCurrentMode={setCurrentMode}
          orderType="sell"
        />
      )}
      {currentMode === "sellSuccess" && (
        <Success
          orderType="sell"
        />
      )}
    </div>
  );
};

export default SubmitSell;
