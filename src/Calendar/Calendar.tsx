import React, { useState, useEffect } from "react";
import "./calendar.css";
import { Drawer } from "antd";

const TILE_ARR = [
  [{ date: "1.2", on: true }, 1, 1, 1],
  [1, { on: true }, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

//backend task 1:
//get list of dates from backend: (one month only)
//get request
// [
//   {
//     date: "2.1", replaced with date object
//     streak: false,
//   },
//   {
//     date: "2.2",
//     streak: true,
//   },
// ];

// 2:
// post request:
// send {
//   data: '2.3',
//   streak: true/false
// }

interface TileProps {
  on: boolean;
}

const Tile: React.FC<TileProps> = ({
  setOpen,
  on,
  selected,
  cord,
  setSelected,
}) => {
  console.log(cord);
  // const [on, setOn] = useState(false);

  return (
    <div
      className={selected ? "tile tile-selected" : "tile tile-unselected"}
      onClick={() => {
        setOpen(true);
        setSelected(cord);
      }}
      // style={{
      //   width: "30px",
      //   height: "30px",
      //   backgroundColor: on ? "lightgreen" : "grey",
      //   margin: "5px",
      //   border: selected ? "5px solid blue" : "none",
      //   boxSizing: "border-box",
      //   borderRadius: "10px",
      // }}
    ></div>
  );
};

const Calendar = () => {
  const [selected, setSelected] = useState([0, 2]);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        open drawer
      </button>
      <Drawer
        style={{ background: "lightyellow" }}
        title="Basic Drawer"
        open={open}
        onClose={() => setOpen(false)}
      >
        <p>Some contents...</p>
      </Drawer>
      <button>da ka!</button>
      {TILE_ARR.map((col, col_key) => {
        return (
          <div style={{ display: "flex" }} key={col_key}>
            {col.map((item: any, row_key) => {
              return (
                <Tile
                  setOpen={setOpen}
                  setSelected={setSelected}
                  cord={[col_key, row_key]}
                  selected={col_key === selected[0] && row_key === selected[1]}
                  key={row_key}
                  on={item.on}
                ></Tile>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
