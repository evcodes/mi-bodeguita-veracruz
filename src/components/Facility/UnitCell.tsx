import React from 'react'

import { UnitCoordinateProps } from './types'

export default function UnitCell(props: UnitCoordinateProps) {

    let data = props.data
    return (
        <svg>
            <rect x={data.rectX} y="10" width="150" height="90" stroke="red" fill="blue" stroke-width="5" />
            <text x="25%" y="35%" stroke="#fff" stroke-width="1px" dy=".3em">42</text>
        </svg>
    )
}
