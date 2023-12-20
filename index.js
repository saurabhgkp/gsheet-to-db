const { google } = require("googleapis");

class Gsheet {

  constructor(keyFile, spreadsheetId, range) {
    this.authG = {
      auth: new google.auth.GoogleAuth({
        keyFile: keyFile,
        scopes: "https://www.googleapis.com/auth/spreadsheets",
      }),
      spreadsheetId: spreadsheetId,
      range: range,
    }
    this.auth = new google.auth.GoogleAuth({
      keyFile: keyFile,
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    }),
      this.spreadsheetId = spreadsheetId
    this.range = range
    this.googleSheets = google.sheets({ version: "v4", auth: async () => await auth.getClient() });
  }

  async findAll() {
    const getRows = await this.googleSheets.spreadsheets.values.get(this.authG);

    const obj = getRows.data.values;

    var width = obj[0].length;

    var depth = obj.length;

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

    const getRows = await this.googleSheets.spreadsheets.values.get(this.authG);
    const obj = getRows.data.values;

    var width = obj[0].length;

    var depth = obj.length;

    var keys = "";
    for (let i = 0; i < width; i++) {
      keys = [...keys, obj[0][i]];
    }
    var values = [];
    for (let j = 0; j < width; j++) {
      values.push([keys[j], obj[id][j]]);
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

  async create(data) {
    const getRows = await this.googleSheets.spreadsheets.values.get(this.authG);
    const obj = getRows.data.values;
    var id = obj.length;
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

    const response = await this.googleSheets.spreadsheets.values.append({
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
    return response
  }

  async deleteById(id) {
    const idd = parseInt(id);
    const response = await this.googleSheets.spreadsheets.values.clear({
      auth: this.auth,
      spreadsheetId: this.spreadsheetId,
      range: `${this.range}!A${idd + 1}:Z${idd + 1}`,
    });
    return response

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
    if (response.status === 200) return response
    else return "make sure capital letter start from  B,C,D as key in req.body"

  }

}

module.exports.Gsheet = Gsheet