import "../style/Chat.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcard from "@mui/icons-material/CardGiftcard";
import Gif from "@mui/icons-material/Gif";
import EmojiEmotions from "@mui/icons-material/EmojiEmotions";
import ChatHeader from './ChatHeader';


function Chat() {
    return (
        <div className="chat">
            <ChatHeader/>
            <div className="chat__messages">
                
            </div>
            <div className="chat__input">
                <AddCircleIcon />
                <form>
                    <input></input>
                    <button></button>
                </form>
            </div>
            <div className="chat__inputIcons">
                <CardGiftcard fontSize="large" />
                <Gif fontSize="large" />
                <EmojiEmotions fontSize="large" />
            </div>
        </div>
    );
}
export default Chat;