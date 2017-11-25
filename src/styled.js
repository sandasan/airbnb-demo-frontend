import styled from "styled-components";
import nextPage from "./img/next.svg";
import arrow from "./img/right-arrow.svg";
import location from "./img/location.svg";
import { Link } from "react-router-dom";

function getWidthString(span) {
  let width = (span / 12 * 100).toFixed(4);
  return `flex-basis: ${width}%; max-width: ${width}%;`;
}

export const Main = styled.main`
  font-family: "Circular", Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #383838;
  margin-left: auto;
  margin-right: auto;
  padding-left: 8px;
  padding-right: 8px;
  width: auto;
  max-width: 976px;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  margin-left: -8px;
  margin-right: -8px;
  position: relative;
  overflow-x: auto;
  @media (min-width: 992px) {
    flex-wrap: wrap;
    overflow-x: none;
  }
`;

export const Col = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  box-sizing: border-box;

  @media (min-width: 320px) {
    ${({ xs }) => (xs ? getWidthString(xs) : "flex-basis:100%")};
  }
  @media (min-width: 576px) {
    ${({ sm }) => sm && getWidthString(sm)};
  }
  @media (min-width: 768px) {
    ${({ md }) => md && getWidthString(md)};
  }
  @media (min-width: 992px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }
  @media (min-width: 1200px) {
    ${({ xl }) => xl && getWidthString(xl)};
  }
`;

export const NextPage = styled.img.attrs({
  src: nextPage
})`
  display: none;
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 1;
  top: 45%;
  right: -6px;
  @media (min-width: 992px) {
    display: block;
  }
`;
export const Price = styled.span`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #383838;
  max-width: 200px;
  font-family: CircularBold;
  @media (min-width: 992px) {
    max-width: none;
  }
`;

export const Reviews = styled.div`display: flex;`;
export const ReviewStar = styled.img`margin: 2px;`;
export const ReviewText = styled.p`
  font-size: 12px;
  margin: 3px 0 0 2px;
`;
export const A = styled.a`
  color: #383838;
  font-family: Circular;
  text-decoration: none;
  font-size: 14px;
`;

export const SeeAll = styled(Link)`
  color: #383838;
  font-family: Circular;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  font-size: 12px;
  margin-right: 16px;
  &:after {
    position: absolute;
    content: "";
    background: url(${arrow}) no-repeat 5px;
    width: 12px;
    height: 15px;
    top: -1px;
    margin-right: 22px;
    margin-left: 2px;
  }
  @media (min-width: 576px) {
    font-size: 14px;
  }
`;

export const LocationButton = styled.img.attrs({
  src: location
})`
  cursor: pointer;
  display: block;
  position: fixed;
  bottom: 24px;
  right: 8px;
  padding: 10px 11px;
  border-radius: 100px;
  background-color: #fff;
  border: 1px solid rgba(72, 72, 72, 0.16);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  @media (min-width: 992px) {
    display: none;
  }
`;
