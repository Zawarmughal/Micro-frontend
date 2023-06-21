import React from "react";
import { Suspense } from "react";

const RemoteComponent = React.lazy(() => import("remote/Routing"));

export default function Remote() {
  return (
    <div><br /><br />
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteComponent />
      </Suspense>
    </div>
  );
}
