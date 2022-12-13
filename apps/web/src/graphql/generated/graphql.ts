/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Block = {
  __typename?: 'Block';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<Span>>>;
  list?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
};

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Boolean']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type Certification = {
  __typename?: 'Certification';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type CertificationFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  link?: InputMaybe<StringFilter>;
  shortDescription?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CertificationSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  shortDescription?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Client = Document & {
  __typename?: 'Client';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  descriptionRaw?: Maybe<Scalars['JSON']>;
  image?: Maybe<Image>;
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
};

export type ClientFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  image?: InputMaybe<ImageFilter>;
  name?: InputMaybe<StringFilter>;
  shortDescription?: InputMaybe<StringFilter>;
};

export type ClientSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageSorting>;
  name?: InputMaybe<SortOrder>;
  shortDescription?: InputMaybe<SortOrder>;
};

export type ContactInformation = Document & {
  __typename?: 'ContactInformation';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  linkedInLink?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
};

export type ContactInformationFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  address?: InputMaybe<StringFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  linkedInLink?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  postalCode?: InputMaybe<StringFilter>;
};

export type ContactInformationSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  linkedInLink?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  postalCode?: InputMaybe<SortOrder>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Date']>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** A Sanity document */
export type Document = {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DocumentSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
};

export type Education = {
  __typename?: 'Education';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  degree?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['Date']>;
  fieldOfStudy?: Maybe<Scalars['String']>;
  school?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
};

export type EducationFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  degree?: InputMaybe<StringFilter>;
  end?: InputMaybe<DateFilter>;
  fieldOfStudy?: InputMaybe<StringFilter>;
  school?: InputMaybe<StringFilter>;
  start?: InputMaybe<DateFilter>;
};

export type EducationSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  degree?: InputMaybe<SortOrder>;
  end?: InputMaybe<SortOrder>;
  fieldOfStudy?: InputMaybe<SortOrder>;
  school?: InputMaybe<SortOrder>;
  start?: InputMaybe<SortOrder>;
};

export type Employee = Document & {
  __typename?: 'Employee';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type EmployeeFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  email?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type EmployeeSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Expertise = Document & {
  __typename?: 'Expertise';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  descriptionRaw?: Maybe<Scalars['JSON']>;
  image?: Maybe<Image>;
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
};

export type ExpertiseFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  image?: InputMaybe<ImageFilter>;
  name?: InputMaybe<StringFilter>;
  shortDescription?: InputMaybe<StringFilter>;
};

export type ExpertiseSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageSorting>;
  name?: InputMaybe<SortOrder>;
  shortDescription?: InputMaybe<SortOrder>;
};

export type File = {
  __typename?: 'File';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityFileAssetFilter>;
};

export type FileSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Float']>;
};

export type Geopoint = {
  __typename?: 'Geopoint';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type GeopointFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alt?: InputMaybe<FloatFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alt?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['ID']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['ID']>;
  nin?: InputMaybe<Array<Scalars['ID']>>;
};

export type Image = {
  __typename?: 'Image';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};

export type ImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityImageAssetFilter>;
  crop?: InputMaybe<SanityImageCropFilter>;
  hotspot?: InputMaybe<SanityImageHotspotFilter>;
};

export type ImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  crop?: InputMaybe<SanityImageCropSorting>;
  hotspot?: InputMaybe<SanityImageHotspotSorting>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Int']>;
};

export type Language = Document & {
  __typename?: 'Language';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type LanguageFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  name?: InputMaybe<StringFilter>;
};

export type LanguageSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type PersonalInformation = {
  __typename?: 'PersonalInformation';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  aboutRaw?: Maybe<Scalars['JSON']>;
  address?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Float']>;
  city?: Maybe<Scalars['String']>;
  githubLink?: Maybe<Scalars['String']>;
  linkedinLink?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<Image>;
  status?: Maybe<Scalars['String']>;
};

export type PersonalInformationFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  address?: InputMaybe<StringFilter>;
  age?: InputMaybe<FloatFilter>;
  city?: InputMaybe<StringFilter>;
  githubLink?: InputMaybe<StringFilter>;
  linkedinLink?: InputMaybe<StringFilter>;
  postalCode?: InputMaybe<StringFilter>;
  profilePicture?: InputMaybe<ImageFilter>;
  status?: InputMaybe<StringFilter>;
};

export type PersonalInformationSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  age?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  githubLink?: InputMaybe<SortOrder>;
  linkedinLink?: InputMaybe<SortOrder>;
  postalCode?: InputMaybe<SortOrder>;
  profilePicture?: InputMaybe<ImageSorting>;
  status?: InputMaybe<SortOrder>;
};

