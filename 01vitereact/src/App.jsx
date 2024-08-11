import Chai from "./Chai"

function App() {
  
  return (
  //  <Chai/>
  //  <h1>Hello guys</h1> //Shows error because '.jsx' files can only render a single component at a time, hence we need to wrap everything in a single tag '<></>' also known as 'fragments' in react.

  <>
  <Chai/>
  <h1>Hello guys</h1>
  </> //no error!

  )
}

export default App
