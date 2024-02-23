import { useState } from "react";
import ChatView from "../components/chatview";

const Select = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const taskTypeHandler = (tasktype: string) => {
        setSelectedOption(tasktype);
    }
    let content_type;
    if (selectedOption === "") {
        content_type = <><h1 className="text-center">Hi!, I'm glad you made it here, what do you want to do today?</h1>
            <div className="flex items-center justify-between gap-6">
                <button className=" p-5 rounded hover:scale-110 hover:bg-white/40 hover:text-black hover:backdrop-blur-xl duration-300 bg-black text-white border border-black" onClick={() => taskTypeHandler("chat")}>Ask something</button>
                <button className=" p-5 rounded hover:scale-110 hover:bg-white/40 hover:text-black hover:backdrop-blur-xl duration-300 bg-black text-white border border-black" onClick={() => taskTypeHandler("image")}>Generate Image</button>
            </div></>
    }
    if (selectedOption == "chat") {
        content_type = <ChatView/>
    }
    if (selectedOption == "image") {
        content_type = <p>image</p>
    }
    return (
        <section className="flex flex-col items-center w-screen gap-5 ">
            {content_type}
        </section>);
}

export default Select;