import React,{useState} from 'react'
const DropDownMenu = () => {
  const [mouseHover, setMouseHover] = useState("");
  const categories = [
    {
      id: "1",
      name: "Cars",
    },
    { id: "2", name: "Bikes" },
    { id: "3", name: "Phones" },
    { id: "4", name: "Tablets" },
    { id: "5", name: "Community" },
  ];
  const cars = ["Sedans", "Hatchbacks", "SUV", "Luxary", "Sport"];
  const bikes = ["Sport", "Moped", "E-bike", "E-scooter"];
  const phones = ["Apple", "Samsung", "Xiaomi", "Oppo", "OnePlus"];
  const tablets = ["Apple", "Samsung", "Xiaomi", "Oppo", "OnePlus"];
  const community = ["Chat", "Discord", "Email", "Support"];
  return (
    <>
      <div className="w-full justify-center items-center md:flex hidden">
        <div className="w-5/6 justify-between flex">
          {categories.map((items, index) => (
            <div id={items.id} key={index}>
              {/* outermost div*/}
              <p
                className="text-black dark:text-white font-bold cursor-pointer border-white dark:border-black hover:border-red-500 border-b-2 relative dark:hover:bg-[rgba(19,19,19,100)] px-5 py-2 hover:bg-gray-200"
                onMouseOver={() => {
                  setMouseHover(items.name);
                }}
                onMouseLeave={() => {
                  setMouseHover("");
                }}
              >
                {items.name}
                {items.name == "Cars" && <span className="rounded-l-full rounded-r-full bg-red-500 text-white px-1 py-[1px] text-xs font-bold mx-1">New</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full justify-center items-center md:flex hidden absolute">
        <div className="w-5/6 justify-between flex">
          <div
            onMouseOver={() => {
              setMouseHover("Cars");
            }}
            onMouseLeave={() => {
              setMouseHover("");
            }}
          >
            {mouseHover == "Cars" && <FlyoutMenu text="Cars" list={cars} />}
          </div>
          <div
            onMouseOver={() => {
              setMouseHover("Bikes");
            }}
            onMouseLeave={() => {
              setMouseHover("");
            }}
          >
            {mouseHover == "Bikes" && <FlyoutMenu text="Bikes" list={bikes} pos="left-[28.2%]" />}
          </div>
          <div
            onMouseOver={() => {
              setMouseHover("Phones");
            }}
            onMouseLeave={() => {
              setMouseHover("");
            }}
          >
            {mouseHover == "Phones" && (
              <FlyoutMenu text="Phones" list={phones} pos="left-[45.8%]" />
            )}
          </div>
          <div
            onMouseOver={() => {
              setMouseHover("Tablets");
            }}
            onMouseLeave={() => {
              setMouseHover("");
            }}
          >
            {mouseHover == "Tablets" && (
              <FlyoutMenu text="Phones" list={tablets} pos="left-[64.4%]"/>
            )}
          </div>
          <div
            onMouseOver={() => {
              setMouseHover("Community");
            }}
            onMouseLeave={() => {
              setMouseHover("");
            }}
          >
            {mouseHover == "Community" && (
              <FlyoutMenu text="Community" list={community} pos="left-[83%]"/>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
const FlyoutMenu = ({ list,pos }) => {
  return (
    <div className={`dark:bg-[rgba(19,19,19,100)] bg-gray-200 z-1 absolute ${pos}`}>
      <ul>
        {list.map((items, index) => (
          <li
            className="cursor-pointer hover:underline font-bold text-black dark:text-white px-5 py-2"
            key={index}
          >
            {items}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DropDownMenu;
