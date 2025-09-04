"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/slice";
import { auth } from "@/firebase";

function DebugAuth() {
  const user = useSelector(selectUser);
  const [firebaseUser, setFirebaseUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setFirebaseUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="fixed top-20 left-4 bg-white p-4 border rounded shadow-lg z-50 max-w-xs">
      <h3 className="font-bold text-sm mb-2">Auth Debug:</h3>
      <div className="text-xs space-y-2">
        <div>
          <strong>Firebase User:</strong>
          <pre>{JSON.stringify(firebaseUser?.uid || 'null', null, 2)}</pre>
        </div>
        <div>
          <strong>Redux User:</strong>
          <pre>{JSON.stringify(user || 'null', null, 2)}</pre>
        </div>
        <div>
          <strong>User Logged In:</strong>
          <span className={user ? 'text-green-600' : 'text-red-600'}>
            {user ? 'YES' : 'NO'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DebugAuth;
