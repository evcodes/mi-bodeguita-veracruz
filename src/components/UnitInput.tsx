import { Sizes, Unit } from '../types/Unit'

//API operations
import { API } from 'aws-amplify'
import * as mutations from "../graphql/mutations";


export default function UnitInput() {

    async function addUnit() {
        try {
            let today = new Date();
            let date =
                today.getFullYear() +
                "-" +
                (today.getMonth() + 1) +
                "-" +
                today.getDate();
            const unitData = new Unit({
                unitNumber: 1,
                measurement: Sizes.SMALL,
                clientName: "Layla Castro Barquet",
                available: false,
                lastDatePaid: date,
                dateOfEntry: date,
                pricePaid: 1290,
            });
            const res = await API.graphql({
                query: mutations.createUnit,
                variables: { input: unitData },
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Unit input</h1>

            <button onClick={addUnit}> add unit</button>
        </div>
    )
}
