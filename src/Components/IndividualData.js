import React from 'react'

export const IndividualData = ({individualData,index}) => {
    return (
        <tr>
            <th>{index}</th>
            <th>{individualData.CustomerID}</th>
            <th>{individualData.PhoneNo}</th>
            <th>{individualData.PartnerName}</th>
            <th>{individualData.IsAccepted}</th>
        </tr>
    )
}
