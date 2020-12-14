$(document).ready(function () {
  $("article").each(function () {
    let _this = $(this);

    _this.readingTime({
      readingTimeTarget: _this.find(".eta"),
      wordCountTarget: _this.find(".words"),
      remotePath: _this.attr("data-file"),
      remoteTarget: _this.attr("data-target"),
    });
  });
});
