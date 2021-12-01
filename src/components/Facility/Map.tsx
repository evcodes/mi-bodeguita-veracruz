import UnitCell from "./UnitCell";

import { UnitCoordinateProps } from "./types";

export default function Map() {
    return (
        <div>
            <h1>Map Component</h1>
            <UnitCell data={{ rectX: 42, rectY: 40, width: 50, height: 50, stroke: "1px", fill: "red", strokeWidth: 2 }} />
        </div>
    )
}
