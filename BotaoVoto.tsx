import React from 'react';
import { useDispatch } from 'react-redux';
import './BotaoVoto.css'; 

interface BotaoVotoProps {
  tipo: 'UP' | 'DOWN';
}

const BotaoVoto: React.FC<BotaoVotoProps> = ({ tipo }) => {
  const dispatch = useDispatch();

  const handleVote = () => {
    if (tipo === 'UP') {
      dispatch({ type: 'UPVOTE' });
    } else if (tipo === 'DOWN') {
      dispatch({ type: 'DOWNVOTE' });
    }
  };

  return (
    <button onClick={handleVote} className={`botao-${tipo.toLowerCase()}`}>
      {tipo}
    </button>
  );
};

export default BotaoVoto;