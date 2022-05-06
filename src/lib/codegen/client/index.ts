import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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
  create_puesto_item?: Maybe<Puesto>;
  create_puesto_items?: Maybe<Array<Maybe<Puesto>>>;
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
  apellidoMaterno: Scalars['String'];
  apellidoPaterno: Scalars['String'];
  ciudad: Scalars['String'];
  codigoPostal: Scalars['String'];
  colonia: Scalars['String'];
  correo?: Maybe<Scalars['String']>;
  direccion: Scalars['String'];
  fechaNacimiento: Scalars['Date'];
  fechaNacimiento_func?: Maybe<Date_Functions>;
  id?: Maybe<Scalars['ID']>;
  otrosNombres?: Maybe<Scalars['String']>;
  primerNombre: Scalars['String'];
  puesto?: Maybe<Puesto>;
  sexo: Scalars['String'];
  telefono: Scalars['String'];
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
  apellidoMaterno?: InputMaybe<String_Filter_Operators>;
  apellidoPaterno?: InputMaybe<String_Filter_Operators>;
  ciudad?: InputMaybe<String_Filter_Operators>;
  codigoPostal?: InputMaybe<String_Filter_Operators>;
  colonia?: InputMaybe<String_Filter_Operators>;
  correo?: InputMaybe<String_Filter_Operators>;
  direccion?: InputMaybe<String_Filter_Operators>;
  fechaNacimiento?: InputMaybe<Date_Filter_Operators>;
  fechaNacimiento_func?: InputMaybe<Date_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  otrosNombres?: InputMaybe<String_Filter_Operators>;
  primerNombre?: InputMaybe<String_Filter_Operators>;
  puesto?: InputMaybe<Puesto_Filter>;
  sexo?: InputMaybe<String_Filter_Operators>;
  telefono?: InputMaybe<String_Filter_Operators>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']>;
};

