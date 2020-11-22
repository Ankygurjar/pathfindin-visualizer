export function BFS(grid:any, startNode:any){
        let visited:any = visitedObject(grid)
        let q = []
        visited[startNode] = true
        q.push(startNode)
    
        while(q.length){
          let c = q.pop()
          let elementsOfCurrentNode:any = grid.get(c)
          for(let ele of elementsOfCurrentNode){
            if(!visited[ele]){
              visited[ele] = true
              q.unshift(ele)
            }
          }
          console.log(c)
        }
}

function visitedObject(grid:any){
    let arr:any = {}
    for(let i of grid.keys()){
      arr[i] = false
    }
    return arr
  }