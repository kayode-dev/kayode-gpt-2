import { Link } from "react-router-dom";

const Home = () => {
    return (<section className="p-8 flex flex-col md:flex-row gap-5 items-center justify-center ">
        <div className="flex flex-col gap-5 w-full">
            <p className="text-3xl">Hi there!, welcome to ✨kay-GPT✨</p>
            <p className="">This website utilizes OpenAI's ChatGPT and Google's Gemini API endpoints to provide responses to your prompts. Please feel free to ask any question you have, but keep it friendly and not too edgy</p>
            <p>Without further ado, Let's get into it!</p>
            <Link to={"/chat"} className="py-2 px-4 w-max rounded hover:scale-110 hover:bg-white/40 hover:text-black hover:backdrop-blur-xl duration-300 bg-black text-white border border-black">Get Started</Link>
        </div>
        <div className=" items-center justify-center hidden md:flex w-full">
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </section>);
}

export default Home;