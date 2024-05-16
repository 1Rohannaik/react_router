import React from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {

  const data = useLoaderData();
  return (
    <div className="bg-gray-600 text-white text-center p-4">
      <div>github followers: {data.followers}</div>
      <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  );
};

export default Github;

export const githubApi = async () => {
  const res = await fetch("https://api.github.com/users/hiteshchoudhary");
  const data = await res.json();
  return data;
}
