$(function () {
  // auto type text

  async function autoType(elementClass, typingSpeed) {
    var thhis = $(elementClass);

    // set height
    const height = $(thhis).css("height");
    thhis.css({
      position: "relative",
      display: "inline-block",
    });
    // thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
    thhis = thhis.find(".info_text");
    $(thhis).css("height", height);
    var text = thhis.text().trim().split("");

    var amntOfChars = text.length;
    var newString = "";
    thhis.text("|");
    // setTimeout(function () {
    thhis.css("opacity", 1);
    thhis.prev().removeAttr("style");
    thhis.text("");
    for (var i = 0; i < amntOfChars; i++) {
      (function (i, char) {
        setTimeout(function () {
          newString += char;
          thhis.text(newString);
        }, i * typingSpeed);
      })(i + 1, text[i]);
    }
    // }, 1500);
  }
  autoType($("#hero .info"), 50);
});
