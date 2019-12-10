import React, { Component } from 'react';

import axios from "axios";

import ParentList from "./ParentList";

class Parent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            parentList: []
        };
    }

    onParentClick = event => {
        event.preventDefault();
        this.props.onClick(this.state.parentList.id);
    }

    componentDidMount() {

        var response = fetch("http://localhost:3000/parent");
        console.log(response);

        axios.get('http://localhost:3000/user')
            .then(response => {
                // Create an array of contacts only with relevant data
                const parents = response.data.filter(res => res.grade === null).map(c => {
                    return {
                        id: c.id,
                        first_name: c.first_name,
                        last_name: c.last_name,
                        email: c.email
                      
                    };
                });

                // create a new "State" object without mutating
                // the original State object.
                const newState = Object.assign({}, this.state, {
                    parentList: parents
                });

                // store the new state object in the component's state

                this.setState(newState);
            })
            .catch(error => console.log(error));
    }


    render() {
        return (
            <div>
                <span> Parent's List </span>
                <ParentList parentList = {this.state.parentList} />
            </div>
        );
    }
}

export default Parent;