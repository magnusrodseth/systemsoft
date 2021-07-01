import Wrapper from "components/Wrapper";
import {
  useGetClientReferencesQuery,
  References as IReferences,
} from "generated/graphql";
import React from "react";
import classNames from "utils/classNames";
import Loading from "components/Loading";
import Link from "next/link";
import Error from "components/Error";
import { LOCAL_BACKEND_URL } from "../../constants";
import Markdown from "components/Markdown";

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

  const references = data?.references as IReferences[];

  if (fetching) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="flex justify-center">
      <div className="w-screen grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 space-6">
        {references.map((reference) => {
          const image = reference.images ? reference.images[0]?.url : false;
          return (
            <div key={reference.id}>
              <Link href={`${clientSlug}/${reference.slug}`}>
                <a>
                  <Wrapper className="bg-blue-100 w-3/4 p-5 ml-auto mr-auto mb-5 mt-5">
                    <div>
                      {image ? (
                        <Wrapper className="bg-gray-100 m-auto min-h-[200px] min-w-[300px] md:flex-none lg:w-5/12">
                          <img
                            className="w-full"
                            src={`${LOCAL_BACKEND_URL}${image}`}
                          />
                        </Wrapper>
                      ) : null}
                      <h1
                        className={classNames(
                          "text-center text-3xl font-semibold m-2"
                        )}
                      >
                        {reference.title}
                      </h1>

                      <Markdown className="text-left" strip>
                        {`${reference.description.substr(0, 200)}...`}
                      </Markdown>
                    </div>
                  </Wrapper>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default References;
