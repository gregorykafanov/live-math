$(document).ready(function () {
  //   let a = `$$\\sum_{i=1}^{+\\infty} x^i$$`;
  //   let d = $("#formula").text(a);
  let i = 0;
  $("#formula").text("$$ x^1 $$");
  setInterval(function () {
    // $("#formula").text(`$$\\sum_{i=1}^{+\\infty} x^${i}$$`);
    i += 1;
    console.log("Hello");
  }, 1000);
});
