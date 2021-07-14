import React, { ChangeEvent } from 'react';
import { ImportsNotUsedAsValues } from 'typescript';
// //style with material ui
import Plush from './plushes'


export default class PlushList extends React.Component {
    constructor(props: string) {
        super(props);
        this.state = {
            newPlush: "",
            plushBio: []
        };
            this.submitHandler = this.submitHandler.bind(this);
        }

        changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            this.setState({
                newPlush: event.target.value
            })
        }

        submitHandler = (e: ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            this.setState((prevState)=> ({
                plushBio:[...prevState.plushBio, this.state.newPlush],
                newPlush: "",
            }))
        }

        render() {
            console.log(this.state);
            return (
                <div className='app'>
                    <br />
                    <div className='mainApp'>
                    <form onSubmit={this.submitHandler}>
                        <input values={this.state.newPlush} onChange={(e)=> this.changeHandler(e)} />
                        <button type="submit">
                            Add new friend!
                        </button>
                    </form>
                    <br />
                    
                    {this.state.plushBio.map((plushes, index)=>{
                        return <Plush key={index}
                        index={index}
                        plush={plushes}/>
                    })}
                    </div>
                </div>
            )
    }
}

