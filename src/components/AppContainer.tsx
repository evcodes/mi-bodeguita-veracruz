import React, { useEffect, useState } from 'react'
import UnitDetails from './UnitDetails'
import UnitInput from './UnitInput'
import { Unit } from "../types/Unit";

//Amplify Dependenices
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import { API } from "aws-amplify";
import Map from './Facility/Map';


export default function AppContainer() {

    const [storageUnits, setUnits] = useState<[Unit] | []>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchUnits() {
            try {
                const allUnits: any = await API.graphql({ query: queries.listUnits });
                const res = allUnits.data.listUnits.items;
                console.log();

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
            <h1> Mi bodeguita veracruz </h1>
            <UnitInput />

            <UnitDetails units={storageUnits} />

            {loading ? (
                <p>Buscando datos...</p>
            ) :
                (
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
    )
}
