import React, { useState } from "react";
import {Data} from "./Data";
const Home = () => {
  const [userData, setUserData] = useState(Data);
  return (
    <>
      <div>
        <ul>
          {userData.map((item) => {
            console.log("item",item);
            return (
              <li className="first-parent">
                {item.moduleName}
                <ul>
                  <li className="second-parent">
                    {item.children[0].moduleName}
                    <ul>
                      <li className="second-parent-child">{item.children[0].children[0].moduleName}</li>
                    </ul>
                  </li>
                  <li className="second-parent">
                    {item.children[1].moduleName}
                    <ul>
                      <li className="second-parent-child">{item.children[0].children[0].moduleName}</li>
                    </ul>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Home;
