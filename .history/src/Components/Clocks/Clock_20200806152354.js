import React, {Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date()
        }
    }
    render() {
        return(
            <div className='Clock'>
                h
            </div>
        )
    }
}

export default Clock;