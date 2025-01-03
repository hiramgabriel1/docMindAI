import { SubmitHandler, useForm } from "react-hook-form"
import { toast, ToastContainer } from "react-toastify"
import usePostUser from "../app/hooks/formHook"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

export type IUserLogin = {
    email: string
    password: string
}

function Login() {
    const { post } = usePostUser('/user/login')
    const { register, handleSubmit } = useForm<IUserLogin>()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<IUserLogin> = async (datalogin: IUserLogin) => {
        try {
            console.log(datalogin);
            const save = await post(datalogin)

            console.log(save.data);
            if (save.success && save.data.token) {
                Cookies.set('authToken', save.data.token, { expires: 3 }) 
                
                toast.success('registrado correctamente')
                navigate('/starter')
            }
        } catch (error) {
            console.log(error);
            toast.error('error al registrarse')
        }
    }
    return (
        <>
            <ToastContainer />
            <div className="text-center mt-24">
                <div className="flex items-center justify-center">
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-12 h-12 text-blue-500"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                    </svg>
                </div>
                <h2 className="text-4xl tracking-tight">Sign in into your account</h2>
                <span className="text-sm">
                    or{" "}
                    <a href="#" className="text-blue-500">
                        register a new account
                    </a>
                </span>
            </div>
            <div className="flex justify-center my-2 mx-4 md:mx-0">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Email
                            </label>
                            <input
                                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                                type="email"
                                {...register("email")}
                                required
                            />
                        </div>
                        <div className="w-full md:w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                password
                            </label>
                            <input
                                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                                type="password"
                                {...register("password")}
                                required
                            />
                        </div>
                        <div className="w-full md:w-full px-3 mb-6">
                            <button className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">
                                Sign in
                            </button>
                        </div>
                        <div className="mx-auto -mb-6 pb-1">
                            <button onClick={()=> navigate("/register")}>Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login