import ImageUrl from './components/ImageUrl/index'
import ImagesFeed from './components/ImagesFeed/index'

import './App.css'

function App() {

  return (
    <div className='app'>
      <ImageUrl />
      <ImagesFeed columnCount={3}/>
    </div>
  )
}

export default App