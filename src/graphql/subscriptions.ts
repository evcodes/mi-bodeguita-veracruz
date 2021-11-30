/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUnit = /* GraphQL */ `
  subscription OnCreateUnit {
    onCreateUnit {
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
export const onUpdateUnit = /* GraphQL */ `
  subscription OnUpdateUnit {
    onUpdateUnit {
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
export const onDeleteUnit = /* GraphQL */ `
  subscription OnDeleteUnit {
    onDeleteUnit {
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
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient {
    onCreateClient {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient {
    onUpdateClient {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient {
    onDeleteClient {
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
