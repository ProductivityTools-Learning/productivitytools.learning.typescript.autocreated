import { useReducer, useEffect } from 'react';
type State = {
  name: string | undefined;
  score: number;
  loading: boolean;
};

type Action =
  | {
      type: 'initialize';
      name: string;
    }
  | {
      type: 'increment';
    };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'initialize':
      return { name: action.name, score: 0, loading: false };
    case 'increment':
      return { ...state, score: state.score + 1 };
    default:
      return state;
  }
}
export function ReducerExample() {
  useEffect(() => {
    dispatch({ type: 'initialize', name: 'pawel' });
  }, []);

  const [{ name, score, loading }, dispatch] = useReducer(reducer, {
    name: undefined,
    score: 0,
    loading: true,
  });

  return (
    <div>
      Reducer example
      <div>name:{name}</div>
      <div>score:{score}</div>
      <div>loading:{loading}</div>
      <div>
        <button onClick={() => dispatch({ type: 'increment' })}>Add</button>{' '}
      </div>
    </div>
  );
}