export type Create_Aplicacion_Input = {
  apellidoMaterno: Scalars['String'];
  apellidoPaterno: Scalars['String'];
  ciudad: Scalars['String'];
  codigoPostal: Scalars['String'];
  colonia: Scalars['String'];
  correo?: InputMaybe<Scalars['String']>;
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

export type Create_Puesto_Input = {
  id?: InputMaybe<Scalars['ID']>;
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

export type Empresa = {
  __typename?: 'empresa';
  ciudad: Scalars['String'];
  direccion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  nombreComercial?: Maybe<Scalars['String']>;
  pais?: Maybe<Scalars['String']>;
  razonSocial?: Maybe<Scalars['String']>;
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
  ciudad?: InputMaybe<String_Filter_Operators>;
  direccion?: InputMaybe<String_Filter_Operators>;
  estado?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  nombreComercial?: InputMaybe<String_Filter_Operators>;
  pais?: InputMaybe<String_Filter_Operators>;
  razonSocial?: InputMaybe<String_Filter_Operators>;
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
  ciudad: Scalars['String'];
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
  ciudad?: InputMaybe<String_Filter_Operators>;
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

export type PuestosQueryVariables = Exact<{ [key: string]: never; }>;


export type PuestosQuery = { __typename?: 'Query', puesto?: Array<{ __typename?: 'puesto', id?: string | null, fechaCreacion?: any | null, nivelEstudios: string, nombre: string, jornada?: string | null, turno: string, descripcion?: string | null, numVacantes?: number | null } | null> | null };

export type SearchPage_PuestosQueryVariables = Exact<{
  filter?: InputMaybe<Puesto_Filter>;
  sort?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
}>;


export type SearchPage_PuestosQuery = { __typename?: 'Query', puestos?: Array<{ __typename?: 'puesto', id?: string | null, nombre: string, jornada?: string | null, fechaCreacion?: any | null, turno: string, numVacantes?: number | null, ciudad: string, nivelEstudios: string, descripcion?: string | null, empresa?: { __typename?: 'empresa', nombreComercial?: string | null, ciudad: string } | null } | null> | null };

export type SearchPage_JobPostDescriptionQueryVariables = Exact<{
  puestoId: Scalars['ID'];
}>;


export type SearchPage_JobPostDescriptionQuery = { __typename?: 'Query', puesto?: { __typename?: 'puesto', id?: string | null, descripcion?: string | null, nivelEstudios: string, numVacantes?: number | null, turno: string } | null };

export type FilterListQueryVariables = Exact<{ [key: string]: never; }>;


export type FilterListQuery = { __typename?: 'Query', puesto?: Array<{ __typename?: 'puesto', id?: string | null, nombre: string, jornada?: string | null, status: string, fechaCreacion?: any | null, empresa?: { __typename?: 'empresa', nombreComercial?: string | null, ciudad: string } | null } | null> | null };

export type FormPage_SubmitFormDataMutationVariables = Exact<{
  primerNombre: Scalars['String'];
  otrosNombres: Scalars['String'];
  apellidoMaterno: Scalars['String'];
  apellidoPaterno: Scalars['String'];
  ciudad: Scalars['String'];
  sexo: Scalars['String'];
  direccion: Scalars['String'];
  codigoPostal: Scalars['String'];
  colonia: Scalars['String'];
  correo?: InputMaybe<Scalars['String']>;
  telefono: Scalars['String'];
  fechaNacimiento: Scalars['Date'];
  puestoId: Scalars['ID'];
}>;


export type FormPage_SubmitFormDataMutation = { __typename?: 'Mutation', aplicacion?: { __typename?: 'aplicacion', id?: string | null } | null };


export const PuestosDocument = gql`
    query Puestos {
  puesto {
    id
    fechaCreacion
    nivelEstudios
    nombre
    jornada
    turno
    descripcion
    numVacantes
  }
}
    `;

/**
 * __usePuestosQuery__
 *
 * To run a query within a React component, call `usePuestosQuery` and pass it any options that fit your needs.
 * When your component renders, `usePuestosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePuestosQuery({
 *   variables: {
 *   },
 * });
 */
export function usePuestosQuery(baseOptions?: Apollo.QueryHookOptions<PuestosQuery, PuestosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PuestosQuery, PuestosQueryVariables>(PuestosDocument, options);
      }
export function usePuestosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PuestosQuery, PuestosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PuestosQuery, PuestosQueryVariables>(PuestosDocument, options);
        }
export type PuestosQueryHookResult = ReturnType<typeof usePuestosQuery>;
export type PuestosLazyQueryHookResult = ReturnType<typeof usePuestosLazyQuery>;
export type PuestosQueryResult = Apollo.QueryResult<PuestosQuery, PuestosQueryVariables>;
export const SearchPage_PuestosDocument = gql`
    query SearchPage_Puestos($filter: puesto_filter, $sort: [String!], $limit: Int = 50, $page: Int = 1) {
  puestos: puesto(filter: $filter, sort: $sort, limit: $limit, page: $page) {
    id
    nombre
    jornada
    fechaCreacion
    turno
    numVacantes
    ciudad
    nivelEstudios
    descripcion
    empresa {
      nombreComercial
      ciudad
    }
  }
}
    `;

/**
 * __useSearchPage_PuestosQuery__
 *
 * To run a query within a React component, call `useSearchPage_PuestosQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPage_PuestosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPage_PuestosQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useSearchPage_PuestosQuery(baseOptions?: Apollo.QueryHookOptions<SearchPage_PuestosQuery, SearchPage_PuestosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchPage_PuestosQuery, SearchPage_PuestosQueryVariables>(SearchPage_PuestosDocument, options);
      }
export function useSearchPage_PuestosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchPage_PuestosQuery, SearchPage_PuestosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchPage_PuestosQuery, SearchPage_PuestosQueryVariables>(SearchPage_PuestosDocument, options);
        }
export type SearchPage_PuestosQueryHookResult = ReturnType<typeof useSearchPage_PuestosQuery>;
export type SearchPage_PuestosLazyQueryHookResult = ReturnType<typeof useSearchPage_PuestosLazyQuery>;
export type SearchPage_PuestosQueryResult = Apollo.QueryResult<SearchPage_PuestosQuery, SearchPage_PuestosQueryVariables>;
export const SearchPage_JobPostDescriptionDocument = gql`
    query SearchPage_JobPostDescription($puestoId: ID!) {
  puesto: puesto_by_id(id: $puestoId) {
    id
    descripcion
    nivelEstudios
    numVacantes
    turno
  }
}
    `;

/**
 * __useSearchPage_JobPostDescriptionQuery__
 *
 * To run a query within a React component, call `useSearchPage_JobPostDescriptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPage_JobPostDescriptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPage_JobPostDescriptionQuery({
 *   variables: {
 *      puestoId: // value for 'puestoId'
 *   },
 * });
 */
export function useSearchPage_JobPostDescriptionQuery(baseOptions: Apollo.QueryHookOptions<SearchPage_JobPostDescriptionQuery, SearchPage_JobPostDescriptionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchPage_JobPostDescriptionQuery, SearchPage_JobPostDescriptionQueryVariables>(SearchPage_JobPostDescriptionDocument, options);
      }
export function useSearchPage_JobPostDescriptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchPage_JobPostDescriptionQuery, SearchPage_JobPostDescriptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchPage_JobPostDescriptionQuery, SearchPage_JobPostDescriptionQueryVariables>(SearchPage_JobPostDescriptionDocument, options);
        }
export type SearchPage_JobPostDescriptionQueryHookResult = ReturnType<typeof useSearchPage_JobPostDescriptionQuery>;
export type SearchPage_JobPostDescriptionLazyQueryHookResult = ReturnType<typeof useSearchPage_JobPostDescriptionLazyQuery>;
export type SearchPage_JobPostDescriptionQueryResult = Apollo.QueryResult<SearchPage_JobPostDescriptionQuery, SearchPage_JobPostDescriptionQueryVariables>;
export const FilterListDocument = gql`
    query filterList {
  puesto(filter: {nombre: {_contains: "M"}}) {
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

/**
 * __useFilterListQuery__
 *
 * To run a query within a React component, call `useFilterListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilterListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilterListQuery({
 *   variables: {
 *   },
 * });
 */
export function useFilterListQuery(baseOptions?: Apollo.QueryHookOptions<FilterListQuery, FilterListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilterListQuery, FilterListQueryVariables>(FilterListDocument, options);
      }
export function useFilterListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilterListQuery, FilterListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilterListQuery, FilterListQueryVariables>(FilterListDocument, options);
        }
