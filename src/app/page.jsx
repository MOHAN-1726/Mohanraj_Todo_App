"use client";
import React from "react";

export default function Home() {
  return (
    <div id="di" style={{ padding: "20px"}}
    >
      <h1 style={{ fontSize: "2.2rem", marginBottom: "8px", textAlign: "center" }}>
        Welcome to the Todo App! 📝
      </h1>
      <br />
      <br />
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        Organize your tasks, stay productive, and never miss a deadline again!
      </p>
      <br />
      <br />
      <br />
      <br />
      <div style={{ display: "flex", gap: "60px", marginTop: "25px", flexWrap: "wrap", justifyContent: "center" }}>
        <div style={{ background: "rgba(0,0,0,0.5)", padding: "15px", borderRadius: "8px", textAlign: "center", minWidth: "120px" }}>
          <h2 style={{ fontSize: "1.2rem" }}>🗓️ Plan</h2>
          <p style={{ fontSize: "0.9rem" }}>Schedule your tasks efficiently.</p>
        </div>
        <div style={{ background: "rgba(0,0,0,0.5)", padding: "15px", borderRadius: "8px", textAlign: "center", minWidth: "120px" }}>
          <h2 style={{ fontSize: "1.2rem" }}>✅ Track</h2>
          <p style={{ fontSize: "0.9rem" }}>Mark tasks as complete easily.</p>
        </div>
        <div style={{ background: "rgba(0,0,0,0.5)", padding: "15px", borderRadius: "8px", textAlign: "center", minWidth: "120px" }}>
          <h2 style={{ fontSize: "1.2rem" }}>🎯 Achieve</h2>
          <p style={{ fontSize: "0.9rem" }}>Stay focused and achieve your goals.</p>
        </div>
      </div>
    </div>
  );
}
