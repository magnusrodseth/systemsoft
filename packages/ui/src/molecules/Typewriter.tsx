import { FC } from "react";
import TypewriterEffect from "typewriter-effect";

interface TypewriterProps
  extends React.ComponentProps<typeof TypewriterEffect> {}

const Typewriter: FC<TypewriterProps> = ({ ...props }) => {
  return <TypewriterEffect {...props} />;
};

export default Typewriter;