export type FilterListQueryHookResult = ReturnType<typeof useFilterListQuery>;
export type FilterListLazyQueryHookResult = ReturnType<typeof useFilterListLazyQuery>;
export type FilterListQueryResult = Apollo.QueryResult<FilterListQuery, FilterListQueryVariables>;
export const FormPage_SubmitFormDataDocument = gql`
    mutation FormPage_SubmitFormData($primerNombre: String!, $otrosNombres: String!, $apellidoMaterno: String!, $apellidoPaterno: String!, $ciudad: String!, $sexo: String!, $direccion: String!, $codigoPostal: String!, $colonia: String!, $correo: String, $telefono: String!, $fechaNacimiento: Date!, $puestoId: ID!) {
  aplicacion: create_aplicacion_item(
    data: {primerNombre: $primerNombre, otrosNombres: $otrosNombres, apellidoPaterno: $apellidoPaterno, apellidoMaterno: $apellidoMaterno, fechaNacimiento: $fechaNacimiento, ciudad: $ciudad, codigoPostal: $codigoPostal, colonia: $colonia, correo: $correo, direccion: $direccion, sexo: $sexo, telefono: $telefono, status: "published", puesto: {id: $puestoId}}
  ) {
    id
  }
}
    `;
export type FormPage_SubmitFormDataMutationFn = Apollo.MutationFunction<FormPage_SubmitFormDataMutation, FormPage_SubmitFormDataMutationVariables>;

/**
 * __useFormPage_SubmitFormDataMutation__
 *
 * To run a mutation, you first call `useFormPage_SubmitFormDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFormPage_SubmitFormDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [formPageSubmitFormDataMutation, { data, loading, error }] = useFormPage_SubmitFormDataMutation({
 *   variables: {
 *      primerNombre: // value for 'primerNombre'
 *      otrosNombres: // value for 'otrosNombres'
 *      apellidoMaterno: // value for 'apellidoMaterno'
 *      apellidoPaterno: // value for 'apellidoPaterno'
 *      ciudad: // value for 'ciudad'
 *      sexo: // value for 'sexo'
 *      direccion: // value for 'direccion'
 *      codigoPostal: // value for 'codigoPostal'
 *      colonia: // value for 'colonia'
 *      correo: // value for 'correo'
 *      telefono: // value for 'telefono'
 *      fechaNacimiento: // value for 'fechaNacimiento'
 *      puestoId: // value for 'puestoId'
 *   },
 * });
 */
export function useFormPage_SubmitFormDataMutation(baseOptions?: Apollo.MutationHookOptions<FormPage_SubmitFormDataMutation, FormPage_SubmitFormDataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FormPage_SubmitFormDataMutation, FormPage_SubmitFormDataMutationVariables>(FormPage_SubmitFormDataDocument, options);
      }
export type FormPage_SubmitFormDataMutationHookResult = ReturnType<typeof useFormPage_SubmitFormDataMutation>;
export type FormPage_SubmitFormDataMutationResult = Apollo.MutationResult<FormPage_SubmitFormDataMutation>;
export type FormPage_SubmitFormDataMutationOptions = Apollo.BaseMutationOptions<FormPage_SubmitFormDataMutation, FormPage_SubmitFormDataMutationVariables>;