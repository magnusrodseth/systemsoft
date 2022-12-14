import { ComponentProps, FC, ReactNode } from "react";
import { styled } from "../../stitches.config";

interface PillProps extends ComponentProps<typeof _Pill> {
  children: ReactNode;
  onClick?: () => void;
}

const Pill: FC<PillProps> = ({ children, ...props }) => {
  return <_Pill {...props}>{children}</_Pill>;
};

const _Pill = styled("div", {
  borderRadius: 9999,
  px: 8,
  py: 4,
  color: "$mauve12",
  borderStyle: "solid",
  borderWidth: 2,
  "&:hover": {
    cursor: "pointer",
  },

  variants: {
    color: {
      violet: {
        backgroundColor: "$violet3",
        borderColor: "$violet7",
        "&:hover": {
          backgroundColor: "$violet4",
          borderColor: "$violet8",
        },
        "&:active": {
          backgroundColor: "$violet5",
          borderColor: "$violet8",
        },
      },

      indigo: {
        backgroundColor: "$indigo3",
        borderColor: "$indigo7",
        "&:hover": {
          backgroundColor: "$indigo4",
          borderColor: "$indigo8",
        },
        "&:active": {
          backgroundColor: "$indigo5",
          borderColor: "$indigo8",
        },
      },

      red: {
        backgroundColor: "$red3",
        borderColor: "$red7",
        "&:hover": {
          backgroundColor: "$red4",
          borderColor: "$red8",
        },
        "&:active": {
          backgroundColor: "$red5",
          borderColor: "$red8",
        },
      },

      neutral: {
        backgroundColor: "$mauve3",
        borderColor: "$mauve7",
        "&:hover": {
          backgroundColor: "$mauve4",
          borderColor: "$mauve8",
        },
        "&:active": {
          backgroundColor: "$mauve5",
          borderColor: "$mauve8",
        },
      },
    },
  },

  defaultVariants: {
    color: "neutral",
  },
});

export default Pill;
