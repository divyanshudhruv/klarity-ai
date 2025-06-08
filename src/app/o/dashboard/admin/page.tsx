"use client";
import { unauthorized } from "next/navigation";
import { useEffect } from "react";

export default function Unauthorized() {
  useEffect(() => {
    unauthorized();
  }, []);
  return (
    <main>
      <h1>401 - Unauthorized</h1>
      <p>Please log in to access this page.</p>
    </main>
  );
}
