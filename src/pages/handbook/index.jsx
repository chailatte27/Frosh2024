import React from "react";
import handbook from "../../images/handbook.pdf";
export default function Handbook() {
  return (
    <div
      style={{
        width: "fit-content",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <iframe
        title="Froshie Handbook"
        style={{
          height: "85vh",
          width: "75vw",
          marginLeft: "auto",
          marginRight: "auto",
          maxHeight: "85vh",
          objectFit: "contain",
          borderRadius: "5px",
        }}
        src={handbook}
      />
    </div>
  );
}
