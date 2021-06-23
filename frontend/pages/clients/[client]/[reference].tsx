import Loading from "components/Loading";
import ReferenceArticle from "components/references/ReferenceArticle";
import { useGetReferenceByClientQuery } from "generated/graphql";
import { References as IReferences } from "generated/graphql";
import { GetServerSideProps } from "next";
import { withUrqlClient, WithUrqlProps } from "next-urql";
import { useRouter } from "next/dist/client/router";
import React from "react";
import createUrqlClient from "utils/createUrqlClient";

const Reference: React.FC<WithUrqlProps> = ({ clientSlug, referenceSlug }) => {
  const router = useRouter();

  const [result, _] = useGetReferenceByClientQuery({
    variables: { clientSlug: clientSlug, referenceSlug: referenceSlug },
  });

  const { data, fetching, error } = result;

  console.log(fetching, error);

  const references = data?.references as IReferences[];

  if (fetching)
    return (
      <>
        <Loading />
      </>
    );
  if (error) return <>Error...</>;

  if (references.length == 0) {
    router.push(`/clients`);
    return <></>;
  }

  const reference = references[0];

  return <ReferenceArticle reference={reference} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { client, reference } = context.query;

  return {
    props: {
      clientSlug: client,
      referenceSlug: reference,
    },
  };
};

export default withUrqlClient(createUrqlClient)(Reference);
