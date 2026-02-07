import { useCallback, useEffect, useMemo, useState } from 'react';
import type  { ReactNode } from 'react';

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};
const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};


export default function App() {
  const [state, setState] = useState(1);

  const submitNormal = () => {
    console.info('submit some data here - normal');
  };

  const submitCallback = useCallback(() => {
    console.info('submit some data here - useCallback');
  }, []);

  const submitMemo = useMemo(
    () => () => {
      console.info('submit some data here - useMemo');
    },
    [],
  );

  useEffect(() => {
    console.info('This will be triggered every re-render');
  }, [submitNormal]);

  useEffect(() => {
    console.info('This will be triggered only on mounting');
  }, [submitCallback, submitMemo]);

  return (
    <>
      Examples of a function non-memoized and memoized via useCallback or useMemo
      <br />
      <br />
      <Button onClick={() => setState(state + 1)}>Click to trigger re-render</Button>
      <br />
      <br />
      <Button onClick={submitNormal}>Click to trigger normal submit</Button>
      <Button onClick={submitCallback}>Click to trigger submit from useCallback</Button>
      <Button onClick={submitMemo}>Click to trigger submit from useMemo</Button>
    </>
  );
}
