import React, {Component} from "react";
import './ParentList.css';

import {Link} from "react-router-dom";


class ParentList extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     parentId: null,
        //     firstName: '',
        //     lastName: ''
        // }
    }


    render() {
        return (
            <div>
                {this.props.parentList.map(c =>
                    <Link to ={{
                        pathname:'/dashboard',
                        aboutParent: {
                            parentId: c.id,
                        }
                    }}>
                        <li className="list-group-item">
                            <span>
                    {c.first_name} {c.last_name} <br/>
                            </span>
                        </li>
                    </Link>)
                }
            </div>
        );
    }
}


export default ParentList;