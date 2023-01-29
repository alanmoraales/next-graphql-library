const htmlEmojis = {
  book: "&#128214;",
  cart: "&#128722;",
  person: "&#129489;",
  wavingHand: "&#128075;",
  callMeHand: "&#129305;",
  victoryHand: "&#9996;&#65039;",
};

interface IEmojiProps {
  name: keyof typeof htmlEmojis;
}

const Emoji = ({ name }: IEmojiProps) => {
  return <span dangerouslySetInnerHTML={{ __html: htmlEmojis[name] }} />;
};

export default Emoji;
