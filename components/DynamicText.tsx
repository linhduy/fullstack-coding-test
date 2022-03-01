import React, { forwardRef, Ref, useImperativeHandle, useState } from "react";
import { Heading } from "@chakra-ui/react";

export interface DynamicTextRefObject {
  changeValue: (newValue: string) => void,
}

const DynamicText = (props, ref: Ref<DynamicTextRefObject>) => {
  const [value, setValue] = useState("Random Text");

  useImperativeHandle(ref, () => ({
    changeValue
  }));

  const changeValue = (newValue: string): void => {
    setValue(newValue);
  };

  return <Heading as='h1'>
    {value}
  </Heading>
};

export default forwardRef(DynamicText);
