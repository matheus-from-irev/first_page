document.getElementById("redirect-button").addEventListener("click", function() {
    let clickId = ""
    clickId = new URLSearchParams(window.location.search).get("click_id");
    window.location.href = "https://example.com?click_id=" + clickId;
  });
