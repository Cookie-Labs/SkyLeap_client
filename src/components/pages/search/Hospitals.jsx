import React, { useState, useEffect } from 'react';
import Hospital from './Hospital';

const Hospitals = ({ topic, type }) => {
  const [typeItems, setTypeItems] = useState([]);

  useEffect(() => {
    let filteredList;
    if (type === '산부인과') {
      filteredList = topic.filter((hospital) => hospital.topic === '산부인과');
      setTypeItems(filteredList);
    } else if (type === '유방/갑상선외과') {
      filteredList = topic.filter(
        (hospital) => hospital.topic === '유방/갑상선외과',
      );
      setTypeItems(filteredList);
    } else if (type === '대장/항문외과') {
      filteredList = topic.filter(
        (hospital) => hospital.topic === '대장/항문외과',
      );
      setTypeItems(filteredList);
    } else if (type === '피부과') {
      filteredList = topic.filter((hospital) => hospital.topic === '피부과');
      setTypeItems(filteredList);
    } else if (type === '비뇨기의과') {
      filteredList = topic.filter(
        (hospital) => hospital.topic === '비뇨기의과',
      );
      setTypeItems(filteredList);
    } else if (type === '정신과') {
      filteredList = topic.filter((hospital) => hospital.topic === '정신과');
      setTypeItems(filteredList);
    } else {
      setTypeItems(topic);
    }
  }, [topic, type]);

  return (
    <>
        {typeItems.map((hospital) => (
            <Hospital
                id={hospital.id}
                topic={hospital.topic}
                image={hospital.image}
                title={hospital.title}
                place={hospital.place}
                doctor={hospital.doctor}
            />
        ))}
    </>
  )
};

export default Hospitals;
