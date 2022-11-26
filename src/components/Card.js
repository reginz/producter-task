import React from 'react';
import NewItem from './NewItem';

export default function Card(props) {
    return (
        <div className='card'>
            <h1>{props.card_title}</h1>
            <NewItem />
        </div>
    );
}