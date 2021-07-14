import React, { Component } from 'react';
//style with material ui


export default class WishList extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         newWish: "",
    //         wishBio: []
    //     };
    //     this.submitHandler = this.submitHandler.bind(this);
    // }

    // changeHandler(event){
    //     this.setState({
    //         newWish: event.target.value
    //     })
    // }

    // submitHandler(e){
    //     e.preventDefault();
    //     this.setState((prevState)=> ({
    //         wishBio:[...prevState.wishBio, this.state.newWish],
    //         newWish: "",
    //     }))
    // }

    render() {
        //console.log(this.state);
        return (
            <div className='app'>
                {/* <br />
                <div className='mainApp'>
                <form onSubmit={this.submitHandler}>
                    <input values={this.state.newWish} onChange={(e)=> this.changeHandler(e)} />
                    <button type="submit">
                        Add new friend!
                    </button>
                </form>
                <br />
                {this.state.wishBio.map((plushes, index)=>{
                    return <span key={index}>{plushes}</span>
                })}
                </div> */}
            </div>
        )
    }
}

