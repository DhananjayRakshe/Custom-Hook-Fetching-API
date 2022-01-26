import React, { PureComponent } from 'react';

class Purecomponent extends PureComponent {

    constructor() {
        super();
        this.state = {
            data: 20
        }
    }
    render() {
        console.log(this.state.data)
        
        return (
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={() => this.setState({data: 40})}>Update</button>
            </div>
        );
    }
}

export default Purecomponent;
