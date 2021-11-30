/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUnit = /* GraphQL */ `
  query GetUnit($id: ID!) {
    getUnit(id: $id) {
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
export const listUnits = /* GraphQL */ `
  query ListUnits(
    $filter: ModelUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
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
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phoneNumber
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
