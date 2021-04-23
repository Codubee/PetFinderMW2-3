import React from 'react'
import { Table } from 'reactstrap'
import data from '../jsonData/jsonData_DisplayMatches.json'
import '../style/DisplayMatches.css'

class DisplayMatches extends React.Component{
    constructor(props){
        super(props)
        console.log(data)
    }

    render() {

        return (
            <div className = "container">
            <div>
            <h1 id="title1">Your Matches!</h1>
            <Table hover>
                
                <thead>
                    <tr id ="body1">
                        <th>#</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Sex</th>
                        <th>Shelter</th>
                        <th>Adoption Link</th>
                    </tr>
                </thead>

                {data.map((object, index) => (
                    <tbody>
                        <tr id = "body2">
                            
                        <td className = "font-weight-bold">{object.id}</td>
                        <td> {object.name}</td>
                        <td> {object.type}</td> 
                        <td>{object.sex}</td>
                        <td>{object.shelter_name}</td> 
                        <td>{object.adoption_url}</td>
                        </tr>
                    </tbody>
                ))
                }

            </Table>
            </div>
            </div>
        )
    }
}
    export default DisplayMatches;

