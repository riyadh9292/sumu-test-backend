const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const userRoutes = require("./routes/user.routes");
app.use(bodyParser.json());
app.use(cors());
app.use("/", userRoutes);

app.get("/get-sectors", (req, res) => {
  // res.send("yellow");
  res.send(
    JSON.stringify([
      {
        id: 1001,
        name: "Sectors",
        children: [
          {
            id: 2,
            name: "Manufacturing",
            children: [
              {
                id: 3,
                name: "Construction materials",
              },
              {
                id: 4,
                name: "Electronics and Optics",
              },
              {
                id: 5,
                name: "Food and Beverage",
                children: [
                  {
                    id: 6,
                    name: "Bakery &amp; confectionery products",
                  },
                  {
                    id: 7,
                    name: "Beverages",
                  },
                  {
                    id: 8,
                    name: "Fish &amp; fish products",
                  },
                  {
                    id: 9,
                    name: "Meat &amp; meat products",
                  },
                  {
                    id: 10,
                    name: "Milk &amp; dairy products",
                  },
                  {
                    id: 11,
                    name: "Other",
                  },
                  {
                    id: 12,
                    name: "Sweets &amp; snack food",
                  },
                ],
              },
              {
                id: 13,
                name: "Furniture",
                children: [
                  {
                    id: 14,
                    name: "Bathroom/sauna",
                  },
                  {
                    id: 15,
                    name: "Bedroom",
                  },
                  {
                    id: 16,
                    name: "Children’s room",
                  },
                  {
                    id: 17,
                    name: "Kitchen",
                  },
                  {
                    id: 18,
                    name: "Living room",
                  },
                  {
                    id: 19,
                    name: "Office",
                  },
                  {
                    id: 20,
                    name: "Other (Furniture)",
                  },
                  {
                    id: 21,
                    name: "Outdoor",
                  },
                  {
                    id: 22,
                    name: "Project furniture",
                  },
                ],
              },
              {
                id: 23,
                name: "Machinery",
                children: [
                  {
                    id: 24,
                    name: "Machinery components",
                  },
                  {
                    id: 25,
                    name: "Machinery equipment/tools",
                  },
                  {
                    id: 26,
                    name: "Manufacture of machinery",
                  },
                  {
                    id: 27,
                    name: "Maritime",
                    children: [
                      {
                        id: 28,
                        name: "Aluminium and steel workboats",
                      },
                      {
                        id: 29,
                        name: "Boat/Yacht building",
                      },
                      {
                        id: 30,
                        name: "Ship repair and conversion",
                      },
                    ],
                  },
                  {
                    id: 31,
                    name: "Metal structures",
                  },
                  {
                    id: 32,
                    name: "Other",
                  },
                  {
                    id: 33,
                    name: "Repair and maintenance service",
                  },
                ],
              },
              {
                id: 34,
                name: "Metalworking",
                children: [
                  {
                    id: 35,
                    name: "Construction of metal structures",
                  },
                  {
                    id: 36,
                    name: "Houses and buildings",
                  },
                  {
                    id: 37,
                    name: "Metal products",
                  },
                  {
                    id: 38,
                    name: "Metal works",
                    children: [
                      {
                        id: 39,
                        name: "CNC-machining",
                      },
                      {
                        id: 40,
                        name: "Forgings, Fasteners",
                      },
                      {
                        id: 41,
                        name: "Gas, Plasma, Laser cutting",
                      },
                      {
                        id: 42,
                        name: "MIG, TIG, Aluminum welding",
                      },
                    ],
                  },
                ],
              },
              {
                id: 43,
                name: "Plastic and Rubber",
                children: [
                  {
                    id: 44,
                    name: "Packaging",
                  },
                  {
                    id: 45,
                    name: "Plastic goods",
                  },
                  {
                    id: 46,
                    name: "Plastic processing technology",
                    children: [
                      {
                        id: 47,
                        name: "Blowing",
                      },
                      {
                        id: 48,
                        name: "Moulding",
                      },
                      {
                        id: 49,
                        name: "Plastics welding and processing",
                      },
                    ],
                  },
                  {
                    id: 50,
                    name: "Plastic profiles",
                  },
                ],
              },
              {
                id: 51,
                name: "Printing",
                children: [
                  {
                    id: 52,
                    name: "Advertising",
                  },
                  {
                    id: 53,
                    name: "Book/Periodicals printing",
                  },
                  {
                    id: 54,
                    name: "Labelling and packaging printing",
                  },
                ],
              },
              {
                id: 55,
                name: "Textile and Clothing",
                children: [
                  {
                    id: 56,
                    name: "Clothing",
                  },
                  {
                    id: 57,
                    name: "Textile",
                  },
                ],
              },
              {
                id: 58,
                name: "Wood",
                children: [
                  {
                    id: 59,
                    name: "Other (Wood)",
                  },
                  {
                    id: 60,
                    name: "Wooden building materials",
                  },
                  {
                    id: 61,
                    name: "Wooden houses",
                  },
                ],
              },
            ],
          },
          {
            id: 62,
            name: "Other",
            children: [
              {
                id: 63,
                name: "Creative industries",
              },
              {
                id: 64,
                name: "Energy technology",
              },
              {
                id: 65,
                name: "Environment",
              },
            ],
          },
          {
            id: 66,
            name: "Service",
            children: [
              {
                id: 67,
                name: "Business services",
              },
              {
                id: 68,
                name: "Engineering",
              },
              {
                id: 69,
                name: "Information Technology and Telecommunications",
                children: [
                  {
                    id: 70,
                    name: "Data processing, Web portals, E-marketing",
                  },
                  {
                    id: 71,
                    name: "Programming, Consultancy",
                  },
                  {
                    id: 72,
                    name: "Software, Hardware",
                  },
                  {
                    id: 73,
                    name: "Telecommunications",
                  },
                ],
              },
              {
                id: 74,
                name: "Tourism",
              },
              {
                id: 75,
                name: "Translation services",
              },
              {
                id: 76,
                name: "Transport and Logistics",
                children: [
                  {
                    id: 77,
                    name: "Air",
                  },
                  {
                    id: 78,
                    name: "Rail",
                  },
                  {
                    id: 79,
                    name: "Road",
                  },
                  {
                    id: 80,
                    name: "Water",
                  },
                ],
              },
            ],
          },
        ],
      },
    ])
  );
  // res.sendFile(__dirname + "/public/test.html");
  // res.render("", {
  //   id: 5,
  //   user: {
  //     name: "test",
  //   },
  // });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.y5siwts.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(process.env.PORT || 4000);
    console.log("mongodb connect successfull");
  })
  .catch((err) => {
    console.log(err);
    console.log(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.y5siwts.mongodb.net/?retryWrites=true&w=majority`
    );
  });
