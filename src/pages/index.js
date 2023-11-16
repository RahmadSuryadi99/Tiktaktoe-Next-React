import Image from "next/image";
import { Inter } from "next/font/google";
import MyButton from "@/components/MyButton";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const startValue = ["", "", "", "", "", "", "", "", ""];
export default function Home() {
  const [winner, setWinner] = useState("");
  const [value, setValue] = useState(startValue);
  const [curPlayer, setcurValue] = useState(1);
  const [currentPos, setcurrentPos] = useState();

  useEffect(() => {
    let init = startValue.map((a) => [...a]);
    setValue(init);
  }, []);
  useEffect(() => {
    checkPointHandler(currentPos);
    console.log(currentPos);
  }, [value]);

  function checkPointHandler(currPost) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    lines.map((a) => {
      let result;
      if (value[a[0]] != "") {
        result = value[a[0]] === value[a[1]] && value[a[0]] === value[a[2]];
      }
      if (result) {
        setWinner("Winner : " + value[currPost]);
      }
    });
  }

  function setHandle(a) {
    let curArr = [...value];
    curArr[a] = changeValueHandle();
    setcurrentPos(a);
    setValue(curArr);
  }
  function changeValueHandle() {
    if (curPlayer == 1) {
      setcurValue(2);
      return "X";
    } else {
      setcurValue(1);
      return "O";
    }
  }
  function resetHandler() {
    setValue(startValue.map((a) => [...a]));
    setcurValue(1);
    setWinner("");
  }
  function disableHandler(posisi) {
    let isDisable = value[0] == "" || winner == "" ? false : true;
    return isDisable;
  }

  const itemBtn = [];
  for (let i = 0; i < 9; i++) {
    itemBtn.push(
      <MyButton
        name={value[i]}
        disabled={disableHandler(i)}
        onClick={() => setHandle(i)}
      />
    );
  }

  return (
    <>
      <button onClick={() => resetHandler()}>reset</button>
      <h1>{winner}</h1>

      <div className="grid grid-cols-3 gap-2 w-72 p-2 bg-white ">{itemBtn}</div>
    </>
  );
}
