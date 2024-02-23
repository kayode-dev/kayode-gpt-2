
import Markdown from "react-markdown";

const ChatResult = ({ content }: { content }) => {
    return (<div className="bg-teal-400 rounded-xl p-4">
        <Markdown>{content}</Markdown>
    </div>);
}

export default ChatResult;