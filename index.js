const { google } = require("googleapis");

class Gsheet {

  constructor(keyFile, spreadsheetId, range) {
    this.authG = {
      auth: new google.auth.GoogleAuth({
        keyFile: keyFile,// "./exam-35.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
      }),
      spreadsheetId: spreadsheetId,//"1JmpRfmEfSdVAxAu2SRvzsnswI1-lnHNbts-3F_1xtlg",
      range: range //"pcdb",
    }
    this.auth = new google.auth.GoogleAuth({
      keyFile: keyFile,// "./exam-35.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    }),
      this.spreadsheetId = spreadsheetId
    this.range = range
    this.googleSheets = google.sheets({ version: "v4", auth: async () => await auth.getClient() });
    // this.getRows = getRows
  }


  async findAll() {
    const getRows = await this.googleSheets.spreadsheets.values.get(this.authG);

    const obj = getRows.data.values;

    var width = obj[0].length;

    var depth = obj.length;
    // console.log(width, depth);

    var keys = "";
    for (let i = 0; i < width; i++) {
      keys = [...keys, obj[0][i]];
    }
    var values = [];
    for (let i = 1; i < depth; i++) {
      for (let j = 0; j < width; j++) {
        values.push([keys[j], obj[i][j]]);
      }
    }

    var gg = [];
    var finalData = [];

    var flag = 0;

    for (let k = 0; k < values.length; k++) {
      flag++;

      gg.push(values[k]);

      if (flag == width) {
        finalData.push(Object.fromEntries(gg));
        gg = [];
        flag = 0;
      }
    }
    return finalData

  }

  async findById(id) {

    // Read rows from spreadsheet
    const getRows = await this.googleSheets.spreadsheets.values.get(this.authG);
    // res.send(getRows.data.values);
    const obj = getRows.data.values;

    var width = obj[0].length;

    var depth = obj.length;
    // console.log(width, depth);

    var keys = "";
    for (let i = 0; i < width; i++) {
      keys = [...keys, obj[0][i]];
    }
    var values = [];
    // for (let i = 1; i < depth; i++) {
    for (let j = 0; j < width; j++) {
      console.log(id, "<===id", keys[j], obj[id])
      values.push([keys[j], obj[id][j]]);
    }
    // }

    var gg = [];
    var finalData = [];

    var flag = 0;

    for (let k = 0; k < values.length; k++) {
      flag++;

      gg.push(values[k]);

      if (flag == width) {
        finalData.push(Object.fromEntries(gg));
        gg = [];
        flag = 0;
      }
    }
    return finalData
    // .json({ Data: finalData });
    // return res.send(finalData);

  }

  async create(data) {
    // Write row(s) to spreadsheet   headerKey

    const {
      A = id,
      B = null,
      C = null,
      D = null,
      E = null,
      F = null,
      G = null,
      H = null,
      I = null,
      J = null,
      K = null,
      L = null,
      M = null,
      N = null,
      O = null,
      P = null,
      Q = null,
      R = null,
      S = null,
      T = null,
      U = null,
      V = null,
      W = null,
      X = null,
      Y = null,
      Z = null,
    } = data;

    await this.googleSheets.spreadsheets.values.append({
      auth: this.auth,
      spreadsheetId: this.spreadsheetId,
      range: this.range,
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [
          [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H,
            I,
            J,
            K,
            L,
            M,
            N,
            O,
            P,
            Q,
            R,
            S,
            T,
            U,
            V,
            W,
            X,
            Y,
            Z,
          ],
        ],
      },
    });
    return res
      .status(200)
      .json({ Message: `Successfully submitted! With ID ${id}` });
  }

  async deleteById(id) {
    const idd = parseInt(id);
    //console.log(idd);

    const response = await this.googleSheets.spreadsheets.values.clear({
      auth: this.auth,
      spreadsheetId: this.spreadsheetId,
      range: `${this.range}!A${idd + 1}:F${idd + 1}`,
    });
    // res.send("deleted");
    return res

      .json({ Message: `deleted successful ${id} ` });
    // return res.send(finalData);

  }
  async updateById(id, data) {

    const {
      A = id,
      B = null,
      C = null,
      D = null,
      E = null,
      F = null,
      G = null,
      H = null,
      I = null,
      J = null,
      K = null,
      L = null,
      M = null,
      N = null,
      O = null,
      P = null,
      Q = null,
      R = null,
      S = null,
      T = null,
      U = null,
      V = null,
      W = null,
      X = null,
      Y = null,
      Z = null,
    } = data;
    const idd = parseInt(A);
    const response = await this.googleSheets.spreadsheets.values.update({
      auth: this.auth,
      spreadsheetId: this.spreadsheetId,
      valueInputOption: "USER_ENTERED",
      range: `${this.range}!A${idd + 1}:Z${idd + 1}`,
      resource: {
        values: [
          [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H,
            I,
            J,
            K,
            L,
            M,
            N,
            O,
            P,
            Q,
            R,
            S,
            T,
            U,
            V,
            W,
            X,
            Y,
            Z,
          ],
        ],
      },
    });

    return json({ Message: `Successfully Updated With ID ${id}` });
  }

}

module.exports.Gsheet = Gsheet