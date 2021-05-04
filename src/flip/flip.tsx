
import React from 'react';
import './flip.scss';

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
            <div className={'card'}>
                {this.card()}
            </div>
        )
    }

    componentDidUpdate(prevProps: IFlipProps) {
        if (this.props.word !== prevProps.word) {
            console.log('props change!')
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