import React from "react"
import DivTwo from './DivTwo'
const DivOne = (props) => {
    console.log(props)
    const data = "Test String"
    return(
        <div>
           <DivTwo tardis={props.tardis} changeCase={props.changeCase}/>
        </div>
    )
}
export default DivOne