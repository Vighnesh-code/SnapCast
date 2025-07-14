"use client";

import Image from "next/image";
import React, { useState } from "react";

const DropdownList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="filter-trigger">
          <figure>
            <Image
              src={"/assets/icons/hamburger.svg"}
              alt="hamburger menu"
              width={14}
              height={14}
            />
            Most Recent
          </figure>
          <Image
            src={"/assets/icons/arrow-down.svg"}
            alt="arrow-down"
            width={20}
            height={20}
          />
        </div>
      </div>

      {isOpen && (
        <ul className="dropdown">
          {["Most Recent", "Most Popular", "Most Viewed"].map((item) => (
            <li key={item} className="list-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
