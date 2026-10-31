// 베타 안내 공통: 누른 단계에 완료 표시(이 기기에만 저장), 링크 복사.
(function () {
  var KEY = "dinary-beta-done";
  var done = {};
  try { done = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) {}
  var steps = document.querySelectorAll(".step[data-step]");
  steps.forEach(function (step) {
    var id = step.getAttribute("data-step");
    if (done[id]) step.classList.add("done");
    var link = step.querySelector("[data-mark]");
    if (link) link.addEventListener("click", function () {
      done[id] = 1;
      step.classList.add("done");
      try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {}
    });
  });
  document.querySelectorAll("[data-copy]").forEach(function (b) {
    b.addEventListener("click", function () {
      var url = location.href;
      var ok = function () { b.textContent = "복사했어요 ✓"; };
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(ok, function () { prompt("이 링크를 복사해 주세요", url); });
      else prompt("이 링크를 복사해 주세요", url);
    });
  });
})();
