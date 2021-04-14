/* let content load */
document.addEventListener("DOMContentLoaded", () => {
  /* variables */
  const canvas = document.querySelector("canvas#mainCanvas");
  const ctx = canvas.getContext("2d");
  ctx.translate(canvas.width / 3.5, canvas.height / 3);
  ctx.rotate(Math.PI);

  /* functions */
  const tree = new LSystem({
    axiom: "F++F++F",
    productions: {
      F: "F-F++F-F",
    },
    finals: {
      F: () => {
        ctx.beginPath(), ctx.moveTo(0, 0);
        ctx.lineTo(0, 25 / (tree.iterations + 1));
        ctx.stoke(), ctx.translate(0, 25 / (tree.iterations + 1));
      },
    },
  });

  /* body */
});
