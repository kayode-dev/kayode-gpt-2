import errorImage from "../assets/error.svg";

const ImageResult = ({ imageUrl }: { imageUrl }) => {
    let contentToDisplay;
    if (imageUrl) {
        contentToDisplay = <img src={imageUrl} alt="" />;
    } else { contentToDisplay = <img src={errorImage} alt="" /> }
    return (<div className="bg-neutral-200 rounded-xl p-8 h-min w-fit">
        {contentToDisplay}
    </div>);
}

export default ImageResult;