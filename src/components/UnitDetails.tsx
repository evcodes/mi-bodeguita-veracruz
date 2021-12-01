import React from 'react'
import { Unit } from '../types/Unit'

type UnitDetailProps = {
    units: [Unit?]
}

function UnitDetails({ units }: UnitDetailProps) {
    return (
        <div>
            <h1>Unit details</h1>
        </div>
    )
}

export default UnitDetails