import { DefaultEmployeeFragment, Employee } from "@/graphql/generated/graphql";
import { FC } from "react";
import Card from "@ui/molecules/Card";
import Text from "@ui/atoms/Text";
import Heading from "@ui/atoms/Heading";
import Box from "@ui/atoms/Box";
import Link from "@ui/atoms/Link";
import Button from "@ui/atoms/Button";
import ProfilePicture from "./ProfilePicture";

type EmployeeCardProps = {
  employee?: DefaultEmployeeFragment | null;
};

const EmployeeCard: FC<EmployeeCardProps> = ({ employee }) => {
  const imageUrl = employee?.image?.asset?.url;

  return (
    <Card>
      <ProfilePicture src={imageUrl} alt={employee?.name} />

      <Box
        css={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            px: 16,
          }}
        >
          <Heading
            css={{
              "@sm": {
                fontSize: "$sm",
              },
              "@md": {
                fontSize: "md",
              },
              "@lg": {
                fontSize: "$lg",
              },
            }}
            bold
          >
            {employee?.name}
          </Heading>
          <Text>{employee?.title}</Text>
          <Link href={`mailto:${employee?.email}`}>{employee?.email}</Link>
        </Box>

        <Link href={`/employees/${employee?._id}`}>
          <Button css={{ mx: 8 }} color="indigo">
            Mer informasjon
          </Button>
        </Link>
      </Box>
    </Card>
  );
};

export default EmployeeCard;
