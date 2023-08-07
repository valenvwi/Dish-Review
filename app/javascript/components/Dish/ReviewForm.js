import React, { Fragment } from "react";
import styled from "styled-components";

const ReviewContainer = styled.div`
  text-align: center;
  border-radius: 5%;
  font-size: 18px;
  margin: 20px auto;
  color: white;
  border: 1px solid white;
  background: #9ED2C6;
`;
const StarBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;
  padding: 15px;

  input {
    display: none;
  }

  label {
    cursor: pointer;
    width: 36px;
    height: 36px;
    margin-top: auto;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 76%;
    transition: .3s;
  }

  input:checked ~ label, input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
  }


  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
  }
`

const Field = styled.div`
  border-radius: 4px;

  input {
    width: 85%;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 10px 0px;
    padding: 5px;
    font-size: 18px;
  }

  textarea {
    width: 100%;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;
    font-size: 18px;
  }
`

const FieldLarge= styled.div`
border-radius: 4px;

input {
  width: 85%;
  border-radius: 4px;
  border: 1px solid #E6E6E6;
  margin: 10px 0px;
  padding: 5px;
  font-size: 16px;
  min-height: 120px;
}

textarea {
  width: 100%;
  border-radius: 4px;
  border: 1px solid #E6E6E6;
  margin: 12px 0;
  padding: 12px;
  text-align: top;
  font-size: 18px;
}
`

const SubmitBtn = styled.button`
  color: #fff;
  background-color: #54BAB9;
  border-radius: 4px;
  padding:12px 12px;
  border: 1px solid #54BAB9;
  width:100%;
  font-size:18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: white;
    color: #71b406;
    border-color: #71b406;
  }
`

const ReviewHeadline = styled.div`
  font-size: 20px;
  padding: 20px 0;
  font-weight: bold;
`

const Error = styled.div`
  width: 100%;
  color: rgb(255, 80, 44);
  border: 1px solid rgb(255, 80, 44);
  border-radius: 4px;
  margin-top: 8px;
  text-align:center;
  padding: 4px;
  `

const ReviewForm = (props) => {
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <Fragment key={index}>
        <input
          type="radio"
          value={score}
          name="rating"
          checked={props.review.score == score}
          onChange={() => console.log("onChange")}
          id={`rating-${score}`}
        />
        <label onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    );
  });
  return (
    <ReviewContainer>
      <form onSubmit={props.handleSubmit}>
        <ReviewHeadline>Share your thought here!</ReviewHeadline>
        <Field>
          <input
            onChange={props.handleChange}
            value={props.review.title}
            type="text"
            name="title"
            placeholder="Title"
          />
        </Field>
        <FieldLarge>
          <input
            onChange={props.handleChange}
            type="text"
            name="description"
            value={props.review.description}
            placeholder="Type more details"
          />
        </FieldLarge>
        <Field>
          <StarBox>{ratingOptions}</StarBox>
        </Field>
        <SubmitBtn type="Submit">Create Review</SubmitBtn>
        {
          props.error &&
          <Error>{props.error}</Error>
        }
      </form>
    </ReviewContainer>
  );
};

export default ReviewForm;
