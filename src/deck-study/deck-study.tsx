import React from 'react';
import * as _ from 'lodash';
import CardCheck from '../card-check/card-check';
import './deck-study.scss';

class DeckStudy extends React.Component<IDeckStudyProps, IDeckStudyState> {
    constructor(public props: IDeckStudyProps) {
        super(props);
        this.state = {
            checkDeck: _.map(this.props.deck, _.clone),
            curCard: this.props.deck[0]
        }
        this.good = this.good.bind(this);
        this.redo = this.redo.bind(this);
    }

    render() {
        console.log('curLength', this.state.checkDeck.length)
        return (
            <div className={'deck-study'}>
                {

                    this.state.checkDeck.length >= 1 ?
                        <div>
                            <div>Remaining cards: {this.state.checkDeck.length}</div>
                            <CardCheck card={this.state.curCard} good={this.good} redo={this.redo}></CardCheck>
                        </div>
                        :
                        <div>Complete!</div>
                }
            </div>
        )
    }

    good() {
        console.log('set state')
        if (this.state.checkDeck.length >= 1) {
            this.state.checkDeck.splice(0, 1);
            this.setState({
                checkDeck: this.state.checkDeck,
                curCard: this.state.checkDeck[0]
            })
        } else {
            console.log('out of cards', this.state.checkDeck.length, this.state.checkDeck);
        }
    }

    redo() {
        //shuffle
    }
}

interface IDeckStudyProps {
    deck: card[]
}

interface IDeckStudyState {
    curCard: card;
    checkDeck: card[];
}

export default DeckStudy;