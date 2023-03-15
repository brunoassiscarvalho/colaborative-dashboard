import { Handle, NodeProps, Position } from "reactflow";

export function StartPointNode(props: NodeProps) {
  return (
    <div className="bg-blue-700 rounded w-40 h-40">
      <Handle position={Position.Left} type="source" />
    </div>
  );
}
