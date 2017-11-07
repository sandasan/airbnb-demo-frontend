import React from "react";
import styled from "styled-components";
import popularReservations1 from "./popular-reservations1.png";
import popularReservations2 from "./popular-reservations2.png";
import popularReservations3 from "./popular-reservations3.png";
import popularReservations4 from "./popular-reservations4.png";
const Row = styled.div`display: flex;`;
const Col1 = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  flex-basis: 25%;
  box-sizing: border-box;
`;
const PopularTitle = styled.p`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`color: rgba(56, 56, 56, 1);`;
const SeeAll = styled.p`
  align: right;
  padding-top: 20px;
  font-size: 14px;
`;
export default function() {
  return (
    <div className="popularContainer">
      <PopularTitle>
        <Title>Popular reservations around the world</Title>
        <SeeAll>See all ></SeeAll>
      </PopularTitle>
      <Row className="rowPopulare">
        <Col1 className="card">
          <img src={popularReservations1} />
          <p>$80 La Salentina, see, nature & relax</p>
        </Col1>
        <Col1 className="card">
          <img src={popularReservations2} />
          <p>$82 Your private 3 bedr. riad and exclusive</p>
        </Col1>
        <Col1 className="card">
          <img src={popularReservations3} />
          <p>$200 Dreamy Tropical Tree House</p>
        </Col1>
        <Col1 className="card">
          <img src={popularReservations4} />
          <p>$200 Dreamy Tropical Tree House</p>
        </Col1>
      </Row>
    </div>
  );
}
