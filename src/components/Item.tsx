import React from 'react';
import { useParams } from 'react-router-dom';

function Item() {
  const { itemParam } = useParams();

  return <div>{itemParam}</div>;
}

export default Item;
