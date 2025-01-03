import { Dialog, Button, Text, Flex } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import usePost from "../hooks/usePost";
import "react-toastify/dist/ReactToastify.css";
import useUserStore from "../store/useUserStore";

export interface FormValuesChat {
	title: string;
	description: string;
	fileUpload: FileList;
}

interface UploadFileProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function UploadFile({ isOpen, onClose }: UploadFileProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValuesChat>();

	const { userId } = useUserStore();
	console.log(userId);

	const { post, error, loading } = usePost(`/chat/create-new/${userId}`);
	const navigate = useNavigate();

	console.log(error);

	const onSubmit: SubmitHandler<FormValuesChat> = async (data) => {
		const newChatId = uuidv4();
		const formData = new FormData();

		formData.append("title", data.title);
		formData.append("description", data.description);
		formData.append("newChatId", newChatId);

		if (data.fileUpload && data.fileUpload.length > 0) {
			formData.append("fileUpload", data.fileUpload[0]);
			console.log(data.fileUpload[0]);
		}
		toast.error("No file selected");

		const result = await post(formData);

		if (result.success) {
			toast.success("Chat is created!");
			navigate(`/new-chat/${newChatId}`);
			onClose();
		}

		toast.error("Error creating chat");
	};

	return (
		<Dialog.Root open={isOpen} onOpenChange={onClose}>
			<ToastContainer />
			<Dialog.Content maxWidth="450px">
				<Dialog.Title>Create a new chat</Dialog.Title>
				<Dialog.Description size="2" mb="4">
					Make data to your new chat.
				</Dialog.Description>

				<form onSubmit={handleSubmit(onSubmit)}>
					<Flex direction="column" gap="3">
						<label>
							<Text as="div" size="2" mb="1" weight="bold">
								Name chat
							</Text>
							<input
								{...register("title", { required: "Name is required" })}
								placeholder="Contract"
								className="w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
							/>
							{errors.title && <Text color="red">{errors.title.message}</Text>}
						</label>

						<label>
							<Text as="div" size="2" mb="1" weight="bold">
								Description
							</Text>
							<input
								{...register("description", {
									required: "Description is required",
								})}
								placeholder="Describe your new chat"
								className="w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
							/>
							{errors.description && (
								<Text color="red">{errors.description.message}</Text>
							)}
						</label>

						<label>
							<Text as="div" size="2" mb="1" weight="bold">
								File
							</Text>
							<input
								type="file"
								{...register("fileUpload", { required: "File is required" })}
								accept="pdf"
								name="fileUpload"
								className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded"
							/>
							{errors.fileUpload && (
								<Text color="red">{errors.fileUpload.message}</Text>
							)}
						</label>
					</Flex>

					<Flex gap="3" mt="4" justify="end">
						<Button variant="soft" color="gray" onClick={onClose}>
							Cancel
						</Button>
						<Button type="submit" disabled={loading}>
							{loading ? "Saving..." : "Save"}
						</Button>
					</Flex>
				</form>
			</Dialog.Content>
		</Dialog.Root>
	);
}
