import React from 'react'
import Tardis from './Tardis'

export default function DivThree(props) {
    console.log(props)
  return (
    <div>
    <Tardis tardis={props.tardis} changeCase={props.changeCase}/>
    
    <Tardis tardis={props.tardis} changeCase={props.changeCase}/>
    </div>
  )
}
