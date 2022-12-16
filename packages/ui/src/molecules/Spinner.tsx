import { Component1Icon } from "@radix-ui/react-icons";
import { ComponentProps, FC, ReactNode } from "react";
import Box from "../atoms/Box";
import { animateSpin } from "../utils/stitches.keyframes";

interface SpinnerProps extends ComponentProps<typeof Box> {
  icon: ReactNode;
}

const Spinner: FC<SpinnerProps> = ({ icon, ...props }) => {
  return (
    <Box
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        animation: `${animateSpin} 2s infinite`,
      }}
      {...props}
    >
      <Component1Icon />
    </Box>
  );
};

export default Spinner;
