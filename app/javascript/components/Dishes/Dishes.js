import React, { useState, useEffect } from "react";
import Dish from "./Dish";
import styled from "styled-components";

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
const Header = styled.div`
  padding: 100px 100px 10px 100px;
  h1 {
    font-size: 42px;
  }
  `;
const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
  `;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  `;

const Dishes = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("/api/v1/dishes.json")
      .then((response) => response.json())
      .then((response) => setDishes(response.data));
  }, [dishes.length]);
  console.log("dishes", dishes);

  const grid = dishes.map(dish => (
      <Dish
      key={dish.attributes.name}
      attributes={dish.attributes}
      />
  ));

  return (
        <Home>
          <Header>
            <h1>Why not give us some dish reviews?</h1>
            <Subheader>
              <p>Your honest feedback will help us to improve</p>
            </Subheader>
          </Header>
          <Grid>
            {grid}
          </Grid>
        </Home>
  );
};

export default Dishes;
