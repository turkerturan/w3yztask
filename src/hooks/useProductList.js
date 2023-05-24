import { getData } from "@/service/getData";
import React, { useEffect, useState } from "react";

export function useProductList() {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    getData().then((list) => setImageList(list));
  }, []);

  return imageList;
}
