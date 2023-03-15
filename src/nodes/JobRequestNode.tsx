import { Handle, NodeProps, Position } from "reactflow";

export function JobRequestNode(props: NodeProps) {
  return (
    <div className="bg-green-700 rounded w-40 h-40">
      <Handle position={Position.Left} type="source" />
    </div>
  );
}
