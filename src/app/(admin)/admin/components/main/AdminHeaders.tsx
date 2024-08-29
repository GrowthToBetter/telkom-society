import React from "react";

export default function AdminHeaders({ data }: { data: string }) {
  return (
    <div>
      <p className="text-[32px] font-medium my-10 ml-24">{data}</p>
    </div>
  );
}
