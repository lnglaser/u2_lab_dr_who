import React from 'react'

export default function Tardis(props) {
    console.log(props)
    console.log(props.tardis.name)
    console.log(props.tardis.caps)
    

    const changeCase = (props) => {
        let newTardis = props.tardis.name

    }
    
  return (
    <div onClick={props.changeCase}>{props.tardis.name}</div>
  )
}
