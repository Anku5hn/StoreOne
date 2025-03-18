import  React, { useState } from "react";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const SearchBox = () => {
  const [selected, setSelected] = useState("All");
  return (
    <>
      <div className="md:flex hidden w-full justify-center items-center mt-5 z-0">
        <div className="w-5/6 buildings-background rounded-md flex  flex-col items-center h-[257px] gap-10">
          <div className="mt-8">
            <h1 className="text-2xl text-white font-bold" style={{textShadow:"1px 1px 2px black"}}>
              The best place to sell your car, buy a phone, or join a community
              in Dubai.{" "}
            </h1>
          </div>
          <div className="bg-[rgba(0,0,0,0.5)] rounded-md w-[1000px] h-[120px] block">
            <div className="w-full flex justify-center items-center mt-5">
              <div className="w-[95%] flex justify-between">
                <div>
                  <p className="text-white font-bold">Searching in</p>
                </div>
                <div>
                  <div className="flex justify-between gap-10">
                    <Button
                      color="danger"
                      style={{ zIndex: "0" }}
                      variant={selected == "All" ? "solid" : "text"}
                      onClick={() => {
                        setSelected("All");
                      }}
                    >
                      All
                    </Button>
                    <Button
                      color="danger"
                      variant={selected == "Cars" ? "solid" : "text"}
                      onClick={() => {
                        setSelected("Cars");
                      }}
                    >
                      Cars
                    </Button>
                    <Button
                      color="danger"
                      variant={selected == "Bikes" ? "solid" : "text"}
                      onClick={() => {
                        setSelected("Bikes");
                      }}
                    >
                      Bikes
                    </Button>
                    <Button
                      color="danger"
                      variant={selected == "Phones" ? "solid" : "text"}
                      onClick={() => {
                        setSelected("Phones");
                      }}
                    >
                      Phones
                    </Button>
                    <Button
                      color="danger"
                      variant={selected == "Tablets" ? "solid" : "text"}
                      onClick={() => {
                        setSelected("Tablets");
                      }}
                    >
                      Tablets
                    </Button>
                    <Button
                      color="danger"
                      variant={selected == "Community" ? "solid" : "text"}
                      onClick={() => {
                        setSelected("Community");
                      }}
                    >
                      Community
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center mt-5">
              <div className="w-[95%]">
                <input
                  className="bg-white w-[calc(90%-5px)] h-8 rounded-md px-1 mr-[5px]"
                  placeHolder="Search For Anything"
                ></input>
                <Button variant="solid" color="danger">
                  <SearchOutlined />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden lg:hidden flex justify-between m-1">
        <input
          placeHolder="Search For Anything"
          className="w-[calc(80%-1px)] bg-white rounded-md p-1 border-black border"
        ></input>

        <Button variant="solid" color="danger" className ="w-[calc(20%-1px)]">
          Search
        </Button>
      </div>
    </>
  );
};
export default SearchBox;