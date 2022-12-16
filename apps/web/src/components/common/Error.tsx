import Box from "@ui/atoms/Box";
import Text from "@ui/atoms/Text";
import { FC } from "react";

type ErrorProps = {
  message?: string;
};

const Error: FC<ErrorProps> = ({ message }) => {
  return (
    <Box
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 32,
        px: 16,
        py: 8,
        backgroundColor: "$red3",
        color: "$mauve12",
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "$red6",
        "&:hover": {
          backgroundColor: "$red4",
          borderColor: "$red8",
        },
      }}
    >
      <Text>{message || "Det oppstod en feil. Vennligst prøv igjen."}</Text>
    </Box>
  );
};

export default Error;
