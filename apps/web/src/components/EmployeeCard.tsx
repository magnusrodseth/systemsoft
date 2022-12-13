import { Employee } from "@/graphql/generated/graphql";
import Image from "ui/src/atoms/Image";
import { FC } from "react";
import Card from "ui/src/molecules/Card";
import Icon from "@ui/atoms/Icon";
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
    <Card css={{ position: "relative" }}>
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
          <Heading size="lg">{employee.name}</Heading>
          <Heading size="md" css={{ fontWeight: "$normal" }}>
            {employee.title}
          </Heading>
          <Link href={`mailto:${employee.email}`}>{employee.email}</Link>
        </Box>

        <Button css={{ mx: 8 }} color="indigo">
          Mer informasjon
        </Button>
      </Box>
    </Card>
  );
};

export default EmployeeCard;
