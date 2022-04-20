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

export type Query = {
  __typename?: 'Query';
  empresa?: Maybe<Array<Maybe<Empresa>>>;
  empresa_aggregated?: Maybe<Array<Maybe<Empresa_Aggregated>>>;
  empresa_by_id?: Maybe<Empresa>;
  puesto?: Maybe<Array<Maybe<Puesto>>>;
  puesto_aggregated?: Maybe<Array<Maybe<Puesto_Aggregated>>>;
  puesto_by_id?: Maybe<Puesto>;
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

export type Empresa = {
  __typename?: 'empresa';
  actualizadoPor?: Maybe<Scalars['String']>;
  creadoPor?: Maybe<Scalars['String']>;
  descripcion?: Maybe<Scalars['String']>;
  fechaActualizacion?: Maybe<Scalars['Date']>;
  fechaActualizacion_func?: Maybe<Datetime_Functions>;
  fechaCreacion?: Maybe<Scalars['Date']>;
  fechaCreacion_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  nombre?: Maybe<Scalars['String']>;
  status: Scalars['String'];
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
  actualizadoPor?: InputMaybe<String_Filter_Operators>;
  creadoPor?: InputMaybe<String_Filter_Operators>;
  descripcion?: InputMaybe<String_Filter_Operators>;
  fechaActualizacion?: InputMaybe<Date_Filter_Operators>;
  fechaActualizacion_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  fechaCreacion?: InputMaybe<Date_Filter_Operators>;
  fechaCreacion_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  nombre?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
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
  actualizadoPor?: Maybe<Scalars['String']>;
  creadoPor?: Maybe<Scalars['String']>;
  empresa?: Maybe<Empresa>;
  fechaActualizacion?: Maybe<Scalars['Date']>;
  fechaActualizacion_func?: Maybe<Datetime_Functions>;
  fechaCreacion?: Maybe<Scalars['Date']>;
  fechaCreacion_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  nombre?: Maybe<Scalars['String']>;
  numVacantes?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
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
  actualizadoPor?: InputMaybe<String_Filter_Operators>;
  creadoPor?: InputMaybe<String_Filter_Operators>;
  empresa?: InputMaybe<Empresa_Filter>;
  fechaActualizacion?: InputMaybe<Date_Filter_Operators>;
  fechaActualizacion_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  fechaCreacion?: InputMaybe<Date_Filter_Operators>;
  fechaCreacion_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  nombre?: InputMaybe<String_Filter_Operators>;
  numVacantes?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
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

export type EmpresasQueryVariables = Exact<{ [key: string]: never; }>;


export type EmpresasQuery = { __typename?: 'Query', empresa?: Array<{ __typename?: 'empresa', id?: string | null, fechaCreacion?: any | null, nombre?: string | null, descripcion?: string | null } | null> | null };

export type EmpresasTestQueryVariables = Exact<{ [key: string]: never; }>;


export type EmpresasTestQuery = { __typename?: 'Query', empresa?: Array<{ __typename?: 'empresa', id?: string | null, fechaCreacion?: any | null, nombre?: string | null, descripcion?: string | null } | null> | null };

export type EmpresasTest2QueryVariables = Exact<{
  startsWith: Scalars['String'];
}>;


export type EmpresasTest2Query = { __typename?: 'Query', empresa?: Array<{ __typename?: 'empresa', id?: string | null, fechaCreacion?: any | null, nombre?: string | null, descripcion?: string | null } | null> | null };


export const EmpresasDocument = gql`
    query Empresas {
  empresa {
    id
    fechaCreacion
    nombre
    descripcion
  }
}
    `;

/**
 * __useEmpresasQuery__
 *
 * To run a query within a React component, call `useEmpresasQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmpresasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmpresasQuery({
 *   variables: {
 *   },
 * });
 */
export function useEmpresasQuery(baseOptions?: Apollo.QueryHookOptions<EmpresasQuery, EmpresasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmpresasQuery, EmpresasQueryVariables>(EmpresasDocument, options);
      }
export function useEmpresasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmpresasQuery, EmpresasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmpresasQuery, EmpresasQueryVariables>(EmpresasDocument, options);
        }
export type EmpresasQueryHookResult = ReturnType<typeof useEmpresasQuery>;
export type EmpresasLazyQueryHookResult = ReturnType<typeof useEmpresasLazyQuery>;
export type EmpresasQueryResult = Apollo.QueryResult<EmpresasQuery, EmpresasQueryVariables>;
export const EmpresasTestDocument = gql`
    query EmpresasTest {
  empresa(filter: {nombre: {_contains: "Sapos"}}) {
    id
    fechaCreacion
    nombre
    descripcion
  }
}
    `;

/**
 * __useEmpresasTestQuery__
 *
 * To run a query within a React component, call `useEmpresasTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmpresasTestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmpresasTestQuery({
 *   variables: {
 *   },
 * });
 */
export function useEmpresasTestQuery(baseOptions?: Apollo.QueryHookOptions<EmpresasTestQuery, EmpresasTestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmpresasTestQuery, EmpresasTestQueryVariables>(EmpresasTestDocument, options);
      }
export function useEmpresasTestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmpresasTestQuery, EmpresasTestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmpresasTestQuery, EmpresasTestQueryVariables>(EmpresasTestDocument, options);
        }
export type EmpresasTestQueryHookResult = ReturnType<typeof useEmpresasTestQuery>;
export type EmpresasTestLazyQueryHookResult = ReturnType<typeof useEmpresasTestLazyQuery>;
export type EmpresasTestQueryResult = Apollo.QueryResult<EmpresasTestQuery, EmpresasTestQueryVariables>;
export const EmpresasTest2Document = gql`
    query EmpresasTest2($startsWith: String!) {
  empresa(filter: {nombre: {_starts_with: $startsWith}}) {
    id
    fechaCreacion
    nombre
    descripcion
  }
}
    `;

/**
 * __useEmpresasTest2Query__
 *
 * To run a query within a React component, call `useEmpresasTest2Query` and pass it any options that fit your needs.
 * When your component renders, `useEmpresasTest2Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmpresasTest2Query({
 *   variables: {
 *      startsWith: // value for 'startsWith'
 *   },
 * });
 */
export function useEmpresasTest2Query(baseOptions: Apollo.QueryHookOptions<EmpresasTest2Query, EmpresasTest2QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmpresasTest2Query, EmpresasTest2QueryVariables>(EmpresasTest2Document, options);
      }
export function useEmpresasTest2LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmpresasTest2Query, EmpresasTest2QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmpresasTest2Query, EmpresasTest2QueryVariables>(EmpresasTest2Document, options);
        }
export type EmpresasTest2QueryHookResult = ReturnType<typeof useEmpresasTest2Query>;
export type EmpresasTest2LazyQueryHookResult = ReturnType<typeof useEmpresasTest2LazyQuery>;
export type EmpresasTest2QueryResult = Apollo.QueryResult<EmpresasTest2Query, EmpresasTest2QueryVariables>;