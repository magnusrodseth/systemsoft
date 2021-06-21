import React from "react";
import { Resume, Resume as IResume } from "generated/graphql";
import classNames from "utils/classNames";
import Wrapper from "./Wrapper";

interface ResumeProps {
  resume: Resume;
}

const ResumeComponent: React.FC<ResumeProps> = ({ resume }) => {
  return (
    <div className="mt-24 flex justify-center flex-col">
      <h1 className={classNames("text-6xl font-mono font-bold text-center")}>
        {resume.PersonalInformation?.fullName}
      </h1>
      <div
        className={classNames(
          "bg-blue-500 h-2 w-12 ml-auto mr-auto mt-6",
          "flex justify-center"
        )}
      />

      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-6">
          <Wrapper>
            <h1 className="font-bold uppercase text-xl text-center text-gray-800">
              Personal Information
            </h1>
            <ul>
              <li>{resume.PersonalInformation?.fullName}</li>
              <li>{resume.PersonalInformation?.email}</li>
              <li>{resume.PersonalInformation?.dateOfBirth}</li>
              <li>{resume.PersonalInformation?.phoneNumber}</li>
              <li>{resume.PersonalInformation?.status}</li>
              <li>{resume.PersonalInformation?.about}</li>
            </ul>
          </Wrapper>

          <Wrapper>
            <img src={resume.PersonalInformation?.profilePicture?.url} />
          </Wrapper>
        </div>
      </div>

      <div className="grid sm:grid-cols-5">
        <Wrapper className="col-start-2 col-span-3">
          <h1 className="font-bold uppercase text-xl text-center text-gray-800">
            Education
          </h1>
          {resume.Education?.map((education) => (
            <Wrapper className="bg-gray-300">
              <h1>
                {education?.name} -
                <span className="font-bold">{education?.school}</span>
              </h1>
              <p>Start: {education?.start}</p>
              <p>End: {education?.end || "Present"}</p>
            </Wrapper>
          ))}
        </Wrapper>

        <Wrapper className="col-start-2 col-span-3">
          <h1 className="font-bold uppercase text-xl text-center text-gray-800">
            Professional Experience
          </h1>
          {resume.ProfessionalExperience?.map((experience) => (
            <Wrapper className="bg-gray-300">
              <h1>
                {experience?.title} -
                <span className="font-bold"> {experience?.employer}</span>
              </h1>
              <p>Location: {experience?.location}</p>
              <p>{experience?.description}</p>
            </Wrapper>
          ))}
        </Wrapper>

        <Wrapper className="col-start-2 col-span-3">
          <h1 className="font-bold uppercase text-xl text-center text-gray-800">
            Skills
          </h1>
          {resume.Skill?.map((skill) => (
            <Wrapper className="bg-gray-300">
              <h1>
                {skill?.name} -
                <span className="font-bold"> {skill?.skillLevel}</span>
              </h1>
              <p>{skill?.description}</p>
            </Wrapper>
          ))}
        </Wrapper>

        <Wrapper className="col-start-2 col-span-3">
          <h1 className="font-bold uppercase text-xl text-center text-gray-800">
            Languages
          </h1>
          {resume.Language?.map((language) => (
            <Wrapper className="bg-gray-300">
              <h1>
                {language?.language} -
                <span className="font-bold"> {language?.languageLevel}</span>
              </h1>
            </Wrapper>
          ))}
        </Wrapper>

        <Wrapper className="col-start-2 col-span-3">
          <h1 className="font-bold uppercase text-xl text-center text-gray-800">
            Certification
          </h1>
          {resume.Certificate?.map((certificate) => (
            <Wrapper className="bg-gray-300">
              <h1 className="font-bold">{certificate?.name}</h1>
              <p>{certificate?.description}</p>
            </Wrapper>
          ))}
        </Wrapper>

        <Wrapper className="col-start-2 col-span-3">
          <h1 className="font-bold uppercase text-xl text-center text-gray-800">
            Hobbies
          </h1>
          {resume.Hobby?.map((hobby) => (
            <Wrapper className="bg-gray-300">
              <h1 className="font-bold">{hobby?.name}</h1>
              <p>{hobby?.description}</p>
            </Wrapper>
          ))}
        </Wrapper>

        <Wrapper className="col-start-2 col-span-3">
          <h1 className="font-bold uppercase text-xl text-center text-gray-800">
            Personal Projects
          </h1>
          {resume.PersonalProject?.map((project) => (
            <Wrapper className="bg-gray-300">
              <h1 className="font-bold">{project?.title}</h1>
              <p>{project?.description}</p>
            </Wrapper>
          ))}
        </Wrapper>

        <Wrapper className="col-start-2 col-span-3">
          <h1 className="font-bold uppercase text-xl text-center text-gray-800">
            Courses
          </h1>
          {resume.Course?.map((course) => (
            <Wrapper className="bg-gray-300">
              <h1>
                {course?.title} at
                <span className="font-bold"> {course?.institution}</span>
              </h1>
            </Wrapper>
          ))}
        </Wrapper>

        <Wrapper className="col-start-2 col-span-3">
          <h1 className="font-bold uppercase text-xl text-center text-gray-800">
            Awards
          </h1>
          {resume.Award?.map((award) => (
            <Wrapper className="bg-gray-300">
              <h1>
                {award?.name} by
                <span className="font-bold"> {award?.issuer}</span>
              </h1>
              <p>{award?.description}</p>
              <p>Date: {award?.date}</p>
            </Wrapper>
          ))}
        </Wrapper>

        <Wrapper className="col-start-2 col-span-3">
          <h1 className="font-bold uppercase text-xl text-center text-gray-800">
            Organisations
          </h1>
          {resume.Organisation?.map((org) => (
            <Wrapper className="bg-gray-300">
              <h1>
                {org?.position} at
                <span className="font-bold"> {org?.name}</span>
              </h1>
              <p>Location: {org?.location}</p>
              <p>{org?.description}</p>
              <p>From: {org?.start}</p>
              <p>To: {org?.end || "Present"}</p>
            </Wrapper>
          ))}
        </Wrapper>

        <Wrapper className="col-start-2 col-span-3">
          <h1 className="font-bold uppercase text-xl text-center text-gray-800">
            Publications
          </h1>
          {resume.Publication?.map((publication) => (
            <Wrapper className="bg-gray-300">
              <h1>
                {publication?.name} by
                <span className="font-bold"> {publication?.publisher}</span>
              </h1>

              <p>{publication?.description}</p>
              <p>{publication?.date ? `Date: ${publication?.date}` : ""}</p>
              <p>{publication?.link}</p>
            </Wrapper>
          ))}
        </Wrapper>

        <Wrapper className="col-start-2 col-span-3">
          <h1 className="font-bold uppercase text-xl text-center text-gray-800">
            References
          </h1>
          {resume.ResumeReference?.map((reference) => (
            <Wrapper className="bg-gray-300">
              <h1>
                {reference?.name} -
                <span className="font-bold">
                  {" "}
                  {reference?.title} @ {reference?.organisation}
                </span>
              </h1>

              <p>{reference?.email ? `Email: ${reference?.email}` : ""}</p>
              <p>
                {reference?.phoneNumber
                  ? `Phone: ${reference?.phoneNumber}`
                  : ""}
              </p>
            </Wrapper>
          ))}
        </Wrapper>
      </div>
    </div>
  );
};

export default ResumeComponent;
