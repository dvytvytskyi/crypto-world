import React from "react";
import ContentLoader from "react-content-loader";

export default function index({ height }) {
  return (
    <ContentLoader
      speed={2}
      width={"100%"}
      height={height}
      backgroundColor="#222e49"
      foregroundColor="#1a2236"
    >
      <rect rx="32" ry="32" width="100%" height={height} />
    </ContentLoader>
  );
}
