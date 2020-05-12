
import React from 'react';
import CardList from './CardList'
import PropTypes from 'prop-types';

import styles from './KanbanBoard.css';

export default class KanbanBoard extends React.Component {
    // render(){
    //     const allCards = this.props.cards
    //     let cards = {
    //         "todo": [],
    //         "in-progress": [],
    //         "done": []
    //     }

    //     allCards.forEach(card => cards[ card.status ].push(card));

    //     return (
    //         <div className='KanbanBoard'>
    //             <CardList key='todo' cards={ cards['todo'] } title='To Do'/>
    //             <CardList key='in-progress' cards={ cards['in-progress'] } title='In Progress'/>
    //             <CardList key='done' cards={ cards['done'] } title='Done'/>
    //         </div>     
    //     )
    // }
    render() {
        return (
            <div className={styles.KanbanBoard}>
                <CardList
                    key='todo'
                    cards={this.props.cards.filter(card => card.status == 'todo')}
                    title='To Do' />
                <CardList
                    key='in-progress'
                    cards={this.props.cards.filter(card => card.status == 'in-progress')}
                    title='In Progress' />
                <CardList
                    key='done'
                    cards={this.props.cards.filter(card => card.status == 'done')}
                    title='Done' />
            </div>
        )
    }
}

KanbanBoard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object).isRequired
}