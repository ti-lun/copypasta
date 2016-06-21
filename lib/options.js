$("#blah").val("blah");

$('.template_submit').click(function() {
  chrome.tabs.create({ url: "http://reddit.com/"});
});
