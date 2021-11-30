/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUnit = /* GraphQL */ `
  mutation CreateUnit(
    $input: CreateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    createUnit(input: $input, condition: $condition) {
      id
      unitNumber
      measurement
      clientName
      available
      lastDatePaid
      dateOfEntry
      pricePaid
      createdAt
      updatedAt
    }
  }
`;
export const updateUnit = /* GraphQL */ `
  mutation UpdateUnit(
    $input: UpdateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    updateUnit(input: $input, condition: $condition) {
      id
      unitNumber
      measurement
      clientName
      available
      lastDatePaid
      dateOfEntry
      pricePaid
      createdAt
      updatedAt
    }
  }
`;
export const deleteUnit = /* GraphQL */ `
  mutation DeleteUnit(
    $input: DeleteUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    deleteUnit(input: $input, condition: $condition) {
      id
      unitNumber
      measurement
      clientName
      available
      lastDatePaid
      dateOfEntry
      pricePaid
      createdAt
      updatedAt
    }
  }
`;
export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
      id
      name
      email
      phoneNumber
      units {
        id
        unitNumber
        measurement
        clientName
        available
        lastDatePaid
        dateOfEntry
        pricePaid
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
      id
      name
      email
      phoneNumber
      units {
        id
        unitNumber
        measurement
        clientName
        available
        lastDatePaid
        dateOfEntry
        pricePaid
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
      id
      name
      email
      phoneNumber
      units {
        id
        unitNumber
        measurement
        clientName
        available
        lastDatePaid
        dateOfEntry
        pricePaid
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
