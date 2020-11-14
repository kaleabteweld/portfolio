function autoType(elementClass, element, typingSpeed) {
  return new Promise(function (resolve, reject) {
    var thhis = $(elementClass);

    // set height
    const height = $(thhis).css("height");
    thhis.css({
      position: "relative",
      display: "inline-block",
    });
    // thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
    thhis = thhis.find($(element));
    $(thhis).css("height", height);
    var text = thhis.text().trim().split("");

    var amntOfChars = text.length;
    var newString = "";
    thhis.text("|");
    // setTimeout(function () {
    thhis.css("opacity", 1);
    thhis.prev().removeAttr("style");
    thhis.text("");
    for (var i = 0; i < amntOfChars + 1; i++) {
      (function (i, char) {
        setTimeout(function () {
          if (i - 1 == amntOfChars) {
            resolve();
          } else {
            newString += char;
            thhis.text(newString);
          }
        }, i * typingSpeed);
      })(i + 1, text[i]);
    }
    // }, 1500);
  });
}

$(function () {
  // auto type text
  autoType($("#hero .title"), $("#hero .title .cont .pir"), 500).then(() => {
    $("#hero .title .cont .sub").animate(
      {
        //-^------------ remove .
        opacity: 1,
      },
      800,
      function () {
        console.log("Animation complete.");
      }
    );
  });
});
