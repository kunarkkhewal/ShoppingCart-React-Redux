const products = [
    {
        "id": "91c9f4a3-18e9-4263-8cd6-c649dabd7e51",
        "name": "Sauce - Hoisin",
        "quantity": 35,
        "image": "https://picsum.photos/200/200/?image=18",
        "price": 239
    },
    {
        "id": "837d97f1-daa4-4cf3-a933-ef4de0a367f7",
        "name": "Water - Evian 355 Ml",
        "quantity": 22,
        "image": "https://picsum.photos/200/200/?image=19",
        "price": 8
    },
    {
        "id": "830b40cb-1b66-4253-a388-bc55cef840da",
        "name": "Longos - Lasagna Beef",
        "quantity": 34,
        "image": "https://picsum.photos/200/200/?image=16",
        "price": 92
    },
    {
        "id": "4947e611-fec2-4a65-b118-4a956a99e282",
        "name": "Stock - Veal, Brown",
        "quantity": 37,
        "image": "https://picsum.photos/200/200/?image=1",
        "price": 21
    },
    {
        "id": "b1c8740c-4b65-46f0-96f8-4bc2e70faa18",
        "name": "Shrimp - 16 - 20 Cooked, Peeled",
        "quantity": 31,
        "image": "https://picsum.photos/200/200/?image=2",
        "price": 293
    },
    {
        "id": "52f812f3-9e75-4ba0-9101-6330249875cc",
        "name": "Lemonade - Strawberry, 591 Ml",
        "quantity": 24,
        "image": "https://picsum.photos/200/200/?image=20",
        "price": 77
    },
    {
        "id": "6f31ca47-eb3e-4a4d-8ef0-3307d2c0e558",
        "name": "Chicken - White Meat With Tender",
        "quantity": 22,
        "image": "https://picsum.photos/200/200/?image=16",
        "price": 180
    },
    {
        "id": "8c284f56-dbfd-44d5-86cf-08af88d1bc03",
        "name": "Filo Dough",
        "quantity": 38,
        "image": "https://picsum.photos/200/200/?image=7",
        "price": 289
    },
    {
        "id": "c1c08b51-0d60-43a5-a4bc-8c19a26275ec",
        "name": "Bread - Pita",
        "quantity": 33,
        "image": "https://picsum.photos/200/200/?image=18",
        "price": 133
    },
    {
        "id": "2a9c65e8-ffdf-436e-a011-30e92ebce653",
        "name": "Strawberries - California",
        "quantity": 40,
        "image": "https://picsum.photos/200/200/?image=19",
        "price": 14
    },
    {
        "id": "e9ac8bab-97a2-41b8-8f40-5f426c2ad536",
        "name": "Muffin Mix - Morning Glory",
        "quantity": 39,
        "image": "https://picsum.photos/200/200/?image=14",
        "price": 290
    },
    {
        "id": "4041d819-dda9-4e0c-8ae3-d2a282b4feab",
        "name": "Wine - Valpolicella Masi",
        "quantity": 26,
        "image": "https://picsum.photos/200/200/?image=6",
        "price": 275
    },
    {
        "id": "6226367c-c8be-4f93-a22f-d207a6fc4668",
        "name": "Wine - Trimbach Pinot Blanc",
        "quantity": 36,
        "image": "https://picsum.photos/200/200/?image=14",
        "price": 64
    },
    {
        "id": "4f0352f4-6998-44ec-85e0-9c4b84f4cd80",
        "name": "Crab - Back Fin Meat, Canned",
        "quantity": 20,
        "image": "https://picsum.photos/200/200/?image=15",
        "price": 25
    },
    {
        "id": "4d908c02-d172-4123-be8e-16c685ac65da",
        "name": "V8 Pet",
        "quantity": 30,
        "image": "https://picsum.photos/200/200/?image=19",
        "price": 164
    },
    {
        "id": "29e6c663-034f-4291-852b-bf0ea52cd316",
        "name": "Versatainer Nc - 8288",
        "quantity": 23,
        "image": "https://picsum.photos/200/200/?image=17",
        "price": 220
    },
    {
        "id": "55cfcbda-19b3-4010-a0d8-6e7b1616b80d",
        "name": "Appetizer - Chicken Satay",
        "quantity": 34,
        "image": "https://picsum.photos/200/200/?image=12",
        "price": 52
    },
    {
        "id": "1a24f6ff-0d5f-4934-9fc6-2a9a2c5e4545",
        "name": "Cookies - Assorted",
        "quantity": 25,
        "image": "https://picsum.photos/200/200/?image=5",
        "price": 264
    },
    {
        "id": "797959ef-54f8-41bc-a160-dd8fb8368562",
        "name": "Dill Weed - Dry",
        "quantity": 39,
        "image": "https://picsum.photos/200/200/?image=19",
        "price": 224
    },
    {
        "id": "1a6b4239-0b69-466a-ac49-27e02f507ec6",
        "name": "Bread - Granary Small Pull",
        "quantity": 21,
        "image": "https://picsum.photos/200/200/?image=2",
        "price": 17
    },
    {
        "id": "9c86799e-3554-4673-abf3-6c7115444a2f",
        "name": "Tomato - Peeled Italian Canned",
        "quantity": 23,
        "image": "https://picsum.photos/200/200/?image=12",
        "price": 68
    },
    {
        "id": "1e50fb74-dab6-42d8-a41f-09af94825874",
        "name": "Wine - Fume Blanc Fetzer",
        "quantity": 21,
        "image": "https://picsum.photos/200/200/?image=20",
        "price": 171
    },
    {
        "id": "9e3abf58-77a1-4051-aa4b-92a204072da6",
        "name": "Chicken - Leg, Fresh",
        "quantity": 24,
        "image": "https://picsum.photos/200/200/?image=18",
        "price": 51
    },
    {
        "id": "f614431d-7e77-4f72-9522-d7eca0dd899e",
        "name": "Cake - Bande Of Fruit",
        "quantity": 25,
        "image": "https://picsum.photos/200/200/?image=14",
        "price": 24
    },
    {
        "id": "6441df06-b5cb-44cb-9186-501d0b8aceca",
        "name": "Tea - Herbal I Love Lemon",
        "quantity": 26,
        "image": "https://picsum.photos/200/200/?image=1",
        "price": 300
    },
    {
        "id": "9bd8cf01-c6c9-41ea-843e-12bce0ffe68c",
        "name": "Arctic Char - Fresh, Whole",
        "quantity": 32,
        "image": "https://picsum.photos/200/200/?image=7",
        "price": 14
    },
    {
        "id": "9cc422f9-3d53-4ffd-ac03-bf1afdf9deae",
        "name": "Tea - Mint",
        "quantity": 31,
        "image": "https://picsum.photos/200/200/?image=15",
        "price": 114
    },
    {
        "id": "fcf47c75-8254-409e-a7ee-984bcbdba07b",
        "name": "Peas - Pigeon, Dry",
        "quantity": 31,
        "image": "https://picsum.photos/200/200/?image=0",
        "price": 252
    },
    {
        "id": "9e26f5db-33b9-4ba3-b710-b63e80246b9c",
        "name": "Samosa - Veg",
        "quantity": 23,
        "image": "https://picsum.photos/200/200/?image=2",
        "price": 66
    },
    {
        "id": "e616d676-b897-4ebc-83e4-165149deec66",
        "name": "Sun - Dried Tomatoes",
        "quantity": 27,
        "image": "https://picsum.photos/200/200/?image=5",
        "price": 85
    }
]


export default products;