export type ProfessionalExperience = {
  __typename?: 'ProfessionalExperience';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  descriptionRaw?: Maybe<Scalars['JSON']>;
  employer?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['Date']>;
  location?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
};

export type ProfessionalExperienceFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  employer?: InputMaybe<StringFilter>;
  end?: InputMaybe<DateFilter>;
  location?: InputMaybe<StringFilter>;
  start?: InputMaybe<DateFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ProfessionalExperienceSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  employer?: InputMaybe<SortOrder>;
  end?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  start?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Publication = {
  __typename?: 'Publication';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  descriptionRaw?: Maybe<Scalars['JSON']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PublicationFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  link?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PublicationSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Resume = Document & {
  __typename?: 'Resume';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  certification?: Maybe<Array<Maybe<Certification>>>;
  education?: Maybe<Array<Maybe<Education>>>;
  employee?: Maybe<Employee>;
  language?: Maybe<Array<Maybe<Language>>>;
  personalInformation?: Maybe<PersonalInformation>;
  professionalExperience?: Maybe<Array<Maybe<ProfessionalExperience>>>;
  publication?: Maybe<Array<Maybe<Publication>>>;
  skill?: Maybe<Array<Maybe<Skill>>>;
};

export type ResumeFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  employee?: InputMaybe<EmployeeFilter>;
  personalInformation?: InputMaybe<PersonalInformationFilter>;
};

export type ResumeSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  personalInformation?: InputMaybe<PersonalInformationSorting>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  Client?: Maybe<Client>;
  ContactInformation?: Maybe<ContactInformation>;
  Document?: Maybe<Document>;
  Employee?: Maybe<Employee>;
  Expertise?: Maybe<Expertise>;
  Language?: Maybe<Language>;
  Resume?: Maybe<Resume>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  Tag?: Maybe<Tag>;
  allClient: Array<Client>;
  allContactInformation: Array<ContactInformation>;
  allDocument: Array<Document>;
  allEmployee: Array<Employee>;
  allExpertise: Array<Expertise>;
  allLanguage: Array<Language>;
  allResume: Array<Resume>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allTag: Array<Tag>;
};


export type RootQueryClientArgs = {
  id: Scalars['ID'];
};


export type RootQueryContactInformationArgs = {
  id: Scalars['ID'];
};


export type RootQueryDocumentArgs = {
  id: Scalars['ID'];
};


export type RootQueryEmployeeArgs = {
  id: Scalars['ID'];
};


export type RootQueryExpertiseArgs = {
  id: Scalars['ID'];
};


export type RootQueryLanguageArgs = {
  id: Scalars['ID'];
};


export type RootQueryResumeArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID'];
};


export type RootQueryTagArgs = {
  id: Scalars['ID'];
};


export type RootQueryAllClientArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ClientSorting>>;
  where?: InputMaybe<ClientFilter>;
};


export type RootQueryAllContactInformationArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ContactInformationSorting>>;
  where?: InputMaybe<ContactInformationFilter>;
};


export type RootQueryAllDocumentArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DocumentSorting>>;
  where?: InputMaybe<DocumentFilter>;
};


export type RootQueryAllEmployeeArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<EmployeeSorting>>;
  where?: InputMaybe<EmployeeFilter>;
};


export type RootQueryAllExpertiseArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ExpertiseSorting>>;
  where?: InputMaybe<ExpertiseFilter>;
};


export type RootQueryAllLanguageArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<LanguageSorting>>;
  where?: InputMaybe<LanguageFilter>;
};


export type RootQueryAllResumeArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ResumeSorting>>;
  where?: InputMaybe<ResumeFilter>;
};


export type RootQueryAllSanityFileAssetArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SanityFileAssetSorting>>;
  where?: InputMaybe<SanityFileAssetFilter>;
};


export type RootQueryAllSanityImageAssetArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SanityImageAssetSorting>>;
  where?: InputMaybe<SanityImageAssetFilter>;
};


