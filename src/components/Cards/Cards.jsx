import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import SingleCard from "../SingleCard/SingleCard";

const Cards = () => {
  const [values, setValues] = useState([]);
  const [singleData, setSingleData] = useState({});
  const [showAll, setShowAll] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);
  // console.log(singleData);

  const handleShowAll = () => {
    setShowAll(true);
  };

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data));
  }, [uniqueId]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
      .then((res) => res.json())
      .then((data) => setValues(data.data.tools));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.slice(0, showAll ? 12 : 6).map((value) => (
          <SingleCard
            key={value.id}
            value={value}
            setUniqueId={setUniqueId}
          ></SingleCard>
        ))}
      </div>
      {!showAll && (
        <span onClick={handleShowAll}>
          <Button>Show All</Button>
        </span>
      )}
      <Modal singleData={singleData} />
    </>
  );
};

export default Cards;
