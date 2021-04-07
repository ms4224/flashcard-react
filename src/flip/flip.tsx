import React from 'react';

class Flip extends React.Component<IFlipProps, IFlipState> {
    constructor( public props: IFlipProps) {
        super(props);
        this.state = {
            flip: false,
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.flip ?
                <div className="not-shown" onClick={}>{this.props.title}</div>
                :
                <div className="shown">{this.props.word}</div>
                }
            </div>
        )
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