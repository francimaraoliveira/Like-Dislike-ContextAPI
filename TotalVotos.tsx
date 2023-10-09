// src/components/TotalVotos.tsx

import React from 'react';
import { useSelector } from 'react-redux';

const TotalVotes: React.FC = () => {
  const totalVotes = useSelector((state: any) => state.totalVotes);

  return <div>Total de Votos: {totalVotes}</div>;
};

export default TotalVotos;