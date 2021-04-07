import React from 'react';

class CardCheck extends React.Component<ICardCheckProps, ICardCheckState> {
    constructor(public props: ICardCheckProps) {
        super(props)
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

interface ICardCheckProps {
    cards: card[]
}

interface ICardCheckState {

}

export default CardCheck;