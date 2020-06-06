import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class ChildComponent extends Component{
    render(){
        return(<div>
            <ul>
                {this.props.myThings.map(myThings =>(
                    <li key={myThings.id}>
                        <Link to ={`/okok/}${myThings.id}`}> {myThings.name}
                        </Link> <button onClick ={() => (myThings.id)}className="btn btn-danger">Delete </button>
                        </li>))}
            </ul>
        </div>

        )
    }
}
export default ChildComponent