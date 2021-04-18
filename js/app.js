/* let content load */
document.addEventListener("DOMContentLoaded", () => {
  /* variables */
  const canvas = document.querySelector("canvas#mainCanvas");
  const ctx = canvas.getContext("2d");
  ctx.translate(canvas.width / 2, canvas.height / 4);
  const ANGLE_ROT = 60;
  const finals = (s) => ({
    "+": () => {
      ctx.rotate((Math.PI / 180) * ANGLE_ROT);
    },
    "-": () => {
      ctx.rotate((Math.PI / 180) * -ANGLE_ROT);
    },
    F: () => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, 40 / (s.iterations + 1));
      ctx.stroke();
      ctx.translate(0, 40 / (s.iterations + 1));
    },
  });

  const snowFlake = new LSystem({
    axiom: "F++F++F",
    productions: {
      F: "F-F++F-F",
    },
  });
  snowFlake.setFinals(finals(snowFlake));

  const slimeMolds = new LSystem({
    axiom: [
      { symbol: "F", food: 1 },
      { symbol: "+", food: 0 },
      { symbol: "F", food: 1 },
      { symbol: "+", food: 0 },
      { symbol: "F", food: 1 },
      { symbol: "+", food: 0 },
      { symbol: "F", food: 1 },
      { symbol: "+", food: 0 },
      { symbol: "F", food: 1 },
      { symbol: "+", food: 0 },
      { symbol: "F", food: 1 },
      { symbol: "+", food: 0 },
    ],
    productions: {
      F: ({ part, index }) => {
        if (part.food) {
          return [
            { symbol: "F", food: 1 },
            { symbol: "-", food: 0 },
            { symbol: "F", food: 1 },
            { symbol: "F", food: 1 },
            { symbol: "-", food: 0 },
            { symbol: "-", food: 0 },
            { symbol: "F", food: 1 },
            { symbol: "F", food: 1 },
            { symbol: "F", food: 1 },
            { symbol: "F", food: 1 },
            { symbol: "-", food: 0 },
            { symbol: "-", food: 0 },
          ];
        } else {
          return { symbol: "F", food: 0 };
        }
      },
    },
  });
  slimeMolds.setFinals(finals(slimeMolds));

  /* body */
  //snowFlake.iterate(4);
  //snowFlake.final();

  slimeMolds.iterate(7);
  slimeMolds.final();

  console.log(slimeMolds.getString());
});
