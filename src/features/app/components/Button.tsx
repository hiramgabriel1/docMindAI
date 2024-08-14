import { useState } from "react";
import UploadFile from "./UploadFile";

type ButtonProps = {
  text: string;
  buttonSize: string;
  borderSize: string;
  disabled?: boolean,
  onClick?: () => void;
};

function CustomButton(props: ButtonProps) {
  const [isOpenModalUploadFile, setModalUploadFile] = useState<boolean>(false);

  const handleClose = () => {
    setModalUploadFile(false);
  };

  return (
    <>
      <button
        className={`w-full sm:w-auto px-4 ${props.buttonSize} text-base font-semibold transition-colors duration-200 ${props.borderSize} block border border-yellow-300 bg-yellow-200 hover:bg-yellow-300 text-yellow-900 focus:outline-none focus:ring-0`}
        onClick={() => setModalUploadFile(true)}
      >
        {props.text}
      </button>

      {isOpenModalUploadFile && (
        <UploadFile isOpenModal={true} onClose={handleClose}/>
      )}
    </>
  );
}

export default CustomButton;
