import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

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

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = PLACES.filter((item) => item.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
