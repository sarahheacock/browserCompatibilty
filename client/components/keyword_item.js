import React from 'react';
import { Link } from 'react-router-dom';


const KeywordItem = (item) => {
  return (
    <Link to={`/keywords/${item._id}`} className="keyword_item">
      <div className="book_header">
        <h2>{item.keyword}</h2>
      </div>
    </Link>
  )
}

export default KeywordItem;