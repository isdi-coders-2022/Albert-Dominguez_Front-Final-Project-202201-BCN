import { rest } from "msw";
export const handlers = [
  rest.get(`${process.env.REACT_APP_API}sessions`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          _id: "6229d6f84197f335af2c3ca9",
          when: "1312-01-12T00:14:44.000Z",
          where: "Can Baró",
          patient: "6230586642f13caa9b0c2252",
          doctor: "6229d8254197f335af2c3cad",
        },
        {
          _id: "6229d6f84197f335af2c3ca8",
          when: "1311-03-12T00:14:44.000Z",
          where: "El Papiol",
          patient: "6230586642f13caa9b0c2253",
          doctor: "6229d8254197f335af2c3cad",
        },
      ])
    )
  ),
  rest.get(`${process.env.REACT_APP_API}sessions/13`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _id: "6229d6f84197f335af2c3ca9",
        when: "1312-01-12T00:14:44.000Z",
        where: "Can Baró",
        patient: "6230586642f13caa9b0c2252",
        doctor: "6229d8254197f335af2c3cad",
      })
    );
  }),
  rest.delete(
    `${process.env.REACT_APP_API}sessions/6229d6f84197f335af2c3ca9`,
    (req, res, ctx) => res(ctx.status(200))
  ),
  rest.post(`${process.env.REACT_APP_API}sessions/new`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(req.body))
  ),
  rest.patch(
    `${process.env.REACT_APP_API}sessions/6229d6f84197f335af2c3ca9`,
    (req, res, ctx) => res(ctx.status(200))
  ),
  rest.get(`${process.env.REACT_APP_API}users`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          _id: "21",
          name: "Petri",
          lastname: "Petroli",
          username: "pptroli",
          progress: "Not progressing",
          password: "12345",
          admin: true,
          sessions: ["1"],
        },
        {
          _id: "11",
          name: "Petrus",
          lastname: "Petroleus",
          username: "123456",
          progress: "Not progressing",
          password:
            "$2b$10$2rMqPvHpSA7OyeS9LdvejueLOTRFaAXoEvn73h70pQffd7UCVXbcu",
          admin: true,
          sessions: ["1"],
        },
      ])
    )
  ),
  rest.post(`${process.env.REACT_APP_API}users/new`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(req.body))
  ),
  rest.post(`${process.env.REACT_APP_API}users/login`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiMTIzNDU2IiwiaWQiOiI2MjM4YTYwYjhhZDM1OTdmODk2NTU0YTgiLCJpYXQiOjE2NDc4ODM2ODMsImV4cCI6MTY0ODIyOTI4M30.MX8-VT96Ig9Y1Xl_5zcGZsu49tXPs-GBTsgsQd0oYRQ",
      })
    )
  ),
];
