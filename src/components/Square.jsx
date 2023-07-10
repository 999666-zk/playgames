import { useState, useEffect } from "react";
export default function Square() {
  // 状态值
  const [value, setValue] = useState(null);

  function handleClick() {
    // console.log(`clicked!!`);
    setValue("X");
  }

  useEffect(() => {
    // Update the document title using the browser API
    console.log("初始化");
  }, []);

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
