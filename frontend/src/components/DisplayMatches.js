import React from 'react'
import { Button, Table } from 'reactstrap'
import '../style/DisplayMatches.css'
import axios from 'axios'

class DisplayMatches extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.triggerApi = this.triggerApi.bind(this)
    }

    //API call to getMatches
    triggerApi() {
        axios.get("/getMatches?id=" + this.props.userId)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    data: response.data
                })
            })
    }

    render() {

        return (
            <div className="container">
                <div>
                    <h1 id="title1">Your Matches!</h1>

                    <Button className="m-lg" onClick={this.triggerApi}>Click me to update your matches!</Button>

                    <Table hover>

                        <thead>
                            <tr id="body1">
                                <th>#</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Sex</th>
                                <th>Shelter</th>
                                <th>Adoption Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((object, index) => (

                                <tr id="body2" key={index}>

                                    <td className="font-weight-bold">{object.id}</td>
                                    <td> {object.name}</td>
                                    <td> {object.type}</td>
                                    <td>{object.sex}</td>
                                    <td>{object.shelter_name}</td>
                                    <td>{object.adoption_url}</td>
                                </tr>

                            ))
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}
export default DisplayMatches;

