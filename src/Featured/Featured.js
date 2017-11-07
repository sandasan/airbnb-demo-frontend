import React from "react";
import styled from "styled-components";
import feauture1 from "./feauture1.png";
import feauture2 from "./feauture2.png";
import feauture3 from "./feauture3.png";
import feauture4 from "./feauture4.png";
import feauture5 from "./feauture5.png";
import feauture6 from "./feauture6.png";

const Row = styled.div`display: flex;`;
const Col1 = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  flex-basis: 25%;
  box-sizing: border-box;
`;

const Title = styled.h2`color: rgba(56, 56, 56, 1);`;

export default function() {
  return (
    <div className="futuredDestenationContainer">
      <Title>Featured destination</Title>
      <Row className="rowFeaturedDestenation">
        <Col1 className="card">
          <img src={feauture1} />
          <p>Paris</p>
        </Col1>
        <Col1 className="card">
          <img src={feauture2} />
          <p>Miami</p>
        </Col1>
        <Col1 className="card">
          <img src={feauture3} />
          <p>Tokio</p>
        </Col1>
        <Col1 className="card">
          <img src={feauture4} />
          <p>Cape town</p>
        </Col1>
        <Col1 className="card">
          <img src={feauture5} />
          <p>Seoul</p>
        </Col1>
        <Col1 className="card">
          <img src={feauture6} />
          <p>Los Angeles</p>
        </Col1>
      </Row>
    </div>
  );
}
