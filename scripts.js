$(document).ready(function () {
  //   let a = `$$\\sum_{i=1}^{+\\infty} x^i$$`;
  //   let d = $("#formula").text(a);
  let i = 0;
  $("#formula").text("$$ x^1 $$");
  MathJax.typeset(["#formula"]);
  setInterval(function () {
    $("#formula").text(`$$\\sum_{i=1}^{+\\infty} x^{${i}}$$`);
    i += 1;
    MathJax.typeset(["#formula"]);
    // console.log("Hello");
    // console.log(MathJax);
  }, 1000);
});
// window.MathJax = {
//   startup: {
//     ready: () => {
//       MathJax.startup.defaultReady();
//       MathJax.startup.promise.then(() => {
//         console.log("MathJax initial typesetting complete");
//       });
//     },
//   },
// };
