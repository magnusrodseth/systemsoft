import { Employee } from "@/graphql/generated/graphql";
import Image from "ui/src/atoms/Image";
import { FC } from "react";
import Card from "@ui/molecules/Card";
import Icon from "@ui/atoms/Icon";
import Text from "@ui/atoms/Text";
import { AvatarIcon, DotFilledIcon } from "@radix-ui/react-icons";
import Heading from "@ui/atoms/Heading";
import Box from "@ui/atoms/Box";
import Link from "@ui/atoms/Link";
import Button from "@ui/atoms/Button";

type EmployeeCardProps = {
  employee: Employee;
};

const EmployeeCard: FC<EmployeeCardProps> = ({ employee }) => {
  const imageUrl = employee.image?.asset?.url;

  return (
    <Card css={{ position: "relative", smooth: "all 0.3s ease-in-out" }}>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={employee.name || "A profile picture of an employee"}
          width={400}
          height={400}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      ) : (
        <Icon>
          <AvatarIcon />
        </Icon>
      )}

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
            {employee.name}
          </Heading>
          <Text>{employee.title}</Text>
          <Link href={`mailto:${employee.email}`}>{employee.email}</Link>
        </Box>

        <Link href={`/employees/${employee._id}`}>
          <Button css={{ mx: 8 }} color="indigo">
            Mer informasjon
          </Button>
        </Link>
      </Box>
    </Card>
  );
};

export default EmployeeCard;
