import {
  PortableText as SanityPortableText,
  PortableTextReactComponents,
} from "@portabletext/react";
import Box from "@ui/atoms/Box";
import Link from "@ui/atoms/Link";
import { ComponentProps, FC } from "react";

interface PortableTextProps extends ComponentProps<typeof SanityPortableText> {}

const CustomComponents: Partial<PortableTextReactComponents> = {
  marks: {
    link: ({ children, value }) => {
      return (
        <Link href={value.href} target="_blank">
          {children}
        </Link>
      );
    },
  },
};

const PortableText: FC<PortableTextProps> = ({ ...props }) => {
  return (
    <Box>
      <SanityPortableText {...props} components={CustomComponents} />
    </Box>
  );
};

export default PortableText;
