import React from 'react';

function List(props) {
    const category = props.category;
    const itemsList = props.items;

    const listItems = itemsList.map(item => (
        <li key={item.id}>
            {item.name}: &nbsp;<b>{item.cal}</b>
        </li>
    ));

    return (
        <>
            <h3 className='list-category'>{category}</h3>
            <ul className='list-items'>{listItems}</ul>
        </>
    );
}

export default List;