export type RootQueryAllTagArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TagSorting>>;
  where?: InputMaybe<TagFilter>;
};

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceDataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  __typename?: 'SanityFileAsset';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  altText?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityFileAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageAsset = Document & {
  __typename?: 'SanityImageAsset';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  altText?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  mimeType?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']>;
  uploadId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<SanityImageMetadataFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  uploadId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityImageAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SanityImageMetadataSorting>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  uploadId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
  top?: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  bottom?: InputMaybe<FloatFilter>;
  left?: InputMaybe<FloatFilter>;
  right?: InputMaybe<FloatFilter>;
  top?: InputMaybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  bottom?: InputMaybe<SortOrder>;
  left?: InputMaybe<SortOrder>;
  right?: InputMaybe<SortOrder>;
  top?: InputMaybe<SortOrder>;
};

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  aspectRatio?: InputMaybe<FloatFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  aspectRatio?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
  x?: InputMaybe<FloatFilter>;
  y?: InputMaybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
  x?: InputMaybe<SortOrder>;
  y?: InputMaybe<SortOrder>;
};

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  blurHash?: Maybe<Scalars['String']>;
  dimensions?: Maybe<SanityImageDimensions>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Geopoint>;
  lqip?: Maybe<Scalars['String']>;
  palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  blurHash?: InputMaybe<StringFilter>;
  dimensions?: InputMaybe<SanityImageDimensionsFilter>;
  hasAlpha?: InputMaybe<BooleanFilter>;
  isOpaque?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<GeopointFilter>;
  lqip?: InputMaybe<StringFilter>;
  palette?: InputMaybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  blurHash?: InputMaybe<SortOrder>;
  dimensions?: InputMaybe<SanityImageDimensionsSorting>;
  hasAlpha?: InputMaybe<SortOrder>;
  isOpaque?: InputMaybe<SortOrder>;
  location?: InputMaybe<GeopointSorting>;
  lqip?: InputMaybe<SortOrder>;
  palette?: InputMaybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  dominant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  muted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  background?: InputMaybe<StringFilter>;
  foreground?: InputMaybe<StringFilter>;
  population?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  background?: InputMaybe<SortOrder>;
  foreground?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
  /** All documents that are drafts. */
  is_draft?: InputMaybe<Scalars['Boolean']>;
  /** All documents referencing the given document ID. */
  references?: InputMaybe<Scalars['ID']>;
};

export type Skill = {
  __typename?: 'Skill';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
};

export type SkillFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  shortDescription?: InputMaybe<StringFilter>;
};

export type SkillSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  shortDescription?: InputMaybe<SortOrder>;
};

export type Slug = {
  __typename?: 'Slug';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};

export type SlugFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  current?: InputMaybe<StringFilter>;
  source?: InputMaybe<StringFilter>;
};

export type SlugSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  current?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC'
}

export type Span = {
  __typename?: 'Span';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['String']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<Scalars['String']>>;
};

export type Tag = Document & {
  __typename?: 'Tag';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type TagFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  name?: InputMaybe<StringFilter>;
};

export type TagSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type DefaultCertificationFragment = { __typename?: 'Certification', title?: string | null, shortDescription?: string | null, link?: string | null } & { ' $fragmentName'?: 'DefaultCertificationFragment' };

export type DefaultEducationFragment = { __typename?: 'Education', school?: string | null, degree?: string | null, fieldOfStudy?: string | null, start?: any | null, end?: any | null } & { ' $fragmentName'?: 'DefaultEducationFragment' };

export type DefaultPersonalInformationFragment = { __typename?: 'PersonalInformation', address?: string | null, postalCode?: string | null, city?: string | null, age?: number | null, githubLink?: string | null, linkedinLink?: string | null, status?: string | null, aboutRaw?: any | null, profilePicture?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null } & { ' $fragmentName'?: 'DefaultPersonalInformationFragment' };

export type DefaultProfessionalExperienceFragment = { __typename?: 'ProfessionalExperience', employer?: string | null, location?: string | null, start?: any | null, end?: any | null, descriptionRaw?: any | null } & { ' $fragmentName'?: 'DefaultProfessionalExperienceFragment' };

export type DefaultPublicationFragment = { __typename?: 'Publication', title?: string | null, link?: string | null, descriptionRaw?: any | null } & { ' $fragmentName'?: 'DefaultPublicationFragment' };

export type DefaultSkillFragment = { __typename?: 'Skill', name?: string | null, shortDescription?: string | null } & { ' $fragmentName'?: 'DefaultSkillFragment' };

export type ContactInformationQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactInformationQuery = { __typename?: 'RootQuery', allContactInformation: Array<{ __typename?: 'ContactInformation', email?: string | null, phone?: string | null, linkedInLink?: string | null, address?: string | null, postalCode?: string | null, city?: string | null, country?: string | null }> };

