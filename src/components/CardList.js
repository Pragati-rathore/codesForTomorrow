import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CardList.css';
import CardImg from '../image/cardimg.jpeg';

function CardList() {
  const [list, SetList] = useState([]);
  const [closeCard, setCloseCard] = useState('card');
  const [currentpg, setCurrentpg] = useState(1);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        SetList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function handleCarClose() {
    setCloseCard('disable');
    console.log(closeCard);
  }

  function handlePgcng() {
    setCurrentpg(currentpg + 1);
  }

  return (
    <>
      <div>
        <div className='container'>
          <div className='grid-container'>
            {list.map((data, index) => {
              return (
                <>
                  <div className={closeCard} key={data.id}>
                    <div className='btn'>
                      <button onClick={handleCarClose}>X</button>
                    </div>
                    <h4>{data.title}...</h4>
                    <div>
                      <p>{data.body}</p>
                    </div>
                    <div className='date'>
                      <p>Mon 20 Dec 2020 14:50 GMT</p>
                    </div>
                    <div className='c'>
                      <img src={CardImg} alt='cardimg' />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className='btn-nav'>
          <button className='chng-pg' value={currentpg} onClick={handlePgcng}>
            <span>1</span>
          </button>
          <button className='chng-pg'>
            <span>2</span>
          </button>
          <button className='chng-pg'>
            <span>3</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default CardList;
