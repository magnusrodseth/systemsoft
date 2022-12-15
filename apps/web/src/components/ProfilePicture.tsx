import Box from "@ui/atoms/Box";
import Icon from "@ui/atoms/Icon";
import Image from "@ui/atoms/Image";
import { ComponentProps, FC } from "react";
import { PersonIcon } from "@radix-ui/react-icons";

interface ProfilePictureProps extends ComponentProps<typeof Box> {
  src?: string | null;
  alt?: string | null;
}

const ProfilePicture: FC<ProfilePictureProps> = ({ src, alt, ...props }) => {
  return (
    <Box
      css={{
        position: "relative",
        overflow: "hidden",
        height: "17rem",
        pb: 8,
      }}
      {...props}
    >
      {src ? (
        <Image
          src={src}
          alt={alt || "Profilbilde av en ansatt"}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      ) : (
        <Icon
          css={{
            backgroundColor: "$mauve4",
            height: "100%",
            color: "$mauve11",
          }}
        >
          <PersonIcon
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Icon>
      )}
    </Box>
  );
};

export default ProfilePicture;
