/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  fragment DefaultClient on Client {\n    _id\n    name\n    shortDescription\n    descriptionRaw\n    tags {\n      ...DefaultTag\n    }\n    image {\n      asset {\n        url\n      }\n    }\n  }\n": types.DefaultClientFragmentDoc,
    "\n  fragment DefaultEmployee on Employee {\n    _id\n    name\n    email\n    title\n    image {\n      asset {\n        url\n      }\n    }\n  }\n": types.DefaultEmployeeFragmentDoc,
    "\n  fragment DefaultExpertise on Expertise {\n    name\n    shortDescription\n    descriptionRaw\n    tags {\n      name\n    }\n    image {\n      asset {\n        url\n      }\n    }\n  }\n": types.DefaultExpertiseFragmentDoc,
    "\n  fragment DefaultTag on Tag {\n    _id\n    name\n  }\n": types.DefaultTagFragmentDoc,
    "\n  fragment DefaultCertification on Certification {\n    title\n    shortDescription\n    link\n  }\n": types.DefaultCertificationFragmentDoc,
    "\n  fragment DefaultEducation on Education {\n    school\n    degree\n    fieldOfStudy\n    start\n    end\n  }\n": types.DefaultEducationFragmentDoc,
    "\n  fragment DefaultLanguage on Language {\n    name\n  }\n": types.DefaultLanguageFragmentDoc,
    "\n  fragment DefaultPersonalInformation on PersonalInformation {\n    address\n    postalCode\n    city\n    githubLink\n    linkedinLink\n    status\n    aboutRaw\n  }\n": types.DefaultPersonalInformationFragmentDoc,
    "\n  fragment DefaultProfessionalExperience on ProfessionalExperience {\n    employer\n    location\n    start\n    end\n    descriptionRaw\n  }\n": types.DefaultProfessionalExperienceFragmentDoc,
    "\n  fragment DefaultPublication on Publication {\n    title\n    link\n    descriptionRaw\n  }\n": types.DefaultPublicationFragmentDoc,
    "\n  fragment DefaultResume on Resume {\n    personalInformation {\n      ...DefaultPersonalInformation\n    }\n    education {\n      ...DefaultEducation\n    }\n    professionalExperience {\n      ...DefaultProfessionalExperience\n    }\n    skill {\n      ...DefaultSkill\n    }\n    language {\n      ...DefaultLanguage\n    }\n    certification {\n      ...DefaultCertification\n    }\n    publication {\n      ...DefaultPublication\n    }\n  }\n": types.DefaultResumeFragmentDoc,
    "\n  fragment DefaultSkill on Skill {\n    _id\n    name\n    shortDescription\n  }\n": types.DefaultSkillFragmentDoc,
    "\n  query AllClients {\n    allClient {\n      ...DefaultClient\n    }\n  }\n": types.AllClientsDocument,
    "\n  query AllEmployees {\n    allEmployee(sort: { _createdAt: ASC }) {\n      ...DefaultEmployee\n    }\n  }\n": types.AllEmployeesDocument,
    "\n  query ClientsWithTags {\n    allClient {\n      ...DefaultClient\n    }\n  }\n": types.ClientsWithTagsDocument,
    "\n  query ContactInformation {\n    allContactInformation {\n      email\n      phone\n      linkedInLink\n      address\n      postalCode\n      city\n      country\n    }\n  }\n": types.ContactInformationDocument,
    "\n  query Employee($id: ID!) {\n    Employee(id: $id) {\n      ...DefaultEmployee\n    }\n    allResume(where: { employee: { _id: { eq: $id } } }) {\n      ...DefaultResume\n    }\n  }\n": types.EmployeeDocument,
    "\n  query EmployeesWithSkills {\n    allResume {\n      employee {\n        ...DefaultEmployee\n      }\n      skill {\n        _id\n        name\n      }\n    }\n    allSkill {\n      _id\n      name\n    }\n  }\n": types.EmployeesWithSkillsDocument,
    "\n  query Expertises {\n    allExpertise {\n      ...DefaultExpertise\n    }\n  }\n": types.ExpertisesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DefaultClient on Client {\n    _id\n    name\n    shortDescription\n    descriptionRaw\n    tags {\n      ...DefaultTag\n    }\n    image {\n      asset {\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment DefaultClient on Client {\n    _id\n    name\n    shortDescription\n    descriptionRaw\n    tags {\n      ...DefaultTag\n    }\n    image {\n      asset {\n        url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DefaultEmployee on Employee {\n    _id\n    name\n    email\n    title\n    image {\n      asset {\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment DefaultEmployee on Employee {\n    _id\n    name\n    email\n    title\n    image {\n      asset {\n        url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DefaultExpertise on Expertise {\n    name\n    shortDescription\n    descriptionRaw\n    tags {\n      name\n    }\n    image {\n      asset {\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment DefaultExpertise on Expertise {\n    name\n    shortDescription\n    descriptionRaw\n    tags {\n      name\n    }\n    image {\n      asset {\n        url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DefaultTag on Tag {\n    _id\n    name\n  }\n"): (typeof documents)["\n  fragment DefaultTag on Tag {\n    _id\n    name\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DefaultCertification on Certification {\n    title\n    shortDescription\n    link\n  }\n"): (typeof documents)["\n  fragment DefaultCertification on Certification {\n    title\n    shortDescription\n    link\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DefaultEducation on Education {\n    school\n    degree\n    fieldOfStudy\n    start\n    end\n  }\n"): (typeof documents)["\n  fragment DefaultEducation on Education {\n    school\n    degree\n    fieldOfStudy\n    start\n    end\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DefaultLanguage on Language {\n    name\n  }\n"): (typeof documents)["\n  fragment DefaultLanguage on Language {\n    name\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DefaultPersonalInformation on PersonalInformation {\n    address\n    postalCode\n    city\n    githubLink\n    linkedinLink\n    status\n    aboutRaw\n  }\n"): (typeof documents)["\n  fragment DefaultPersonalInformation on PersonalInformation {\n    address\n    postalCode\n    city\n    githubLink\n    linkedinLink\n    status\n    aboutRaw\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DefaultProfessionalExperience on ProfessionalExperience {\n    employer\n    location\n    start\n    end\n    descriptionRaw\n  }\n"): (typeof documents)["\n  fragment DefaultProfessionalExperience on ProfessionalExperience {\n    employer\n    location\n    start\n    end\n    descriptionRaw\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DefaultPublication on Publication {\n    title\n    link\n    descriptionRaw\n  }\n"): (typeof documents)["\n  fragment DefaultPublication on Publication {\n    title\n    link\n    descriptionRaw\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DefaultResume on Resume {\n    personalInformation {\n      ...DefaultPersonalInformation\n    }\n    education {\n      ...DefaultEducation\n    }\n    professionalExperience {\n      ...DefaultProfessionalExperience\n    }\n    skill {\n      ...DefaultSkill\n    }\n    language {\n      ...DefaultLanguage\n    }\n    certification {\n      ...DefaultCertification\n    }\n    publication {\n      ...DefaultPublication\n    }\n  }\n"): (typeof documents)["\n  fragment DefaultResume on Resume {\n    personalInformation {\n      ...DefaultPersonalInformation\n    }\n    education {\n      ...DefaultEducation\n    }\n    professionalExperience {\n      ...DefaultProfessionalExperience\n    }\n    skill {\n      ...DefaultSkill\n    }\n    language {\n      ...DefaultLanguage\n    }\n    certification {\n      ...DefaultCertification\n    }\n    publication {\n      ...DefaultPublication\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DefaultSkill on Skill {\n    _id\n    name\n    shortDescription\n  }\n"): (typeof documents)["\n  fragment DefaultSkill on Skill {\n    _id\n    name\n    shortDescription\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllClients {\n    allClient {\n      ...DefaultClient\n    }\n  }\n"): (typeof documents)["\n  query AllClients {\n    allClient {\n      ...DefaultClient\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllEmployees {\n    allEmployee(sort: { _createdAt: ASC }) {\n      ...DefaultEmployee\n    }\n  }\n"): (typeof documents)["\n  query AllEmployees {\n    allEmployee(sort: { _createdAt: ASC }) {\n      ...DefaultEmployee\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ClientsWithTags {\n    allClient {\n      ...DefaultClient\n    }\n  }\n"): (typeof documents)["\n  query ClientsWithTags {\n    allClient {\n      ...DefaultClient\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ContactInformation {\n    allContactInformation {\n      email\n      phone\n      linkedInLink\n      address\n      postalCode\n      city\n      country\n    }\n  }\n"): (typeof documents)["\n  query ContactInformation {\n    allContactInformation {\n      email\n      phone\n      linkedInLink\n      address\n      postalCode\n      city\n      country\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Employee($id: ID!) {\n    Employee(id: $id) {\n      ...DefaultEmployee\n    }\n    allResume(where: { employee: { _id: { eq: $id } } }) {\n      ...DefaultResume\n    }\n  }\n"): (typeof documents)["\n  query Employee($id: ID!) {\n    Employee(id: $id) {\n      ...DefaultEmployee\n    }\n    allResume(where: { employee: { _id: { eq: $id } } }) {\n      ...DefaultResume\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query EmployeesWithSkills {\n    allResume {\n      employee {\n        ...DefaultEmployee\n      }\n      skill {\n        _id\n        name\n      }\n    }\n    allSkill {\n      _id\n      name\n    }\n  }\n"): (typeof documents)["\n  query EmployeesWithSkills {\n    allResume {\n      employee {\n        ...DefaultEmployee\n      }\n      skill {\n        _id\n        name\n      }\n    }\n    allSkill {\n      _id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Expertises {\n    allExpertise {\n      ...DefaultExpertise\n    }\n  }\n"): (typeof documents)["\n  query Expertises {\n    allExpertise {\n      ...DefaultExpertise\n    }\n  }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;