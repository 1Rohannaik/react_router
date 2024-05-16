import React from "react";
import { useParams } from "react-router-dom";

const Usear = () => {
  const { usearid } = useParams();
  return (
    <div className="bg-gray-600 text-white p-4 text-center font-semibold">
      usear:{usearid}
    </div>
  );
};

export default Usear;
