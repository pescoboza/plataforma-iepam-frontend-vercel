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
  create_aplicacion_item?: Maybe<Scalars['Boolean']>;
  create_aplicacion_items?: Maybe<Scalars['Boolean']>;
};


export type MutationCreate_Aplicacion_ItemArgs = {
  data: Create_Aplicacion_Input;
};


export type MutationCreate_Aplicacion_ItemsArgs = {
  data?: InputMaybe<Array<Create_Aplicacion_Input>>;
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

export type Create_Aplicacion_Input = {
  apellidoMaterno: Scalars['String'];
  apellidoPaterno: Scalars['String'];
  correo: Scalars['String'];
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
  sexo: Scalars['String'];
  status: Scalars['String'];
  telefono: Scalars['String'];
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
  calle: Scalars['String'];
  ciudad: Scalars['String'];
  clave: Scalars['String'];
  codigoPostal: Scalars['String'];
  colonia: Scalars['String'];
  correo: Scalars['String'];
  direccion: Scalars['String'];
  estado: Scalars['String'];
  fechaActualizacion?: Maybe<Scalars['Date']>;
  fechaActualizacion_func?: Maybe<Datetime_Functions>;
  fechaCreacion?: Maybe<Scalars['Date']>;
  fechaCreacion_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  industria: Scalars['String'];
  nombreComercial: Scalars['String'];
  pais: Scalars['String'];
  razonSocial: Scalars['String'];
  rfc: Scalars['String'];
  status: Scalars['String'];
  telefono: Scalars['String'];
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
  calle?: InputMaybe<String_Filter_Operators>;
  ciudad?: InputMaybe<String_Filter_Operators>;
  clave?: InputMaybe<String_Filter_Operators>;
  codigoPostal?: InputMaybe<String_Filter_Operators>;
  colonia?: InputMaybe<String_Filter_Operators>;
  correo?: InputMaybe<String_Filter_Operators>;
  direccion?: InputMaybe<String_Filter_Operators>;
  estado?: InputMaybe<String_Filter_Operators>;
  fechaActualizacion?: InputMaybe<Date_Filter_Operators>;
  fechaActualizacion_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  fechaCreacion?: InputMaybe<Date_Filter_Operators>;
  fechaCreacion_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  industria?: InputMaybe<String_Filter_Operators>;
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
  descripcion: Scalars['String'];
  empresa?: Maybe<Empresa>;
  fechaActualizacion?: Maybe<Scalars['Date']>;
  fechaActualizacion_func?: Maybe<Datetime_Functions>;
  fechaCreacion?: Maybe<Scalars['Date']>;
  fechaCreacion_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  jornada: Scalars['String'];
  nivelEstudios?: Maybe<Scalars['String']>;
  nombre: Scalars['String'];
  numVacantes?: Maybe<Scalars['Int']>;
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
  descripcion?: InputMaybe<String_Filter_Operators>;
  empresa?: InputMaybe<Empresa_Filter>;
  fechaActualizacion?: InputMaybe<Date_Filter_Operators>;
  fechaActualizacion_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  fechaCreacion?: InputMaybe<Date_Filter_Operators>;
  fechaCreacion_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  jornada?: InputMaybe<String_Filter_Operators>;
  nivelEstudios?: InputMaybe<String_Filter_Operators>;
  nombre?: InputMaybe<String_Filter_Operators>;
  numVacantes?: InputMaybe<Number_Filter_Operators>;
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


export type PuestosQuery = { __typename?: 'Query', puesto?: Array<{ __typename?: 'puesto', id?: string | null, fechaCreacion?: any | null, nivelEstudios?: string | null, nombre: string, jornada: string, turno: string, descripcion: string, numVacantes?: number | null } | null> | null };

export type SubmitFormAplicacionMutationVariables = Exact<{
  data: Create_Aplicacion_Input;
}>;


export type SubmitFormAplicacionMutation = { __typename?: 'Mutation', success?: boolean | null };


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
export const SubmitFormAplicacionDocument = gql`
    mutation SubmitFormAplicacion($data: create_aplicacion_input!) {
  success: create_aplicacion_item(data: $data)
}
    `;
export type SubmitFormAplicacionMutationFn = Apollo.MutationFunction<SubmitFormAplicacionMutation, SubmitFormAplicacionMutationVariables>;

/**
 * __useSubmitFormAplicacionMutation__
 *
 * To run a mutation, you first call `useSubmitFormAplicacionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitFormAplicacionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitFormAplicacionMutation, { data, loading, error }] = useSubmitFormAplicacionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSubmitFormAplicacionMutation(baseOptions?: Apollo.MutationHookOptions<SubmitFormAplicacionMutation, SubmitFormAplicacionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitFormAplicacionMutation, SubmitFormAplicacionMutationVariables>(SubmitFormAplicacionDocument, options);
      }
export type SubmitFormAplicacionMutationHookResult = ReturnType<typeof useSubmitFormAplicacionMutation>;
export type SubmitFormAplicacionMutationResult = Apollo.MutationResult<SubmitFormAplicacionMutation>;
export type SubmitFormAplicacionMutationOptions = Apollo.BaseMutationOptions<SubmitFormAplicacionMutation, SubmitFormAplicacionMutationVariables>;