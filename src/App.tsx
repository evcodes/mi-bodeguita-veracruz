import { useEffect, useState } from "react";
import Amplify, { API } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import "./App.css";
import awsconfig from "./aws-exports";

//mutations and queries
import * as queries from "./graphql/queries";
import * as mutations from "./graphql/mutations";
import { Unit } from "./types/Unit";

Amplify.configure(awsconfig);

function App() {
  const unitDetails = {
    number: "0001",
    client: "Layla Castro",
    available: false,
    measurement: "3x3",
    datePaid: "2021-11-01",
    dateOfEntry: "2021-11-02",
    pricePaid: 1290.0,
  };

  const [storageUnits, setUnits] = useState<[Unit] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUnits() {
      try {
        const allUnits: any = await API.graphql({ query: queries.listUnits });
        const res = allUnits.data.listUnits.items
        console.log();

        setUnits(res);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUnits();
  }, []);

  async function addUnit() {
    try {
      const res = await API.graphql({
        query: mutations.createUnit,
        variables: { input: unitDetails },
      })
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  }

  async function editUnit() {
    const unitDetails = {
      id: "unit2",
      number: "0002",
      client: "Eddy Varela",
      available: false,
      measurement: "3x5",
      datePaid: "2021-11-01",
      dateOfEntry: "2021-11-02",
      pricePaid: 1850.0,
    };
    const updateUnit = await API.graphql({
      query: mutations.updateUnit,
      variables: { input: unitDetails },
    });

    console.log(updateUnit);
  }

  return (
    <div>
      <h1>Mi bodeguita veracruz</h1>
      <input placeholder="unit number"></input>
      <button onClick={addUnit}> Añadir Unidad</button>

      {loading ? (
        <p>Buscando datos...</p>
      ) : (
        storageUnits.map((unit: Unit, index) => (
          <div key={index}>
            <div>
              <p>ID:{unit.id}</p>
              <button onClick={editUnit}> Editar cliente</button>
            </div>
            <p>Numero:{unit.unitNumber}</p>
            <p>Cliente:{unit.clientName}</p>
            <p>Disponible: {unit.available ? "True" : "False"}</p>
            <p>Medida:{unit.measurement}</p>
            <p>Fecha Pagado:{unit.lastDatePaid}</p>
            <p>Fecha de entrada:{unit.dateOfEntry}</p>
            <p>Precio pago:{unit.pricePaid}</p>
            <br />
          </div>
        ))
      )}
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
