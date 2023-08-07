import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "../Rating/Rating";

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  text-align: center;
`;
const DishImage = styled.div`
  text-align: center;
  margin: 10px auto;

  img {
    height: 250px;
    width: 250px;
    object-fit: cover;
    border-radius: 100%;
    border: 1px solid #efefef;
  }
`;
const DishName = styled.div`
  padding: 20px 0 10px 0;
`;
const CardLink = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;
  a {
    color: #fff;
    background: #54BAB9;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #54BAB9;
    width: 100%;
    text-decoration: none;
  }
`;
const Dish = (props) => {
  return (
    <Card>
      <DishImage>
        <img src={props.attributes.image_url} alt={props.attributes.name} />
      </DishImage>
      <DishName>
        {props.attributes.name}
      </DishName>
      <Rating score={props.attributes.average_score} />
      <CardLink>
        <Link to= {`dishes/${props.attributes.slug}`}> View Dish </Link>
      </CardLink>
    </Card>
  );
}

export default Dish;
