"use client";

import Header from "./Header/page";
import Body from "./Body/page";
import { Modal } from "@mui/joy";
import * as React from "react";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";

export default function Quiz(parms) {
  const lowData = [
    {
      id: 1,
      name: "logo",
      img: "https://zeve.au/sitecentre/uploads/2021/07/famous-logo-designers-what-they-got-right.jpg",
    },
    {
      id: 2,
      name: "anime",
      img: "https://www.hindustantimes.com/ht-img/img/2023/07/17/550x309/anime_collage_1686917525783_1689613937349.webp",
    },
    {
      id: 3,
      name: "music",
      img: "https://images.squarespace-cdn.com/content/v1/5a5d02d4b07869b960fa1da0/1516558077227-YFIILSIBQNQJB4RZMGUP/GIAM_Icon_AcademyOfMusic_RGB.png",
    },
  ];
  return (
    <div>
      <Header></Header>
      <div className="flex">
        <div className=" flex flex-wrap gap-8 w-[1000px]">
          {lowData.map(({ name, img, id }, index) => (
            <Body key={index} name={name} img={img} id={id} />
          ))}
          <div className="flex gap-8">
            <div>
              <h1>js</h1>
              <div>
                <img
                  src="https://play-lh.googleusercontent.com/rfWOJQVBHoAZ_B43v0ySFlLmJBLtksVGAxGaFRh2ex4nOmNQ86qzG4sYWV63IKrXlvI"
                  width={268}
                  height={300}
                />
                <button className="fill">play</button>
              </div>
            </div>
            <div>
              <h1>OLD history</h1>
              <div className="Zozo">
                <img
                  src="https://qph.cf2.quoracdn.net/main-qimg-3ceb326b160ec678d6ed5db67c6ce471-pjlq"
                  width={268}
                  height={80}
                />
                <button className="fill">play</button>
              </div>
            </div>
            <div>
              <h1>+21</h1>
              <div className="Zozo">
                <img
                  src="https://hips.hearstapps.com/del.h-cdn.co/assets/cm/15/11/3200x3272/54f65d39ab05d_-_183341797.jpg?resize=980:*"
                  width={268}
                  height={300}
                />
                <Button
                  variant="plain"
                  color="neutral"
                  onClick={() => {
                    setVariant("plain");
                  }}
                >
                  play
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const data = [
  {
    title: "JS",
    source:
      "https://play-lh.googleusercontent.com/rfWOJQVBHoAZ_B43v0ySFlLmJBLtksVGAxGaFRh2ex4nOmNQ86qzG4sYWV63IKrXlvI",
  },
  {},
  {},
];
