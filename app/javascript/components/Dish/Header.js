import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  padding: 50px 100px 50px 0;
  font-size: 28px;
  img {
    height: 80px;
    width: 80px;
    border-radius: 100%;
    border: 1px solid rgba(0,0,0,0.1);
  }
`;

const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`;

const Description = styled.div`
  padding-top: 12px;
  font-size: 18px;
  font-weight: bold;
`;



const Header = (props) => {
  const {name, image_url, average_score} = props.attributes;
  const total = props.reviews.length;

  return (
    <HeaderContainer>
      <h1>
        <img src={image_url} at={name} /> {name}
      </h1>
      <div>
        <TotalReviews>{total} Reviews</TotalReviews>
        <div className="starRating"></div>
        <Description>{average_score} out of 5</Description>
      </div>
    </HeaderContainer>
)}

export default Header;
