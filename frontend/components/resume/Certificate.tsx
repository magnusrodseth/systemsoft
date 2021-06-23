import React from "react";
import { ComponentResumeCertificate as ICertificate } from "generated/graphql";
import Wrapper from "components/Wrapper";
import classNames from "utils/classNames";
import Markdown from "components/Markdown";

interface CertificateProps {
  certificates: ICertificate[];
}

const Certificate: React.FC<CertificateProps> = ({
  certificates,
}: CertificateProps) => {
  return (
    <div className="w-screen flex justify-center">
      <Wrapper className={classNames("w-3/4 bg-gray-200")}>
        <h1
          className={classNames(
            "font-mono font-bold p-4 text-3xl tracking-wide"
          )}
        >
          Certificates 📜
        </h1>

        <Wrapper className="bg-white grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1">
          {certificates.map((certificate) => (
            <Wrapper className="bg-gray-50" key={certificate.id}>
              <div className="flex flex-row space-x-4 items-center">
                <h1 className="text-xl font-bold tracking-wide">
                  {certificate.name}
                </h1>
              </div>

              {certificate.description ? (
                <Markdown className="mx-10">{certificate.description}</Markdown>
              ) : null}
            </Wrapper>
          ))}
        </Wrapper>
      </Wrapper>
    </div>
  );
};

export default Certificate;
