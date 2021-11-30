/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUnitInput = {
  id?: string | null,
  unitNumber: number,
  measurement: string,
  clientName: string,
  available: boolean,
  lastDatePaid: string,
  dateOfEntry: string,
  pricePaid: number,
};

export type ModelUnitConditionInput = {
  unitNumber?: ModelIntInput | null,
  measurement?: ModelStringInput | null,
  clientName?: ModelStringInput | null,
  available?: ModelBooleanInput | null,
  lastDatePaid?: ModelStringInput | null,
  dateOfEntry?: ModelStringInput | null,
  pricePaid?: ModelFloatInput | null,
  and?: Array< ModelUnitConditionInput | null > | null,
  or?: Array< ModelUnitConditionInput | null > | null,
  not?: ModelUnitConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Unit = {
  __typename: "Unit",
  id: string,
  unitNumber: number,
  measurement: string,
  clientName: string,
  available: boolean,
  lastDatePaid: string,
  dateOfEntry: string,
  pricePaid: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUnitInput = {
  id: string,
  unitNumber?: number | null,
  measurement?: string | null,
  clientName?: string | null,
  available?: boolean | null,
  lastDatePaid?: string | null,
  dateOfEntry?: string | null,
  pricePaid?: number | null,
};

export type DeleteUnitInput = {
  id: string,
};

export type CreateClientInput = {
  id?: string | null,
  name: string,
  email: string,
  phoneNumber: string,
};

export type ModelClientConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  and?: Array< ModelClientConditionInput | null > | null,
  or?: Array< ModelClientConditionInput | null > | null,
  not?: ModelClientConditionInput | null,
};

export type Client = {
  __typename: "Client",
  id: string,
  name: string,
  email: string,
  phoneNumber: string,
  units:  Array<Unit | null >,
  createdAt: string,
  updatedAt: string,
};

export type UpdateClientInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  phoneNumber?: string | null,
};

export type DeleteClientInput = {
  id: string,
};

export type ModelUnitFilterInput = {
  id?: ModelIDInput | null,
  unitNumber?: ModelIntInput | null,
  measurement?: ModelStringInput | null,
  clientName?: ModelStringInput | null,
  available?: ModelBooleanInput | null,
  lastDatePaid?: ModelStringInput | null,
  dateOfEntry?: ModelStringInput | null,
  pricePaid?: ModelFloatInput | null,
  and?: Array< ModelUnitFilterInput | null > | null,
  or?: Array< ModelUnitFilterInput | null > | null,
  not?: ModelUnitFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUnitConnection = {
  __typename: "ModelUnitConnection",
  items?:  Array<Unit | null > | null,
  nextToken?: string | null,
};

export type ModelClientFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  and?: Array< ModelClientFilterInput | null > | null,
  or?: Array< ModelClientFilterInput | null > | null,
  not?: ModelClientFilterInput | null,
};

export type ModelClientConnection = {
  __typename: "ModelClientConnection",
  items?:  Array<Client | null > | null,
  nextToken?: string | null,
};

export type CreateUnitMutationVariables = {
  input: CreateUnitInput,
  condition?: ModelUnitConditionInput | null,
};

