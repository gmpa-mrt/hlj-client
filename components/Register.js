import Input from "./Input";
import LayoutForm from "./LayoutForm";

function Register() {
    return (
        <LayoutForm>
            <Input label={"Email"} typeInput={"email"}/>
            <Input label={"Password"} typeInput={"password"}/>
            <button className="text-white hover:font-bold">
                Create
            </button>
        </LayoutForm>
    )
}
export default Register