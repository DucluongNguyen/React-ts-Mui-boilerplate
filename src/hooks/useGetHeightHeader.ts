import { useEffect, useState } from "react";

export const useGetHeightHeader = (element: string) => {
  const [tag, setTag] = useState<any>({});

  useEffect(() => {
    const ele = document.querySelector(element);
    setTag(ele);
  }, [document.querySelector(element)]);

  const height = Math.ceil(tag?.offsetHeight);
  const width = Math.ceil(tag?.offsetWidth);

  return { height, width };
};
