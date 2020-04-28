import React from 'react';

export default class FoodListItem extends React.Component {
    render() {
        // this.props.name = 'kickscar'; // 변경은 불가하다...
        return (
            <li>{ this.props.name } : { this.props.quantity }</li>      
        );
    }
} 