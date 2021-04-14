/* let content load */
document.addEventListener("DOMContentLoaded", () => {
  /* variables */
  const canvas = document.querySelector("canvas#mainCanvas");
  const tree = new LSystem({
    axiom: "F++F++F",
    productions: {
      F: "F-F++F-F",
    },
  });

  /* body */
  const result = tree.iterate(2);
  console.log(result);
});
