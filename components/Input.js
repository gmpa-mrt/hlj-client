const Input = ({ label, typeInput }) => {
    return (
        <div className="my-2 flex flex-col justify-center items-center">
            <label className="text-white font-bold">
                {label}
            </label>
            <input type={typeInput} className="my-2 text-pink-300 focus:border-4 border-pink-300"/>
        </div>
    )
}
export default Input