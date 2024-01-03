import { faHome, faMusic, faPerson, faRadio } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className=" grid  h-full">
      <div className=" p-[0.5rem] text-lg font-extrabold tracking-wider" >
        Roho Ryhthm
      </div>

      <div className=" row-span-6 ">
        <ul className=" text-sm flex  h-full flex-col justify-between ">
          <li>
            <Link className="nav-link" href="/">
              <FontAwesomeIcon icon={faHome} className="icon" />
              Home
            </Link>
          </li>

          <li >
            <Link className="nav-link" href="/artists">
              <FontAwesomeIcon icon={faPerson} className="icon" />
              Artists
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/albums">
              <FontAwesomeIcon icon={faRadio} className="icon" />
              Albums
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/songs">
              <FontAwesomeIcon icon={faMusic} className="icon" />
              Songs
            </Link>
          </li>

        </ul>
      </div>
    </div>);
}

export default Sidebar;
