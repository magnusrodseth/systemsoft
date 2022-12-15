import Card from "@ui/molecules/Card";
import { ComponentProps, FC, ReactNode } from "react";

interface ResumeCardProps extends ComponentProps<typeof Card> {
  children: ReactNode;
}

const ResumeCard: FC<ResumeCardProps> = ({ children, ...props }) => {
  return (
    <Card
      css={{
        p: 8,
        backgroundColor: "$mauve2",
      }}
      {...props}
    >
      {children}
    </Card>
  );
};

export default ResumeCard;
