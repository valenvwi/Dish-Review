import React from "react";
import styled from "styled-components";
import Rating from "../Rating/Rating";

const Card = styled.div`
  border: 2px solid #efefef;
  text-align: center;
  padding: 20px;
  margin: 20px auto;
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  font-size: 18px;
`;

const Description = styled.div`
  padding-top: 15px;
  font-size: 16px;
`;

// const CreatedAt = styled.div`
//   padding-top: 15px;
//   font-size: 14px;
//   color: black;
// `;

const Review = (props) => {
  const { score, title, description, created_at } = props.attributes;

  return (
    <Card>
      <RatingContainer>
        <Rating score={score}/>
      </RatingContainer>
      {/* <CreatedAt>{created_at}</CreatedAt> */}
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  )
}

export default Review;
