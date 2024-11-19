import CentralSide from './Components/CentralSide/CentralSide'
import LeftSide from './Components/LeftSide/LeftSide'
import RightSide from './Components/RightSide/RightSide'
function App() {

  return (
  <div>
    <div className='d-flex ml-5'>
      <LeftSide/>  
      <CentralSide/>
      <RightSide/>
    </div>
  </div>
  )
}

export default App
