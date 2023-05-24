import React from "react";
import Image from "next/image";

function Social({ svg }) {
  return (
    <div className="border border-slate-700 rounded-full p-2">
      <Image src={svg} width={10} height={10} className="w-5 h-5" />
    </div>
  );
}

export default Social;
