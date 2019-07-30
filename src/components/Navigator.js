import React from 'react';
import { useDispatch } from 'react-redux';
import { newRound } from '../redux-modules/gameRounds';

const NavigatorContext = React.createContext();

const Navigator = () => {

  const dispatch = useDispatch();

  const toGame = ({ gameSize, firstPlayer }) => {
    dispatch(newRound(gameSize, firstPlayer));
    
  }

  const toHome = () => {

  }
}

export default Navigator;