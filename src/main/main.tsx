import React from 'react';
import DeckStudy from '../deck-study/deck-study';

const fakeDeck: card[] = [
    {
        kanji: 'kanjix',
        hiragana: 'hiraganax',
        english: 'englishx'
    },
    {
        kanji: 'kanji2',
        hiragana: 'hiragana2',
        english: 'english2'
    },
    {
        kanji: 'kanji3',
        hiragana: 'hiragana3',
        english: 'english3'
    }
]

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                TESTING
                <DeckStudy deck={fakeDeck}></DeckStudy>
            </div>
        )
    }
}

export default Main;