const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Enable All CORS Requests
app.use(cors());

app.get('/api', (req, res) => {
  const dummyData =   [
    {
      "id": "001",
      "category": "Furniture",
      "subCategory": "Tables",
      "segment": "Corporate",
      "productName": "GE General",
      "orderDate": "2023-06-21",
      "region": "West",
      "profit": 50,
      "sales": 300,
      "imageUrl": "https://picsum.photos/id/42/500/300",
      "lineItems":[
        {
          "id": "001-01",
          "item": "TableA",
          "profit": 3,
          "sales": 100
        },
        {
          "id": "001-02",
          "item": "TableB",
          "profit": 1,
          "sales": 150
        }
      ]
    },
    {
      "id": "002",
      "category": "Furniture",
      "subCategory": "Chairs",
      "segment": "Home Office",
      "productName": "Bevis Round",
      "orderDate": "2023-06-20",
      "region": "East",
      "profit": 70,
      "sales": 400,
      "imageUrl": "https://picsum.photos/id/42/500/300",
      "lineItems":[
        {
          "id": "002-01",
          "item": "ChairA",
          "profit": 3,
          "sales": 100
        },
        {
          "id": "002-02",
          "item": "ChairB",
          "profit": 1,
          "sales": 150
        }
      ]
    },
    {
        "id": "003",
        "category": "Furniture",
        "subCategory": "Chairs",
        "segment": "Home Office",
        "productName": "Bevis Round",
        "orderDate": "2023-06-20",
        "region": "East",
        "profit": 0,
        "sales": 0,
        "imageUrl": "https://picsum.photos/id/42/500/300",
        "lineItems":[
          
        ]
      },
      {
        "id": "004",
        "category": "Furniture",
        "subCategory": "Chairs",
        "segment": "Home Office",
        "productName": "Bevis Round",
        "orderDate": "2023-06-20",
        "region": "East",
        "profit": 70,
        "sales": 400,
        "imageUrl": null,
        "lineItems":[
          {
            "id": "002-01",
            "item": "ChairA",
            "profit": 3,
            "sales": 100
          },
          {
            "id": "002-02",
            "item": "ChairB",
            "profit": 1,
            "sales": 150
          }
        ]
      }
  ]

  res.json(dummyData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
