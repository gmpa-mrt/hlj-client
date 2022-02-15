import LayoutForm from "./LayoutForm";
import Input from "./Input";

function Register({back}) {
    return (
        <LayoutForm back={back}>
            <Input label={"Email"} typeInput={"email"}/>
            <Input label={"Password"} typeInput={"password"}/>
            <button className="text-white hover:font-bold">
                <span>Create</span>
            </button>
        </LayoutForm>
    )
}
export default Register