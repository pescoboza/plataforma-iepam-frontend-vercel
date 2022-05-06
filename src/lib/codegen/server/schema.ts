import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
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
  /** ISO8601 Date values */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  create_aplicacion_item?: Maybe<Aplicacion>;
  create_aplicacion_items?: Maybe<Array<Maybe<Aplicacion>>>;
  create_empresa_item?: Maybe<Empresa>;
  create_empresa_items?: Maybe<Array<Maybe<Empresa>>>;
  create_puesto_item?: Maybe<Puesto>;
  create_puesto_items?: Maybe<Array<Maybe<Puesto>>>;
  delete_aplicacion_item?: Maybe<Delete_One>;
  delete_aplicacion_items?: Maybe<Delete_Many>;
  delete_empresa_item?: Maybe<Delete_One>;
  delete_empresa_items?: Maybe<Delete_Many>;
  delete_puesto_item?: Maybe<Delete_One>;
  delete_puesto_items?: Maybe<Delete_Many>;
  update_aplicacion_item?: Maybe<Aplicacion>;
  update_aplicacion_items?: Maybe<Array<Maybe<Aplicacion>>>;
  update_empresa_item?: Maybe<Empresa>;
  update_empresa_items?: Maybe<Array<Maybe<Empresa>>>;
  update_puesto_item?: Maybe<Puesto>;
  update_puesto_items?: Maybe<Array<Maybe<Puesto>>>;
};


export type MutationCreate_Aplicacion_ItemArgs = {
  data: Create_Aplicacion_Input;
};


