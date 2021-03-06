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
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  slug: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  logo?: Maybe<UploadFile>;
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

export type ClientsConnectionCreated_At = {
  __typename?: 'ClientsConnectionCreated_at';
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

export type ClientsConnectionSlug = {
  __typename?: 'ClientsConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ClientsConnection>;
};

export type ClientsConnectionUpdated_At = {
  __typename?: 'ClientsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ClientsConnection>;
};

export type ClientsGroupBy = {
  __typename?: 'ClientsGroupBy';
  id?: Maybe<Array<Maybe<ClientsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ClientsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ClientsConnectionUpdated_At>>>;
  slug?: Maybe<Array<Maybe<ClientsConnectionSlug>>>;
  name?: Maybe<Array<Maybe<ClientsConnectionName>>>;
  description?: Maybe<Array<Maybe<ClientsConnectionDescription>>>;
  logo?: Maybe<Array<Maybe<ClientsConnectionLogo>>>;
};

export type ComponentResumeAward = {
  __typename?: 'ComponentResumeAward';
  id: Scalars['ID'];
  name: Scalars['String'];
  issuer: Scalars['String'];
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentResumeAwardInput = {
  name: Scalars['String'];
  issuer: Scalars['String'];
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentResumeCertificate = {
  __typename?: 'ComponentResumeCertificate';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type ComponentResumeCertificateInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type ComponentResumeCourse = {
  __typename?: 'ComponentResumeCourse';
  id: Scalars['ID'];
  title: Scalars['String'];
  institution?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentResumeCourseInput = {
  title: Scalars['String'];
  institution?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentResumeEducationComponent = {
  __typename?: 'ComponentResumeEducationComponent';
  id: Scalars['ID'];
  start: Scalars['Date'];
  end?: Maybe<Scalars['Date']>;
  name: Scalars['String'];
  school?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentResumeEducationComponentInput = {
  start: Scalars['Date'];
  end?: Maybe<Scalars['Date']>;
  name: Scalars['String'];
  school?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentResumeHobby = {
  __typename?: 'ComponentResumeHobby';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type ComponentResumeHobbyInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type ComponentResumeLanguage = {
  __typename?: 'ComponentResumeLanguage';
  id: Scalars['ID'];
  language: Scalars['String'];
  languageLevel?: Maybe<Enum_Componentresumelanguage_Languagelevel>;
};

export type ComponentResumeLanguageInput = {
  language: Scalars['String'];
  languageLevel?: Maybe<Enum_Componentresumelanguage_Languagelevel>;
};

export type ComponentResumeOrganisation = {
  __typename?: 'ComponentResumeOrganisation';
  id: Scalars['ID'];
  name: Scalars['String'];
  position?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentResumeOrganisationInput = {
  name: Scalars['String'];
  position?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentResumePersonalInformation = {
  __typename?: 'ComponentResumePersonalInformation';
  id: Scalars['ID'];
  fullName: Scalars['String'];
  profilePicture?: Maybe<UploadFile>;
  email: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  fullAddress?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  githubLink?: Maybe<Scalars['String']>;
  linkedinLink?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  about: Scalars['String'];
};

export type ComponentResumePersonalInformationInput = {
  fullName: Scalars['String'];
  profilePicture?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  fullAddress?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  githubLink?: Maybe<Scalars['String']>;
  linkedinLink?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  about: Scalars['String'];
};

export type ComponentResumePersonalProject = {
  __typename?: 'ComponentResumePersonalProject';
  id: Scalars['ID'];
  title: Scalars['String'];
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFile>;
};

export type ComponentResumePersonalProjectInput = {
  title: Scalars['String'];
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
};

export type ComponentResumeProfessionalExperience = {
  __typename?: 'ComponentResumeProfessionalExperience';
  id: Scalars['ID'];
  title: Scalars['String'];
  employer: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentResumeProfessionalExperienceInput = {
  title: Scalars['String'];
  employer: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentResumePublication = {
  __typename?: 'ComponentResumePublication';
  id: Scalars['ID'];
  name: Scalars['String'];
  publisher?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type ComponentResumePublicationInput = {
  name: Scalars['String'];
  publisher?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type ComponentResumeResumeReference = {
  __typename?: 'ComponentResumeResumeReference';
  id: Scalars['ID'];
  name: Scalars['String'];
  title: Scalars['String'];
  organisation?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
};

export type ComponentResumeResumeReferenceInput = {
  name: Scalars['String'];
  title: Scalars['String'];
  organisation?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
};

export type ComponentResumeSkill = {
  __typename?: 'ComponentResumeSkill';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  skillLevel?: Maybe<Enum_Componentresumeskill_Skilllevel>;
};

export type ComponentResumeSkillInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  skillLevel?: Maybe<Enum_Componentresumeskill_Skilllevel>;
};

export type ContactInformation = {
  __typename?: 'ContactInformation';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
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



export enum Enum_Componentresumelanguage_Languagelevel {
  Beginner = 'Beginner',
  Skillful = 'Skillful',
  Experienced = 'Experienced',
  Expert = 'Expert'
}

export enum Enum_Componentresumeskill_Skilllevel {
  Beginner = 'Beginner',
  Skillful = 'Skillful',
  Experienced = 'Experienced',
  Expert = 'Expert'
}

export type EmployeeInput = {
  slug: Scalars['String'];
  name: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  resume?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Employees = {
  __typename?: 'Employees';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  slug: Scalars['String'];
  name: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  resume?: Maybe<Resume>;
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

export type EmployeesConnectionCreated_At = {
  __typename?: 'EmployeesConnectionCreated_at';
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

export type EmployeesConnectionResume = {
  __typename?: 'EmployeesConnectionResume';
  key?: Maybe<Scalars['ID']>;
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

export type EmployeesConnectionUpdated_At = {
  __typename?: 'EmployeesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EmployeesConnection>;
};

export type EmployeesGroupBy = {
  __typename?: 'EmployeesGroupBy';
  id?: Maybe<Array<Maybe<EmployeesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<EmployeesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<EmployeesConnectionUpdated_At>>>;
  slug?: Maybe<Array<Maybe<EmployeesConnectionSlug>>>;
  name?: Maybe<Array<Maybe<EmployeesConnectionName>>>;
  title?: Maybe<Array<Maybe<EmployeesConnectionTitle>>>;
  email?: Maybe<Array<Maybe<EmployeesConnectionEmail>>>;
  resume?: Maybe<Array<Maybe<EmployeesConnectionResume>>>;
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



export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Clients | ClientsConnection | ClientsAggregator | ClientsGroupBy | ClientsConnectionId | ClientsConnectionCreated_At | ClientsConnectionUpdated_At | ClientsConnectionSlug | ClientsConnectionName | ClientsConnectionDescription | ClientsConnectionLogo | CreateClientPayload | UpdateClientPayload | DeleteClientPayload | ContactInformation | UpdateContactInformationPayload | DeleteContactInformationPayload | Employees | EmployeesConnection | EmployeesAggregator | EmployeesGroupBy | EmployeesConnectionId | EmployeesConnectionCreated_At | EmployeesConnectionUpdated_At | EmployeesConnectionSlug | EmployeesConnectionName | EmployeesConnectionTitle | EmployeesConnectionEmail | EmployeesConnectionResume | CreateEmployeePayload | UpdateEmployeePayload | DeleteEmployeePayload | References | ReferencesConnection | ReferencesAggregator | ReferencesGroupBy | ReferencesConnectionId | ReferencesConnectionCreated_At | ReferencesConnectionUpdated_At | ReferencesConnectionSlug | ReferencesConnectionTitle | ReferencesConnectionDescription | ReferencesConnectionClient | ReferencesConnectionCompleted | CreateReferencePayload | UpdateReferencePayload | DeleteReferencePayload | Resume | ResumeConnection | ResumeAggregator | ResumeGroupBy | ResumeConnectionId | ResumeConnectionCreated_At | ResumeConnectionUpdated_At | ResumeConnectionPersonalInformation | ResumeConnectionName | ResumeConnectionEmployee | CreateResumePayload | UpdateResumePayload | DeleteResumePayload | Services | ServicesConnection | ServicesAggregator | ServicesGroupBy | ServicesConnectionId | ServicesConnectionCreated_At | ServicesConnectionUpdated_At | ServicesConnectionSlug | ServicesConnectionName | ServicesConnectionDescription | ServicesConnectionImage | CreateServicePayload | UpdateServicePayload | DeleteServicePayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentResumeAward | ComponentResumeCertificate | ComponentResumeCourse | ComponentResumeEducationComponent | ComponentResumeHobby | ComponentResumeLanguage | ComponentResumeOrganisation | ComponentResumePersonalInformation | ComponentResumePersonalProject | ComponentResumeProfessionalExperience | ComponentResumePublication | ComponentResumeResumeReference | ComponentResumeSkill;

export type Mutation = {
  __typename?: 'Mutation';
  createClient?: Maybe<CreateClientPayload>;
  updateClient?: Maybe<UpdateClientPayload>;
  deleteClient?: Maybe<DeleteClientPayload>;
  updateContactInformation?: Maybe<UpdateContactInformationPayload>;
  deleteContactInformation?: Maybe<DeleteContactInformationPayload>;
  createEmployee?: Maybe<CreateEmployeePayload>;
  updateEmployee?: Maybe<UpdateEmployeePayload>;
  deleteEmployee?: Maybe<DeleteEmployeePayload>;
  createReference?: Maybe<CreateReferencePayload>;
  updateReference?: Maybe<UpdateReferencePayload>;
  deleteReference?: Maybe<DeleteReferencePayload>;
  createResume?: Maybe<CreateResumePayload>;
  updateResume?: Maybe<UpdateResumePayload>;
  deleteResume?: Maybe<DeleteResumePayload>;
  createService?: Maybe<CreateServicePayload>;
  updateService?: Maybe<UpdateServicePayload>;
  deleteService?: Maybe<DeleteServicePayload>;
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


export type MutationCreateEmployeeArgs = {
  input?: Maybe<CreateEmployeeInput>;
};


export type MutationUpdateEmployeeArgs = {
  input?: Maybe<UpdateEmployeeInput>;
};


export type MutationDeleteEmployeeArgs = {
  input?: Maybe<DeleteEmployeeInput>;
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

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  client?: Maybe<Clients>;
  clients?: Maybe<Array<Maybe<Clients>>>;
  clientsConnection?: Maybe<ClientsConnection>;
  contactInformation?: Maybe<ContactInformation>;
  employee?: Maybe<Employees>;
  employees?: Maybe<Array<Maybe<Employees>>>;
  employeesConnection?: Maybe<EmployeesConnection>;
  reference?: Maybe<References>;
  references?: Maybe<Array<Maybe<References>>>;
  referencesConnection?: Maybe<ReferencesConnection>;
  resume?: Maybe<Resume>;
  resumes?: Maybe<Array<Maybe<Resume>>>;
  resumesConnection?: Maybe<ResumeConnection>;
  service?: Maybe<Services>;
  services?: Maybe<Array<Maybe<Services>>>;
  servicesConnection?: Maybe<ServicesConnection>;
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
  completed?: Maybe<Scalars['Date']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type References = {
  __typename?: 'References';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  slug: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  client?: Maybe<Clients>;
  completed?: Maybe<Scalars['Date']>;
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

export type ReferencesConnectionCompleted = {
  __typename?: 'ReferencesConnectionCompleted';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ReferencesConnection>;
};

export type ReferencesConnectionCreated_At = {
  __typename?: 'ReferencesConnectionCreated_at';
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

export type ReferencesConnectionUpdated_At = {
  __typename?: 'ReferencesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ReferencesConnection>;
};

export type ReferencesGroupBy = {
  __typename?: 'ReferencesGroupBy';
  id?: Maybe<Array<Maybe<ReferencesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ReferencesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ReferencesConnectionUpdated_At>>>;
  slug?: Maybe<Array<Maybe<ReferencesConnectionSlug>>>;
  title?: Maybe<Array<Maybe<ReferencesConnectionTitle>>>;
  description?: Maybe<Array<Maybe<ReferencesConnectionDescription>>>;
  client?: Maybe<Array<Maybe<ReferencesConnectionClient>>>;
  completed?: Maybe<Array<Maybe<ReferencesConnectionCompleted>>>;
};

export type Resume = {
  __typename?: 'Resume';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  PersonalInformation?: Maybe<ComponentResumePersonalInformation>;
  Education?: Maybe<Array<Maybe<ComponentResumeEducationComponent>>>;
  ProfessionalExperience?: Maybe<Array<Maybe<ComponentResumeProfessionalExperience>>>;
  Skill?: Maybe<Array<Maybe<ComponentResumeSkill>>>;
  Language?: Maybe<Array<Maybe<ComponentResumeLanguage>>>;
  Certificate?: Maybe<Array<Maybe<ComponentResumeCertificate>>>;
  Hobby?: Maybe<Array<Maybe<ComponentResumeHobby>>>;
  PersonalProject?: Maybe<Array<Maybe<ComponentResumePersonalProject>>>;
  Course?: Maybe<Array<Maybe<ComponentResumeCourse>>>;
  Award?: Maybe<Array<Maybe<ComponentResumeAward>>>;
  Organisation?: Maybe<Array<Maybe<ComponentResumeOrganisation>>>;
  Publication?: Maybe<Array<Maybe<ComponentResumePublication>>>;
  ResumeReference?: Maybe<Array<Maybe<ComponentResumeResumeReference>>>;
  name: Scalars['String'];
  employee?: Maybe<Employees>;
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

export type ResumeConnectionCreated_At = {
  __typename?: 'ResumeConnectionCreated_at';
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

export type ResumeConnectionName = {
  __typename?: 'ResumeConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ResumeConnection>;
};

export type ResumeConnectionPersonalInformation = {
  __typename?: 'ResumeConnectionPersonalInformation';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ResumeConnection>;
};

export type ResumeConnectionUpdated_At = {
  __typename?: 'ResumeConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ResumeConnection>;
};

export type ResumeGroupBy = {
  __typename?: 'ResumeGroupBy';
  id?: Maybe<Array<Maybe<ResumeConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ResumeConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ResumeConnectionUpdated_At>>>;
  PersonalInformation?: Maybe<Array<Maybe<ResumeConnectionPersonalInformation>>>;
  name?: Maybe<Array<Maybe<ResumeConnectionName>>>;
  employee?: Maybe<Array<Maybe<ResumeConnectionEmployee>>>;
};

export type ResumeInput = {
  PersonalInformation: ComponentResumePersonalInformationInput;
  Education?: Maybe<Array<Maybe<ComponentResumeEducationComponentInput>>>;
  ProfessionalExperience?: Maybe<Array<ComponentResumeProfessionalExperienceInput>>;
  Skill?: Maybe<Array<Maybe<ComponentResumeSkillInput>>>;
  Language?: Maybe<Array<ComponentResumeLanguageInput>>;
  Certificate?: Maybe<Array<Maybe<ComponentResumeCertificateInput>>>;
  Hobby?: Maybe<Array<Maybe<ComponentResumeHobbyInput>>>;
  PersonalProject?: Maybe<Array<Maybe<ComponentResumePersonalProjectInput>>>;
  Course?: Maybe<Array<Maybe<ComponentResumeCourseInput>>>;
  Award?: Maybe<Array<Maybe<ComponentResumeAwardInput>>>;
  Organisation?: Maybe<Array<Maybe<ComponentResumeOrganisationInput>>>;
  Publication?: Maybe<Array<Maybe<ComponentResumePublicationInput>>>;
  ResumeReference?: Maybe<Array<Maybe<ComponentResumeResumeReferenceInput>>>;
  name: Scalars['String'];
  employee?: Maybe<Scalars['ID']>;
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
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  slug: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  image?: Maybe<UploadFile>;
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

export type ServicesConnectionCreated_At = {
  __typename?: 'ServicesConnectionCreated_at';
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

export type ServicesConnectionSlug = {
  __typename?: 'ServicesConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ServicesConnection>;
};

export type ServicesConnectionUpdated_At = {
  __typename?: 'ServicesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ServicesConnection>;
};

export type ServicesGroupBy = {
  __typename?: 'ServicesGroupBy';
  id?: Maybe<Array<Maybe<ServicesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ServicesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ServicesConnectionUpdated_At>>>;
  slug?: Maybe<Array<Maybe<ServicesConnectionSlug>>>;
  name?: Maybe<Array<Maybe<ServicesConnectionName>>>;
  description?: Maybe<Array<Maybe<ServicesConnectionDescription>>>;
  image?: Maybe<Array<Maybe<ServicesConnectionImage>>>;
};



export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
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

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
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

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
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

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
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

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
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

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
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

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type CreateClientInput = {
  data?: Maybe<ClientInput>;
};

export type CreateClientPayload = {
  __typename?: 'createClientPayload';
  client?: Maybe<Clients>;
};

export type CreateEmployeeInput = {
  data?: Maybe<EmployeeInput>;
};

export type CreateEmployeePayload = {
  __typename?: 'createEmployeePayload';
  employee?: Maybe<Employees>;
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

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
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

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
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

export type EditComponentResumeAwardInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  issuer?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

export type EditComponentResumeCertificateInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type EditComponentResumeCourseInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  institution?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

export type EditComponentResumeEducationComponentInput = {
  id?: Maybe<Scalars['ID']>;
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  school?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type EditComponentResumeHobbyInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type EditComponentResumeLanguageInput = {
  id?: Maybe<Scalars['ID']>;
  language?: Maybe<Scalars['String']>;
  languageLevel?: Maybe<Enum_Componentresumelanguage_Languagelevel>;
};

export type EditComponentResumeOrganisationInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

export type EditComponentResumePersonalInformationInput = {
  id?: Maybe<Scalars['ID']>;
  fullName?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  fullAddress?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  githubLink?: Maybe<Scalars['String']>;
  linkedinLink?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
};

export type EditComponentResumePersonalProjectInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
};

export type EditComponentResumeProfessionalExperienceInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  employer?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

export type EditComponentResumePublicationInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type EditComponentResumeResumeReferenceInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  organisation?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type EditComponentResumeSkillInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  skillLevel?: Maybe<Enum_Componentresumeskill_Skilllevel>;
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

export type EditEmployeeInput = {
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  resume?: Maybe<Scalars['ID']>;
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

export type EditReferenceInput = {
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  client?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  completed?: Maybe<Scalars['Date']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditResumeInput = {
  PersonalInformation?: Maybe<EditComponentResumePersonalInformationInput>;
  Education?: Maybe<Array<Maybe<EditComponentResumeEducationComponentInput>>>;
  ProfessionalExperience?: Maybe<Array<Maybe<EditComponentResumeProfessionalExperienceInput>>>;
  Skill?: Maybe<Array<Maybe<EditComponentResumeSkillInput>>>;
  Language?: Maybe<Array<Maybe<EditComponentResumeLanguageInput>>>;
  Certificate?: Maybe<Array<Maybe<EditComponentResumeCertificateInput>>>;
  Hobby?: Maybe<Array<Maybe<EditComponentResumeHobbyInput>>>;
  PersonalProject?: Maybe<Array<Maybe<EditComponentResumePersonalProjectInput>>>;
  Course?: Maybe<Array<Maybe<EditComponentResumeCourseInput>>>;
  Award?: Maybe<Array<Maybe<EditComponentResumeAwardInput>>>;
  Organisation?: Maybe<Array<Maybe<EditComponentResumeOrganisationInput>>>;
  Publication?: Maybe<Array<Maybe<EditComponentResumePublicationInput>>>;
  ResumeReference?: Maybe<Array<Maybe<EditComponentResumeResumeReferenceInput>>>;
  name?: Maybe<Scalars['String']>;
  employee?: Maybe<Scalars['ID']>;
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

export type UpdateEmployeeInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditEmployeeInput>;
};

export type UpdateEmployeePayload = {
  __typename?: 'updateEmployeePayload';
  employee?: Maybe<Employees>;
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
  & Pick<Clients, 'id' | 'created_at' | 'updated_at' | 'slug' | 'name' | 'description'>
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
  & Pick<Employees, 'id' | 'slug' | 'name' | 'title' | 'email'>
);

export type DefaultReferenceFragment = (
  { __typename?: 'References' }
  & Pick<References, 'id' | 'created_at' | 'updated_at' | 'slug' | 'title' | 'description' | 'completed'>
  & { images?: Maybe<Array<Maybe<(
    { __typename?: 'UploadFile' }
    & Pick<UploadFile, 'name' | 'caption' | 'url'>
  )>>>, client?: Maybe<(
    { __typename?: 'Clients' }
    & DefaultClientFragment
  )> }
);

export type DefaultServiceFragment = (
  { __typename?: 'Services' }
  & Pick<Services, 'id' | 'created_at' | 'updated_at' | 'slug' | 'name' | 'description'>
  & { image?: Maybe<(
    { __typename?: 'UploadFile' }
    & Pick<UploadFile, 'url'>
  )> }
);

export type DefaultAwardFragment = (
  { __typename?: 'ComponentResumeAward' }
  & Pick<ComponentResumeAward, 'id' | 'name' | 'issuer' | 'date' | 'description'>
);

export type DefaultCertificateFragment = (
  { __typename?: 'ComponentResumeCertificate' }
  & Pick<ComponentResumeCertificate, 'id' | 'name' | 'description'>
);

export type DefaultCourseFragment = (
  { __typename?: 'ComponentResumeCourse' }
  & Pick<ComponentResumeCourse, 'id' | 'title' | 'institution' | 'location' | 'start' | 'end' | 'description'>
);

export type DefaultEducationFragment = (
  { __typename?: 'ComponentResumeEducationComponent' }
  & Pick<ComponentResumeEducationComponent, 'id' | 'start' | 'end' | 'name' | 'school' | 'link' | 'description'>
);

export type DefaultHobbyFragment = (
  { __typename?: 'ComponentResumeHobby' }
  & Pick<ComponentResumeHobby, 'id' | 'name' | 'description'>
);

export type DefaultLanguageFragment = (
  { __typename?: 'ComponentResumeLanguage' }
  & Pick<ComponentResumeLanguage, 'id' | 'language' | 'languageLevel'>
);

export type DefaultOrganisationFragment = (
  { __typename?: 'ComponentResumeOrganisation' }
  & Pick<ComponentResumeOrganisation, 'id' | 'name' | 'position' | 'location' | 'start' | 'end' | 'description'>
);

export type DefaultPersonalInformationFragment = (
  { __typename?: 'ComponentResumePersonalInformation' }
  & Pick<ComponentResumePersonalInformation, 'id' | 'fullName' | 'email' | 'phoneNumber' | 'fullAddress' | 'dateOfBirth' | 'githubLink' | 'linkedinLink' | 'status' | 'about'>
  & { profilePicture?: Maybe<(
    { __typename?: 'UploadFile' }
    & Pick<UploadFile, 'url'>
  )> }
);

export type DefaultPersonalProjectFragment = (
  { __typename?: 'ComponentResumePersonalProject' }
  & Pick<ComponentResumePersonalProject, 'id' | 'title' | 'start' | 'end' | 'description' | 'link'>
  & { image?: Maybe<(
    { __typename?: 'UploadFile' }
    & Pick<UploadFile, 'url'>
  )> }
);

export type DefaultProfessionalExperienceFragment = (
  { __typename?: 'ComponentResumeProfessionalExperience' }
  & Pick<ComponentResumeProfessionalExperience, 'id' | 'title' | 'employer' | 'location' | 'start' | 'end' | 'description'>
);

export type DefaultPublicationFragment = (
  { __typename?: 'ComponentResumePublication' }
  & Pick<ComponentResumePublication, 'id' | 'name' | 'publisher' | 'date' | 'description' | 'link'>
);

export type DefaultResumeReferenceFragment = (
  { __typename?: 'ComponentResumeResumeReference' }
  & Pick<ComponentResumeResumeReference, 'id' | 'name' | 'title' | 'organisation' | 'email' | 'phoneNumber'>
);

export type DefaultSkillFragment = (
  { __typename?: 'ComponentResumeSkill' }
  & Pick<ComponentResumeSkill, 'id' | 'name' | 'description' | 'skillLevel'>
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

export type EmployeeBySlugQueryVariables = Exact<{
  employeeSlug: Scalars['String'];
}>;


export type EmployeeBySlugQuery = (
  { __typename?: 'Query' }
  & { employees?: Maybe<Array<Maybe<(
    { __typename?: 'Employees' }
    & DefaultEmployeeFragment
  )>>> }
);

export type GetEmployeeResumeQueryVariables = Exact<{
  employeeSlug: Scalars['String'];
}>;


export type GetEmployeeResumeQuery = (
  { __typename?: 'Query' }
  & { resumes?: Maybe<Array<Maybe<(
    { __typename?: 'Resume' }
    & { PersonalInformation?: Maybe<(
      { __typename?: 'ComponentResumePersonalInformation' }
      & DefaultPersonalInformationFragment
    )>, employee?: Maybe<(
      { __typename?: 'Employees' }
      & DefaultEmployeeFragment
    )>, Education?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentResumeEducationComponent' }
      & DefaultEducationFragment
    )>>>, ProfessionalExperience?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentResumeProfessionalExperience' }
      & DefaultProfessionalExperienceFragment
    )>>>, Skill?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentResumeSkill' }
      & DefaultSkillFragment
    )>>>, Language?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentResumeLanguage' }
      & DefaultLanguageFragment
    )>>>, Certificate?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentResumeCertificate' }
      & DefaultCertificateFragment
    )>>>, Hobby?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentResumeHobby' }
      & DefaultHobbyFragment
    )>>>, PersonalProject?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentResumePersonalProject' }
      & DefaultPersonalProjectFragment
    )>>>, Course?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentResumeCourse' }
      & DefaultCourseFragment
    )>>>, Award?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentResumeAward' }
      & DefaultAwardFragment
    )>>>, Organisation?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentResumeOrganisation' }
      & DefaultOrganisationFragment
    )>>>, Publication?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentResumePublication' }
      & DefaultPublicationFragment
    )>>>, ResumeReference?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentResumeResumeReference' }
      & DefaultResumeReferenceFragment
    )>>> }
  )>>> }
);

export type GetReferenceByClientQueryVariables = Exact<{
  referenceSlug: Scalars['String'];
  clientSlug: Scalars['String'];
}>;


export type GetReferenceByClientQuery = (
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
  slug
  name
  title
  email
}
    `;
export const DefaultClientFragmentDoc = gql`
    fragment DefaultClient on Clients {
  id
  created_at
  updated_at
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
  created_at
  updated_at
  slug
  title
  description
  completed
  images {
    name
    caption
    url
  }
  client {
    ...DefaultClient
  }
}
    ${DefaultClientFragmentDoc}`;
export const DefaultServiceFragmentDoc = gql`
    fragment DefaultService on Services {
  id
  created_at
  updated_at
  slug
  name
  description
  image {
    url
  }
}
    `;
export const DefaultAwardFragmentDoc = gql`
    fragment DefaultAward on ComponentResumeAward {
  id
  name
  issuer
  date
  description
}
    `;
export const DefaultCertificateFragmentDoc = gql`
    fragment DefaultCertificate on ComponentResumeCertificate {
  id
  name
  description
}
    `;
export const DefaultCourseFragmentDoc = gql`
    fragment DefaultCourse on ComponentResumeCourse {
  id
  title
  institution
  location
  start
  end
  description
}
    `;
export const DefaultEducationFragmentDoc = gql`
    fragment DefaultEducation on ComponentResumeEducationComponent {
  id
  start
  end
  name
  school
  link
  description
}
    `;
export const DefaultHobbyFragmentDoc = gql`
    fragment DefaultHobby on ComponentResumeHobby {
  id
  name
  description
}
    `;
export const DefaultLanguageFragmentDoc = gql`
    fragment DefaultLanguage on ComponentResumeLanguage {
  id
  language
  languageLevel
}
    `;
export const DefaultOrganisationFragmentDoc = gql`
    fragment DefaultOrganisation on ComponentResumeOrganisation {
  id
  name
  position
  location
  start
  end
  description
}
    `;
export const DefaultPersonalInformationFragmentDoc = gql`
    fragment DefaultPersonalInformation on ComponentResumePersonalInformation {
  id
  fullName
  email
  phoneNumber
  fullAddress
  dateOfBirth
  githubLink
  linkedinLink
  status
  about
  profilePicture {
    url
  }
}
    `;
export const DefaultPersonalProjectFragmentDoc = gql`
    fragment DefaultPersonalProject on ComponentResumePersonalProject {
  id
  title
  start
  end
  description
  link
  image {
    url
  }
}
    `;
export const DefaultProfessionalExperienceFragmentDoc = gql`
    fragment DefaultProfessionalExperience on ComponentResumeProfessionalExperience {
  id
  title
  employer
  location
  start
  end
  description
}
    `;
export const DefaultPublicationFragmentDoc = gql`
    fragment DefaultPublication on ComponentResumePublication {
  id
  name
  publisher
  date
  description
  link
}
    `;
export const DefaultResumeReferenceFragmentDoc = gql`
    fragment DefaultResumeReference on ComponentResumeResumeReference {
  id
  name
  title
  organisation
  email
  phoneNumber
}
    `;
export const DefaultSkillFragmentDoc = gql`
    fragment DefaultSkill on ComponentResumeSkill {
  id
  name
  description
  skillLevel
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
export const EmployeeBySlugDocument = gql`
    query EmployeeBySlug($employeeSlug: String!) {
  employees(where: {slug: $employeeSlug}) {
    ...DefaultEmployee
  }
}
    ${DefaultEmployeeFragmentDoc}`;

export function useEmployeeBySlugQuery(options: Omit<Urql.UseQueryArgs<EmployeeBySlugQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<EmployeeBySlugQuery>({ query: EmployeeBySlugDocument, ...options });
};
export const GetEmployeeResumeDocument = gql`
    query GetEmployeeResume($employeeSlug: String!) {
  resumes(where: {employee: {slug: $employeeSlug}}) {
    PersonalInformation {
      ...DefaultPersonalInformation
    }
    employee {
      ...DefaultEmployee
    }
    Education {
      ...DefaultEducation
    }
    ProfessionalExperience {
      ...DefaultProfessionalExperience
    }
    Skill {
      ...DefaultSkill
    }
    Language {
      ...DefaultLanguage
    }
    Certificate {
      ...DefaultCertificate
    }
    Hobby {
      ...DefaultHobby
    }
    PersonalProject {
      ...DefaultPersonalProject
    }
    Course {
      ...DefaultCourse
    }
    Award {
      ...DefaultAward
    }
    Organisation {
      ...DefaultOrganisation
    }
    Publication {
      ...DefaultPublication
    }
    ResumeReference {
      ...DefaultResumeReference
    }
  }
}
    ${DefaultPersonalInformationFragmentDoc}
${DefaultEmployeeFragmentDoc}
${DefaultEducationFragmentDoc}
${DefaultProfessionalExperienceFragmentDoc}
${DefaultSkillFragmentDoc}
${DefaultLanguageFragmentDoc}
${DefaultCertificateFragmentDoc}
${DefaultHobbyFragmentDoc}
${DefaultPersonalProjectFragmentDoc}
${DefaultCourseFragmentDoc}
${DefaultAwardFragmentDoc}
${DefaultOrganisationFragmentDoc}
${DefaultPublicationFragmentDoc}
${DefaultResumeReferenceFragmentDoc}`;

export function useGetEmployeeResumeQuery(options: Omit<Urql.UseQueryArgs<GetEmployeeResumeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetEmployeeResumeQuery>({ query: GetEmployeeResumeDocument, ...options });
};
export const GetReferenceByClientDocument = gql`
    query GetReferenceByClient($referenceSlug: String!, $clientSlug: String!) {
  references(where: {slug: $referenceSlug, client: {slug: $clientSlug}}) {
    ...DefaultReference
  }
}
    ${DefaultReferenceFragmentDoc}`;

export function useGetReferenceByClientQuery(options: Omit<Urql.UseQueryArgs<GetReferenceByClientQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetReferenceByClientQuery>({ query: GetReferenceByClientDocument, ...options });
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