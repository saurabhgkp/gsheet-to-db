# gsheet-to-db

Use Google Sheets as a database perform all CRUD opraction

## operations

Get All Data, Get Data By Id ,insert Data , Update By Id And Delete Data By Id

## FAQ

#### In Google Sheet you have to set data in header vale by manually first Field must be an 'id' and remaining is upto you

| id            | Name    | Status   | Salary   |
| ------------- | ------- | -------- | -------- |
| Example Color | Wilson  | FullTime | $40,000  |
| Example Color | saurabh | FullTime | $120,000 |
| Example Color | herry   | FullTime | $40,000  |

```bash
id |	 Name |    Status |	Salary
this field Are Add by manually field
may Different (As you Want 'id' is First Field !importent)

```

#### passing data in body is like

```bash

{
    "B":"herry",
    "C":"FullTime",
    "D":"$40,000"
}


```

always use capital letters ===>
Don't A, This is use for 'id' use B C D to the Z for passing data

#### passing data in Query for API Like Updating, FindById and DeleteById

```
http://localhost:4000/googleSheet/updateById?id=2

```

## prerequisite

Activate Google Sheets API. Go to the google console developer and enable Google Sheets API.
https://console.cloud.google.com/apis/dashboard And get JSON key.
DO NOT commit the JSON key! Add the file to .gitignore now and import it into
the code! Or use environment variables.

## Installation

Install my-project with npm

```bash
  npm i gsheet-to-db

```

Import

```bash
  const gsheetdb = require("gsheetdb");
```

make a middleware function plz replace your credentials where ("sheetId",
"sheetName","keyFile","scopes)

```bash
  function org(req, res, next) {
  req.sheetId = "**************************";

  req.sheetName = "Default Name";

  req.auth = new google.auth.GoogleAuth({
    keyFile: "./keyFile.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  req.googleSheets = google.sheets({
    version: "v4",
    auth: async () => await auth.getClient(),
  });

  next();
}
```

## Code Look Like 'exemple'

```bash
const { google } = require("googleapis");
var express = require("express");
var router = express.Router();
var gsheetDb = require("gsheet-to-db");

function org(req, res, next) {
  req.sheetId = "**************************";
  req.sheetName = "Name of sheet";
  req.auth = new google.auth.GoogleAuth({
    keyFile: "./KeyFile.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  req.googleSheets = google.sheets({
    version: "v4",
    auth: async () => await auth.getClient(),
  });

  next();
}

router.post("/addData", org, gsheetDb.addData);

router.get("/getAllData", org, gsheetDb.getAllData);

// get data by id you have to pass id in query // 'url?id=4'
router.get("/getDataById", org, gsheetDb.getDataById);

// updating data by id you have to pass id in query // 'url?id=4'
router.put("/updateById", org, gsheetDb.updateById);

// delete row data by id you have to pass id in query // 'url?id=4'
router.delete("/deleteById", org, gsheetDb.deleteById);

module.exports = router;
```

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/saurabh-singh-841590192)
