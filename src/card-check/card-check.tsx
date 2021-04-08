import React from 'react';
import Flip from '../flip/flip';

class CardCheck extends React.Component<ICardCheckProps, ICardCheckState> {
    constructor(public props: ICardCheckProps) {
        super(props);
        this.good = this.good.bind(this);
        this.redo = this.redo.bind(this);
    }

    render() {
        return (
            <div>
                <Flip word={this.props.card.kanji} title={'kanji'}></Flip>
                <Flip word={this.props.card.hiragana} title={'hiragana'}></Flip>
                <Flip word={this.props.card.english} title={'english'}></Flip>
                {this.props.card.sampleSentence ? <Flip word={this.props.card.sampleSentence} title={'sample'}></Flip> : <></>}
                {this.props.card.tag ? <Flip word={this.props.card.tag} title={'tag'}></Flip> : <></>}
                <div className="card-check-confirm-buttons-container">
                    <button onClick={this.good}>Good</button>
                    <button onClick={this.redo}>Redo</button>
                </div>
            </div>
        )
    }

    componentDidUpdate(prevProps: ICardCheckProps) {
        console.log('got change!', prevProps)
    }

    good() {
        this.props.good();
    }

    redo() {
        this.props.redo();
    }
}

interface ICardCheckProps {
    card: card,
    good: () => void,
    redo: () => void
}

interface ICardCheckState {

}

export default CardCheck;