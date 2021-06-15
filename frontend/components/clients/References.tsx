import { useGetClientReferencesQuery } from "generated/graphql";
import React from "react";

interface ReferencesProps {
  clientSlug: string;
}

const References: React.FC<ReferencesProps> = ({
  clientSlug,
}: ReferencesProps) => {
  const [result, _] = useGetClientReferencesQuery({
    variables: { clientSlug: clientSlug },
  });

  const { data, fetching, error } = result;

  if (fetching) return <>Loading...</>;
  if (error) return <>Error...</>;

  return (
    <div>
      {data?.references?.map((reference, key) => {
        return (
          <div key={key}>
            <h1>{reference?.title}</h1>
            <p>{reference?.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default References;
