import React from 'react';

class Dropdown extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            drop: false
        }
        this.clicker.bind(this)
    }

    clicker(e){
        this.setState(drop, true)
    }

    leave(e) {
        this.setState(drop, false)
    }

    render() {

        return (
            <button onFocus={this.clicker} onBlur={this.leave}>
                <ul className={this.state ? reveal : hide}>
                    <li>inside drop down</li>
                </ul>
            </button>
        )
    }
}

export default Dropdown;