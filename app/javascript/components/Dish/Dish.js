import React, { useState, useEffect, Fragment } from "react";
// import {Link, useParams} from 'react-router-dom';
import { useParams } from "react-router-dom";
import Header from "./Header";
import ReviewForm from "./ReviewForm";
import styled from "styled-components";
import Review from "./Review";

const DishContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  // display: grid;
  // grid-template-columns: repeat(2, 1fr);
`;
// const Column = styled.div`
//   background: #fff;
//   height: 100vh;
//   overflow: scroll;

//   &:last-child {
//     background: #000;
//   }
// `;
const Main = styled.div`
  padding: 0 50px;
`;

const Dish = () => {
  const [dish, setDish] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);

  const params = useParams();

  useEffect(() => {
      const url = `/api/v1/dishes/${params.slug}`
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
          setDish(response)
          setLoaded(true)
        });
  }, []);
  console.log("dish", dish);

  const handleChange = (e) => {
    e.preventDefault();
    setReview({
      ...review,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const csrfToken = document.querySelector('[name=csrf-token]').content
    fetch('/api/v1/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify({...review, dish_id: dish.data.id })
    })
    // const dish_id = dish.data.id
      .then(response => response.json())
      .then(response => {
        setDish({...dish, included: [...dish.included, response.data]})
        setReview({title: '', description: '', score: 0})
      })
  }

  const setRating = (score, e) => {
    e.preventDefault();
    setReview({...review, score})
  }

  let reviews
  if (loaded && dish.included) {
    reviews = dish.included.map( (item, index) => {
      return (
        <Review
          key={index}
          attributes={item.attributes}
        />
      )
    })
  }


  return (
    <DishContainer>
      {
        loaded &&
        <Fragment>
          <Main>
              <Header attributes={dish.data.attributes}
              reviews={dish.included}
              />
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}
              review={review}
            />
              {reviews}
          </Main>
        </Fragment>
      }
    </DishContainer>
  );
};

export default Dish;
