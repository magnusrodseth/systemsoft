import Wrapper from "components/Wrapper";
import {
  useGetClientReferencesQuery,
  References as IReferences,
} from "generated/graphql";
import React from "react";
import classNames from "utils/classNames";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

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

  console.log(fetching, error);

  const references = data?.references as IReferences[];

  if (fetching) return <>Loading...</>;
  if (error) return <>Error...</>;

  return (
    <div className="flex justify-center">
      <div className="w-screen grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 space-6">
        {references.map((reference) => {
          return (
            <Wrapper
              className="bg-blue-100 w-3/4 p-5 ml-auto mr-auto mb-5 mt-5"
              key={reference.id}
            >
              <div key={reference.id}>
                <h1
                  className={classNames(
                    "text-center text-3xl font-semibold m-2"
                  )}
                >
                  {reference.title}
                </h1>

                <ReactMarkdown remarkPlugins={[gfm]} className="text-left">
                  {reference.description}
                </ReactMarkdown>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
};

export default References;
