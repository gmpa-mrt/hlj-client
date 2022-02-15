const Input = ({ label, typeInput, value, fn }) => {
    return (
        <div className="my-2 flex flex-col justify-center items-center">
            <label className="text-white font-bold">
                {label}
            </label>
            <input type={typeInput} value={value} onChange={fn}
                   className="my-2 text-pink-300 focus:border-4 border-pink-300"/>
        </div>
    )
}
export default Input