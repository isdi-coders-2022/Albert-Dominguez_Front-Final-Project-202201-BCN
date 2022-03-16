import { rest } from "msw";
export const handlers = [
  rest.get(`${process.env.REACT_APP_API}sessions`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        sessions: [
          {
            _id: "6229d6f84197f335af2c3ca9",
            when: "1312-01-12T00:14:44.000Z",
            where: "Can Baró",
            patient: {
              progress: "Not progressing",
              _id: "6230586642f13caa9b0c2252",
              name: "Jack",
              lastname: "Torrance",
              username: "dullboy",
              password: "12345",
              admin: false,
              sessions: ["6229d6f84197f335af2c3ca9"],
            },
            doctor: {
              progress: "Not progressing",
              _id: "6229d8254197f335af2c3cad",
              name: "pepito",
              lastname: "grilo",
              username: "thegrilo",
              password: "12345",
              admin: true,
              sessions: ["6229d6f84197f335af2c3ca9"],
            },
          },
          {
            _id: "6229d6f84197f335af2c3ca8",
            when: "1311-03-12T00:14:44.000Z",
            where: "El Papiol",
            patient: {
              progress: "Not progressing",
              _id: "6230586642f13caa9b0c2253",
              name: "Jackie",
              lastname: "Torranceti",
              username: "dullboy",
              password: "12345",
              admin: false,
              sessions: ["6229d6f84197f335af2c3ca9"],
            },
            doctor: {
              progress: "Not progressing",
              _id: "6229d8254197f335af2c3cad",
              name: "pepito",
              lastname: "grilo",
              username: "thegrilo",
              password: "12345",
              admin: true,
              sessions: ["6229d6f84197f335af2c3ca9"],
            },
          },
        ],
      })
    )
  ),
  rest.get(`${process.env.REACT_APP_API}sessions/13`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _id: "6229d6f84197f335af2c3ca9",
        when: "1312-01-12T00:14:44.000Z",
        where: "Can Baró",
        patient: {
          progress: "Not progressing",
          _id: "6230586642f13caa9b0c2252",
          name: "Jack",
          lastname: "Torrance",
          username: "dullboy",
          password: "12345",
          admin: false,
          sessions: ["6229d6f84197f335af2c3ca9"],
        },
        doctor: {
          progress: "Not progressing",
          _id: "6229d8254197f335af2c3cad",
          name: "pepito",
          lastname: "grilo",
          username: "thegrilo",
          password: "12345",
          admin: true,
          sessions: ["6229d6f84197f335af2c3ca9"],
        },
      })
    );
  }),
  rest.delete(
    `${process.env.REACT_APP_API}sessions/6229d6f84197f335af2c3ca9`,
    (req, res, ctx) => res(ctx.status(200))
  ),
];