export type MutationCreate_Aplicacion_ItemsArgs = {
  data?: InputMaybe<Array<Create_Aplicacion_Input>>;
  filter?: InputMaybe<Aplicacion_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Empresa_ItemArgs = {
  data: Create_Empresa_Input;
};


export type MutationCreate_Empresa_ItemsArgs = {
  data?: InputMaybe<Array<Create_Empresa_Input>>;
  filter?: InputMaybe<Empresa_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Puesto_ItemArgs = {
  data: Create_Puesto_Input;
};


export type MutationCreate_Puesto_ItemsArgs = {
  data?: InputMaybe<Array<Create_Puesto_Input>>;
  filter?: InputMaybe<Puesto_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationDelete_Aplicacion_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Aplicacion_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Empresa_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Empresa_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Puesto_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Puesto_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationUpdate_Aplicacion_ItemArgs = {
  data: Update_Aplicacion_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Aplicacion_ItemsArgs = {
  data: Update_Aplicacion_Input;
  filter?: InputMaybe<Aplicacion_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Empresa_ItemArgs = {
  data: Update_Empresa_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Empresa_ItemsArgs = {
  data: Update_Empresa_Input;
  filter?: InputMaybe<Empresa_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Puesto_ItemArgs = {
  data: Update_Puesto_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Puesto_ItemsArgs = {
  data: Update_Puesto_Input;
  filter?: InputMaybe<Puesto_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  aplicacion?: Maybe<Array<Maybe<Aplicacion>>>;
  aplicacion_aggregated?: Maybe<Array<Maybe<Aplicacion_Aggregated>>>;
  aplicacion_by_id?: Maybe<Aplicacion>;
  empresa?: Maybe<Array<Maybe<Empresa>>>;
  empresa_aggregated?: Maybe<Array<Maybe<Empresa_Aggregated>>>;
  empresa_by_id?: Maybe<Empresa>;
  puesto?: Maybe<Array<Maybe<Puesto>>>;
  puesto_aggregated?: Maybe<Array<Maybe<Puesto_Aggregated>>>;
  puesto_by_id?: Maybe<Puesto>;
};


export type QueryAplicacionArgs = {
  filter?: InputMaybe<Aplicacion_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAplicacion_AggregatedArgs = {
  filter?: InputMaybe<Aplicacion_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAplicacion_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryEmpresaArgs = {
  filter?: InputMaybe<Empresa_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEmpresa_AggregatedArgs = {
  filter?: InputMaybe<Empresa_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEmpresa_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryPuestoArgs = {
  filter?: InputMaybe<Puesto_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPuesto_AggregatedArgs = {
  filter?: InputMaybe<Puesto_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPuesto_By_IdArgs = {
  id: Scalars['ID'];
};

export type Aplicacion = {
  __typename?: 'aplicacion';
  actualizadoPor?: Maybe<Directus_Users>;
  apellidoMaterno: Scalars['String'];
  apellidoPaterno: Scalars['String'];
  ciudad: Scalars['String'];
  codigoPostal: Scalars['String'];
  colonia: Scalars['String'];
  correo?: Maybe<Scalars['String']>;
  creadoPor?: Maybe<Directus_Users>;
  direccion: Scalars['String'];
  fechaActualizacion?: Maybe<Scalars['Date']>;
  fechaActualizacion_func?: Maybe<Datetime_Functions>;
  fechaCreacion?: Maybe<Scalars['Date']>;
  fechaCreacion_func?: Maybe<Datetime_Functions>;
  fechaNacimiento: Scalars['Date'];
  fechaNacimiento_func?: Maybe<Date_Functions>;
  id?: Maybe<Scalars['ID']>;
  otrosNombres?: Maybe<Scalars['String']>;
  primerNombre: Scalars['String'];
  puesto?: Maybe<Puesto>;
  sexo: Scalars['String'];
  status: Scalars['String'];
  telefono: Scalars['String'];
};


export type AplicacionActualizadoPorArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AplicacionCreadoPorArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AplicacionPuestoArgs = {
  filter?: InputMaybe<Puesto_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Aplicacion_Aggregated = {
  __typename?: 'aplicacion_aggregated';
  avg?: Maybe<Aplicacion_Aggregated_Fields>;
  avgDistinct?: Maybe<Aplicacion_Aggregated_Fields>;
  count?: Maybe<Aplicacion_Aggregated_Fields>;
  countDistinct?: Maybe<Aplicacion_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Aplicacion_Aggregated_Fields>;
  min?: Maybe<Aplicacion_Aggregated_Fields>;
  sum?: Maybe<Aplicacion_Aggregated_Fields>;
  sumDistinct?: Maybe<Aplicacion_Aggregated_Fields>;
};

export type Aplicacion_Aggregated_Fields = {
  __typename?: 'aplicacion_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  puesto?: Maybe<Scalars['Float']>;
};

export type Aplicacion_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Aplicacion_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Aplicacion_Filter>>>;
  actualizadoPor?: InputMaybe<Directus_Users_Filter>;
  apellidoMaterno?: InputMaybe<String_Filter_Operators>;
  apellidoPaterno?: InputMaybe<String_Filter_Operators>;
  ciudad?: InputMaybe<String_Filter_Operators>;
  codigoPostal?: InputMaybe<String_Filter_Operators>;
  colonia?: InputMaybe<String_Filter_Operators>;
  correo?: InputMaybe<String_Filter_Operators>;
  creadoPor?: InputMaybe<Directus_Users_Filter>;
  direccion?: InputMaybe<String_Filter_Operators>;
  fechaActualizacion?: InputMaybe<Date_Filter_Operators>;
  fechaActualizacion_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  fechaCreacion?: InputMaybe<Date_Filter_Operators>;
  fechaCreacion_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  fechaNacimiento?: InputMaybe<Date_Filter_Operators>;
  fechaNacimiento_func?: InputMaybe<Date_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  otrosNombres?: InputMaybe<String_Filter_Operators>;
  primerNombre?: InputMaybe<String_Filter_Operators>;
  puesto?: InputMaybe<Puesto_Filter>;
  sexo?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  telefono?: InputMaybe<String_Filter_Operators>;
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']>;
};

export type Count_FunctionsInput = {
  count?: InputMaybe<Scalars['Int']>;
};

export type Create_Aplicacion_Input = {
  actualizadoPor?: InputMaybe<Create_Directus_Users_Input>;
  apellidoMaterno: Scalars['String'];
  apellidoPaterno: Scalars['String'];
  ciudad: Scalars['String'];
  codigoPostal: Scalars['String'];
  colonia: Scalars['String'];
  correo?: InputMaybe<Scalars['String']>;
  creadoPor?: InputMaybe<Create_Directus_Users_Input>;
  direccion: Scalars['String'];
  fechaActualizacion?: InputMaybe<Scalars['Date']>;
  fechaActualizacion_func?: InputMaybe<Datetime_FunctionsInput>;
  fechaCreacion?: InputMaybe<Scalars['Date']>;
  fechaCreacion_func?: InputMaybe<Datetime_FunctionsInput>;
  fechaNacimiento: Scalars['Date'];
  fechaNacimiento_func?: InputMaybe<Date_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  otrosNombres?: InputMaybe<Scalars['String']>;
  primerNombre: Scalars['String'];
  puesto?: InputMaybe<Create_Puesto_Input>;
  sexo: Scalars['String'];
  status: Scalars['String'];
  telefono: Scalars['String'];
};

export type Create_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  embed?: InputMaybe<Scalars['String']>;
  filename_disk?: InputMaybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Create_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  metadata_func?: InputMaybe<Count_FunctionsInput>;
  modified_by?: InputMaybe<Create_Directus_Users_Input>;
  modified_on: Scalars['Date'];
  modified_on_func?: InputMaybe<Datetime_FunctionsInput>;
  storage: Scalars['String'];
  tags?: InputMaybe<Scalars['JSON']>;
  tags_func?: InputMaybe<Count_FunctionsInput>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uploaded_by?: InputMaybe<Create_Directus_Users_Input>;
  uploaded_on: Scalars['Date'];
  uploaded_on_func?: InputMaybe<Datetime_FunctionsInput>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Create_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: InputMaybe<Create_Directus_Folders_Input>;
};

export type Create_Directus_Roles_Input = {
  admin_access: Scalars['Boolean'];
  app_access: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
  enforce_tfa: Scalars['Boolean'];
  icon: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: Scalars['String'];
  users?: InputMaybe<Array<InputMaybe<Create_Directus_Users_Input>>>;
  users_func?: InputMaybe<Count_FunctionsInput>;
};

export type Create_Directus_Users_Input = {
  auth_data?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Create_Directus_Files_Input>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_notifications?: InputMaybe<Scalars['Boolean']>;
  external_identifier?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
  last_access?: InputMaybe<Scalars['Date']>;
  last_access_func?: InputMaybe<Datetime_FunctionsInput>;
  last_name?: InputMaybe<Scalars['String']>;
  last_page?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  role?: InputMaybe<Create_Directus_Roles_Input>;
  status: Scalars['String'];
  tags?: InputMaybe<Scalars['JSON']>;
  tags_func?: InputMaybe<Count_FunctionsInput>;
  tfa_secret?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type Create_Empresa_Input = {
  actualizadoPor?: InputMaybe<Create_Directus_Users_Input>;
  ciudad: Scalars['String'];
  clave?: InputMaybe<Scalars['String']>;
  codigoPostal: Scalars['String'];
  correo?: InputMaybe<Scalars['String']>;
  creadoPor?: InputMaybe<Create_Directus_Users_Input>;
  direccion?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  fechaActualizacion?: InputMaybe<Scalars['Date']>;
  fechaActualizacion_func?: InputMaybe<Datetime_FunctionsInput>;
  fechaCreacion?: InputMaybe<Scalars['Date']>;
  fechaCreacion_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  nombreComercial?: InputMaybe<Scalars['String']>;
  pais?: InputMaybe<Scalars['String']>;
  razonSocial?: InputMaybe<Scalars['String']>;
  rfc?: InputMaybe<Scalars['String']>;
  status: Scalars['String'];
  telefono?: InputMaybe<Scalars['String']>;
};

export type Create_Puesto_Input = {
  actualizadoPor?: InputMaybe<Create_Directus_Users_Input>;
  ciudad: Scalars['String'];
  creadoPor?: InputMaybe<Create_Directus_Users_Input>;
  descripcion?: InputMaybe<Scalars['String']>;
  empresa?: InputMaybe<Create_Empresa_Input>;
  fechaActualizacion?: InputMaybe<Scalars['Date']>;
  fechaActualizacion_func?: InputMaybe<Datetime_FunctionsInput>;
  fechaCreacion?: InputMaybe<Scalars['Date']>;
  fechaCreacion_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  jornada?: InputMaybe<Scalars['String']>;
  municipio: Scalars['String'];
  nivelActividadFisica: Scalars['String'];
  nivelEstudios: Scalars['String'];
  nombre: Scalars['String'];
  numVacantes?: InputMaybe<Scalars['Int']>;
  sectores?: InputMaybe<Scalars['JSON']>;
  sectores_func?: InputMaybe<Count_FunctionsInput>;
  status: Scalars['String'];
  turno: Scalars['String'];
};

export type Date_Filter_Operators = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Date_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Date_Functions = {
  __typename?: 'date_functions';
  day?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Date_FunctionsInput = {
  day?: InputMaybe<Scalars['Int']>;
  month?: InputMaybe<Scalars['Int']>;
  week?: InputMaybe<Scalars['Int']>;
  weekday?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Datetime_FunctionsInput = {
  day?: InputMaybe<Scalars['Int']>;
  hour?: InputMaybe<Scalars['Int']>;
  minute?: InputMaybe<Scalars['Int']>;
  month?: InputMaybe<Scalars['Int']>;
  second?: InputMaybe<Scalars['Int']>;
  week?: InputMaybe<Scalars['Int']>;
  weekday?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type Delete_Many = {
  __typename?: 'delete_many';
  ids: Array<Maybe<Scalars['ID']>>;
};

export type Delete_One = {
  __typename?: 'delete_one';
  id: Scalars['ID'];
};

export type Directus_Files = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  embed?: Maybe<Scalars['String']>;
  filename_disk?: Maybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize?: Maybe<Scalars['String']>;
  folder?: Maybe<Directus_Folders>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Directus_Users>;
  modified_on: Scalars['Date'];
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uploaded_by?: Maybe<Directus_Users>;
  uploaded_on: Scalars['Date'];
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']>;
};


export type Directus_FilesFolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_FilesModified_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_FilesUploaded_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<String_Filter_Operators>;
  folder?: InputMaybe<Directus_Folders_Filter>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<Directus_Users_Filter>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<Directus_Users_Filter>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Folders = {
  __typename?: 'directus_folders';
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: Maybe<Directus_Folders>;
};


export type Directus_FoldersParentArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Folders_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Folders_Filter>;
};

export type Directus_Roles = {
  __typename?: 'directus_roles';
  admin_access: Scalars['Boolean'];
  app_access: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  enforce_tfa: Scalars['Boolean'];
  icon: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  ip_access?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  users?: Maybe<Array<Maybe<Directus_Users>>>;
  users_func?: Maybe<Count_Functions>;
};


export type Directus_RolesUsersArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Roles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  admin_access?: InputMaybe<Boolean_Filter_Operators>;
  app_access?: InputMaybe<Boolean_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  enforce_tfa?: InputMaybe<Boolean_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  ip_access?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  users?: InputMaybe<Directus_Users_Filter>;
  users_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Users = {
  __typename?: 'directus_users';
  auth_data?: Maybe<Scalars['String']>;
  avatar?: Maybe<Directus_Files>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_notifications?: Maybe<Scalars['Boolean']>;
  external_identifier?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  language?: Maybe<Scalars['String']>;
  last_access?: Maybe<Scalars['Date']>;
  last_access_func?: Maybe<Datetime_Functions>;
  last_name?: Maybe<Scalars['String']>;
  last_page?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  role?: Maybe<Directus_Roles>;
  status: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<Count_Functions>;
  tfa_secret?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};


export type Directus_UsersAvatarArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_UsersRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  auth_data?: InputMaybe<String_Filter_Operators>;
  avatar?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  email_notifications?: InputMaybe<Boolean_Filter_Operators>;
  external_identifier?: InputMaybe<String_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  language?: InputMaybe<String_Filter_Operators>;
  last_access?: InputMaybe<Date_Filter_Operators>;
  last_access_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  last_page?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  password?: InputMaybe<String_Filter_Operators>;
  provider?: InputMaybe<String_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  tfa_secret?: InputMaybe<String_Filter_Operators>;
  theme?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  token?: InputMaybe<String_Filter_Operators>;
};

export type Empresa = {
  __typename?: 'empresa';
  actualizadoPor?: Maybe<Directus_Users>;
  ciudad: Scalars['String'];
  clave?: Maybe<Scalars['String']>;
  codigoPostal: Scalars['String'];
  correo?: Maybe<Scalars['String']>;
  creadoPor?: Maybe<Directus_Users>;
  direccion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  fechaActualizacion?: Maybe<Scalars['Date']>;
  fechaActualizacion_func?: Maybe<Datetime_Functions>;
  fechaCreacion?: Maybe<Scalars['Date']>;
  fechaCreacion_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  nombreComercial?: Maybe<Scalars['String']>;
  pais?: Maybe<Scalars['String']>;
  razonSocial?: Maybe<Scalars['String']>;
  rfc?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  telefono?: Maybe<Scalars['String']>;
};


export type EmpresaActualizadoPorArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type EmpresaCreadoPorArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Empresa_Aggregated = {
  __typename?: 'empresa_aggregated';
  avg?: Maybe<Empresa_Aggregated_Fields>;
  avgDistinct?: Maybe<Empresa_Aggregated_Fields>;
  count?: Maybe<Empresa_Aggregated_Fields>;
  countDistinct?: Maybe<Empresa_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Empresa_Aggregated_Fields>;
  min?: Maybe<Empresa_Aggregated_Fields>;
  sum?: Maybe<Empresa_Aggregated_Fields>;
  sumDistinct?: Maybe<Empresa_Aggregated_Fields>;
};

export type Empresa_Aggregated_Fields = {
  __typename?: 'empresa_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Empresa_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Empresa_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Empresa_Filter>>>;
  actualizadoPor?: InputMaybe<Directus_Users_Filter>;
  ciudad?: InputMaybe<String_Filter_Operators>;
  clave?: InputMaybe<String_Filter_Operators>;
  codigoPostal?: InputMaybe<String_Filter_Operators>;
  correo?: InputMaybe<String_Filter_Operators>;
  creadoPor?: InputMaybe<Directus_Users_Filter>;
  direccion?: InputMaybe<String_Filter_Operators>;
  estado?: InputMaybe<String_Filter_Operators>;
  fechaActualizacion?: InputMaybe<Date_Filter_Operators>;
  fechaActualizacion_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  fechaCreacion?: InputMaybe<Date_Filter_Operators>;
  fechaCreacion_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  nombreComercial?: InputMaybe<String_Filter_Operators>;
  pais?: InputMaybe<String_Filter_Operators>;
  razonSocial?: InputMaybe<String_Filter_Operators>;
  rfc?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  telefono?: InputMaybe<String_Filter_Operators>;
};

export type Number_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Float']>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Puesto = {
  __typename?: 'puesto';
  actualizadoPor?: Maybe<Directus_Users>;
  ciudad: Scalars['String'];
  creadoPor?: Maybe<Directus_Users>;
  descripcion?: Maybe<Scalars['String']>;
  empresa?: Maybe<Empresa>;
  fechaActualizacion?: Maybe<Scalars['Date']>;
  fechaActualizacion_func?: Maybe<Datetime_Functions>;
  fechaCreacion?: Maybe<Scalars['Date']>;
  fechaCreacion_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  jornada?: Maybe<Scalars['String']>;
  municipio: Scalars['String'];
  nivelActividadFisica: Scalars['String'];
  nivelEstudios: Scalars['String'];
  nombre: Scalars['String'];
  numVacantes?: Maybe<Scalars['Int']>;
  sectores?: Maybe<Scalars['JSON']>;
  sectores_func?: Maybe<Count_Functions>;
  status: Scalars['String'];
  turno: Scalars['String'];
};


export type PuestoActualizadoPorArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PuestoCreadoPorArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PuestoEmpresaArgs = {
  filter?: InputMaybe<Empresa_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Puesto_Aggregated = {
  __typename?: 'puesto_aggregated';
  avg?: Maybe<Puesto_Aggregated_Fields>;
  avgDistinct?: Maybe<Puesto_Aggregated_Fields>;
  count?: Maybe<Puesto_Aggregated_Fields>;
  countDistinct?: Maybe<Puesto_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Puesto_Aggregated_Fields>;
  min?: Maybe<Puesto_Aggregated_Fields>;
  sum?: Maybe<Puesto_Aggregated_Fields>;
  sumDistinct?: Maybe<Puesto_Aggregated_Fields>;
};

export type Puesto_Aggregated_Fields = {
  __typename?: 'puesto_aggregated_fields';
  empresa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  numVacantes?: Maybe<Scalars['Float']>;
};

export type Puesto_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Puesto_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Puesto_Filter>>>;
  actualizadoPor?: InputMaybe<Directus_Users_Filter>;
  ciudad?: InputMaybe<String_Filter_Operators>;
  creadoPor?: InputMaybe<Directus_Users_Filter>;
  descripcion?: InputMaybe<String_Filter_Operators>;
  empresa?: InputMaybe<Empresa_Filter>;
  fechaActualizacion?: InputMaybe<Date_Filter_Operators>;
  fechaActualizacion_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  fechaCreacion?: InputMaybe<Date_Filter_Operators>;
  fechaCreacion_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  jornada?: InputMaybe<String_Filter_Operators>;
  municipio?: InputMaybe<String_Filter_Operators>;
  nivelActividadFisica?: InputMaybe<String_Filter_Operators>;
  nivelEstudios?: InputMaybe<String_Filter_Operators>;
  nombre?: InputMaybe<String_Filter_Operators>;
  numVacantes?: InputMaybe<Number_Filter_Operators>;
  sectores?: InputMaybe<String_Filter_Operators>;
  sectores_func?: InputMaybe<Count_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  turno?: InputMaybe<String_Filter_Operators>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nends_with?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _nstarts_with?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _starts_with?: InputMaybe<Scalars['String']>;
};

export type Update_Aplicacion_Input = {
  actualizadoPor?: InputMaybe<Update_Directus_Users_Input>;
  apellidoMaterno?: InputMaybe<Scalars['String']>;
  apellidoPaterno?: InputMaybe<Scalars['String']>;
  ciudad?: InputMaybe<Scalars['String']>;
  codigoPostal?: InputMaybe<Scalars['String']>;
  colonia?: InputMaybe<Scalars['String']>;
  correo?: InputMaybe<Scalars['String']>;
  creadoPor?: InputMaybe<Update_Directus_Users_Input>;
  direccion?: InputMaybe<Scalars['String']>;
  fechaActualizacion?: InputMaybe<Scalars['Date']>;
  fechaActualizacion_func?: InputMaybe<Datetime_FunctionsInput>;
  fechaCreacion?: InputMaybe<Scalars['Date']>;
  fechaCreacion_func?: InputMaybe<Datetime_FunctionsInput>;
  fechaNacimiento?: InputMaybe<Scalars['Date']>;
  fechaNacimiento_func?: InputMaybe<Date_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  otrosNombres?: InputMaybe<Scalars['String']>;
  primerNombre?: InputMaybe<Scalars['String']>;
  puesto?: InputMaybe<Update_Puesto_Input>;
  sexo?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  telefono?: InputMaybe<Scalars['String']>;
};

export type Update_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  embed?: InputMaybe<Scalars['String']>;
  filename_disk?: InputMaybe<Scalars['String']>;
  filename_download?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Update_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  metadata_func?: InputMaybe<Count_FunctionsInput>;
  modified_by?: InputMaybe<Update_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['Date']>;
  modified_on_func?: InputMaybe<Datetime_FunctionsInput>;
  storage?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  tags_func?: InputMaybe<Count_FunctionsInput>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uploaded_by?: InputMaybe<Update_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['Date']>;
  uploaded_on_func?: InputMaybe<Datetime_FunctionsInput>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Update_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Update_Directus_Folders_Input>;
};

export type Update_Directus_Roles_Input = {
  admin_access?: InputMaybe<Scalars['Boolean']>;
  app_access?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  enforce_tfa?: InputMaybe<Scalars['Boolean']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Update_Directus_Users_Input>>>;
  users_func?: InputMaybe<Count_FunctionsInput>;
};

export type Update_Directus_Users_Input = {
  auth_data?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Update_Directus_Files_Input>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_notifications?: InputMaybe<Scalars['Boolean']>;
  external_identifier?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
  last_access?: InputMaybe<Scalars['Date']>;
  last_access_func?: InputMaybe<Datetime_FunctionsInput>;
  last_name?: InputMaybe<Scalars['String']>;
  last_page?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Update_Directus_Roles_Input>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  tags_func?: InputMaybe<Count_FunctionsInput>;
  tfa_secret?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type Update_Empresa_Input = {
  actualizadoPor?: InputMaybe<Update_Directus_Users_Input>;
  ciudad?: InputMaybe<Scalars['String']>;
  clave?: InputMaybe<Scalars['String']>;
  codigoPostal?: InputMaybe<Scalars['String']>;
  correo?: InputMaybe<Scalars['String']>;
  creadoPor?: InputMaybe<Update_Directus_Users_Input>;
  direccion?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  fechaActualizacion?: InputMaybe<Scalars['Date']>;
  fechaActualizacion_func?: InputMaybe<Datetime_FunctionsInput>;
  fechaCreacion?: InputMaybe<Scalars['Date']>;
  fechaCreacion_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  nombreComercial?: InputMaybe<Scalars['String']>;
  pais?: InputMaybe<Scalars['String']>;
  razonSocial?: InputMaybe<Scalars['String']>;
  rfc?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  telefono?: InputMaybe<Scalars['String']>;
};

export type Update_Puesto_Input = {
  actualizadoPor?: InputMaybe<Update_Directus_Users_Input>;
  ciudad?: InputMaybe<Scalars['String']>;
  creadoPor?: InputMaybe<Update_Directus_Users_Input>;
  descripcion?: InputMaybe<Scalars['String']>;
  empresa?: InputMaybe<Update_Empresa_Input>;
  fechaActualizacion?: InputMaybe<Scalars['Date']>;
  fechaActualizacion_func?: InputMaybe<Datetime_FunctionsInput>;
  fechaCreacion?: InputMaybe<Scalars['Date']>;
  fechaCreacion_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  jornada?: InputMaybe<Scalars['String']>;
  municipio?: InputMaybe<Scalars['String']>;
  nivelActividadFisica?: InputMaybe<Scalars['String']>;
  nivelEstudios?: InputMaybe<Scalars['String']>;
  nombre?: InputMaybe<Scalars['String']>;
  numVacantes?: InputMaybe<Scalars['Int']>;
  sectores?: InputMaybe<Scalars['JSON']>;
  sectores_func?: InputMaybe<Count_FunctionsInput>;
  status?: InputMaybe<Scalars['String']>;
  turno?: InputMaybe<Scalars['String']>;
};

export type EmpresasQueryVariables = Exact<{ [key: string]: never; }>;


export type EmpresasQuery = { __typename?: 'Query', empresa?: Array<{ __typename?: 'empresa', id?: string | null } | null> | null };

export type ListasQueryVariables = Exact<{ [key: string]: never; }>;


export type ListasQuery = { __typename?: 'Query', puesto?: Array<{ __typename?: 'puesto', id?: string | null, nombre: string, jornada?: string | null, status: string, fechaCreacion?: any | null, empresa?: { __typename?: 'empresa', nombreComercial?: string | null, ciudad: string } | null } | null> | null };

export type FormPage_PuestosStaticPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type FormPage_PuestosStaticPathsQuery = { __typename?: 'Query', puestos?: Array<{ __typename?: 'puesto', id?: string | null } | null> | null };

export type FormPage_PuestoByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FormPage_PuestoByIdQuery = { __typename?: 'Query', puesto?: { __typename?: 'puesto', id?: string | null, fechaCreacion?: any | null, nombre: string, nivelEstudios: string, turno: string, jornada?: string | null, numVacantes?: number | null, empresa?: { __typename?: 'empresa', id?: string | null, nombreComercial?: string | null, ciudad: string, estado?: string | null } | null } | null };

export type SuccessPage_ApplicationSummaryQueryVariables = Exact<{
  applicationId: Scalars['ID'];
}>;


export type SuccessPage_ApplicationSummaryQuery = { __typename?: 'Query', application?: { __typename?: 'aplicacion', id?: string | null, primerNombre: string, otrosNombres?: string | null, apellidoPaterno: string, apellidoMaterno: string, telefono: string, correo?: string | null, direccion: string, colonia: string, puesto?: { __typename?: 'puesto', id?: string | null, nombre: string, empresa?: { __typename?: 'empresa', id?: string | null, nombreComercial?: string | null } | null } | null } | null };

export type FormPage_JobDataQueryVariables = Exact<{
  puestoId: Scalars['ID'];
}>;


export type FormPage_JobDataQuery = { __typename?: 'Query', puesto?: { __typename?: 'puesto', id?: string | null, nombre: string, empresa?: { __typename?: 'empresa', nombreComercial?: string | null } | null } | null };

export type SearchPage_AllCitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type SearchPage_AllCitiesQuery = { __typename?: 'Query', puesto?: Array<{ __typename?: 'puesto', ciudad: string, municipio: string } | null> | null };


export const EmpresasDocument = gql`
    query Empresas {
  empresa {
    id
  }
}
    `;
export const ListasDocument = gql`
    query Listas {
  puesto {
    id
    nombre
    jornada
    empresa {
      nombreComercial
      ciudad
    }
    status
    fechaCreacion
  }
}
    `;
export const FormPage_PuestosStaticPathsDocument = gql`
    query FormPage_PuestosStaticPaths {
  puestos: puesto(filter: {status: {_eq: "published"}}) {
    id
  }
}
    `;
export const FormPage_PuestoByIdDocument = gql`
    query FormPage_PuestoById($id: ID!) {
  puesto: puesto_by_id(id: $id) {
    id
    fechaCreacion
    nombre
    nivelEstudios
    turno
    jornada
    numVacantes
    empresa {
      id
      nombreComercial
      ciudad
      estado
    }
  }
}
    `;
export const SuccessPage_ApplicationSummaryDocument = gql`
    query SuccessPage_ApplicationSummary($applicationId: ID!) {
  application: aplicacion_by_id(id: $applicationId) {
    id
    primerNombre
    otrosNombres
    apellidoPaterno
    apellidoMaterno
    telefono
    correo
    direccion
    colonia
    telefono
    puesto {
      id
      nombre
      empresa {
        id
        nombreComercial
      }
    }
  }
}
    `;
export const FormPage_JobDataDocument = gql`
    query FormPage_JobData($puestoId: ID!) {
  puesto: puesto_by_id(id: $puestoId) {
    id
    nombre
    empresa {
      nombreComercial
    }
  }
}
    `;
export const SearchPage_AllCitiesDocument = gql`
    query SearchPage_AllCities {
  puesto {
    ciudad
    municipio
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Empresas(variables?: EmpresasQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EmpresasQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EmpresasQuery>(EmpresasDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Empresas', 'query');
    },
    Listas(variables?: ListasQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListasQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListasQuery>(ListasDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Listas', 'query');
    },
    FormPage_PuestosStaticPaths(variables?: FormPage_PuestosStaticPathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FormPage_PuestosStaticPathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FormPage_PuestosStaticPathsQuery>(FormPage_PuestosStaticPathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FormPage_PuestosStaticPaths', 'query');
    },
    FormPage_PuestoById(variables: FormPage_PuestoByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FormPage_PuestoByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FormPage_PuestoByIdQuery>(FormPage_PuestoByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FormPage_PuestoById', 'query');
    },
    SuccessPage_ApplicationSummary(variables: SuccessPage_ApplicationSummaryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SuccessPage_ApplicationSummaryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SuccessPage_ApplicationSummaryQuery>(SuccessPage_ApplicationSummaryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SuccessPage_ApplicationSummary', 'query');
    },
    FormPage_JobData(variables: FormPage_JobDataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FormPage_JobDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FormPage_JobDataQuery>(FormPage_JobDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FormPage_JobData', 'query');
    },
    SearchPage_AllCities(variables?: SearchPage_AllCitiesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SearchPage_AllCitiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchPage_AllCitiesQuery>(SearchPage_AllCitiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SearchPage_AllCities', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;