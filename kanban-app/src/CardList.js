import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

import styles from './CardList.css';

export default class CardList extends React.Component {
    render() {
        return (
            <div className={ styles.CardList }>
                <h1>{ this.props.title }</h1>
                { this.props.cards && this.props.cards.map( card => <Card 
                    key={ card.id }
                    id={ card.id }
                    title={ card.title }
                    status={ card.status }
                    description={ card.description }
                    tasks={ card.tasks }
                    taskCallbacks={ this.props.taskCallbacks }
                />) }
            </div>
        )
    }
}

CardList.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object)//.isRequired
    /* 위 주석은 아래의 오류를 지우기 처리됨..
        Warning: Failed prop type: The prop `cards` is marked as required in `CardList`, but its value is `null`.
    */
   // 현재 이 주석이 있는 버전부턴 api server 작동후 실행할 것...
}