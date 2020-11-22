import React, {useState, useEffect} from "react";
import {nodeType, node} from './Types/nodeTypes'
import {Node} from './Node'
import { BFS } from "../Algorithms/BFS";

export default function Test():any{

    const [nodes, setNodes] = useState([])

    const START_NODE_ROW:number = 10;
    const START_NODE_COL:number = 5;

     useEffect(()=>{
        const newNodes: nodeType = [];
        for(let i = 0; i < 15; i++){

            const currentRow:Array<node> = new Array();
            for(let j:number = 0; j<50; j++){
                const currentNode:node = {
                    row : i,
                    col : j,
                    isStart : i === 10 && j === 5,
                    isEnd : i === 10 && j === 49
                }
                currentRow.push(currentNode)
            }
            newNodes.push(currentRow);
        }
        settingNodes(setNodes,newNodes)
    }, [])
    return(
        <div>
            <header>
                <button onClick={()=>BFS(node)}>
                    Visualize with Breadth First Algo
                </button>
            </header>
        <div className="grid">
            {
                nodes.map((node:nodeType, index:number)=>{
                return(

                    <div key={index}>
                    {
                        node.map((newNode:nodeType, index:number)=>{
                            const {isStart, isEnd, row, col} = newNode
                            return(<Node isStart={isStart} isEnd={isEnd} row={row} col={col} />)
                        })
                    }
                    </div>
                  )
                })
            }
        </div>
        </div>
    )
}

function settingNodes(setNodes:any, data:nodeType){
    setNodes(data) 
}