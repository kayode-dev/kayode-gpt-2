import { useState } from "react";

import { getGptImage } from '../Functions/gptGet'
import ImageResult from "./imageresult";

const ImageView = () => {
    const [prompt, setPrompt] = useState("");
    const [gptResponse, setGptResponse] = useState("")
    const [responseValid, setResponseValid] = useState(false);
    const [message, setMessage] = useState("Ask something... let me cook!👨🏾‍🍳");

    const promptChangeHandler = (e) => {
        setPrompt(e.target.value);
    };
    const submitHandler = async (e) => {
        setResponseValid(false);
        e.preventDefault();
        setMessage("Hold up... let me cook!👨🏾‍🍳");
        setGptResponse(await getGptImage(prompt));
        setResponseValid(true);
    };

    const clearContent = () => {
        setPrompt("");
    };

    let contentToDisplay;
    if (responseValid == false) {
        contentToDisplay = <div><div className="relative flex w-64 animate-pulse gap-2 p-4">
            <div className="h-12 w-12 rounded-full bg-slate-400"></div>
            <div className="flex-1">
                <div className="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
                <div className="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
            </div>
            <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
        </div>
            <p>{message}</p>
        </div>
    }

    if (responseValid == true) {

        contentToDisplay = <div className=" flex pb-10 md:w-10/12 justify-center items-center"><ImageResult imageUrl={gptResponse} /></div>;
    }
    return (<div className="flex flex-col w-full md:w-10/12 items-center ">
        <h1 className="text-3xl mb-4 font-bold">Image Generator</h1>
        <form className="prompt-form flex gap-4 md:gap-10 mb-10 md:w-10/12 w-full" onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="What can i help you with today?"
                className="prompt-text w-full bg-transparent border-2 border-black/40 text-black rounded-lg p-3 outline-none outline-0"
                value={prompt}
                onChange={promptChangeHandler}
                onFocus={clearContent}
            />
            <button className="w-1/6 hover:scale-x-110 hover:bg-white/40 hover:text-black hover:backdrop-blur-xl duration-300 rounded-lg bg-black outline-none outline-0 text-white border border-black" type="submit">
                GO!
            </button>
        </form>
        {contentToDisplay}
    </div>);
}

export default ImageView;