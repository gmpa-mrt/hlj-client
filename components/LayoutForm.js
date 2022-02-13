import Input from "./Input";

function LayoutForm({ children }) {
    return (
        <form className="h-full w-full flex flex-col justify-center items-center bg-pink-300/50">
            {children}
        </form>
    )
}
export default LayoutForm