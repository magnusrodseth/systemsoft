import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Award = {
  __typename?: 'Award';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  issuer: Scalars['String'];
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  employee?: Maybe<Employees>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type AwardAggregator = {
  __typename?: 'AwardAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AwardConnection = {
  __typename?: 'AwardConnection';
  values?: Maybe<Array<Maybe<Award>>>;
  groupBy?: Maybe<AwardGroupBy>;
  aggregate?: Maybe<AwardAggregator>;
};

export type AwardConnectionCreatedAt = {
  __typename?: 'AwardConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AwardConnection>;
};

export type AwardConnectionDate = {
  __typename?: 'AwardConnectionDate';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AwardConnection>;
};

export type AwardConnectionDescription = {
  __typename?: 'AwardConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AwardConnection>;
};

export type AwardConnectionEmployee = {
  __typename?: 'AwardConnectionEmployee';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AwardConnection>;
};

export type AwardConnectionId = {
  __typename?: 'AwardConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AwardConnection>;
};

export type AwardConnectionIssuer = {
  __typename?: 'AwardConnectionIssuer';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AwardConnection>;
};

export type AwardConnectionName = {
  __typename?: 'AwardConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AwardConnection>;
};

export type AwardConnectionPublished_At = {
  __typename?: 'AwardConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AwardConnection>;
};

export type AwardConnectionUpdatedAt = {
  __typename?: 'AwardConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AwardConnection>;
};

export type AwardConnection_Id = {
  __typename?: 'AwardConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AwardConnection>;
};

export type AwardGroupBy = {
  __typename?: 'AwardGroupBy';
  id?: Maybe<Array<Maybe<AwardConnectionId>>>;
  _id?: Maybe<Array<Maybe<AwardConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<AwardConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<AwardConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<AwardConnectionName>>>;
  issuer?: Maybe<Array<Maybe<AwardConnectionIssuer>>>;
  date?: Maybe<Array<Maybe<AwardConnectionDate>>>;
  description?: Maybe<Array<Maybe<AwardConnectionDescription>>>;
  employee?: Maybe<Array<Maybe<AwardConnectionEmployee>>>;
  published_at?: Maybe<Array<Maybe<AwardConnectionPublished_At>>>;
};

export type AwardInput = {
  name: Scalars['String'];
  issuer: Scalars['String'];
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  employee?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Certificate = {
  __typename?: 'Certificate';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type CertificateAggregator = {
  __typename?: 'CertificateAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CertificateConnection = {
  __typename?: 'CertificateConnection';
  values?: Maybe<Array<Maybe<Certificate>>>;
  groupBy?: Maybe<CertificateGroupBy>;
  aggregate?: Maybe<CertificateAggregator>;
};

export type CertificateConnectionCreatedAt = {
  __typename?: 'CertificateConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CertificateConnection>;
};

export type CertificateConnectionDescription = {
  __typename?: 'CertificateConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CertificateConnection>;
};

export type CertificateConnectionId = {
  __typename?: 'CertificateConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CertificateConnection>;
};

export type CertificateConnectionName = {
  __typename?: 'CertificateConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CertificateConnection>;
};

export type CertificateConnectionPublished_At = {
  __typename?: 'CertificateConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CertificateConnection>;
};

export type CertificateConnectionUpdatedAt = {
  __typename?: 'CertificateConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CertificateConnection>;
};

export type CertificateConnection_Id = {
  __typename?: 'CertificateConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CertificateConnection>;
};

export type CertificateGroupBy = {
  __typename?: 'CertificateGroupBy';
  id?: Maybe<Array<Maybe<CertificateConnectionId>>>;
  _id?: Maybe<Array<Maybe<CertificateConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<CertificateConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<CertificateConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<CertificateConnectionName>>>;
  description?: Maybe<Array<Maybe<CertificateConnectionDescription>>>;
  published_at?: Maybe<Array<Maybe<CertificateConnectionPublished_At>>>;
};

export type CertificateInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ClientInput = {
  slug: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  logo?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Clients = {
  __typename?: 'Clients';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  slug: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  logo?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ClientsAggregator = {
  __typename?: 'ClientsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ClientsConnection = {
  __typename?: 'ClientsConnection';
  values?: Maybe<Array<Maybe<Clients>>>;
  groupBy?: Maybe<ClientsGroupBy>;
  aggregate?: Maybe<ClientsAggregator>;
};

export type ClientsConnectionCreatedAt = {
  __typename?: 'ClientsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ClientsConnection>;
};

export type ClientsConnectionDescription = {
  __typename?: 'ClientsConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ClientsConnection>;
};

export type ClientsConnectionId = {
  __typename?: 'ClientsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ClientsConnection>;
};

export type ClientsConnectionLogo = {
  __typename?: 'ClientsConnectionLogo';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ClientsConnection>;
};

export type ClientsConnectionName = {
  __typename?: 'ClientsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ClientsConnection>;
};

export type ClientsConnectionPublished_At = {
  __typename?: 'ClientsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ClientsConnection>;
};

export type ClientsConnectionSlug = {
  __typename?: 'ClientsConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ClientsConnection>;
};

export type ClientsConnectionUpdatedAt = {
  __typename?: 'ClientsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ClientsConnection>;
};

export type ClientsConnection_Id = {
  __typename?: 'ClientsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ClientsConnection>;
};

export type ClientsGroupBy = {
  __typename?: 'ClientsGroupBy';
  id?: Maybe<Array<Maybe<ClientsConnectionId>>>;
  _id?: Maybe<Array<Maybe<ClientsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ClientsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ClientsConnectionUpdatedAt>>>;
  slug?: Maybe<Array<Maybe<ClientsConnectionSlug>>>;
  name?: Maybe<Array<Maybe<ClientsConnectionName>>>;
  description?: Maybe<Array<Maybe<ClientsConnectionDescription>>>;
  logo?: Maybe<Array<Maybe<ClientsConnectionLogo>>>;
  published_at?: Maybe<Array<Maybe<ClientsConnectionPublished_At>>>;
};

export type ContactInformation = {
  __typename?: 'ContactInformation';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ContactInformationInput = {
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Course = {
  __typename?: 'Course';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  institution?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type CourseAggregator = {
  __typename?: 'CourseAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CourseConnection = {
  __typename?: 'CourseConnection';
  values?: Maybe<Array<Maybe<Course>>>;
  groupBy?: Maybe<CourseGroupBy>;
  aggregate?: Maybe<CourseAggregator>;
};

export type CourseConnectionCreatedAt = {
  __typename?: 'CourseConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CourseConnection>;
};

export type CourseConnectionDescription = {
  __typename?: 'CourseConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CourseConnection>;
};

export type CourseConnectionEnd = {
  __typename?: 'CourseConnectionEnd';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CourseConnection>;
};

export type CourseConnectionId = {
  __typename?: 'CourseConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CourseConnection>;
};

export type CourseConnectionInstitution = {
  __typename?: 'CourseConnectionInstitution';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CourseConnection>;
};

export type CourseConnectionLocation = {
  __typename?: 'CourseConnectionLocation';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CourseConnection>;
};

export type CourseConnectionPublished_At = {
  __typename?: 'CourseConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CourseConnection>;
};

export type CourseConnectionStart = {
  __typename?: 'CourseConnectionStart';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CourseConnection>;
};

export type CourseConnectionTitle = {
  __typename?: 'CourseConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CourseConnection>;
};

export type CourseConnectionUpdatedAt = {
  __typename?: 'CourseConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CourseConnection>;
};

export type CourseConnection_Id = {
  __typename?: 'CourseConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CourseConnection>;
};

export type CourseGroupBy = {
  __typename?: 'CourseGroupBy';
  id?: Maybe<Array<Maybe<CourseConnectionId>>>;
  _id?: Maybe<Array<Maybe<CourseConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<CourseConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<CourseConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<CourseConnectionTitle>>>;
  institution?: Maybe<Array<Maybe<CourseConnectionInstitution>>>;
  location?: Maybe<Array<Maybe<CourseConnectionLocation>>>;
  start?: Maybe<Array<Maybe<CourseConnectionStart>>>;
  end?: Maybe<Array<Maybe<CourseConnectionEnd>>>;
  description?: Maybe<Array<Maybe<CourseConnectionDescription>>>;
  published_at?: Maybe<Array<Maybe<CourseConnectionPublished_At>>>;
};

export type CourseInput = {
  title: Scalars['String'];
  institution?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};



export type Education = {
  __typename?: 'Education';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  start: Scalars['Date'];
  end?: Maybe<Scalars['Date']>;
  name: Scalars['String'];
  school: Scalars['String'];
  link?: Maybe<Scalars['String']>;
  employee?: Maybe<Employees>;
  description: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
};

export type EducationAggregator = {
  __typename?: 'EducationAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EducationConnection = {
  __typename?: 'EducationConnection';
  values?: Maybe<Array<Maybe<Education>>>;
  groupBy?: Maybe<EducationGroupBy>;
  aggregate?: Maybe<EducationAggregator>;
};

export type EducationConnectionCreatedAt = {
  __typename?: 'EducationConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EducationConnection>;
};

export type EducationConnectionDescription = {
  __typename?: 'EducationConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EducationConnection>;
};

export type EducationConnectionEmployee = {
  __typename?: 'EducationConnectionEmployee';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<EducationConnection>;
};

export type EducationConnectionEnd = {
  __typename?: 'EducationConnectionEnd';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<EducationConnection>;
};

export type EducationConnectionId = {
  __typename?: 'EducationConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<EducationConnection>;
};

export type EducationConnectionLink = {
  __typename?: 'EducationConnectionLink';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EducationConnection>;
};

export type EducationConnectionName = {
  __typename?: 'EducationConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EducationConnection>;
};

export type EducationConnectionPublished_At = {
  __typename?: 'EducationConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EducationConnection>;
};

export type EducationConnectionSchool = {
  __typename?: 'EducationConnectionSchool';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EducationConnection>;
};

export type EducationConnectionStart = {
  __typename?: 'EducationConnectionStart';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<EducationConnection>;
};

export type EducationConnectionUpdatedAt = {
  __typename?: 'EducationConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EducationConnection>;
};

export type EducationConnection_Id = {
  __typename?: 'EducationConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<EducationConnection>;
};

export type EducationGroupBy = {
  __typename?: 'EducationGroupBy';
  id?: Maybe<Array<Maybe<EducationConnectionId>>>;
  _id?: Maybe<Array<Maybe<EducationConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<EducationConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<EducationConnectionUpdatedAt>>>;
  start?: Maybe<Array<Maybe<EducationConnectionStart>>>;
  end?: Maybe<Array<Maybe<EducationConnectionEnd>>>;
  name?: Maybe<Array<Maybe<EducationConnectionName>>>;
  school?: Maybe<Array<Maybe<EducationConnectionSchool>>>;
  link?: Maybe<Array<Maybe<EducationConnectionLink>>>;
  employee?: Maybe<Array<Maybe<EducationConnectionEmployee>>>;
  description?: Maybe<Array<Maybe<EducationConnectionDescription>>>;
  published_at?: Maybe<Array<Maybe<EducationConnectionPublished_At>>>;
};

export type EducationInput = {
  start: Scalars['Date'];
  end?: Maybe<Scalars['Date']>;
  name: Scalars['String'];
  school: Scalars['String'];
  link?: Maybe<Scalars['String']>;
  employee?: Maybe<Scalars['ID']>;
  description: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EmployeeInput = {
  slug: Scalars['String'];
  name: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  educations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  professional_experiences?: Maybe<Array<Maybe<Scalars['ID']>>>;
  skills?: Maybe<Array<Maybe<Scalars['ID']>>>;
  personal_detail?: Maybe<Scalars['ID']>;
  languages?: Maybe<Array<Maybe<Scalars['ID']>>>;
  courses?: Maybe<Array<Maybe<Scalars['ID']>>>;
  certificates?: Maybe<Array<Maybe<Scalars['ID']>>>;
  personal_projects?: Maybe<Array<Maybe<Scalars['ID']>>>;
  awards?: Maybe<Array<Maybe<Scalars['ID']>>>;
  interests?: Maybe<Array<Maybe<Scalars['ID']>>>;
  organisations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  publications?: Maybe<Array<Maybe<Scalars['ID']>>>;
  resume_references?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Employees = {
  __typename?: 'Employees';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  slug: Scalars['String'];
  name: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  personal_detail?: Maybe<PersonalDetails>;
  published_at?: Maybe<Scalars['DateTime']>;
  educations?: Maybe<Array<Maybe<Education>>>;
  professional_experiences?: Maybe<Array<Maybe<ProfessionalExperience>>>;
  skills?: Maybe<Array<Maybe<Skill>>>;
  languages?: Maybe<Array<Maybe<Language>>>;
  courses?: Maybe<Array<Maybe<Course>>>;
  certificates?: Maybe<Array<Maybe<Certificate>>>;
  personal_projects?: Maybe<Array<Maybe<PersonalProject>>>;
  awards?: Maybe<Array<Maybe<Award>>>;
  interests?: Maybe<Array<Maybe<Interest>>>;
  organisations?: Maybe<Array<Maybe<Organisation>>>;
  publications?: Maybe<Array<Maybe<Publication>>>;
  resume_references?: Maybe<Array<Maybe<ResumeReference>>>;
};


export type EmployeesEducationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type EmployeesProfessional_ExperiencesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type EmployeesSkillsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type EmployeesLanguagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type EmployeesCoursesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type EmployeesCertificatesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type EmployeesPersonal_ProjectsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type EmployeesAwardsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type EmployeesInterestsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type EmployeesOrganisationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type EmployeesPublicationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type EmployeesResume_ReferencesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type EmployeesAggregator = {
  __typename?: 'EmployeesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EmployeesConnection = {
  __typename?: 'EmployeesConnection';
  values?: Maybe<Array<Maybe<Employees>>>;
  groupBy?: Maybe<EmployeesGroupBy>;
  aggregate?: Maybe<EmployeesAggregator>;
};

export type EmployeesConnectionCreatedAt = {
  __typename?: 'EmployeesConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EmployeesConnection>;
};

export type EmployeesConnectionEmail = {
  __typename?: 'EmployeesConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EmployeesConnection>;
};

export type EmployeesConnectionId = {
  __typename?: 'EmployeesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<EmployeesConnection>;
};

export type EmployeesConnectionName = {
  __typename?: 'EmployeesConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EmployeesConnection>;
};

export type EmployeesConnectionPersonal_Detail = {
  __typename?: 'EmployeesConnectionPersonal_detail';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<EmployeesConnection>;
};

export type EmployeesConnectionPublished_At = {
  __typename?: 'EmployeesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EmployeesConnection>;
};

export type EmployeesConnectionSlug = {
  __typename?: 'EmployeesConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EmployeesConnection>;
};

export type EmployeesConnectionTitle = {
  __typename?: 'EmployeesConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EmployeesConnection>;
};

export type EmployeesConnectionUpdatedAt = {
  __typename?: 'EmployeesConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EmployeesConnection>;
};

export type EmployeesConnection_Id = {
  __typename?: 'EmployeesConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<EmployeesConnection>;
};

export type EmployeesGroupBy = {
  __typename?: 'EmployeesGroupBy';
  id?: Maybe<Array<Maybe<EmployeesConnectionId>>>;
  _id?: Maybe<Array<Maybe<EmployeesConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<EmployeesConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<EmployeesConnectionUpdatedAt>>>;
  slug?: Maybe<Array<Maybe<EmployeesConnectionSlug>>>;
  name?: Maybe<Array<Maybe<EmployeesConnectionName>>>;
  title?: Maybe<Array<Maybe<EmployeesConnectionTitle>>>;
  email?: Maybe<Array<Maybe<EmployeesConnectionEmail>>>;
  personal_detail?: Maybe<Array<Maybe<EmployeesConnectionPersonal_Detail>>>;
  published_at?: Maybe<Array<Maybe<EmployeesConnectionPublished_At>>>;
};

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type InputId = {
  id: Scalars['ID'];
};

export type Interest = {
  __typename?: 'Interest';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type InterestAggregator = {
  __typename?: 'InterestAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type InterestConnection = {
  __typename?: 'InterestConnection';
  values?: Maybe<Array<Maybe<Interest>>>;
  groupBy?: Maybe<InterestGroupBy>;
  aggregate?: Maybe<InterestAggregator>;
};

export type InterestConnectionCreatedAt = {
  __typename?: 'InterestConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<InterestConnection>;
};

export type InterestConnectionDescription = {
  __typename?: 'InterestConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<InterestConnection>;
};

export type InterestConnectionId = {
  __typename?: 'InterestConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<InterestConnection>;
};

export type InterestConnectionName = {
  __typename?: 'InterestConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<InterestConnection>;
};

export type InterestConnectionPublished_At = {
  __typename?: 'InterestConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<InterestConnection>;
};

export type InterestConnectionUpdatedAt = {
  __typename?: 'InterestConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<InterestConnection>;
};

export type InterestConnection_Id = {
  __typename?: 'InterestConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<InterestConnection>;
};

export type InterestGroupBy = {
  __typename?: 'InterestGroupBy';
  id?: Maybe<Array<Maybe<InterestConnectionId>>>;
  _id?: Maybe<Array<Maybe<InterestConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<InterestConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<InterestConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<InterestConnectionName>>>;
  description?: Maybe<Array<Maybe<InterestConnectionDescription>>>;
  published_at?: Maybe<Array<Maybe<InterestConnectionPublished_At>>>;
};

export type InterestInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type Language = {
  __typename?: 'Language';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  language: Scalars['String'];
  language_level?: Maybe<LanguageLevel>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type LanguageAggregator = {
  __typename?: 'LanguageAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type LanguageConnection = {
  __typename?: 'LanguageConnection';
  values?: Maybe<Array<Maybe<Language>>>;
  groupBy?: Maybe<LanguageGroupBy>;
  aggregate?: Maybe<LanguageAggregator>;
};

export type LanguageConnectionCreatedAt = {
  __typename?: 'LanguageConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LanguageConnection>;
};

export type LanguageConnectionId = {
  __typename?: 'LanguageConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LanguageConnection>;
};

export type LanguageConnectionLanguage = {
  __typename?: 'LanguageConnectionLanguage';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LanguageConnection>;
};

export type LanguageConnectionLanguage_Level = {
  __typename?: 'LanguageConnectionLanguage_level';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LanguageConnection>;
};

export type LanguageConnectionPublished_At = {
  __typename?: 'LanguageConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LanguageConnection>;
};

export type LanguageConnectionUpdatedAt = {
  __typename?: 'LanguageConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LanguageConnection>;
};

export type LanguageConnection_Id = {
  __typename?: 'LanguageConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LanguageConnection>;
};

export type LanguageGroupBy = {
  __typename?: 'LanguageGroupBy';
  id?: Maybe<Array<Maybe<LanguageConnectionId>>>;
  _id?: Maybe<Array<Maybe<LanguageConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<LanguageConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<LanguageConnectionUpdatedAt>>>;
  language?: Maybe<Array<Maybe<LanguageConnectionLanguage>>>;
  language_level?: Maybe<Array<Maybe<LanguageConnectionLanguage_Level>>>;
  published_at?: Maybe<Array<Maybe<LanguageConnectionPublished_At>>>;
};

export type LanguageInput = {
  language: Scalars['String'];
  language_level?: Maybe<LanguageLevel>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Award | AwardConnection | AwardAggregator | AwardGroupBy | AwardConnectionId | AwardConnection_Id | AwardConnectionCreatedAt | AwardConnectionUpdatedAt | AwardConnectionName | AwardConnectionIssuer | AwardConnectionDate | AwardConnectionDescription | AwardConnectionEmployee | AwardConnectionPublished_At | CreateAwardPayload | UpdateAwardPayload | DeleteAwardPayload | Certificate | CertificateConnection | CertificateAggregator | CertificateGroupBy | CertificateConnectionId | CertificateConnection_Id | CertificateConnectionCreatedAt | CertificateConnectionUpdatedAt | CertificateConnectionName | CertificateConnectionDescription | CertificateConnectionPublished_At | CreateCertificatePayload | UpdateCertificatePayload | DeleteCertificatePayload | Clients | ClientsConnection | ClientsAggregator | ClientsGroupBy | ClientsConnectionId | ClientsConnection_Id | ClientsConnectionCreatedAt | ClientsConnectionUpdatedAt | ClientsConnectionSlug | ClientsConnectionName | ClientsConnectionDescription | ClientsConnectionLogo | ClientsConnectionPublished_At | CreateClientPayload | UpdateClientPayload | DeleteClientPayload | ContactInformation | UpdateContactInformationPayload | DeleteContactInformationPayload | Course | CourseConnection | CourseAggregator | CourseGroupBy | CourseConnectionId | CourseConnection_Id | CourseConnectionCreatedAt | CourseConnectionUpdatedAt | CourseConnectionTitle | CourseConnectionInstitution | CourseConnectionLocation | CourseConnectionStart | CourseConnectionEnd | CourseConnectionDescription | CourseConnectionPublished_At | CreateCoursePayload | UpdateCoursePayload | DeleteCoursePayload | Education | EducationConnection | EducationAggregator | EducationGroupBy | EducationConnectionId | EducationConnection_Id | EducationConnectionCreatedAt | EducationConnectionUpdatedAt | EducationConnectionStart | EducationConnectionEnd | EducationConnectionName | EducationConnectionSchool | EducationConnectionLink | EducationConnectionEmployee | EducationConnectionDescription | EducationConnectionPublished_At | CreateEducationPayload | UpdateEducationPayload | DeleteEducationPayload | Employees | EmployeesConnection | EmployeesAggregator | EmployeesGroupBy | EmployeesConnectionId | EmployeesConnection_Id | EmployeesConnectionCreatedAt | EmployeesConnectionUpdatedAt | EmployeesConnectionSlug | EmployeesConnectionName | EmployeesConnectionTitle | EmployeesConnectionEmail | EmployeesConnectionPersonal_Detail | EmployeesConnectionPublished_At | CreateEmployeePayload | UpdateEmployeePayload | DeleteEmployeePayload | Interest | InterestConnection | InterestAggregator | InterestGroupBy | InterestConnectionId | InterestConnection_Id | InterestConnectionCreatedAt | InterestConnectionUpdatedAt | InterestConnectionName | InterestConnectionDescription | InterestConnectionPublished_At | CreateInterestPayload | UpdateInterestPayload | DeleteInterestPayload | Language | LanguageConnection | LanguageAggregator | LanguageGroupBy | LanguageConnectionId | LanguageConnection_Id | LanguageConnectionCreatedAt | LanguageConnectionUpdatedAt | LanguageConnectionLanguage | LanguageConnectionLanguage_Level | LanguageConnectionPublished_At | CreateLanguagePayload | UpdateLanguagePayload | DeleteLanguagePayload | Organisation | OrganisationConnection | OrganisationAggregator | OrganisationGroupBy | OrganisationConnectionId | OrganisationConnection_Id | OrganisationConnectionCreatedAt | OrganisationConnectionUpdatedAt | OrganisationConnectionName | OrganisationConnectionPosition | OrganisationConnectionLocation | OrganisationConnectionStart | OrganisationConnectionEnd | OrganisationConnectionDescription | OrganisationConnectionPublished_At | CreateOrganisationPayload | UpdateOrganisationPayload | DeleteOrganisationPayload | PersonalDetails | PersonalDetailsConnection | PersonalDetailsAggregator | PersonalDetailsGroupBy | PersonalDetailsConnectionId | PersonalDetailsConnection_Id | PersonalDetailsConnectionCreatedAt | PersonalDetailsConnectionUpdatedAt | PersonalDetailsConnectionFull_Name | PersonalDetailsConnectionProfile_Picture | PersonalDetailsConnectionEmail | PersonalDetailsConnectionPhone_Number | PersonalDetailsConnectionFull_Address | PersonalDetailsConnectionDate_Of_Birth | PersonalDetailsConnectionGithub_Link | PersonalDetailsConnectionLinked_In_Link | PersonalDetailsConnectionFamily_Status | PersonalDetailsConnectionAbout_Me | PersonalDetailsConnectionPublished_At | CreatePersonalDetailPayload | UpdatePersonalDetailPayload | DeletePersonalDetailPayload | PersonalProject | PersonalProjectConnection | PersonalProjectAggregator | PersonalProjectGroupBy | PersonalProjectConnectionId | PersonalProjectConnection_Id | PersonalProjectConnectionCreatedAt | PersonalProjectConnectionUpdatedAt | PersonalProjectConnectionTitle | PersonalProjectConnectionStart | PersonalProjectConnectionEnd | PersonalProjectConnectionDescription | PersonalProjectConnectionLink | PersonalProjectConnectionPublished_At | CreatePersonalProjectPayload | UpdatePersonalProjectPayload | DeletePersonalProjectPayload | ProfessionalExperience | ProfessionalExperienceConnection | ProfessionalExperienceAggregator | ProfessionalExperienceGroupBy | ProfessionalExperienceConnectionId | ProfessionalExperienceConnection_Id | ProfessionalExperienceConnectionCreatedAt | ProfessionalExperienceConnectionUpdatedAt | ProfessionalExperienceConnectionTitle | ProfessionalExperienceConnectionEmployer | ProfessionalExperienceConnectionLocation | ProfessionalExperienceConnectionStart | ProfessionalExperienceConnectionEnd | ProfessionalExperienceConnectionDescription | ProfessionalExperienceConnectionEmployee | ProfessionalExperienceConnectionPublished_At | CreateProfessionalExperiencePayload | UpdateProfessionalExperiencePayload | DeleteProfessionalExperiencePayload | Publication | PublicationConnection | PublicationAggregator | PublicationGroupBy | PublicationConnectionId | PublicationConnection_Id | PublicationConnectionCreatedAt | PublicationConnectionUpdatedAt | PublicationConnectionName | PublicationConnectionPublisher | PublicationConnectionDate | PublicationConnectionDescription | PublicationConnectionPublished_At | CreatePublicationPayload | UpdatePublicationPayload | DeletePublicationPayload | References | ReferencesConnection | ReferencesAggregator | ReferencesGroupBy | ReferencesConnectionId | ReferencesConnection_Id | ReferencesConnectionCreatedAt | ReferencesConnectionUpdatedAt | ReferencesConnectionSlug | ReferencesConnectionTitle | ReferencesConnectionDescription | ReferencesConnectionClient | ReferencesConnectionPublished_At | CreateReferencePayload | UpdateReferencePayload | DeleteReferencePayload | ResumeReference | ResumeReferenceConnection | ResumeReferenceAggregator | ResumeReferenceGroupBy | ResumeReferenceConnectionId | ResumeReferenceConnection_Id | ResumeReferenceConnectionCreatedAt | ResumeReferenceConnectionUpdatedAt | ResumeReferenceConnectionName | ResumeReferenceConnectionJob_Title | ResumeReferenceConnectionOrganisation | ResumeReferenceConnectionEmail | ResumeReferenceConnectionPhone_Number | ResumeReferenceConnectionPublished_At | CreateResumeReferencePayload | UpdateResumeReferencePayload | DeleteResumeReferencePayload | Resume | ResumeConnection | ResumeAggregator | ResumeGroupBy | ResumeConnectionId | ResumeConnection_Id | ResumeConnectionCreatedAt | ResumeConnectionUpdatedAt | ResumeConnectionEmployee | ResumeConnectionPublished_At | CreateResumePayload | UpdateResumePayload | DeleteResumePayload | Services | ServicesConnection | ServicesAggregator | ServicesGroupBy | ServicesConnectionId | ServicesConnection_Id | ServicesConnectionCreatedAt | ServicesConnectionUpdatedAt | ServicesConnectionSlug | ServicesConnectionName | ServicesConnectionDescription | ServicesConnectionImage | ServicesConnectionPublished_At | CreateServicePayload | UpdateServicePayload | DeleteServicePayload | Skill | SkillConnection | SkillAggregator | SkillGroupBy | SkillConnectionId | SkillConnection_Id | SkillConnectionCreatedAt | SkillConnectionUpdatedAt | SkillConnectionName | SkillConnectionDescription | SkillConnectionSkill_Level | SkillConnectionEmployee | SkillConnectionPublished_At | CreateSkillPayload | UpdateSkillPayload | DeleteSkillPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnection_Id | UploadFileConnectionCreatedAt | UploadFileConnectionUpdatedAt | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnection_Id | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnection_Id | UsersPermissionsUserConnectionCreatedAt | UsersPermissionsUserConnectionUpdatedAt | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createAward?: Maybe<CreateAwardPayload>;
  updateAward?: Maybe<UpdateAwardPayload>;
  deleteAward?: Maybe<DeleteAwardPayload>;
  createCertificate?: Maybe<CreateCertificatePayload>;
  updateCertificate?: Maybe<UpdateCertificatePayload>;
  deleteCertificate?: Maybe<DeleteCertificatePayload>;
  createClient?: Maybe<CreateClientPayload>;
  updateClient?: Maybe<UpdateClientPayload>;
  deleteClient?: Maybe<DeleteClientPayload>;
  updateContactInformation?: Maybe<UpdateContactInformationPayload>;
  deleteContactInformation?: Maybe<DeleteContactInformationPayload>;
  createCourse?: Maybe<CreateCoursePayload>;
  updateCourse?: Maybe<UpdateCoursePayload>;
  deleteCourse?: Maybe<DeleteCoursePayload>;
  createEducation?: Maybe<CreateEducationPayload>;
  updateEducation?: Maybe<UpdateEducationPayload>;
  deleteEducation?: Maybe<DeleteEducationPayload>;
  createEmployee?: Maybe<CreateEmployeePayload>;
  updateEmployee?: Maybe<UpdateEmployeePayload>;
  deleteEmployee?: Maybe<DeleteEmployeePayload>;
  createInterest?: Maybe<CreateInterestPayload>;
  updateInterest?: Maybe<UpdateInterestPayload>;
  deleteInterest?: Maybe<DeleteInterestPayload>;
  createLanguage?: Maybe<CreateLanguagePayload>;
  updateLanguage?: Maybe<UpdateLanguagePayload>;
  deleteLanguage?: Maybe<DeleteLanguagePayload>;
  createOrganisation?: Maybe<CreateOrganisationPayload>;
  updateOrganisation?: Maybe<UpdateOrganisationPayload>;
  deleteOrganisation?: Maybe<DeleteOrganisationPayload>;
  createPersonalDetail?: Maybe<CreatePersonalDetailPayload>;
  updatePersonalDetail?: Maybe<UpdatePersonalDetailPayload>;
  deletePersonalDetail?: Maybe<DeletePersonalDetailPayload>;
  createPersonalProject?: Maybe<CreatePersonalProjectPayload>;
  updatePersonalProject?: Maybe<UpdatePersonalProjectPayload>;
  deletePersonalProject?: Maybe<DeletePersonalProjectPayload>;
  createProfessionalExperience?: Maybe<CreateProfessionalExperiencePayload>;
  updateProfessionalExperience?: Maybe<UpdateProfessionalExperiencePayload>;
  deleteProfessionalExperience?: Maybe<DeleteProfessionalExperiencePayload>;
  createPublication?: Maybe<CreatePublicationPayload>;
  updatePublication?: Maybe<UpdatePublicationPayload>;
  deletePublication?: Maybe<DeletePublicationPayload>;
  createReference?: Maybe<CreateReferencePayload>;
  updateReference?: Maybe<UpdateReferencePayload>;
  deleteReference?: Maybe<DeleteReferencePayload>;
  createResumeReference?: Maybe<CreateResumeReferencePayload>;
  updateResumeReference?: Maybe<UpdateResumeReferencePayload>;
  deleteResumeReference?: Maybe<DeleteResumeReferencePayload>;
  createResume?: Maybe<CreateResumePayload>;
  updateResume?: Maybe<UpdateResumePayload>;
  deleteResume?: Maybe<DeleteResumePayload>;
  createService?: Maybe<CreateServicePayload>;
  updateService?: Maybe<UpdateServicePayload>;
  deleteService?: Maybe<DeleteServicePayload>;
  createSkill?: Maybe<CreateSkillPayload>;
  updateSkill?: Maybe<UpdateSkillPayload>;
  deleteSkill?: Maybe<DeleteSkillPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateAwardArgs = {
  input?: Maybe<CreateAwardInput>;
};


export type MutationUpdateAwardArgs = {
  input?: Maybe<UpdateAwardInput>;
};


export type MutationDeleteAwardArgs = {
  input?: Maybe<DeleteAwardInput>;
};


export type MutationCreateCertificateArgs = {
  input?: Maybe<CreateCertificateInput>;
};


export type MutationUpdateCertificateArgs = {
  input?: Maybe<UpdateCertificateInput>;
};


export type MutationDeleteCertificateArgs = {
  input?: Maybe<DeleteCertificateInput>;
};


export type MutationCreateClientArgs = {
  input?: Maybe<CreateClientInput>;
};


export type MutationUpdateClientArgs = {
  input?: Maybe<UpdateClientInput>;
};


export type MutationDeleteClientArgs = {
  input?: Maybe<DeleteClientInput>;
};


export type MutationUpdateContactInformationArgs = {
  input?: Maybe<UpdateContactInformationInput>;
};


export type MutationCreateCourseArgs = {
  input?: Maybe<CreateCourseInput>;
};


export type MutationUpdateCourseArgs = {
  input?: Maybe<UpdateCourseInput>;
};


export type MutationDeleteCourseArgs = {
  input?: Maybe<DeleteCourseInput>;
};


export type MutationCreateEducationArgs = {
  input?: Maybe<CreateEducationInput>;
};


export type MutationUpdateEducationArgs = {
  input?: Maybe<UpdateEducationInput>;
};


export type MutationDeleteEducationArgs = {
  input?: Maybe<DeleteEducationInput>;
};


export type MutationCreateEmployeeArgs = {
  input?: Maybe<CreateEmployeeInput>;
};


export type MutationUpdateEmployeeArgs = {
  input?: Maybe<UpdateEmployeeInput>;
};


export type MutationDeleteEmployeeArgs = {
  input?: Maybe<DeleteEmployeeInput>;
};


export type MutationCreateInterestArgs = {
  input?: Maybe<CreateInterestInput>;
};


export type MutationUpdateInterestArgs = {
  input?: Maybe<UpdateInterestInput>;
};


export type MutationDeleteInterestArgs = {
  input?: Maybe<DeleteInterestInput>;
};


export type MutationCreateLanguageArgs = {
  input?: Maybe<CreateLanguageInput>;
};


export type MutationUpdateLanguageArgs = {
  input?: Maybe<UpdateLanguageInput>;
};


export type MutationDeleteLanguageArgs = {
  input?: Maybe<DeleteLanguageInput>;
};


export type MutationCreateOrganisationArgs = {
  input?: Maybe<CreateOrganisationInput>;
};


export type MutationUpdateOrganisationArgs = {
  input?: Maybe<UpdateOrganisationInput>;
};


export type MutationDeleteOrganisationArgs = {
  input?: Maybe<DeleteOrganisationInput>;
};


export type MutationCreatePersonalDetailArgs = {
  input?: Maybe<CreatePersonalDetailInput>;
};


export type MutationUpdatePersonalDetailArgs = {
  input?: Maybe<UpdatePersonalDetailInput>;
};


export type MutationDeletePersonalDetailArgs = {
  input?: Maybe<DeletePersonalDetailInput>;
};


export type MutationCreatePersonalProjectArgs = {
  input?: Maybe<CreatePersonalProjectInput>;
};


export type MutationUpdatePersonalProjectArgs = {
  input?: Maybe<UpdatePersonalProjectInput>;
};


export type MutationDeletePersonalProjectArgs = {
  input?: Maybe<DeletePersonalProjectInput>;
};


export type MutationCreateProfessionalExperienceArgs = {
  input?: Maybe<CreateProfessionalExperienceInput>;
};


export type MutationUpdateProfessionalExperienceArgs = {
  input?: Maybe<UpdateProfessionalExperienceInput>;
};


export type MutationDeleteProfessionalExperienceArgs = {
  input?: Maybe<DeleteProfessionalExperienceInput>;
};


export type MutationCreatePublicationArgs = {
  input?: Maybe<CreatePublicationInput>;
};


export type MutationUpdatePublicationArgs = {
  input?: Maybe<UpdatePublicationInput>;
};


export type MutationDeletePublicationArgs = {
  input?: Maybe<DeletePublicationInput>;
};


export type MutationCreateReferenceArgs = {
  input?: Maybe<CreateReferenceInput>;
};


export type MutationUpdateReferenceArgs = {
  input?: Maybe<UpdateReferenceInput>;
};


export type MutationDeleteReferenceArgs = {
  input?: Maybe<DeleteReferenceInput>;
};


export type MutationCreateResumeReferenceArgs = {
  input?: Maybe<CreateResumeReferenceInput>;
};


export type MutationUpdateResumeReferenceArgs = {
  input?: Maybe<UpdateResumeReferenceInput>;
};


export type MutationDeleteResumeReferenceArgs = {
  input?: Maybe<DeleteResumeReferenceInput>;
};


export type MutationCreateResumeArgs = {
  input?: Maybe<CreateResumeInput>;
};


export type MutationUpdateResumeArgs = {
  input?: Maybe<UpdateResumeInput>;
};


export type MutationDeleteResumeArgs = {
  input?: Maybe<DeleteResumeInput>;
};


export type MutationCreateServiceArgs = {
  input?: Maybe<CreateServiceInput>;
};


export type MutationUpdateServiceArgs = {
  input?: Maybe<UpdateServiceInput>;
};


export type MutationDeleteServiceArgs = {
  input?: Maybe<DeleteServiceInput>;
};


export type MutationCreateSkillArgs = {
  input?: Maybe<CreateSkillInput>;
};


export type MutationUpdateSkillArgs = {
  input?: Maybe<UpdateSkillInput>;
};


export type MutationDeleteSkillArgs = {
  input?: Maybe<DeleteSkillInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type Organisation = {
  __typename?: 'Organisation';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  position?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type OrganisationAggregator = {
  __typename?: 'OrganisationAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type OrganisationConnection = {
  __typename?: 'OrganisationConnection';
  values?: Maybe<Array<Maybe<Organisation>>>;
  groupBy?: Maybe<OrganisationGroupBy>;
  aggregate?: Maybe<OrganisationAggregator>;
};

export type OrganisationConnectionCreatedAt = {
  __typename?: 'OrganisationConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionDescription = {
  __typename?: 'OrganisationConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionEnd = {
  __typename?: 'OrganisationConnectionEnd';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionId = {
  __typename?: 'OrganisationConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionLocation = {
  __typename?: 'OrganisationConnectionLocation';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionName = {
  __typename?: 'OrganisationConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionPosition = {
  __typename?: 'OrganisationConnectionPosition';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionPublished_At = {
  __typename?: 'OrganisationConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionStart = {
  __typename?: 'OrganisationConnectionStart';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionUpdatedAt = {
  __typename?: 'OrganisationConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnection_Id = {
  __typename?: 'OrganisationConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationGroupBy = {
  __typename?: 'OrganisationGroupBy';
  id?: Maybe<Array<Maybe<OrganisationConnectionId>>>;
  _id?: Maybe<Array<Maybe<OrganisationConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<OrganisationConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<OrganisationConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<OrganisationConnectionName>>>;
  position?: Maybe<Array<Maybe<OrganisationConnectionPosition>>>;
  location?: Maybe<Array<Maybe<OrganisationConnectionLocation>>>;
  start?: Maybe<Array<Maybe<OrganisationConnectionStart>>>;
  end?: Maybe<Array<Maybe<OrganisationConnectionEnd>>>;
  description?: Maybe<Array<Maybe<OrganisationConnectionDescription>>>;
  published_at?: Maybe<Array<Maybe<OrganisationConnectionPublished_At>>>;
};

export type OrganisationInput = {
  name: Scalars['String'];
  position?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type PersonalDetailInput = {
  full_name: Scalars['String'];
  profile_picture?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  phone_number?: Maybe<Scalars['String']>;
  full_address?: Maybe<Scalars['String']>;
  date_of_birth?: Maybe<Scalars['Date']>;
  github_link?: Maybe<Scalars['String']>;
  linked_in_link?: Maybe<Scalars['String']>;
  family_status?: Maybe<Scalars['String']>;
  about_me?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type PersonalDetails = {
  __typename?: 'PersonalDetails';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  full_name: Scalars['String'];
  profile_picture?: Maybe<UploadFile>;
  email: Scalars['String'];
  phone_number?: Maybe<Scalars['String']>;
  full_address?: Maybe<Scalars['String']>;
  date_of_birth?: Maybe<Scalars['Date']>;
  github_link?: Maybe<Scalars['String']>;
  linked_in_link?: Maybe<Scalars['String']>;
  family_status?: Maybe<Scalars['String']>;
  about_me?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type PersonalDetailsAggregator = {
  __typename?: 'PersonalDetailsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PersonalDetailsConnection = {
  __typename?: 'PersonalDetailsConnection';
  values?: Maybe<Array<Maybe<PersonalDetails>>>;
  groupBy?: Maybe<PersonalDetailsGroupBy>;
  aggregate?: Maybe<PersonalDetailsAggregator>;
};

export type PersonalDetailsConnectionAbout_Me = {
  __typename?: 'PersonalDetailsConnectionAbout_me';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PersonalDetailsConnection>;
};

export type PersonalDetailsConnectionCreatedAt = {
  __typename?: 'PersonalDetailsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PersonalDetailsConnection>;
};

export type PersonalDetailsConnectionDate_Of_Birth = {
  __typename?: 'PersonalDetailsConnectionDate_of_birth';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PersonalDetailsConnection>;
};

export type PersonalDetailsConnectionEmail = {
  __typename?: 'PersonalDetailsConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PersonalDetailsConnection>;
};

export type PersonalDetailsConnectionFamily_Status = {
  __typename?: 'PersonalDetailsConnectionFamily_status';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PersonalDetailsConnection>;
};

export type PersonalDetailsConnectionFull_Address = {
  __typename?: 'PersonalDetailsConnectionFull_address';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PersonalDetailsConnection>;
};

export type PersonalDetailsConnectionFull_Name = {
  __typename?: 'PersonalDetailsConnectionFull_name';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PersonalDetailsConnection>;
};

export type PersonalDetailsConnectionGithub_Link = {
  __typename?: 'PersonalDetailsConnectionGithub_link';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PersonalDetailsConnection>;
};

export type PersonalDetailsConnectionId = {
  __typename?: 'PersonalDetailsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PersonalDetailsConnection>;
};

export type PersonalDetailsConnectionLinked_In_Link = {
  __typename?: 'PersonalDetailsConnectionLinked_in_link';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PersonalDetailsConnection>;
};

export type PersonalDetailsConnectionPhone_Number = {
  __typename?: 'PersonalDetailsConnectionPhone_number';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PersonalDetailsConnection>;
};

export type PersonalDetailsConnectionProfile_Picture = {
  __typename?: 'PersonalDetailsConnectionProfile_picture';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PersonalDetailsConnection>;
};

export type PersonalDetailsConnectionPublished_At = {
  __typename?: 'PersonalDetailsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PersonalDetailsConnection>;
};

export type PersonalDetailsConnectionUpdatedAt = {
  __typename?: 'PersonalDetailsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PersonalDetailsConnection>;
};

export type PersonalDetailsConnection_Id = {
  __typename?: 'PersonalDetailsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PersonalDetailsConnection>;
};

export type PersonalDetailsGroupBy = {
  __typename?: 'PersonalDetailsGroupBy';
  id?: Maybe<Array<Maybe<PersonalDetailsConnectionId>>>;
  _id?: Maybe<Array<Maybe<PersonalDetailsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<PersonalDetailsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<PersonalDetailsConnectionUpdatedAt>>>;
  full_name?: Maybe<Array<Maybe<PersonalDetailsConnectionFull_Name>>>;
  profile_picture?: Maybe<Array<Maybe<PersonalDetailsConnectionProfile_Picture>>>;
  email?: Maybe<Array<Maybe<PersonalDetailsConnectionEmail>>>;
  phone_number?: Maybe<Array<Maybe<PersonalDetailsConnectionPhone_Number>>>;
  full_address?: Maybe<Array<Maybe<PersonalDetailsConnectionFull_Address>>>;
  date_of_birth?: Maybe<Array<Maybe<PersonalDetailsConnectionDate_Of_Birth>>>;
  github_link?: Maybe<Array<Maybe<PersonalDetailsConnectionGithub_Link>>>;
  linked_in_link?: Maybe<Array<Maybe<PersonalDetailsConnectionLinked_In_Link>>>;
  family_status?: Maybe<Array<Maybe<PersonalDetailsConnectionFamily_Status>>>;
  about_me?: Maybe<Array<Maybe<PersonalDetailsConnectionAbout_Me>>>;
  published_at?: Maybe<Array<Maybe<PersonalDetailsConnectionPublished_At>>>;
};

export type PersonalProject = {
  __typename?: 'PersonalProject';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type PersonalProjectAggregator = {
  __typename?: 'PersonalProjectAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PersonalProjectConnection = {
  __typename?: 'PersonalProjectConnection';
  values?: Maybe<Array<Maybe<PersonalProject>>>;
  groupBy?: Maybe<PersonalProjectGroupBy>;
  aggregate?: Maybe<PersonalProjectAggregator>;
};

export type PersonalProjectConnectionCreatedAt = {
  __typename?: 'PersonalProjectConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PersonalProjectConnection>;
};

export type PersonalProjectConnectionDescription = {
  __typename?: 'PersonalProjectConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PersonalProjectConnection>;
};

export type PersonalProjectConnectionEnd = {
  __typename?: 'PersonalProjectConnectionEnd';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PersonalProjectConnection>;
};

export type PersonalProjectConnectionId = {
  __typename?: 'PersonalProjectConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PersonalProjectConnection>;
};

export type PersonalProjectConnectionLink = {
  __typename?: 'PersonalProjectConnectionLink';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PersonalProjectConnection>;
};

export type PersonalProjectConnectionPublished_At = {
  __typename?: 'PersonalProjectConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PersonalProjectConnection>;
};

export type PersonalProjectConnectionStart = {
  __typename?: 'PersonalProjectConnectionStart';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PersonalProjectConnection>;
};

export type PersonalProjectConnectionTitle = {
  __typename?: 'PersonalProjectConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PersonalProjectConnection>;
};

export type PersonalProjectConnectionUpdatedAt = {
  __typename?: 'PersonalProjectConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PersonalProjectConnection>;
};

export type PersonalProjectConnection_Id = {
  __typename?: 'PersonalProjectConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PersonalProjectConnection>;
};

export type PersonalProjectGroupBy = {
  __typename?: 'PersonalProjectGroupBy';
  id?: Maybe<Array<Maybe<PersonalProjectConnectionId>>>;
  _id?: Maybe<Array<Maybe<PersonalProjectConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<PersonalProjectConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<PersonalProjectConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<PersonalProjectConnectionTitle>>>;
  start?: Maybe<Array<Maybe<PersonalProjectConnectionStart>>>;
  end?: Maybe<Array<Maybe<PersonalProjectConnectionEnd>>>;
  description?: Maybe<Array<Maybe<PersonalProjectConnectionDescription>>>;
  link?: Maybe<Array<Maybe<PersonalProjectConnectionLink>>>;
  published_at?: Maybe<Array<Maybe<PersonalProjectConnectionPublished_At>>>;
};

export type PersonalProjectInput = {
  title: Scalars['String'];
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ProfessionalExperience = {
  __typename?: 'ProfessionalExperience';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  employer: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  start: Scalars['Date'];
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  employee?: Maybe<Employees>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ProfessionalExperienceAggregator = {
  __typename?: 'ProfessionalExperienceAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProfessionalExperienceConnection = {
  __typename?: 'ProfessionalExperienceConnection';
  values?: Maybe<Array<Maybe<ProfessionalExperience>>>;
  groupBy?: Maybe<ProfessionalExperienceGroupBy>;
  aggregate?: Maybe<ProfessionalExperienceAggregator>;
};

export type ProfessionalExperienceConnectionCreatedAt = {
  __typename?: 'ProfessionalExperienceConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProfessionalExperienceConnection>;
};

export type ProfessionalExperienceConnectionDescription = {
  __typename?: 'ProfessionalExperienceConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProfessionalExperienceConnection>;
};

export type ProfessionalExperienceConnectionEmployee = {
  __typename?: 'ProfessionalExperienceConnectionEmployee';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProfessionalExperienceConnection>;
};

export type ProfessionalExperienceConnectionEmployer = {
  __typename?: 'ProfessionalExperienceConnectionEmployer';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProfessionalExperienceConnection>;
};

export type ProfessionalExperienceConnectionEnd = {
  __typename?: 'ProfessionalExperienceConnectionEnd';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProfessionalExperienceConnection>;
};

export type ProfessionalExperienceConnectionId = {
  __typename?: 'ProfessionalExperienceConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProfessionalExperienceConnection>;
};

export type ProfessionalExperienceConnectionLocation = {
  __typename?: 'ProfessionalExperienceConnectionLocation';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProfessionalExperienceConnection>;
};

export type ProfessionalExperienceConnectionPublished_At = {
  __typename?: 'ProfessionalExperienceConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProfessionalExperienceConnection>;
};

export type ProfessionalExperienceConnectionStart = {
  __typename?: 'ProfessionalExperienceConnectionStart';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProfessionalExperienceConnection>;
};

export type ProfessionalExperienceConnectionTitle = {
  __typename?: 'ProfessionalExperienceConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProfessionalExperienceConnection>;
};

export type ProfessionalExperienceConnectionUpdatedAt = {
  __typename?: 'ProfessionalExperienceConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProfessionalExperienceConnection>;
};

export type ProfessionalExperienceConnection_Id = {
  __typename?: 'ProfessionalExperienceConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProfessionalExperienceConnection>;
};

export type ProfessionalExperienceGroupBy = {
  __typename?: 'ProfessionalExperienceGroupBy';
  id?: Maybe<Array<Maybe<ProfessionalExperienceConnectionId>>>;
  _id?: Maybe<Array<Maybe<ProfessionalExperienceConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ProfessionalExperienceConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ProfessionalExperienceConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<ProfessionalExperienceConnectionTitle>>>;
  employer?: Maybe<Array<Maybe<ProfessionalExperienceConnectionEmployer>>>;
  location?: Maybe<Array<Maybe<ProfessionalExperienceConnectionLocation>>>;
  start?: Maybe<Array<Maybe<ProfessionalExperienceConnectionStart>>>;
  end?: Maybe<Array<Maybe<ProfessionalExperienceConnectionEnd>>>;
  description?: Maybe<Array<Maybe<ProfessionalExperienceConnectionDescription>>>;
  employee?: Maybe<Array<Maybe<ProfessionalExperienceConnectionEmployee>>>;
  published_at?: Maybe<Array<Maybe<ProfessionalExperienceConnectionPublished_At>>>;
};

export type ProfessionalExperienceInput = {
  title: Scalars['String'];
  employer: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  start: Scalars['Date'];
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  employee?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Publication = {
  __typename?: 'Publication';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  publisher?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type PublicationAggregator = {
  __typename?: 'PublicationAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PublicationConnection = {
  __typename?: 'PublicationConnection';
  values?: Maybe<Array<Maybe<Publication>>>;
  groupBy?: Maybe<PublicationGroupBy>;
  aggregate?: Maybe<PublicationAggregator>;
};

export type PublicationConnectionCreatedAt = {
  __typename?: 'PublicationConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PublicationConnection>;
};

export type PublicationConnectionDate = {
  __typename?: 'PublicationConnectionDate';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PublicationConnection>;
};

export type PublicationConnectionDescription = {
  __typename?: 'PublicationConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PublicationConnection>;
};

export type PublicationConnectionId = {
  __typename?: 'PublicationConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PublicationConnection>;
};

export type PublicationConnectionName = {
  __typename?: 'PublicationConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PublicationConnection>;
};

export type PublicationConnectionPublished_At = {
  __typename?: 'PublicationConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PublicationConnection>;
};

export type PublicationConnectionPublisher = {
  __typename?: 'PublicationConnectionPublisher';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PublicationConnection>;
};

export type PublicationConnectionUpdatedAt = {
  __typename?: 'PublicationConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PublicationConnection>;
};

export type PublicationConnection_Id = {
  __typename?: 'PublicationConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PublicationConnection>;
};

export type PublicationGroupBy = {
  __typename?: 'PublicationGroupBy';
  id?: Maybe<Array<Maybe<PublicationConnectionId>>>;
  _id?: Maybe<Array<Maybe<PublicationConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<PublicationConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<PublicationConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<PublicationConnectionName>>>;
  publisher?: Maybe<Array<Maybe<PublicationConnectionPublisher>>>;
  date?: Maybe<Array<Maybe<PublicationConnectionDate>>>;
  description?: Maybe<Array<Maybe<PublicationConnectionDescription>>>;
  published_at?: Maybe<Array<Maybe<PublicationConnectionPublished_At>>>;
};

export type PublicationInput = {
  name: Scalars['String'];
  publisher?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  award?: Maybe<Award>;
  awards?: Maybe<Array<Maybe<Award>>>;
  awardsConnection?: Maybe<AwardConnection>;
  certificate?: Maybe<Certificate>;
  certificates?: Maybe<Array<Maybe<Certificate>>>;
  certificatesConnection?: Maybe<CertificateConnection>;
  client?: Maybe<Clients>;
  clients?: Maybe<Array<Maybe<Clients>>>;
  clientsConnection?: Maybe<ClientsConnection>;
  contactInformation?: Maybe<ContactInformation>;
  course?: Maybe<Course>;
  courses?: Maybe<Array<Maybe<Course>>>;
  coursesConnection?: Maybe<CourseConnection>;
  education?: Maybe<Education>;
  educations?: Maybe<Array<Maybe<Education>>>;
  educationsConnection?: Maybe<EducationConnection>;
  employee?: Maybe<Employees>;
  employees?: Maybe<Array<Maybe<Employees>>>;
  employeesConnection?: Maybe<EmployeesConnection>;
  interest?: Maybe<Interest>;
  interests?: Maybe<Array<Maybe<Interest>>>;
  interestsConnection?: Maybe<InterestConnection>;
  language?: Maybe<Language>;
  languages?: Maybe<Array<Maybe<Language>>>;
  languagesConnection?: Maybe<LanguageConnection>;
  organisation?: Maybe<Organisation>;
  organisations?: Maybe<Array<Maybe<Organisation>>>;
  organisationsConnection?: Maybe<OrganisationConnection>;
  personalDetail?: Maybe<PersonalDetails>;
  personalDetails?: Maybe<Array<Maybe<PersonalDetails>>>;
  personalDetailsConnection?: Maybe<PersonalDetailsConnection>;
  personalProject?: Maybe<PersonalProject>;
  personalProjects?: Maybe<Array<Maybe<PersonalProject>>>;
  personalProjectsConnection?: Maybe<PersonalProjectConnection>;
  professionalExperience?: Maybe<ProfessionalExperience>;
  professionalExperiences?: Maybe<Array<Maybe<ProfessionalExperience>>>;
  professionalExperiencesConnection?: Maybe<ProfessionalExperienceConnection>;
  publication?: Maybe<Publication>;
  publications?: Maybe<Array<Maybe<Publication>>>;
  publicationsConnection?: Maybe<PublicationConnection>;
  reference?: Maybe<References>;
  references?: Maybe<Array<Maybe<References>>>;
  referencesConnection?: Maybe<ReferencesConnection>;
  resumeReference?: Maybe<ResumeReference>;
  resumeReferences?: Maybe<Array<Maybe<ResumeReference>>>;
  resumeReferencesConnection?: Maybe<ResumeReferenceConnection>;
  resume?: Maybe<Resume>;
  resumes?: Maybe<Array<Maybe<Resume>>>;
  resumesConnection?: Maybe<ResumeConnection>;
  service?: Maybe<Services>;
  services?: Maybe<Array<Maybe<Services>>>;
  servicesConnection?: Maybe<ServicesConnection>;
  skill?: Maybe<Skill>;
  skills?: Maybe<Array<Maybe<Skill>>>;
  skillsConnection?: Maybe<SkillConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryAwardArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryAwardsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryAwardsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCertificateArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCertificatesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCertificatesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryClientArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryClientsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryClientsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryContactInformationArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryCourseArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCoursesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCoursesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryEducationArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryEducationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryEducationsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryEmployeeArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryEmployeesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryEmployeesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryInterestArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryInterestsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryInterestsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryLanguageArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryLanguagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryLanguagesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryOrganisationArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryOrganisationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryOrganisationsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPersonalDetailArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPersonalDetailsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPersonalDetailsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPersonalProjectArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPersonalProjectsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPersonalProjectsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProfessionalExperienceArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryProfessionalExperiencesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryProfessionalExperiencesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPublicationArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPublicationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPublicationsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryReferenceArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryReferencesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryReferencesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryResumeReferenceArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryResumeReferencesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryResumeReferencesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryResumeArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryResumesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryResumesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryServiceArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryServicesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryServicesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySkillArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QuerySkillsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QuerySkillsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ReferenceInput = {
  slug: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  client?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type References = {
  __typename?: 'References';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  slug: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  client?: Maybe<Clients>;
  published_at?: Maybe<Scalars['DateTime']>;
  images?: Maybe<Array<Maybe<UploadFile>>>;
};


export type ReferencesImagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ReferencesAggregator = {
  __typename?: 'ReferencesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ReferencesConnection = {
  __typename?: 'ReferencesConnection';
  values?: Maybe<Array<Maybe<References>>>;
  groupBy?: Maybe<ReferencesGroupBy>;
  aggregate?: Maybe<ReferencesAggregator>;
};

export type ReferencesConnectionClient = {
  __typename?: 'ReferencesConnectionClient';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ReferencesConnection>;
};

export type ReferencesConnectionCreatedAt = {
  __typename?: 'ReferencesConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ReferencesConnection>;
};

export type ReferencesConnectionDescription = {
  __typename?: 'ReferencesConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ReferencesConnection>;
};

export type ReferencesConnectionId = {
  __typename?: 'ReferencesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ReferencesConnection>;
};

export type ReferencesConnectionPublished_At = {
  __typename?: 'ReferencesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ReferencesConnection>;
};

export type ReferencesConnectionSlug = {
  __typename?: 'ReferencesConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ReferencesConnection>;
};

export type ReferencesConnectionTitle = {
  __typename?: 'ReferencesConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ReferencesConnection>;
};

export type ReferencesConnectionUpdatedAt = {
  __typename?: 'ReferencesConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ReferencesConnection>;
};

export type ReferencesConnection_Id = {
  __typename?: 'ReferencesConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ReferencesConnection>;
};

export type ReferencesGroupBy = {
  __typename?: 'ReferencesGroupBy';
  id?: Maybe<Array<Maybe<ReferencesConnectionId>>>;
  _id?: Maybe<Array<Maybe<ReferencesConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ReferencesConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ReferencesConnectionUpdatedAt>>>;
  slug?: Maybe<Array<Maybe<ReferencesConnectionSlug>>>;
  title?: Maybe<Array<Maybe<ReferencesConnectionTitle>>>;
  description?: Maybe<Array<Maybe<ReferencesConnectionDescription>>>;
  client?: Maybe<Array<Maybe<ReferencesConnectionClient>>>;
  published_at?: Maybe<Array<Maybe<ReferencesConnectionPublished_At>>>;
};

export type Resume = {
  __typename?: 'Resume';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  employee?: Maybe<Employees>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ResumeAggregator = {
  __typename?: 'ResumeAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ResumeConnection = {
  __typename?: 'ResumeConnection';
  values?: Maybe<Array<Maybe<Resume>>>;
  groupBy?: Maybe<ResumeGroupBy>;
  aggregate?: Maybe<ResumeAggregator>;
};

export type ResumeConnectionCreatedAt = {
  __typename?: 'ResumeConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ResumeConnection>;
};

export type ResumeConnectionEmployee = {
  __typename?: 'ResumeConnectionEmployee';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ResumeConnection>;
};

export type ResumeConnectionId = {
  __typename?: 'ResumeConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ResumeConnection>;
};

export type ResumeConnectionPublished_At = {
  __typename?: 'ResumeConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ResumeConnection>;
};

export type ResumeConnectionUpdatedAt = {
  __typename?: 'ResumeConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ResumeConnection>;
};

export type ResumeConnection_Id = {
  __typename?: 'ResumeConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ResumeConnection>;
};

export type ResumeGroupBy = {
  __typename?: 'ResumeGroupBy';
  id?: Maybe<Array<Maybe<ResumeConnectionId>>>;
  _id?: Maybe<Array<Maybe<ResumeConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ResumeConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ResumeConnectionUpdatedAt>>>;
  employee?: Maybe<Array<Maybe<ResumeConnectionEmployee>>>;
  published_at?: Maybe<Array<Maybe<ResumeConnectionPublished_At>>>;
};

export type ResumeInput = {
  employee?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ResumeReference = {
  __typename?: 'ResumeReference';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  job_title?: Maybe<Scalars['String']>;
  organisation?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  phone_number?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ResumeReferenceAggregator = {
  __typename?: 'ResumeReferenceAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ResumeReferenceConnection = {
  __typename?: 'ResumeReferenceConnection';
  values?: Maybe<Array<Maybe<ResumeReference>>>;
  groupBy?: Maybe<ResumeReferenceGroupBy>;
  aggregate?: Maybe<ResumeReferenceAggregator>;
};

export type ResumeReferenceConnectionCreatedAt = {
  __typename?: 'ResumeReferenceConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ResumeReferenceConnection>;
};

export type ResumeReferenceConnectionEmail = {
  __typename?: 'ResumeReferenceConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ResumeReferenceConnection>;
};

export type ResumeReferenceConnectionId = {
  __typename?: 'ResumeReferenceConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ResumeReferenceConnection>;
};

export type ResumeReferenceConnectionJob_Title = {
  __typename?: 'ResumeReferenceConnectionJob_title';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ResumeReferenceConnection>;
};

export type ResumeReferenceConnectionName = {
  __typename?: 'ResumeReferenceConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ResumeReferenceConnection>;
};

export type ResumeReferenceConnectionOrganisation = {
  __typename?: 'ResumeReferenceConnectionOrganisation';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ResumeReferenceConnection>;
};

export type ResumeReferenceConnectionPhone_Number = {
  __typename?: 'ResumeReferenceConnectionPhone_number';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ResumeReferenceConnection>;
};

export type ResumeReferenceConnectionPublished_At = {
  __typename?: 'ResumeReferenceConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ResumeReferenceConnection>;
};

export type ResumeReferenceConnectionUpdatedAt = {
  __typename?: 'ResumeReferenceConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ResumeReferenceConnection>;
};

export type ResumeReferenceConnection_Id = {
  __typename?: 'ResumeReferenceConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ResumeReferenceConnection>;
};

export type ResumeReferenceGroupBy = {
  __typename?: 'ResumeReferenceGroupBy';
  id?: Maybe<Array<Maybe<ResumeReferenceConnectionId>>>;
  _id?: Maybe<Array<Maybe<ResumeReferenceConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ResumeReferenceConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ResumeReferenceConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<ResumeReferenceConnectionName>>>;
  job_title?: Maybe<Array<Maybe<ResumeReferenceConnectionJob_Title>>>;
  organisation?: Maybe<Array<Maybe<ResumeReferenceConnectionOrganisation>>>;
  email?: Maybe<Array<Maybe<ResumeReferenceConnectionEmail>>>;
  phone_number?: Maybe<Array<Maybe<ResumeReferenceConnectionPhone_Number>>>;
  published_at?: Maybe<Array<Maybe<ResumeReferenceConnectionPublished_At>>>;
};

export type ResumeReferenceInput = {
  name: Scalars['String'];
  job_title?: Maybe<Scalars['String']>;
  organisation?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  phone_number?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ServiceInput = {
  slug: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Services = {
  __typename?: 'Services';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  slug: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  image?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ServicesAggregator = {
  __typename?: 'ServicesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ServicesConnection = {
  __typename?: 'ServicesConnection';
  values?: Maybe<Array<Maybe<Services>>>;
  groupBy?: Maybe<ServicesGroupBy>;
  aggregate?: Maybe<ServicesAggregator>;
};

export type ServicesConnectionCreatedAt = {
  __typename?: 'ServicesConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ServicesConnection>;
};

export type ServicesConnectionDescription = {
  __typename?: 'ServicesConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ServicesConnection>;
};

export type ServicesConnectionId = {
  __typename?: 'ServicesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ServicesConnection>;
};

export type ServicesConnectionImage = {
  __typename?: 'ServicesConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ServicesConnection>;
};

export type ServicesConnectionName = {
  __typename?: 'ServicesConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ServicesConnection>;
};

export type ServicesConnectionPublished_At = {
  __typename?: 'ServicesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ServicesConnection>;
};

export type ServicesConnectionSlug = {
  __typename?: 'ServicesConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ServicesConnection>;
};

export type ServicesConnectionUpdatedAt = {
  __typename?: 'ServicesConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ServicesConnection>;
};

export type ServicesConnection_Id = {
  __typename?: 'ServicesConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ServicesConnection>;
};

export type ServicesGroupBy = {
  __typename?: 'ServicesGroupBy';
  id?: Maybe<Array<Maybe<ServicesConnectionId>>>;
  _id?: Maybe<Array<Maybe<ServicesConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ServicesConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ServicesConnectionUpdatedAt>>>;
  slug?: Maybe<Array<Maybe<ServicesConnectionSlug>>>;
  name?: Maybe<Array<Maybe<ServicesConnectionName>>>;
  description?: Maybe<Array<Maybe<ServicesConnectionDescription>>>;
  image?: Maybe<Array<Maybe<ServicesConnectionImage>>>;
  published_at?: Maybe<Array<Maybe<ServicesConnectionPublished_At>>>;
};

export type Skill = {
  __typename?: 'Skill';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  skill_level?: Maybe<SkillLevel>;
  employee?: Maybe<Employees>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type SkillAggregator = {
  __typename?: 'SkillAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SkillConnection = {
  __typename?: 'SkillConnection';
  values?: Maybe<Array<Maybe<Skill>>>;
  groupBy?: Maybe<SkillGroupBy>;
  aggregate?: Maybe<SkillAggregator>;
};

export type SkillConnectionCreatedAt = {
  __typename?: 'SkillConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SkillConnection>;
};

export type SkillConnectionDescription = {
  __typename?: 'SkillConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SkillConnection>;
};

export type SkillConnectionEmployee = {
  __typename?: 'SkillConnectionEmployee';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SkillConnection>;
};

export type SkillConnectionId = {
  __typename?: 'SkillConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SkillConnection>;
};

export type SkillConnectionName = {
  __typename?: 'SkillConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SkillConnection>;
};

export type SkillConnectionPublished_At = {
  __typename?: 'SkillConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SkillConnection>;
};

export type SkillConnectionSkill_Level = {
  __typename?: 'SkillConnectionSkill_level';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SkillConnection>;
};

export type SkillConnectionUpdatedAt = {
  __typename?: 'SkillConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SkillConnection>;
};

export type SkillConnection_Id = {
  __typename?: 'SkillConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SkillConnection>;
};

export type SkillGroupBy = {
  __typename?: 'SkillGroupBy';
  id?: Maybe<Array<Maybe<SkillConnectionId>>>;
  _id?: Maybe<Array<Maybe<SkillConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<SkillConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<SkillConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<SkillConnectionName>>>;
  description?: Maybe<Array<Maybe<SkillConnectionDescription>>>;
  skill_level?: Maybe<Array<Maybe<SkillConnectionSkill_Level>>>;
  employee?: Maybe<Array<Maybe<SkillConnectionEmployee>>>;
  published_at?: Maybe<Array<Maybe<SkillConnectionPublished_At>>>;
};

export type SkillInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  skill_level?: Maybe<SkillLevel>;
  employee?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};



export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreatedAt = {
  __typename?: 'UploadFileConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdatedAt = {
  __typename?: 'UploadFileConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnection_Id = {
  __typename?: 'UploadFileConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  _id?: Maybe<Array<Maybe<UploadFileConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UploadFileConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UploadFileConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnection_Id = {
  __typename?: 'UsersPermissionsRoleConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsRoleConnection_Id>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreatedAt = {
  __typename?: 'UsersPermissionsUserConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdatedAt = {
  __typename?: 'UsersPermissionsUserConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnection_Id = {
  __typename?: 'UsersPermissionsUserConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsUserConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdatedAt>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type CreateAwardInput = {
  data?: Maybe<AwardInput>;
};

export type CreateAwardPayload = {
  __typename?: 'createAwardPayload';
  award?: Maybe<Award>;
};

export type CreateCertificateInput = {
  data?: Maybe<CertificateInput>;
};

export type CreateCertificatePayload = {
  __typename?: 'createCertificatePayload';
  certificate?: Maybe<Certificate>;
};

export type CreateClientInput = {
  data?: Maybe<ClientInput>;
};

export type CreateClientPayload = {
  __typename?: 'createClientPayload';
  client?: Maybe<Clients>;
};

export type CreateCourseInput = {
  data?: Maybe<CourseInput>;
};

export type CreateCoursePayload = {
  __typename?: 'createCoursePayload';
  course?: Maybe<Course>;
};

export type CreateEducationInput = {
  data?: Maybe<EducationInput>;
};

export type CreateEducationPayload = {
  __typename?: 'createEducationPayload';
  education?: Maybe<Education>;
};

export type CreateEmployeeInput = {
  data?: Maybe<EmployeeInput>;
};

export type CreateEmployeePayload = {
  __typename?: 'createEmployeePayload';
  employee?: Maybe<Employees>;
};

export type CreateInterestInput = {
  data?: Maybe<InterestInput>;
};

export type CreateInterestPayload = {
  __typename?: 'createInterestPayload';
  interest?: Maybe<Interest>;
};

export type CreateLanguageInput = {
  data?: Maybe<LanguageInput>;
};

export type CreateLanguagePayload = {
  __typename?: 'createLanguagePayload';
  language?: Maybe<Language>;
};

export type CreateOrganisationInput = {
  data?: Maybe<OrganisationInput>;
};

export type CreateOrganisationPayload = {
  __typename?: 'createOrganisationPayload';
  organisation?: Maybe<Organisation>;
};

export type CreatePersonalDetailInput = {
  data?: Maybe<PersonalDetailInput>;
};

export type CreatePersonalDetailPayload = {
  __typename?: 'createPersonalDetailPayload';
  personalDetail?: Maybe<PersonalDetails>;
};

export type CreatePersonalProjectInput = {
  data?: Maybe<PersonalProjectInput>;
};

export type CreatePersonalProjectPayload = {
  __typename?: 'createPersonalProjectPayload';
  personalProject?: Maybe<PersonalProject>;
};

export type CreateProfessionalExperienceInput = {
  data?: Maybe<ProfessionalExperienceInput>;
};

export type CreateProfessionalExperiencePayload = {
  __typename?: 'createProfessionalExperiencePayload';
  professionalExperience?: Maybe<ProfessionalExperience>;
};

export type CreatePublicationInput = {
  data?: Maybe<PublicationInput>;
};

export type CreatePublicationPayload = {
  __typename?: 'createPublicationPayload';
  publication?: Maybe<Publication>;
};

export type CreateReferenceInput = {
  data?: Maybe<ReferenceInput>;
};

export type CreateReferencePayload = {
  __typename?: 'createReferencePayload';
  reference?: Maybe<References>;
};

export type CreateResumeInput = {
  data?: Maybe<ResumeInput>;
};

export type CreateResumePayload = {
  __typename?: 'createResumePayload';
  resume?: Maybe<Resume>;
};

export type CreateResumeReferenceInput = {
  data?: Maybe<ResumeReferenceInput>;
};

export type CreateResumeReferencePayload = {
  __typename?: 'createResumeReferencePayload';
  resumeReference?: Maybe<ResumeReference>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateServiceInput = {
  data?: Maybe<ServiceInput>;
};

export type CreateServicePayload = {
  __typename?: 'createServicePayload';
  service?: Maybe<Services>;
};

export type CreateSkillInput = {
  data?: Maybe<SkillInput>;
};

export type CreateSkillPayload = {
  __typename?: 'createSkillPayload';
  skill?: Maybe<Skill>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteAwardInput = {
  where?: Maybe<InputId>;
};

export type DeleteAwardPayload = {
  __typename?: 'deleteAwardPayload';
  award?: Maybe<Award>;
};

export type DeleteCertificateInput = {
  where?: Maybe<InputId>;
};

export type DeleteCertificatePayload = {
  __typename?: 'deleteCertificatePayload';
  certificate?: Maybe<Certificate>;
};

export type DeleteClientInput = {
  where?: Maybe<InputId>;
};

export type DeleteClientPayload = {
  __typename?: 'deleteClientPayload';
  client?: Maybe<Clients>;
};

export type DeleteContactInformationPayload = {
  __typename?: 'deleteContactInformationPayload';
  contactInformation?: Maybe<ContactInformation>;
};

export type DeleteCourseInput = {
  where?: Maybe<InputId>;
};

export type DeleteCoursePayload = {
  __typename?: 'deleteCoursePayload';
  course?: Maybe<Course>;
};

export type DeleteEducationInput = {
  where?: Maybe<InputId>;
};

export type DeleteEducationPayload = {
  __typename?: 'deleteEducationPayload';
  education?: Maybe<Education>;
};

export type DeleteEmployeeInput = {
  where?: Maybe<InputId>;
};

export type DeleteEmployeePayload = {
  __typename?: 'deleteEmployeePayload';
  employee?: Maybe<Employees>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteInterestInput = {
  where?: Maybe<InputId>;
};

export type DeleteInterestPayload = {
  __typename?: 'deleteInterestPayload';
  interest?: Maybe<Interest>;
};

export type DeleteLanguageInput = {
  where?: Maybe<InputId>;
};

export type DeleteLanguagePayload = {
  __typename?: 'deleteLanguagePayload';
  language?: Maybe<Language>;
};

export type DeleteOrganisationInput = {
  where?: Maybe<InputId>;
};

export type DeleteOrganisationPayload = {
  __typename?: 'deleteOrganisationPayload';
  organisation?: Maybe<Organisation>;
};

export type DeletePersonalDetailInput = {
  where?: Maybe<InputId>;
};

export type DeletePersonalDetailPayload = {
  __typename?: 'deletePersonalDetailPayload';
  personalDetail?: Maybe<PersonalDetails>;
};

export type DeletePersonalProjectInput = {
  where?: Maybe<InputId>;
};

export type DeletePersonalProjectPayload = {
  __typename?: 'deletePersonalProjectPayload';
  personalProject?: Maybe<PersonalProject>;
};

export type DeleteProfessionalExperienceInput = {
  where?: Maybe<InputId>;
};

export type DeleteProfessionalExperiencePayload = {
  __typename?: 'deleteProfessionalExperiencePayload';
  professionalExperience?: Maybe<ProfessionalExperience>;
};

export type DeletePublicationInput = {
  where?: Maybe<InputId>;
};

export type DeletePublicationPayload = {
  __typename?: 'deletePublicationPayload';
  publication?: Maybe<Publication>;
};

export type DeleteReferenceInput = {
  where?: Maybe<InputId>;
};

export type DeleteReferencePayload = {
  __typename?: 'deleteReferencePayload';
  reference?: Maybe<References>;
};

export type DeleteResumeInput = {
  where?: Maybe<InputId>;
};

export type DeleteResumePayload = {
  __typename?: 'deleteResumePayload';
  resume?: Maybe<Resume>;
};

export type DeleteResumeReferenceInput = {
  where?: Maybe<InputId>;
};

export type DeleteResumeReferencePayload = {
  __typename?: 'deleteResumeReferencePayload';
  resumeReference?: Maybe<ResumeReference>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteServiceInput = {
  where?: Maybe<InputId>;
};

export type DeleteServicePayload = {
  __typename?: 'deleteServicePayload';
  service?: Maybe<Services>;
};

export type DeleteSkillInput = {
  where?: Maybe<InputId>;
};

export type DeleteSkillPayload = {
  __typename?: 'deleteSkillPayload';
  skill?: Maybe<Skill>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditAwardInput = {
  name?: Maybe<Scalars['String']>;
  issuer?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  employee?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCertificateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditClientInput = {
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditContactInformationInput = {
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCourseInput = {
  title?: Maybe<Scalars['String']>;
  institution?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditEducationInput = {
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  school?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  employee?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditEmployeeInput = {
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  educations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  professional_experiences?: Maybe<Array<Maybe<Scalars['ID']>>>;
  skills?: Maybe<Array<Maybe<Scalars['ID']>>>;
  personal_detail?: Maybe<Scalars['ID']>;
  languages?: Maybe<Array<Maybe<Scalars['ID']>>>;
  courses?: Maybe<Array<Maybe<Scalars['ID']>>>;
  certificates?: Maybe<Array<Maybe<Scalars['ID']>>>;
  personal_projects?: Maybe<Array<Maybe<Scalars['ID']>>>;
  awards?: Maybe<Array<Maybe<Scalars['ID']>>>;
  interests?: Maybe<Array<Maybe<Scalars['ID']>>>;
  organisations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  publications?: Maybe<Array<Maybe<Scalars['ID']>>>;
  resume_references?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditInterestInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLanguageInput = {
  language?: Maybe<Scalars['String']>;
  language_level?: Maybe<LanguageLevel>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditOrganisationInput = {
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPersonalDetailInput = {
  full_name?: Maybe<Scalars['String']>;
  profile_picture?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  full_address?: Maybe<Scalars['String']>;
  date_of_birth?: Maybe<Scalars['Date']>;
  github_link?: Maybe<Scalars['String']>;
  linked_in_link?: Maybe<Scalars['String']>;
  family_status?: Maybe<Scalars['String']>;
  about_me?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPersonalProjectInput = {
  title?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProfessionalExperienceInput = {
  title?: Maybe<Scalars['String']>;
  employer?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  employee?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPublicationInput = {
  name?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditReferenceInput = {
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  client?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditResumeInput = {
  employee?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditResumeReferenceInput = {
  name?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  organisation?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditServiceInput = {
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditSkillInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  skill_level?: Maybe<SkillLevel>;
  employee?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum LanguageLevel {
  Beginner = 'Beginner',
  Skillful = 'Skillful',
  Experienced = 'Experienced',
  Expert = 'Expert'
}

export enum SkillLevel {
  Beginner = 'Beginner',
  Skillful = 'Skillful',
  Experienced = 'Experienced',
  Expert = 'Expert'
}

export type UpdateAwardInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditAwardInput>;
};

export type UpdateAwardPayload = {
  __typename?: 'updateAwardPayload';
  award?: Maybe<Award>;
};

export type UpdateCertificateInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCertificateInput>;
};

export type UpdateCertificatePayload = {
  __typename?: 'updateCertificatePayload';
  certificate?: Maybe<Certificate>;
};

export type UpdateClientInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditClientInput>;
};

export type UpdateClientPayload = {
  __typename?: 'updateClientPayload';
  client?: Maybe<Clients>;
};

export type UpdateContactInformationInput = {
  data?: Maybe<EditContactInformationInput>;
};

export type UpdateContactInformationPayload = {
  __typename?: 'updateContactInformationPayload';
  contactInformation?: Maybe<ContactInformation>;
};

export type UpdateCourseInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCourseInput>;
};

export type UpdateCoursePayload = {
  __typename?: 'updateCoursePayload';
  course?: Maybe<Course>;
};

export type UpdateEducationInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditEducationInput>;
};

export type UpdateEducationPayload = {
  __typename?: 'updateEducationPayload';
  education?: Maybe<Education>;
};

export type UpdateEmployeeInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditEmployeeInput>;
};

export type UpdateEmployeePayload = {
  __typename?: 'updateEmployeePayload';
  employee?: Maybe<Employees>;
};

export type UpdateInterestInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditInterestInput>;
};

export type UpdateInterestPayload = {
  __typename?: 'updateInterestPayload';
  interest?: Maybe<Interest>;
};

export type UpdateLanguageInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditLanguageInput>;
};

export type UpdateLanguagePayload = {
  __typename?: 'updateLanguagePayload';
  language?: Maybe<Language>;
};

export type UpdateOrganisationInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditOrganisationInput>;
};

export type UpdateOrganisationPayload = {
  __typename?: 'updateOrganisationPayload';
  organisation?: Maybe<Organisation>;
};

export type UpdatePersonalDetailInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPersonalDetailInput>;
};

export type UpdatePersonalDetailPayload = {
  __typename?: 'updatePersonalDetailPayload';
  personalDetail?: Maybe<PersonalDetails>;
};

export type UpdatePersonalProjectInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPersonalProjectInput>;
};

export type UpdatePersonalProjectPayload = {
  __typename?: 'updatePersonalProjectPayload';
  personalProject?: Maybe<PersonalProject>;
};

export type UpdateProfessionalExperienceInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProfessionalExperienceInput>;
};

export type UpdateProfessionalExperiencePayload = {
  __typename?: 'updateProfessionalExperiencePayload';
  professionalExperience?: Maybe<ProfessionalExperience>;
};

export type UpdatePublicationInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPublicationInput>;
};

export type UpdatePublicationPayload = {
  __typename?: 'updatePublicationPayload';
  publication?: Maybe<Publication>;
};

export type UpdateReferenceInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditReferenceInput>;
};

export type UpdateReferencePayload = {
  __typename?: 'updateReferencePayload';
  reference?: Maybe<References>;
};

export type UpdateResumeInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditResumeInput>;
};

export type UpdateResumePayload = {
  __typename?: 'updateResumePayload';
  resume?: Maybe<Resume>;
};

export type UpdateResumeReferenceInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditResumeReferenceInput>;
};

export type UpdateResumeReferencePayload = {
  __typename?: 'updateResumeReferencePayload';
  resumeReference?: Maybe<ResumeReference>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateServiceInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditServiceInput>;
};

export type UpdateServicePayload = {
  __typename?: 'updateServicePayload';
  service?: Maybe<Services>;
};

export type UpdateSkillInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditSkillInput>;
};

export type UpdateSkillPayload = {
  __typename?: 'updateSkillPayload';
  skill?: Maybe<Skill>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DefaultClientFragment = (
  { __typename?: 'Clients' }
  & Pick<Clients, 'id' | 'createdAt' | 'updatedAt' | 'slug' | 'name' | 'description'>
  & { logo?: Maybe<(
    { __typename?: 'UploadFile' }
    & Pick<UploadFile, 'url'>
  )> }
);

export type DefaultContactInformationFragment = (
  { __typename?: 'ContactInformation' }
  & Pick<ContactInformation, 'id' | 'email' | 'linkedin' | 'phoneNumber' | 'address' | 'zipCode' | 'city' | 'country'>
);

export type DefaultEmployeeFragment = (
  { __typename?: 'Employees' }
  & Pick<Employees, 'id' | 'createdAt' | 'updatedAt' | 'slug' | 'name' | 'title' | 'email'>
);

export type DefaultReferenceFragment = (
  { __typename?: 'References' }
  & Pick<References, 'id' | 'createdAt' | 'updatedAt' | 'slug' | 'title' | 'description'>
  & { client?: Maybe<(
    { __typename?: 'Clients' }
    & DefaultClientFragment
  )> }
);

export type DefaultServiceFragment = (
  { __typename?: 'Services' }
  & Pick<Services, 'id' | 'createdAt' | 'updatedAt' | 'slug' | 'name' | 'description'>
  & { image?: Maybe<(
    { __typename?: 'UploadFile' }
    & Pick<UploadFile, 'url'>
  )> }
);

export type ClientQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ClientQuery = (
  { __typename?: 'Query' }
  & { clients?: Maybe<Array<Maybe<(
    { __typename?: 'Clients' }
    & DefaultClientFragment
  )>>> }
);

export type ClientsQueryVariables = Exact<{ [key: string]: never; }>;


export type ClientsQuery = (
  { __typename?: 'Query' }
  & { clients?: Maybe<Array<Maybe<(
    { __typename?: 'Clients' }
    & DefaultClientFragment
  )>>> }
);

export type ContactInformationQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactInformationQuery = (
  { __typename?: 'Query' }
  & { contactInformation?: Maybe<(
    { __typename?: 'ContactInformation' }
    & DefaultContactInformationFragment
  )> }
);

export type EmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type EmployeesQuery = (
  { __typename?: 'Query' }
  & { employees?: Maybe<Array<Maybe<(
    { __typename?: 'Employees' }
    & DefaultEmployeeFragment
  )>>> }
);

export type GetClientReferencesQueryVariables = Exact<{
  clientSlug: Scalars['String'];
}>;


export type GetClientReferencesQuery = (
  { __typename?: 'Query' }
  & { references?: Maybe<Array<Maybe<(
    { __typename?: 'References' }
    & DefaultReferenceFragment
  )>>> }
);

export type ReferencesQueryVariables = Exact<{ [key: string]: never; }>;


export type ReferencesQuery = (
  { __typename?: 'Query' }
  & { references?: Maybe<Array<Maybe<(
    { __typename?: 'References' }
    & DefaultReferenceFragment
  )>>> }
);

export type ServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type ServicesQuery = (
  { __typename?: 'Query' }
  & { services?: Maybe<Array<Maybe<(
    { __typename?: 'Services' }
    & DefaultServiceFragment
  )>>> }
);

export const DefaultContactInformationFragmentDoc = gql`
    fragment DefaultContactInformation on ContactInformation {
  id
  email
  linkedin
  phoneNumber
  address
  zipCode
  city
  country
}
    `;
export const DefaultEmployeeFragmentDoc = gql`
    fragment DefaultEmployee on Employees {
  id
  createdAt
  updatedAt
  slug
  name
  title
  email
}
    `;
export const DefaultClientFragmentDoc = gql`
    fragment DefaultClient on Clients {
  id
  createdAt
  updatedAt
  slug
  name
  description
  logo {
    url
  }
}
    `;
export const DefaultReferenceFragmentDoc = gql`
    fragment DefaultReference on References {
  id
  createdAt
  updatedAt
  slug
  title
  description
  client {
    ...DefaultClient
  }
}
    ${DefaultClientFragmentDoc}`;
export const DefaultServiceFragmentDoc = gql`
    fragment DefaultService on Services {
  id
  createdAt
  updatedAt
  slug
  name
  description
  image {
    url
  }
}
    `;
export const ClientDocument = gql`
    query Client($slug: String!) {
  clients(where: {slug: $slug}) {
    ...DefaultClient
  }
}
    ${DefaultClientFragmentDoc}`;

export function useClientQuery(options: Omit<Urql.UseQueryArgs<ClientQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ClientQuery>({ query: ClientDocument, ...options });
};
export const ClientsDocument = gql`
    query Clients {
  clients {
    ...DefaultClient
  }
}
    ${DefaultClientFragmentDoc}`;

export function useClientsQuery(options: Omit<Urql.UseQueryArgs<ClientsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ClientsQuery>({ query: ClientsDocument, ...options });
};
export const ContactInformationDocument = gql`
    query ContactInformation {
  contactInformation {
    ...DefaultContactInformation
  }
}
    ${DefaultContactInformationFragmentDoc}`;

export function useContactInformationQuery(options: Omit<Urql.UseQueryArgs<ContactInformationQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ContactInformationQuery>({ query: ContactInformationDocument, ...options });
};
export const EmployeesDocument = gql`
    query Employees {
  employees {
    ...DefaultEmployee
  }
}
    ${DefaultEmployeeFragmentDoc}`;

export function useEmployeesQuery(options: Omit<Urql.UseQueryArgs<EmployeesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<EmployeesQuery>({ query: EmployeesDocument, ...options });
};
export const GetClientReferencesDocument = gql`
    query GetClientReferences($clientSlug: String!) {
  references(where: {client: {slug: $clientSlug}}) {
    ...DefaultReference
  }
}
    ${DefaultReferenceFragmentDoc}`;

export function useGetClientReferencesQuery(options: Omit<Urql.UseQueryArgs<GetClientReferencesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetClientReferencesQuery>({ query: GetClientReferencesDocument, ...options });
};
export const ReferencesDocument = gql`
    query References {
  references {
    ...DefaultReference
  }
}
    ${DefaultReferenceFragmentDoc}`;

export function useReferencesQuery(options: Omit<Urql.UseQueryArgs<ReferencesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ReferencesQuery>({ query: ReferencesDocument, ...options });
};
export const ServicesDocument = gql`
    query Services {
  services {
    ...DefaultService
  }
}
    ${DefaultServiceFragmentDoc}`;

export function useServicesQuery(options: Omit<Urql.UseQueryArgs<ServicesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ServicesQuery>({ query: ServicesDocument, ...options });
};