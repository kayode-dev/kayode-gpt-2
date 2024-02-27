
import Markdown from "react-markdown";

const ChatResult = ({ content, model }: { content, model }) => {
    
    return (<div className="bg-neutral-200 rounded-xl p-8 h-min flex flex-col gap-4">
        <p>Response from {model}:</p>
        <div className="p-4 bg-white/80 h-full rounded-xl leading-loose drop-shadow-xl">
            <Markdown>{content}</Markdown>
        </div>
    </div>);
}

export default ChatResult;