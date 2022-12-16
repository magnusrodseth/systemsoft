import Box from "@ui/atoms/Box";
import Spinner from "@ui/molecules/Spinner";
import { Component1Icon } from "@radix-ui/react-icons";

const Loading = () => {
  return (
    <Box css={{ my: 32 }}>
      <Spinner icon={<Component1Icon />} />
    </Box>
  );
};

export default Loading;
