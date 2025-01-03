import { useState } from "react";
import UploadFile from "./UploadFile";

type ButtonProps = {
	text: string;
	buttonSize: string;
	borderSize: string;
	disabled?: boolean;
};

function CustomButton(props: ButtonProps) {
	const [isOpenModalUploadFile, setIsOpenModalUploadFile] = useState(false);

	return (
		<>
			<button
				className={`w-full sm:w-auto px-4 ${props.buttonSize} text-base font-semibold transition-colors duration-200 ${props.borderSize} block border border-yellow-300 bg-yellow-200 hover:bg-yellow-300 text-yellow-900 focus:outline-none focus:ring-0`}
				onClick={() => setIsOpenModalUploadFile(true)}
			>
				{props.text}
			</button>

			{isOpenModalUploadFile && (
				<UploadFile
					isOpen={isOpenModalUploadFile}
					onClose={() => setIsOpenModalUploadFile(false)}
				/>
			)}
		</>
	);
}

export default CustomButton;
