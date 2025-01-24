document.getElementById("redirect-button").addEventListener("click", function() {

  // INSERT POSTBACK URL OF THE GOAL TYPE HERE
  var postback = "https://demo-igaming.irev.com/backend/api/v3/goal-type-fire/16?hash=REPLACE"
  var redirectionPage = "https://second-page-rho.vercel.app/"

  const clickId = new URLSearchParams(window.location.search).get("click_id");
  postback = postback.replace("REPLACE", clickId);
  window.location.href = redirectionPage + "?click_id=" + encodeURIComponent(clickId);
});
