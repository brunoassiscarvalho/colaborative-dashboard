import React, { useCallback } from "react";
import "./global.css";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Controls,
  Background,
  Node,
} from "reactflow";

import "reactflow/dist/style.css";
import { ScreenNode } from "./nodes/Screen";
import { JobRequestNode } from "./nodes/JobRequestNode";
import { StartPointNode } from "./nodes/StartPoint";

const NODE_TYPES = {
  screen: ScreenNode,
  jobRequest: JobRequestNode,
  startPoint: StartPointNode
};

const initialNodes = [
  { id: "1", type: "screen", position: { x: 0, y: 0 }, data: { label: "1" } },
  {
    id: "2",
    type: "jobRequest",
    position: { x: 0, y: 100 },
    data: { label: "2" },
  },
  {
    id: "3",
    type: "startPoint",
    position: { x: 100, y: 100 },
    data: { label: "2" },
  },
] satisfies Node[];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodeTypes={NODE_TYPES}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
