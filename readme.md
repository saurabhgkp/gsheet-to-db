
# gsheet-to-db
 ####  Easy to use and implement
SheetDB will turn your sheets into a  **JSON API**, easy to integrate with other tools and all programming languages.
## operations
####  You can read and edit your spreadsheet with GET, POST, PUT and DELETE requests with just a few lines of code.

## FAQ

#### In Google Sheets you have to set data in header vale by manually first Field must be an 'id' and remaining is upto you

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
## prerequisite

Activate Google Sheets API. Go to the Google console developer and enable Google Sheets API.
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
const { Gsheet } =  require("gsheet-to-db")
```


```bash
const  gdata  =  new  Gsheet("./keyFile.json", "spreadsheetId", "sheetName")

 let  data1  =  await  gdata.findAll()
 let  data2  =  await  gdata.findById(id)
 let  data3  =  await  gdata.create(data)
 let  data4  =  await  gdata.deleteById(id)
 let  data5  =  await  gdata.updateById(id, data)
```
##  Code  Explanation
`"./keyFile.json"` 
 this keysFile you can get it from Google console developer
 
`spreadsheetId`you can get from spreadsheet url for expamle 
`https://docs.google.com/spreadsheets/d/`1JmpRfmEfSdVAxAu2SRvzsnswI1-ln-3F_1xtlg`/edit?pli=1#gid=0`
here after /d/ and before /edit is your
 spreadsheetId ="1JmpRfmEfSdVAxAu2SRvzsnswI1-ln-3F_1xtlg"
 
 `sheetName` can find at the bottom of spreadsheets by default is something like "sheet1"
 
` let  data3  =  await  gdata.create(data)`
here data must be started from "B" not "A" for example "A" is for id 
```
{
    "B":"herry",
    "C":"FullTime",
    "D":"$40,000"
}
```
for any help, you can DM me on LinkedIn
## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/saurabh-singh-841590192)