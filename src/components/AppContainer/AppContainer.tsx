import React, { useEffect, useState } from "react";
import UnitDetails from "../UnitDetails";
import UnitInput from "../UnitInput";
import { Unit } from "../../types/Unit";

//Amplify Dependenices
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import { API } from "aws-amplify";

import "./app-container.css";

export default function AppContainer() {
  const [storageUnits, setUnits] = useState<[Unit] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUnits() {
      try {
        const allUnits: any = await API.graphql({ query: queries.listUnits });

        const res = allUnits.data.listUnits.items;
        console.log(res);

        setUnits(res);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUnits();
  }, []);

  async function editUnit() {
    const unitDetails = {
      id: "19c69063-3051-454d-930e-773b89789675",
      unitNumber: "0002",
      clientName: "Eddy Varela",
      available: false,
      measurement: "3x5",
      lastDatePaid: "2021-11-01",
      dateOfEntry: "2021-11-02",
      pricePaid: 1850.0,
    };

    try {
      const updatedUnit = await API.graphql({
        query: mutations.updateUnit,
        variables: { input: unitDetails },
      });

      console.log(updatedUnit);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="main-app-container">
      <h1> Mi Bodeguita Veracruz </h1>
      <UnitInput />

      <UnitDetails units={storageUnits} />

      {loading ? (
        <p>Buscando datos...</p>
      ) : (
        storageUnits.map((unit: Unit, index) => (
          <div key={index}>
            <div>
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
    </div>
  );
}
