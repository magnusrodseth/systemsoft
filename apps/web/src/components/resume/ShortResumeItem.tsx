import Box from "@ui/atoms/Box";
import Icon from "@ui/atoms/Icon";
import { ComponentProps, FC, ReactNode } from "react";

interface ShortResumeItemProps extends ComponentProps<typeof Box> {
  icon: ReactNode;
  body: ReactNode;
}

const ShortResumeItem: FC<ShortResumeItemProps> = ({ icon, body }) => {
  return (
    <Box
      css={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: 8,
        my: 8,
      }}
    >
      <Icon>{icon}</Icon>
      {body}
    </Box>
  );
};

export default ShortResumeItem;
