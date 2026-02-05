import VerySlowComponent from './VerySlowComponent'
import BunchOfStuff from './BunchOfStuff'
import OtherStuffAlsoComplicated from './OtherStuffAlsoComplicated'
import './Main.css';
import { useState } from 'react';


type ScrollableMovingBlockProps = {
  children: React.ReactNode;
}

const MovingBlock = ({ position }: { position: number }) => (
  <div className="movable-block" style={{ top: position }}>
    {position}
  </div>
);

const ScrollableMovingBlock = ({children} : ScrollableMovingBlockProps) => {
  const [position , setPosition] = useState(0);

  const onScroll = (e : React.UIEvent<HTMLDivElement>) => {
    setPosition(e.currentTarget.scrollTop);
  }

  return(
    <div className="scrollable-block" onScroll={onScroll}>
      <MovingBlock position={position} />
      {children}
    </div>
  )
};

function Main() {


  return (
    <div className='scrolable-block' >
        <ScrollableMovingBlock>
          <VerySlowComponent />
          <BunchOfStuff />
          <OtherStuffAlsoComplicated />
        </ScrollableMovingBlock>
    </div>
  )
}


export default Main



