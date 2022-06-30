import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./styles.css";

const MePage = () => {
  const [tokenFromParams, setTokenFromParams] = useState("");
  const [profileData, setProfileData] = useState([]);

  const { token } = useParams();

  useEffect(() => {
    console.log("token:", token);
    localStorage.setItem("token", JSON.stringify(token));
    setTokenFromParams(token);
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/users/me", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log("DATA", data);
      setProfileData(data[0]);
    }
  };

  return (
    <Card className="top_card">
      <Card.Body>
        <Card.Title>{profileData && profileData.title}</Card.Title>
        <Card.Text>{profileData.category}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
export default MePage;
