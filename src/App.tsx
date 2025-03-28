import './global.css'
import { Header } from './components/header'
import { AddTask } from './components/addTask'


export function App() {

  return (
    <div>
     <Header/>
     <main>
      <AddTask/>
     </main>

    </div>
  )
}


