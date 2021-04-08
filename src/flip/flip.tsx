
import React from 'react';

class Flip extends React.Component<IFlipProps, IFlipState> {
    constructor( public props: IFlipProps) {
        super(props);
        this.state = {
            flip: false,
        }
        this.flip = this.flip.bind(this);
        this.card = this.card.bind(this);
    }

    render() {
        return (
            <div>
                {this.card()}
            </div>
        )
    }

    componentDidUpdate(prevProps: IFlipProps) {
        console.log('called')
        // this.setState({
        //     flip: false
        // })
        if (this.props.word !== prevProps.word) {
            this.setState({
                flip: false
            })
        }
    }

    card() {
        return this.state.flip ?
        <div className="shown">{this.props.word}</div> :
        <div className="not-shown" onClick={this.flip}>{this.props.title}</div>
    }

    flip() {
        this.setState({
            flip: !this.state.flip
        })
    }
}

interface IFlipProps {
    title: string;
    word: string;
}

interface IFlipState {
    flip: boolean;

}

export default Flip;