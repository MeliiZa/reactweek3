import React, { Component } from 'react';
import ChildComponent from "./ChildComponent";



const FavoriteThings =[
    {
        id:1,
        name: "Rain drops on roses",
    },
    {
        id:2,
        name: "Whispers on kittens",
    },    {
        id:3,
        name: "Brown paper packages tied up with string",
    },    {
        id:4,
        name: "Cream-colored ponies",
    },
];



export class HomePageComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {myThings: FavoriteThings
        }
    }
    deleteFavorite(id) {
        this.setState({
            myThings: this.state.myThings.filter( (myThings) => {
                return(
                    myThings.id !== id
                )
            })
        })
    }

    render() {
        
        return (
            
            <ChildComponent myThings={this.state.myThings} delteFavorite = {this.deleteFavorite} />
           
        
        )
    }
}


export default HomePageComponent
