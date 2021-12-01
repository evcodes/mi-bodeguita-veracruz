import * as mutations from '../graphql/mutations'
import { API } from 'aws-amplify'

function EditUnitModal() {

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
            <p>Edit a unit</p>
            <input></input>
            <button onClick={editUnit}>edit a unit</button>
        </div>
    )

}

export default EditUnitModal