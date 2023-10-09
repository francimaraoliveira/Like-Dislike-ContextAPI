// reducers/votesReducer.ts

type Action = { type: 'UPVOTE' } | { type: 'DOWNVOTE' };

type State = {
  totalVotes: number;
};

const initialState: State = {
  totalVotes: 0,
};

const votesReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'UPVOTE':
      return {
        ...state,
        totalVotes: state.totalVotes + 1,
      };
    case 'DOWNVOTE':
      return {
        ...state,
        totalVotes: state.totalVotes - 1,
      };
    default:
      return state;
  }
};

export default votesReducer;