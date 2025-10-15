"use client";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

function About() {
  const { author, about } = useSelector((state) => state.pages);
  return (
    <div style={{ padding: "5px" }} id="di">
      <h1>{author}</h1>
      <p>{about}</p>
      <br />
      <div
  style={{
    display: "flex",
    gap: "60px",
    flexWrap: "wrap",
    justifyContent: "center",
  }}
>
  {["/ab1.png", "/ab2.png", "/ab3.png"].map((src, index) => (
    <div
      key={index}
      style={{
        background: "rgba(0, 0, 0, 0.6)",
        textAlign: "center",
        minWidth: "150px",
        transition: "transform 0.3s ease",
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={src}
        alt={`about-${index}`}
        style={{
          width: "120px",
          height: "120px",
          objectFit: "contain",
          borderRadius: "8px",
        }}
      />
    </div>
  ))}
</div>

      <br />
      <p>
        Apart from academics, I am passionate about technology trends and innovation.
I enjoy designing user-friendly web applications that make everyday tasks easier.
My curiosity pushes me to experiment with new tools and frameworks regularly.
I actively contribute to group projects and help my peers with programming concepts.
In my free time, I explore topics like AI, IoT, and cybersecurity to broaden my skills.
I believe that consistent practice and creativity lead to mastery in technology.
Learning from failures and improving with every challenge keeps me motivated.
My long-term goal is to create impactful software solutions for real-world problems.
I aspire to contribute to the tech industry through innovation and collaboration.
Every line of code I write brings me closer to becoming a professional developer.
      </p>
    </div>
  );
}

export default About;
