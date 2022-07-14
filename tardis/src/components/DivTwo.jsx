import React from 'react'
import DivThree from './DivThree'

export default function DivTwo(props) {
    console.log(props)
  return (
   <DivThree tardis={props.tardis} changeCase={props.changeCase}/>
  )
}
