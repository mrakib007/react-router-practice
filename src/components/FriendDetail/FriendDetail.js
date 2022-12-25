import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div>
      <h3>Friend Detail About: {friendId}</h3>
      <h3>Name: {friend.name}</h3>
      <h3>Email: {friend.email}</h3>
      <h3>Website: {friend.website}</h3>
      <p>Address: {friend.address?.city}</p>
      <p>Lat: {friend.address?.geo?.lat}</p>
    </div>
  );
};
export default FriendDetail;
