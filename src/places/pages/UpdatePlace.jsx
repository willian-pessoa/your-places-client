import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

import "./PlaceForm.scss";
import { useForm } from "../../shared/hooks/form-hook";

const PLACES = [
  {
    id: "p1",
    title: "Empire State",
    description: "This is Empire State i'm believe",
    imageUrl:
      "https://images.prismic.io/tripsite/89240b2c-0dba-40f2-8550-0b2eefda5771_Empire+State+Building+1-squashed.jpg?auto=compress,format&rect=1204,0,2594,3324&w=640&h=820&q=60&auto=format",
    address: "20 W 34th St., New York, NY 10001, EUA",
    location: { lat: 40.748817, lng: -73.985428 },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State",
    description: "This is Empire State i'm believe",
    imageUrl:
      "https://images.prismic.io/tripsite/89240b2c-0dba-40f2-8550-0b2eefda5771_Empire+State+Building+1-squashed.jpg?auto=compress,format&rect=1204,0,2594,3324&w=640&h=820&q=60&auto=format",
    address: "20 W 34th St., New York, NY 10001, EUA",
    location: { lat: 40.748817, lng: -73.985428 },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = PLACES.find((place) => place.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData({
        title: {
          value: identifiedPlace.title,
          isValid: true,
        },
        description: {
          value: identifiedPlace.description,
          isValid: true,
        },
      });
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Coudn't find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 character)"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
