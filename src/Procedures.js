import React, {Component} from 'react'

class Procedures extends Component {
    render() {
        const proceduresList = this.props.procedures.map((p, idx) => {
            return <li>{p}</li>
        })
        return (
            <div>
                <h1>Procedures</h1>
                {proceduresList}
            </div>
        )
    }
}

export default Procedures