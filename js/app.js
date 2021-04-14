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
      ctx.rotate((Math.PI / 180) * -60);
    },
    F: () => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, 40 / (s.iterations + 1));
      ctx.stroke();
      ctx.translate(0, 40 / (s.iterations + 1));
    },
  });

  const tree = new LSystem({
    axiom: "F++F++F",
    productions: {
      F: "F-F++F-F",
    },
  });
  tree.setFinals(finals(tree));

  /* body */
  const result = tree.iterate(2);
  console.log(result);
  tree.final();
});
