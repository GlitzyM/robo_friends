import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      { robots.map((user, i) => <Card key={i} id={user.id} name={user.username} email={user.email}/>) }
    </div>
  );
}

export default CardList;