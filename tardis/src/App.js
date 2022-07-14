import './App.css'
import { useState } from 'react'
import Tardis from './components/Tardis'
import DivOne from './components/DivOne'
import DivTwo from './components/DivTwo'
import DivThree from './components/DivThree'

function App() {
  const [tardis, setTardis] = useState({
    name: 'Time and Relative Dimension in Space',
    caps: false
  })

  // const [tardis2, setTardis2] = useState({
  //   name: 'Time and Relative Dimension in Space',
  //   caps: false
  // })

  const changeCase = () => {
    // let newTardis = { ...tardis }
    // newTardis.name = tardis.name.toUpperCase()
    // newTardis.caps = true
    // setTardis(newTardis)
    let newTardis = { ...tardis }
    if (tardis.caps) {
      newTardis.name = tardis.name.toLowerCase()
      newTardis.caps = false
    } else {
      newTardis.name = tardis.name.toUpperCase()
      newTardis.caps = true
    }
    setTardis(newTardis)
  }

  // const changeCase2 = () => {
  //   // let newTardis = { ...tardis }
  //   // newTardis.name = tardis.name.toUpperCase()
  //   // newTardis.caps = true
  //   // setTardis(newTardis)
  //   let newTardis2 = { ...tardis2 }
  //   if (tardis2.caps) {
  //     newTardis2.name = tardis2.name.toLowerCase()
  //     newTardis2.caps = false
  //   } else {
  //     newTardis2.name = tardis2.name.toUpperCase()
  //     newTardis2.caps = true
  //   }
  //   setTardis2(newTardis2)
  // }

  // const [divOne, setDivOne] = useState('')

  return (
    <div>
      <h3>
        <DivOne
          tardis={tardis}
          // tardis2={tardis2}
          changeCase={changeCase}
          // changeCase2={changeCase2}
        />
      </h3>
    </div>
  )
}

export default App
