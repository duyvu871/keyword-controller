"use client";

import axios from "axios";
import {useEffect, useState} from "react";

const countTime = (time: number) => {
    const now = new Date().getTime();
    const distance = now - time;
    // const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // const hours = Math.floor(
    //     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    // );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    return `${minutes} phút`;
}

export default function Page({}: {}) {
    const [time, setTime] = useState<number>(0);
  const getPointerTime = async () => {
    const response = await axios.get("/api/pointer-time");
    setTime(response.data);
  }

  useEffect(() => {
    getPointerTime();

    setInterval(() => {
        setTime(time - 1000);
    } ,1000);

    if (time < 0) {
        getPointerTime();
    }
  } ,[]);

  return (
      <div className={"flex flex-col justify-center items-start"}>
        {/*<div className={"flex flex-row justify-center items-center"}>*/}
        {/*    <h2>*/}
        {/*        Thời gian cập nhật từ khóa tiếp theo*/}
        {/*    </h2>*/}
        {/*    <h2>*/}
        {/*        {time > 0 ? countTime(time) : "Đang cập nhật"}*/}
        {/*    </h2>*/}
        {/*</div>*/}


      </div>
  )
}