export type CreateUnitMutation = {
  createUnit?:  {
    __typename: "Unit",
    id: string,
    unitNumber: number,
    measurement: string,
    clientName: string,
    available: boolean,
    lastDatePaid: string,
    dateOfEntry: string,
    pricePaid: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUnitMutationVariables = {
  input: UpdateUnitInput,
  condition?: ModelUnitConditionInput | null,
};

export type UpdateUnitMutation = {
  updateUnit?:  {
    __typename: "Unit",
    id: string,
    unitNumber: number,
    measurement: string,
    clientName: string,
    available: boolean,
    lastDatePaid: string,
    dateOfEntry: string,
    pricePaid: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUnitMutationVariables = {
  input: DeleteUnitInput,
  condition?: ModelUnitConditionInput | null,
};

export type DeleteUnitMutation = {
  deleteUnit?:  {
    __typename: "Unit",
    id: string,
    unitNumber: number,
    measurement: string,
    clientName: string,
    available: boolean,
    lastDatePaid: string,
    dateOfEntry: string,
    pricePaid: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateClientMutationVariables = {
  input: CreateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type CreateClientMutation = {
  createClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
    units:  Array< {
      __typename: "Unit",
      id: string,
      unitNumber: number,
      measurement: string,
      clientName: string,
      available: boolean,
      lastDatePaid: string,
      dateOfEntry: string,
      pricePaid: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateClientMutationVariables = {
  input: UpdateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type UpdateClientMutation = {
  updateClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
    units:  Array< {
      __typename: "Unit",
      id: string,
      unitNumber: number,
      measurement: string,
      clientName: string,
      available: boolean,
      lastDatePaid: string,
      dateOfEntry: string,
      pricePaid: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteClientMutationVariables = {
  input: DeleteClientInput,
  condition?: ModelClientConditionInput | null,
};

export type DeleteClientMutation = {
  deleteClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
    units:  Array< {
      __typename: "Unit",
      id: string,
      unitNumber: number,
      measurement: string,
      clientName: string,
      available: boolean,
      lastDatePaid: string,
      dateOfEntry: string,
      pricePaid: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUnitQueryVariables = {
  id: string,
};

export type GetUnitQuery = {
  getUnit?:  {
    __typename: "Unit",
    id: string,
    unitNumber: number,
    measurement: string,
    clientName: string,
    available: boolean,
    lastDatePaid: string,
    dateOfEntry: string,
    pricePaid: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUnitsQueryVariables = {
  filter?: ModelUnitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUnitsQuery = {
  listUnits?:  {
    __typename: "ModelUnitConnection",
    items?:  Array< {
      __typename: "Unit",
      id: string,
      unitNumber: number,
      measurement: string,
      clientName: string,
      available: boolean,
      lastDatePaid: string,
      dateOfEntry: string,
      pricePaid: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetClientQueryVariables = {
  id: string,
};

export type GetClientQuery = {
  getClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
    units:  Array< {
      __typename: "Unit",
      id: string,
      unitNumber: number,
      measurement: string,
      clientName: string,
      available: boolean,
      lastDatePaid: string,
      dateOfEntry: string,
      pricePaid: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListClientsQueryVariables = {
  filter?: ModelClientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClientsQuery = {
  listClients?:  {
    __typename: "ModelClientConnection",
    items?:  Array< {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      phoneNumber: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUnitSubscription = {
  onCreateUnit?:  {
    __typename: "Unit",
    id: string,
    unitNumber: number,
    measurement: string,
    clientName: string,
    available: boolean,
    lastDatePaid: string,
    dateOfEntry: string,
    pricePaid: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUnitSubscription = {
  onUpdateUnit?:  {
    __typename: "Unit",
    id: string,
    unitNumber: number,
    measurement: string,
    clientName: string,
    available: boolean,
    lastDatePaid: string,
    dateOfEntry: string,
    pricePaid: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUnitSubscription = {
  onDeleteUnit?:  {
    __typename: "Unit",
    id: string,
    unitNumber: number,
    measurement: string,
    clientName: string,
    available: boolean,
    lastDatePaid: string,
    dateOfEntry: string,
    pricePaid: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateClientSubscription = {
  onCreateClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
    units:  Array< {
      __typename: "Unit",
      id: string,
      unitNumber: number,
      measurement: string,
      clientName: string,
      available: boolean,
      lastDatePaid: string,
      dateOfEntry: string,
      pricePaid: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateClientSubscription = {
  onUpdateClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
    units:  Array< {
      __typename: "Unit",
      id: string,
      unitNumber: number,
      measurement: string,
      clientName: string,
      available: boolean,
      lastDatePaid: string,
      dateOfEntry: string,
      pricePaid: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteClientSubscription = {
  onDeleteClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
    units:  Array< {
      __typename: "Unit",
      id: string,
      unitNumber: number,
      measurement: string,
      clientName: string,
      available: boolean,
      lastDatePaid: string,
      dateOfEntry: string,
      pricePaid: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};
