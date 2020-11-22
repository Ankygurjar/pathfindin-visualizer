import React, {useEffect, useState} from 'react'
import '../App.css'

export function Node(condition: boolean|any):any{
    const className = condition.isStart ? 'node isStart startNode' : condition.isEnd ? 'node isEnd' : 'node'
    return(
        
        <div className={className} draggable="true" onClick={(e)=>onBarClick(e, condition.row, condition.col)}>
        </div>
    )
}

function onBarClick(e:Object, row:number, col:number){
    console.log(row, col)
}