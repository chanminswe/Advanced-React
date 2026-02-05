import VerySlowComponent from './VerySlowComponent'
import BunchOfStuff from './BunchOfStuff'
import OtherStuffAlsoComplicated from './OtherStuffAlsoComplicated'

function Main() {
  return (
    <div className='scrolable-block'>
        <VerySlowComponent />
        <BunchOfStuff />
        <OtherStuffAlsoComplicated />
    </div>
  )
}

export default Main