export type EmployeeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type EmployeeQuery = { __typename?: 'RootQuery', Employee?: { __typename?: 'Employee', _id?: string | null, name?: string | null, email?: string | null, title?: string | null } | null, allResume: Array<{ __typename?: 'Resume', personalInformation?: (
      { __typename?: 'PersonalInformation' }
      & { ' $fragmentRefs'?: { 'DefaultPersonalInformationFragment': DefaultPersonalInformationFragment } }
    ) | null, education?: Array<(
      { __typename?: 'Education' }
      & { ' $fragmentRefs'?: { 'DefaultEducationFragment': DefaultEducationFragment } }
    ) | null> | null, professionalExperience?: Array<(
      { __typename?: 'ProfessionalExperience' }
      & { ' $fragmentRefs'?: { 'DefaultProfessionalExperienceFragment': DefaultProfessionalExperienceFragment } }
    ) | null> | null, skill?: Array<(
      { __typename?: 'Skill' }
      & { ' $fragmentRefs'?: { 'DefaultSkillFragment': DefaultSkillFragment } }
    ) | null> | null, language?: Array<{ __typename?: 'Language', name?: string | null } | null> | null, certification?: Array<(
      { __typename?: 'Certification' }
      & { ' $fragmentRefs'?: { 'DefaultCertificationFragment': DefaultCertificationFragment } }
    ) | null> | null, publication?: Array<(
      { __typename?: 'Publication' }
      & { ' $fragmentRefs'?: { 'DefaultPublicationFragment': DefaultPublicationFragment } }
    ) | null> | null }> };

export type EmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type EmployeesQuery = { __typename?: 'RootQuery', allEmployee: Array<{ __typename?: 'Employee', _id?: string | null, name?: string | null, email?: string | null, title?: string | null }> };

export type ExpertisesQueryVariables = Exact<{ [key: string]: never; }>;


export type ExpertisesQuery = { __typename?: 'RootQuery', allExpertise: Array<{ __typename?: 'Expertise', name?: string | null, shortDescription?: string | null, tags?: Array<{ __typename?: 'Tag', name?: string | null } | null> | null, image?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null }> };

export const DefaultCertificationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultCertification"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Certification"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]} as unknown as DocumentNode<DefaultCertificationFragment, unknown>;
export const DefaultEducationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultEducation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Education"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"school"}},{"kind":"Field","name":{"kind":"Name","value":"degree"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOfStudy"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]} as unknown as DocumentNode<DefaultEducationFragment, unknown>;
export const DefaultPersonalInformationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPersonalInformation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonalInformation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profilePicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"githubLink"}},{"kind":"Field","name":{"kind":"Name","value":"linkedinLink"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"aboutRaw"}}]}}]} as unknown as DocumentNode<DefaultPersonalInformationFragment, unknown>;
export const DefaultProfessionalExperienceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultProfessionalExperience"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProfessionalExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employer"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionRaw"}}]}}]} as unknown as DocumentNode<DefaultProfessionalExperienceFragment, unknown>;
export const DefaultPublicationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultPublication"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionRaw"}}]}}]} as unknown as DocumentNode<DefaultPublicationFragment, unknown>;
export const DefaultSkillFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DefaultSkill"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Skill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}}]}}]} as unknown as DocumentNode<DefaultSkillFragment, unknown>;
export const ContactInformationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ContactInformation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allContactInformation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"linkedInLink"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}}]}}]} as unknown as DocumentNode<ContactInformationQuery, ContactInformationQueryVariables>;
export const EmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Employee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Employee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"allResume"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"employee"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personalInformation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPersonalInformation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"education"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultEducation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"professionalExperience"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultProfessionalExperience"}}]}},{"kind":"Field","name":{"kind":"Name","value":"skill"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultSkill"}}]}},{"kind":"Field","name":{"kind":"Name","value":"language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"certification"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultCertification"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DefaultPublication"}}]}}]}}]}},...DefaultPersonalInformationFragmentDoc.definitions,...DefaultEducationFragmentDoc.definitions,...DefaultProfessionalExperienceFragmentDoc.definitions,...DefaultSkillFragmentDoc.definitions,...DefaultCertificationFragmentDoc.definitions,...DefaultPublicationFragmentDoc.definitions]} as unknown as DocumentNode<EmployeeQuery, EmployeeQueryVariables>;
export const EmployeesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Employees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allEmployee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<EmployeesQuery, EmployeesQueryVariables>;
export const ExpertisesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Expertises"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allExpertise"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ExpertisesQuery, ExpertisesQueryVariables>;