import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <div className="wrapper page">
      <Header
        subHeader="dummy@email.com"
        title="God of Thunder"
        userImg="/assets/images/dummy.jpg"
      />
      <h1 className="text-2xl font-karla">UserId: id</h1>
    </div>
  );
};

export default page;
