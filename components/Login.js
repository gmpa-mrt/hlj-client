import {useState} from "react";
import {fetchJson} from "../lib/api";
import LayoutForm from "./LayoutForm";
import Input from "./Input";


function Login({ back, fn }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log({ email, password })

        try {
            const response = await fetchJson('http://localhost:4000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })
            fn()
        } catch (e) {
           setError("Bad credentials")
        }
    }


    return (
        <LayoutForm back={back} submit={handleSubmit}>
            <span className="text-red-700 font-bold">{error}</span>
            <Input label={"Email"} typeInput={"email"} value={email} fn={e => setEmail(e.currentTarget.value)}/>
            <Input label={"Password"} typeInput={"password"} value={password}
                   fn={e => setPassword(e.currentTarget.value)}/>
            <button className="text-white hover:font-bold">
                Sign in
            </button>
        </LayoutForm>
    )
}

export default Login