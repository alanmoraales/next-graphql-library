import emojis from "constants/emojis";

interface IEmojiProps {
  name: keyof typeof emojis;
}

const Emoji = ({ name }: IEmojiProps) => {
  return <span dangerouslySetInnerHTML={{ __html: emojis[name] }} />;
};

export default Emoji;
