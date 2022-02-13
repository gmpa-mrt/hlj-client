import LayoutForm from "./LayoutForm";
import Input from "./Input";

function Login() {
    return (
        <LayoutForm className="h-full w-full flex flex-col justify-center items-center bg-pink-300/50">
            <Input label={"Email"} typeInput={"email"}/>
            <Input label={"Password"} typeInput={"password"}/>
            <button className="text-white hover:font-bold">
                Sign in
            </button>
        </LayoutForm>
    )
}
export default Login