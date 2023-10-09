// services/api.tsx

export const fetchTopics = async () => {
    try {
      const response = await fetch('http://localhost:3001/topics');
      const data = await response.json();
      return data;
    } catch (error: any) {
      throw new Error('Erro ao obter tópicos da API');
    }
  };
  
  export const voteTopic = async (topicId: string, type: 'UP' | 'DOWN') => {
    try {
      const response = await fetch(`http://localhost:3001/topics/${topicId}/vote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type }),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao votar no tópico');
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  };  