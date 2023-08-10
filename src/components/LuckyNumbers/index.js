import React, { useState } from "react";
import styling from './indexStyling.module.css';

function LuckyNumbers() {
  const [count, setCount] = useState(null);
  const [randomNumber, setRandomNumber] = useState([]);

  const randomHandler = () => {
    const random = Math.floor(Math.random() * 10) + 1;
    setCount(random);

    const randomNum = [];
    for (let i = 0; i < 6; i++) {
      const random2 = Math.floor(Math.random() * 49) + 1;
      randomNum.push(random2);
    }
    setRandomNumber(randomNum);
  };

  const resetHandler = () => {
    setRandomNumber([]);
    setCount(null);
  };

  return (
    <div>
      <h1>Lotto 6/49</h1>
      <p>Generating lucky numbers</p>
      <ul>
        {randomNumber.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
        <ul className={styling.ulStaling}>
     
     {count !== null && (
       <li className={styling.backColor}>{count}</li>
     )}
   </ul>
      </ul>
  
      <button
        className={`${styling.btn} ${styling.btnWhite} ${styling.btnAnimated}`}
        type="reset"
        onClick={resetHandler}
      >
        Reset
      </button>
      <button
        className={`${styling.btn} ${styling.btnWhite} ${styling.btnAnimated}`}
        onClick={randomHandler}
      >
        Show me lucky numbers
      </button>
    </div>
  );
}

export default LuckyNumbers;
