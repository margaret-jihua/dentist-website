import React, {Component} from 'react'

class OfficeTour extends Component {
    render() {
        const officeList = this.props.office.map((o, idx) => {
            return <li>{o}</li>
        })

        return (
            <div>
                <h1>Office:</h1>
                {officeList}
            </div>
        )
    }    
}

export default OfficeTour