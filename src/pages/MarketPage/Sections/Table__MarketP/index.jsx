import React, { useState, useEffect } from "react";
import Pagination from "../../../../components/DataHandlers/Pagination";
import countryFlag from "../../../../mapData/countryFlag.json";
import SkeletonLoading from "../../../../components/UI/SkeletonLoading";
import FilterButtons from "../../../../components/DataHandlers/FilterButtons";
import SearchAndButtons from "../../../../components/SearchAndButtons";
import Filter from "../../../../components/DataHandlers/Fitler";
import Button from "../../../../components/UI/Button";
import "./Table__MarketP.scss";
import { Link, useSearchParams } from "react-router-dom";

const data = [
  {
    company: {
      name: "Triden",
      icon: "/assets/tempImgs/Trident.png",
      id: "132",
    },
    price: 12500,
    pixels: {
      type: "Single",
      pixel: [
        {
          x: 218,
          y: 280,
          country: "Canada",
          countryID: "CAN",
        },
        {
          x: 233,
          y: 336,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 900,
          y: 537,
          country: "Australia",
          countryID: "AUS",
        },
        {
          x: 594,
          y: 303,
          country: "Ukraine",
          countryID: "UKR",
        },
      ],
    },
  },
  {
    company: {
      name: "Triden",
      icon: "/assets/tempImgs/Trident.png",
      id: "132",
    },
    price: 12500,
    pixels: {
      type: "Grouped",
      pixel: [
        {
          x: 370,
          y: 82,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 370,
          y: 83,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 370,
          y: 84,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 370,
          y: 85,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 370,
          y: 86,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 370,
          y: 87,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 370,
          y: 88,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 371,
          y: 88,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 372,
          y: 88,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 373,
          y: 88,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 374,
          y: 88,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 375,
          y: 88,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 375,
          y: 87,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 375,
          y: 86,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 375,
          y: 85,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 375,
          y: 84,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 375,
          y: 83,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 375,
          y: 82,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 374,
          y: 82,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 373,
          y: 82,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 372,
          y: 82,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 371,
          y: 82,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 374,
          y: 83,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 373,
          y: 83,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 373,
          y: 84,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 372,
          y: 84,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 372,
          y: 85,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 372,
          y: 83,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 371,
          y: 83,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 371,
          y: 84,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 371,
          y: 85,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 371,
          y: 86,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 371,
          y: 87,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 372,
          y: 87,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 372,
          y: 86,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 373,
          y: 85,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 374,
          y: 84,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 374,
          y: 85,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 374,
          y: 86,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 374,
          y: 87,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 373,
          y: 87,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 373,
          y: 86,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 376,
          y: 82,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 377,
          y: 82,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 378,
          y: 82,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 378,
          y: 83,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 378,
          y: 84,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 378,
          y: 85,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 377,
          y: 85,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 377,
          y: 86,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 377,
          y: 87,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 377,
          y: 88,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 376,
          y: 88,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 378,
          y: 88,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 378,
          y: 87,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 378,
          y: 86,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 377,
          y: 84,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 377,
          y: 83,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 376,
          y: 83,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 376,
          y: 84,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 376,
          y: 85,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 376,
          y: 86,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 376,
          y: 87,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 378,
          y: 81,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 377,
          y: 81,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 376,
          y: 81,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 375,
          y: 81,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 374,
          y: 81,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 373,
          y: 81,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 372,
          y: 81,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 371,
          y: 81,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 370,
          y: 81,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 370,
          y: 80,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 371,
          y: 80,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 372,
          y: 80,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 373,
          y: 80,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 374,
          y: 80,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 375,
          y: 80,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 376,
          y: 80,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 377,
          y: 80,
          country: "Greenland",
          countryID: "GRL",
        },
        {
          x: 378,
          y: 80,
          country: "Greenland",
          countryID: "GRL",
        },
      ],
    },
  },
  {
    company: {
      name: "Triden",
      icon: "/assets/tempImgs/Trident.png",
      id: "132",
    },
    price: 12500,
    pixels: {
      type: "Grouped",
      pixel: [
        {
          x: 351,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 350,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 352,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 353,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 354,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 355,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 356,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 357,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 358,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 359,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 360,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 361,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 362,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 363,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 364,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 365,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 366,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 367,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 368,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 369,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 370,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 371,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 372,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 373,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 374,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 375,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 376,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 377,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 378,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 379,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 380,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 381,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 382,
          y: 484,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 382,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 381,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 380,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 379,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 378,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 377,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 376,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 375,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 374,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 373,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 372,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 371,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 370,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 369,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 368,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 366,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 365,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 364,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 363,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 362,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 361,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 360,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 358,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 357,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 356,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 355,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 354,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 353,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 352,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 351,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 350,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 359,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
        {
          x: 367,
          y: 485,
          country: "Brazil",
          countryID: "BRA",
        },
      ],
    },
  },
  {
    company: {
      name: "Triden",
      icon: "/assets/tempImgs/Trident.png",
      id: "132",
    },
    price: 12500,
    pixels: {
      type: "Grouped",
      pixel: [
        {
          x: 196,
          y: 322,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 196,
          y: 323,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 196,
          y: 324,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 196,
          y: 325,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 196,
          y: 329,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 196,
          y: 326,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 196,
          y: 327,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 196,
          y: 328,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 196,
          y: 330,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 196,
          y: 331,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 196,
          y: 332,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 196,
          y: 333,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 196,
          y: 334,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 196,
          y: 335,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 196,
          y: 336,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 196,
          y: 337,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 196,
          y: 338,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 196,
          y: 339,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 196,
          y: 340,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 196,
          y: 341,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 196,
          y: 342,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 197,
          y: 342,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 198,
          y: 342,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 199,
          y: 342,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 200,
          y: 342,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 201,
          y: 342,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 202,
          y: 342,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 203,
          y: 342,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 202,
          y: 341,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 202,
          y: 340,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 202,
          y: 339,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 202,
          y: 338,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 202,
          y: 337,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 202,
          y: 336,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 202,
          y: 335,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 202,
          y: 334,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 203,
          y: 337,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 203,
          y: 338,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 203,
          y: 339,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 203,
          y: 340,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 203,
          y: 341,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 197,
          y: 322,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 198,
          y: 322,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 199,
          y: 322,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 200,
          y: 322,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 201,
          y: 322,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 202,
          y: 322,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 202,
          y: 323,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 202,
          y: 324,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 202,
          y: 325,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 202,
          y: 326,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 202,
          y: 327,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 202,
          y: 328,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 202,
          y: 329,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 202,
          y: 330,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 202,
          y: 331,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 202,
          y: 332,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 202,
          y: 333,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 203,
          y: 336,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 203,
          y: 335,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 203,
          y: 334,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 203,
          y: 333,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 203,
          y: 332,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 203,
          y: 331,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 203,
          y: 330,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 203,
          y: 329,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 203,
          y: 328,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 203,
          y: 327,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 203,
          y: 326,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 203,
          y: 325,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 203,
          y: 324,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 203,
          y: 323,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 203,
          y: 322,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 200,
          y: 341,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 201,
          y: 341,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 199,
          y: 341,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 197,
          y: 341,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 198,
          y: 341,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 200,
          y: 340,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 198,
          y: 340,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 197,
          y: 340,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 201,
          y: 340,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 201,
          y: 339,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 200,
          y: 339,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 199,
          y: 339,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 198,
          y: 339,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 199,
          y: 340,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 198,
          y: 338,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 198,
          y: 337,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 199,
          y: 336,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 199,
          y: 335,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 199,
          y: 332,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 200,
          y: 325,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 200,
          y: 324,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 200,
          y: 323,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 201,
          y: 323,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 201,
          y: 324,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 201,
          y: 325,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 201,
          y: 327,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 201,
          y: 329,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 201,
          y: 330,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 197,
          y: 339,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 197,
          y: 338,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 200,
          y: 337,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 201,
          y: 337,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 199,
          y: 337,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 197,
          y: 337,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 200,
          y: 338,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 201,
          y: 338,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 199,
          y: 338,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 197,
          y: 336,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 198,
          y: 336,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 200,
          y: 335,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 201,
          y: 335,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 198,
          y: 335,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 197,
          y: 335,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 201,
          y: 336,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 200,
          y: 336,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 201,
          y: 334,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 201,
          y: 331,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 201,
          y: 328,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 201,
          y: 326,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 200,
          y: 326,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 201,
          y: 332,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 201,
          y: 333,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 200,
          y: 334,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 200,
          y: 332,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 200,
          y: 331,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 200,
          y: 328,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 200,
          y: 327,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 200,
          y: 330,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 200,
          y: 333,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 199,
          y: 334,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 197,
          y: 334,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 198,
          y: 333,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 197,
          y: 333,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 197,
          y: 332,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 197,
          y: 331,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 197,
          y: 329,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 197,
          y: 328,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 197,
          y: 327,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 197,
          y: 326,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 197,
          y: 325,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 197,
          y: 324,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 197,
          y: 323,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 198,
          y: 332,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 198,
          y: 334,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 197,
          y: 330,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 198,
          y: 331,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 199,
          y: 333,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 200,
          y: 329,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 199,
          y: 331,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 199,
          y: 329,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 199,
          y: 328,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 199,
          y: 327,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 199,
          y: 326,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 199,
          y: 325,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 199,
          y: 324,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 199,
          y: 323,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 198,
          y: 323,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 198,
          y: 324,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 198,
          y: 325,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 198,
          y: 326,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 198,
          y: 327,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 198,
          y: 328,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 198,
          y: 329,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 198,
          y: 330,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 199,
          y: 330,
          country: "USA",
          countryID: "USA",
        },
      ],
    },
  },
  {
    company: {
      name: "Triden",
      icon: "/assets/tempImgs/Trident.png",
      id: "132",
    },
    price: 12500,
    pixels: {
      type: "Single",
      pixel: [
        {
          x: 218,
          y: 280,
          country: "Canada",
          countryID: "CAN",
        },
        {
          x: 233,
          y: 336,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 900,
          y: 537,
          country: "Australia",
          countryID: "AUS",
        },
        {
          x: 594,
          y: 303,
          country: "Ukraine",
          countryID: "UKR",
        },
      ],
    },
  },
  {
    company: {
      name: "Triden",
      icon: "/assets/tempImgs/Trident.png",
      id: "132",
    },
    price: 12500,
    pixels: {
      type: "Single",
      pixel: [
        {
          x: 218,
          y: 280,
          country: "Canada",
          countryID: "CAN",
        },
        {
          x: 233,
          y: 336,
          country: "USA",
          countryID: "USA",
        },
        {
          x: 900,
          y: 537,
          country: "Australia",
          countryID: "AUS",
        },
        {
          x: 594,
          y: 303,
          country: "Ukraine",
          countryID: "UKR",
        },
      ],
    },
  },
];

const index = ({ setPopupShow, setPopUpData }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [dataViewType, setDataViewType] = useState("block");
  const [filters, setFilters] = useState({
    continents: ["All"],
    search: "",
    sort: "newest",
  });
  const [skeletonHeight, setSkeletonHeight] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  const handeSetInputSearch = (e) => {
    setFilters({ ...filters, search: e });
  };
  const handeSetSort = (e) => {
    setFilters({ ...filters, sort: e });
  };
  function viewTypeChange(type) {
    if (type === "block") setDataViewType(type);
    else setDataViewType(type);
  }
  const handleSearchBtn = () => {
    const jsonString = JSON.stringify(filters);
    const searchParams = new URLSearchParams();
    searchParams.append("filters", jsonString);
    setSearchParams(searchParams);
  };
  const handeSetFilter = (newItem) => {
    const sameItem = filters.continents.includes(newItem);
    if (filters.continents.includes("All") && newItem !== "All")
      setFilters({
        ...filters,
        continents: [
          ...filters.continents.filter((item) => item !== "All"),
          newItem,
        ],
      });
    else if (newItem === "All")
      setFilters({
        ...filters,
        continents: ["All"],
      });
    else if (sameItem) {
      if (filters.continents.length === 1)
        setFilters({
          ...filters,
          continents: ["All"],
        });
      else
        setFilters({
          ...filters,
          continents: filters.continents.filter((item) => item !== newItem),
        });
    } else
      setFilters({ ...filters, continents: [...filters.continents, newItem] });
  };
  useEffect(() => {
    if (windowWidth >= 1440) {
      setSkeletonHeight(528);
    }
    if (windowWidth < 1440 && windowWidth > 768) {
      setSkeletonHeight(369);
    }
    if (windowWidth < 768) {
      setSkeletonHeight(385);
    }
  }, [windowWidth]);
  useEffect(() => {
    const newFilterCriteria = JSON.parse(searchParams.get("filters"));
    if (newFilterCriteria) {
      setFilters(newFilterCriteria);
    } else {
      const jsonString = JSON.stringify(filters);
      const searchParams = new URLSearchParams();
      searchParams.append("filters", jsonString);
      setSearchParams(searchParams);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="buyWholeCountry__Data ">
      <span className="market__tableFilterBar">
        <div>
          <FilterButtons
            viewHandlerChange={viewTypeChange}
            viewType={dataViewType}
          />
          <div className="buyWholeCountry__filterBox">
            <Filter
              filterProp={filters.continents}
              handleChangeFilter={handeSetFilter}
            />
          </div>
        </div>
        <div className="searchBtnBox">
          <FilterButtons
            viewHandlerChange={viewTypeChange}
            viewType={dataViewType}
          />
          <SearchAndButtons
            sort={filters.sort}
            search={filters.search}
            handeSearch={handeSetInputSearch}
            handleSort={handeSetSort}
          />
          <Button className="button--purple" handler={handleSearchBtn}>
            Search
          </Button>
        </div>
      </span>
      {windowWidth > 767 ? (
        <div className="tableDescr">
          <div className="tableDescr__table">
            <table className="tableDescr__table-table">
              <thead className="tableDescr__table-thead">
                <tr>
                  <th className="tableDescr__table-head radiuslu">SELLER</th>
                  <th className="tableDescr__table-head">TOTAL PIXELS</th>
                  <th className="tableDescr__table-head">COUNTRY</th>
                  <th className="tableDescr__table-head">PRICE</th>
                  <th className="tableDescr__table-head radiusru"></th>
                </tr>
              </thead>
              <tbody className="tableDescr__table-body">
                {data.map((item, index) => (
                  <tr className="tableDescr__table-tr">
                    <td
                      className={`tableDescr__table-descr ${
                        index === data.length - 1 && "radiusld"
                      }`}
                    >
                      <div className="tableDescr__table-info">
                        <img
                          src={item.company.icon}
                          alt="Table image"
                          width={36}
                          height={36}
                        />
                        <span>{item.company.name}</span>
                      </div>
                    </td>
                    <td className="tableDescr__table-descr">
                      {item.pixels.pixel.length}
                    </td>
                    <td className="tableDescr__table-descr">
                      <div className="tableDescr__table-info">
                        {item.pixels.pixel
                          .filter(
                            (pixel, index, self) =>
                              index ===
                              self.findIndex(
                                (p) => p.countryID === pixel.countryID
                              )
                          )
                          .slice(0, 3)
                          .map((pixel) => {
                            const flag = countryFlag.find(
                              (country) => country.name === pixel.country
                            );
                            return (
                              <Link
                                to={`/country/${pixel.countryID}`}
                                key={pixel.countryID}
                              >
                                <img
                                  src={flag.flag_1x1}
                                  alt={pixel.country}
                                  width={24}
                                  height={24}
                                  className="tableDescr__table-countryIcon"
                                />
                              </Link>
                            );
                          })}
                      </div>
                    </td>
                    <td className="tableDescr__table-descr">
                      <div className="tableDescr__table-info">
                        <img
                          src="/assets/UI/usdt.svg"
                          alt="Table image"
                          width={23.65}
                          height={20.57}
                        />
                        <span>
                          {item.price
                            .toString()
                            .replace(/,/g, "")
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        </span>
                      </div>
                    </td>
                    <td
                      className={`tableDescr__table-descr ${
                        index === data.length - 1 && "radiusrd"
                      }`}
                    >
                      <div className="market__table-buttons">
                        <Button
                          className="button--blurGrey"
                          handler={() => {
                            setPopupShow(true);
                            setPopUpData({
                              pixels: item.pixels,
                              icon: item.company.icon,
                            });
                          }}
                        >
                          View Info
                        </Button>
                        <Button className="button--purple">Buy</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            pageNumber={page}
            handeChangePage={setPage}
            toTalPages={20}
          />
        </div>
      ) : (
        <div className="tableDescr">
          <div className="tableDescr__table">
            <table className="tableDescr__table-table">
              <thead className="tableDescr__table-thead">
                <tr>
                  <th className="tableDescr__table-head radiuslu">SELLER</th>
                  <th className="tableDescr__table-head">TOTAL PIXELS</th>
                  <th className="tableDescr__table-head">PRICE</th>
                  <th className="tableDescr__table-head radiusru"></th>
                </tr>
              </thead>
              <tbody className="tableDescr__table-body">
                {data.map((item, index) => (
                  <MobileTableSection
                    key={index}
                    seller={item.company.name}
                    icon={item.company.icon}
                    totalPixels={item.pixels.pixel.length}
                    pixels={item.pixels}
                    price={item.price}
                    last={index === data.length - 1}
                    handeSetPopUpData={setPopUpData}
                    handleShoPopUp={setPopupShow}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            pageNumber={page}
            handeChangePage={setPage}
            toTalPages={20}
          />
        </div>
      )}
    </section>
  );
};

export default index;

function MobileTableSection({
  seller,
  icon,
  totalPixels,
  price,
  pixels,
  id,
  handleShoPopUp,
  handeSetPopUpData,
  last,
}) {
  const [showExtaInfo, setShowExtraInfo] = useState(false);
  return (
    <>
      <tr className="tableDescr__table-tr">
        <td
          className={`tableDescr__table-descr ${
            last && !showExtaInfo ? "radiusld" : ""
          }`}
        >
          <div className="tableDescr__table-info">
            <img src={icon} alt="companyLogo" width={36} height={36} />
            <span>{seller}</span>
          </div>
        </td>
        <td className="tableDescr__table-descr">{totalPixels}</td>
        <td className="tableDescr__table-descr">
          <div className="tableDescr__table-info">
            <img
              src="/assets/UI/usdt.svg"
              alt="Table image"
              width={23.65}
              height={20.57}
            />
            <span>
              {price
                .toString()
                .replace(/,/g, "")
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </span>
          </div>
        </td>
        <td
          className={`tableDescr__table-descr ${
            last && !showExtaInfo ? "radiusrd" : ""
          }`}
        >
          <div className="market__table-buttons">
            <button
              className="market__table--dropDownBtn"
              onClick={() => setShowExtraInfo(!showExtaInfo)}
            >
              <img
                src="/assets/UI/listDropDown.svg"
                alt="dropDownIcon"
                width={24}
                height={24}
                className={`market__table--dropDownBtnIcon ${
                  showExtaInfo ? "market__table--dropDownBtnIcon--active" : ""
                }`}
              />
            </button>
          </div>
        </td>
      </tr>
      {showExtaInfo && (
        <>
          <tr className="tableDescr__table-tr">
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              }`}
            >
              <div className="tableDescr__table-info">
                <span>COUNTRY</span>
              </div>
            </td>
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              } ${last && showExtaInfo && "radiusld"}`}
            >
              <div className="tableDescr__table-info">
                <span></span>
              </div>
            </td>
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              } ${last && showExtaInfo && "radiusld"}`}
            >
              <div className="tableDescr__table-info">
                <span></span>
              </div>
            </td>

            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              }`}
            >
              <div className="tableDescr__table-info">
                {pixels.pixel
                  .filter(
                    (pixel, index, self) =>
                      index ===
                      self.findIndex((p) => p.countryID === pixel.countryID)
                  )
                  .slice(0, 3)
                  .map((pixel) => {
                    const flag = countryFlag.find(
                      (country) => country.name === pixel.country
                    );
                    return (
                      <Link
                        to={`/country/${pixel.countryID}`}
                        key={pixel.countryID}
                      >
                        <img
                          src={flag.flag_1x1}
                          alt={pixel.country}
                          width={24}
                          height={24}
                          className="tableDescr__table-countryIcon"
                        />
                      </Link>
                    );
                  })}
              </div>
            </td>
          </tr>
          <tr className="tableDescr__table-tr">
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              } ${last && showExtaInfo && "radiusld"}`}
            >
              <div className="tableDescr__table-info">
                <div className="market__table-buttons">
                  <Button
                    className="button--purple"
                    handler={() => {
                      handleShoPopUp(true);
                      handeSetPopUpData({
                        pixels: pixels,
                        icon: icon,
                      });
                    }}
                  >
                    Visit
                  </Button>
                </div>
              </div>
            </td>
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              } ${last && showExtaInfo && "radiusld"}`}
            >
              <div className="tableDescr__table-info">
                <span></span>
              </div>
            </td>
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              } ${last && showExtaInfo && "radiusld"}`}
            >
              <div className="tableDescr__table-info">
                <span></span>
              </div>
            </td>
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo
                  ? `tableDescr__table-descr--dropdown tableDescr__table-descr--dropdown--purple`
                  : ""
              } ${last && showExtaInfo && "radiusrd"}`}
            >
              <div className="market__table-buttons">
                <Button className="button--purple">Buy</Button>
              </div>
            </td>
          </tr>
        </>
      )}
    </>
  );
}
