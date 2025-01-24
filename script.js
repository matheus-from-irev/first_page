document.getElementById("redirect-button").addEventListener("click", function() {
    let clickId = ""
    clickId = new URLSearchParams(window.location.search).get("click_id");
    window.location.href = "https://matheus-from-irev.github.io/second_page?click_id=" + clickId;
  });
