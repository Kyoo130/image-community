import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { shape, src, size } = props;
  const styles = {
    src: src,
    size: size,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles} />;
  }

  if (shape === "rectangle") {
    return (
      <AspectOuter>
        <AspectInner {...styles} />
      </AspectOuter>
    );
  }

  return null;
};

Image.defaultProps = {
  shape: "circle",
  src: "https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg",
  size: 36,
};

const AspectOuter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`;

export default Image;
