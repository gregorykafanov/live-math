$(document).ready(function () {
  $("#my-other").on("show.bs.drawer", function () {
    $("#my-input").trigger("focus");
  });
  //   let i = 1;
  //   $("#formula").text(`$$\\sum_{i=1}^{+\\infty} x^{${0}}$$`);
  //   let k = 1;
  //   let j = `\\sum_{i=1}^{+\\infty} x^{i}`;
  //   MathJax.typeset();
  //   MathJax.typeset(["#formula"]);
  //   setInterval(function () {
  //     $("#formula").text(`$$\\sum_{i=1}^{+\\infty} x^{${i}}$$`);
  //     i += 1;
  //     MathJax.typeset(["#formula"]);
  //   }, 1000);
  //   setInterval(function () {
  //     $("#formula-2").text(`$$ ${j}  $$`);
  //     if (k == 1) {
  //       j += `=x^{${k}}`;
  //     } else {
  //       j += `+ x^{${k}}`;
  //     }
  //     k += 1;
  //     MathJax.typeset(["#formula-2"]);
  //   }, 1000);
});
