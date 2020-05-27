import React from 'react';

import {ReactComponent as Check} from './check.svg';

const List = ({list, onRemoveItem}) =>
  list.map((item) => (<Item key={item.objectID} item={item} onRemoveItem={onRemoveItem}/>));



const Item = ({item, onRemoveItem}) => {
  
  return (
    <div className="item">
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        <button type="button" onClick={onRemoveItem.bind(null, item)} className="button button_small">
          <Check height="18px" width="18px" />
        </button>
      </span>
    </div>
  );
}


export default List;