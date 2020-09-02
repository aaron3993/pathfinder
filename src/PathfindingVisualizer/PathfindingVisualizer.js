import React, { useState, useEffect } from 'react';
import Node from './Node/Node'

import './PathfindingVisualizer.css';

export default function PathfindingVisualizer (props) {
  const [nodes, setNodes] = useState([])

  useEffect(() => {
    const grid = [];
    for (let row = 0; row < 15; row++) {
      const currentRow = []
      for (let col = 0; col < 50; col++) {
        currentRow.push([])
      }
      grid.push(currentRow)
    }
    setNodes(grid)
  }, [])

  return (
    <div className="grid">
      {nodes.map((row, rowIdx) => {
        return <div>{row.map((node, nodeIdx) => <Node></Node>)}</div>
      })}
    </div>
  )
}