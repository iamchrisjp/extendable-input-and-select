import React, { useState } from "react";
import { ClickAwayListener } from "../../utilities/ClickAwayListener";
import { AlertCircle } from "react-feather";

export interface InputInfoProps {
  text: string;
}

export const InputInfo = (props: InputInfoProps) => {
  const { text } = props;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <ClickAwayListener onClickAway={() => setIsVisible(false)}>
      <div className="relative h-full w-full flex justify-center items-center">
        <button
          type="button"
          aria-label="info"
          className="cursor-pointer border-none h-full w-full flex justify-center items-center"
          onClick={() => setIsVisible(!isVisible)}
        >
          <AlertCircle />
        </button>
        {isVisible && (
          <div
            className="bg-white p-4 typo-body-xs absolute top-[100%] right-0 w-[250px] block drop-shadow-2xl rounded z-10"
            role="alert"
          >
            <b>Hvorfor?</b> {text}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};
