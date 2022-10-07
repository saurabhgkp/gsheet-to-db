(exports.getAllData = async (e, l) => {
  try {
    const o = (
      await e.googleSheets.spreadsheets.values.get({
        auth: e.auth,
        spreadsheetId: e.sheetId,
        range: e.sheetName,
      })
    ).data.values;
    var t = o[0].length,
      s = o.length,
      a = "";
    for (let e = 0; e < t; e++) a = [...a, o[0][e]];
    var u = [];
    for (let e = 1; e < s; e++)
      for (let l = 0; l < t; l++) u.push([a[l], o[e][l]]);
    var n = [],
      r = [],
      h = 0;
    for (let e = 0; e < u.length; e++)
      h++,
        n.push(u[e]),
        h == t && (r.push(Object.fromEntries(n)), (n = []), (h = 0));
    return l
      .status(200)
      .json({ Status: 1, Message: "Fetched Successfully", Data: r });
  } catch (e) {
    console.log("error");
  }
}),
  (exports.getDataById = async (e, l) => {
    const { id: t } = e.query;
    try {
      const o = (
        await e.googleSheets.spreadsheets.values.get({
          auth: e.auth,
          spreadsheetId: e.sheetId,
          range: e.sheetName,
        })
      ).data.values;
      var s = o[0].length,
        a = (o.length, "");
      for (let e = 0; e < s; e++) a = [...a, o[0][e]];
      var u = [];
      for (let e = 0; e < s; e++) u.push([a[e], o[t][e]]);
      var n = [],
        r = [],
        h = 0;
      for (let e = 0; e < u.length; e++)
        h++,
          n.push(u[e]),
          h == s && (r.push(Object.fromEntries(n)), (n = []), (h = 0));
      return l
        .status(200)
        .json({ Status: 1, Message: "Fetched Successfully", Data: r });
    } catch (e) {
      console.log("error");
    }
  }),
  (exports.updateById = async (e, l) => {
    try {
      const { id: t } = e.query,
        {
          A: s = t,
          B: a = null,
          C: u = null,
          D: n = null,
          E: r = null,
          F: h = null,
          G: o = null,
          H: d = null,
          I: c = null,
          J: g = null,
          K: p = null,
          L: I = null,
          M: y = null,
          N: v = null,
          O: i = null,
          P: S = null,
          Q: f = null,
          R: E = null,
          S: D = null,
          T: N = null,
          U: m = null,
          V: $ = null,
          W: j = null,
          X: M = null,
          Y: w = null,
          Z: O = null,
        } = e.body,
        R = parseInt(s);
      await e.googleSheets.spreadsheets.values.update({
        auth: e.auth,
        spreadsheetId: e.sheetId,
        valueInputOption: "USER_ENTERED",
        range: `${e.sheetName}!A${R + 1}:Z${R + 1}`,
        resource: {
          values: [
            [
              s,
              a,
              u,
              n,
              r,
              h,
              o,
              d,
              c,
              g,
              p,
              I,
              y,
              v,
              i,
              S,
              f,
              E,
              D,
              N,
              m,
              $,
              j,
              M,
              w,
              O,
            ],
          ],
        },
      });
      return l
        .status(200)
        .json({ status: 1, Message: `Successfully Updated With ID ${t}` });
    } catch (e) {
      console.log("error");
    }
  }),
  (exports.deleteById = async (e, l) => {
    const { id: t } = e.query,
      s = parseInt(t);
    try {
      await e.googleSheets.spreadsheets.values.clear({
        auth: e.auth,
        spreadsheetId: e.sheetId,
        range: `${e.sheetName}!A${s + 1}:Z${s + 1}`,
      });
      return l
        .status(200)
        .json({ status: 1, Message: `deleted successful ${t} ` });
    } catch (e) {
      console.log("error");
    }
  }),
  (exports.addData = async (e, l) => {
    var t = (
      await e.googleSheets.spreadsheets.values.get({
        auth: e.auth,
        spreadsheetId: e.sheetId,
        range: e.sheetName,
      })
    ).data.values.length;
    const {
      A: s = t,
      B: a = null,
      C: u = null,
      D: n = null,
      E: r = null,
      F: h = null,
      G: o = null,
      H: d = null,
      I: c = null,
      J: g = null,
      K: p = null,
      L: I = null,
      M: y = null,
      N: v = null,
      O: i = null,
      P: S = null,
      Q: f = null,
      R: E = null,
      S: D = null,
      T: N = null,
      U: m = null,
      V: $ = null,
      W: j = null,
      X: M = null,
      Y: w = null,
      Z: O = null,
    } = e.body;
    try {
      return (
        await e.googleSheets.spreadsheets.values.append({
          auth: e.auth,
          spreadsheetId: e.sheetId,
          range: e.sheetName,
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [
              [
                s,
                a,
                u,
                n,
                r,
                h,
                o,
                d,
                c,
                g,
                p,
                I,
                y,
                v,
                i,
                S,
                f,
                E,
                D,
                N,
                m,
                $,
                j,
                M,
                w,
                O,
              ],
            ],
          },
        }),
        l
          .status(200)
          .json({ status: 1, Message: `Successfully submitted! With ID ${t}` })
      );
    } catch (e) {
      console.log("error");
    }
  });
