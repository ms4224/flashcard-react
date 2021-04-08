import React from 'react';
import * as _ from 'lodash';
import CardCheck from '../card-check/card-check';

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
        return (
            <div>
                <CardCheck card={this.state.curCard} good={this.good} redo={this.redo}></CardCheck>
            </div>
        )
    }

    good() {
        this.setState({
            checkDeck: this.state.checkDeck.splice(0, 1)
        })
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