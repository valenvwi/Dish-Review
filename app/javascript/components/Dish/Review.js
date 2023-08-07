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

const Review = (props) => {
  const { score, title, description } = props.attributes;

  return (
    <Card>
      <RatingContainer>
        <Rating score={score}/>
      </RatingContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  )
}

export default Review;
