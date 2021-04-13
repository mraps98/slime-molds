/* let content load */
document.addEventListener("DOMContentLoaded", () => {
  /* variables */
  const canvas = document.querySelector("canvas#mainCanvas");
  const t = new jjs.Turtle(canvas);
  let ls;

  /* functions */
  const kochCurve = (t) => {
    var d0 = t.canvasWidth - 20;
    var d;
    var ls = new jjs.Lsystem(
      {
        F: function () {
          t.forward(d);
        },
        "+": function () {
          t.left(60);
        },
        "-": function () {
          t.right(60);
        },
      },
      [{ id: "F" }],
      [
        {
          p: [{ id: "F" }],
          s: function () {
            return [
              { id: "F" },
              { id: "+" },
              { id: "F" },
              { id: "-" },
              { id: "-" },
              { id: "F" },
              { id: "+" },
              { id: "F" },
            ];
          },
        },
      ]
    );
    t.moveTo(-d0 / 2, -(t.canvasHeight / 2) + 10);
    ls.beforeRender = function () {
      d = d0 * (1 / Math.pow(3, ls.generation));
    };
    return ls;
  };

  /* body */
  ls = kochCurve(t);
  ls.render();
  console.log(ls.render);
});
