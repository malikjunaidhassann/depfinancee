"use client";

import { useSelector } from "react-redux";
import { selectUser } from "@/redux/slice";

function DebugRedux() {
  const user = useSelector(selectUser);

  return (
    <div className="fixed top-20 right-4 bg-white p-4 border rounded shadow-lg z-50 max-w-xs">
      <h3 className="font-bold text-sm mb-2">Redux Debug:</h3>
      <pre className="text-xs overflow-auto">
        {JSON.stringify({ user }, null, 2)}
      </pre>
    </div>
  );
}

export default DebugRedux;
