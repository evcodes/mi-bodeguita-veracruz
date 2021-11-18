/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUnit = /* GraphQL */ `
  query GetUnit($id: ID!) {
    getUnit(id: $id) {
      id
      number
      client
      available
      measurement
      datePaid
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
        number
        client
        available
        measurement
        datePaid
        dateOfEntry
        pricePaid
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
