module.exports = {

  setUp : function (browser) {
    console.log('Setting up...');
    browser
      .url("http://jqueryui.com/resources/demos/draggable/default.html")
      .useCss()
      .waitForElementVisible('#draggable', 5000);
  },

  "Drag and drop test (useXpath)" : function (browser) {
    browser
      .useXpath()
      .moveToElement('//*[@id="draggable"]',  0,  0)
      .mouseButtonDown(0)
      .moveToElement('/html/body',  200,  600)
      .mouseButtonUp(0)
      .pause(5000)  // Keep browser open for 10 seconds so you can see result
      .end();
  },

  "Drag and drop test (useCss)" : function (browser) {
    browser
      .useCss()
      .moveToElement('#draggable',  0,  0)
      .mouseButtonDown(0)
      .moveToElement('body',  200,  600) // Move to offset position of 200(x) 600(y)
      .mouseButtonUp(0)
      .pause(5000)  // Keep browser open for 10 seconds so you can see result
      .end();
  }
}
;