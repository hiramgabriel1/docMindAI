import { useState } from "react";
import { customFetch } from "../../../utils/axios.config";
import { IUserLogin } from "../../login/Login";

const usePostUser = (url: string) => {
	const [state, setState] = useState({
		error: null,
		loading: false,
	});

	const post = async (data: IUserLogin) => {
		setState({ error: null, loading: true });
		try {
			const response = await customFetch.post(url, data);

			if (response.status === 200 || response.statusText === "Created")
				return { success: true, data: response.data };

			return {
				success: false,
				error: `Unexpected response status: ${response.status}`,
			};
		} catch (error) {
			return {
				success: false,
				error:
					error instanceof Error
						? error.message
						: "An unexpected error occurred",
			};
		} finally {
			setState({ error: state.error, loading: false });
		}
	};

	return { ...state, post };
};

export default usePostUser;
