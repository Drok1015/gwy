// Initialize your app
var myApp = new Framework7({
    precompileTemplates: true,
    template7Pages: true,
});

var $$ = Dom7;
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true,
});

var listTemplate = $$('script#listTemplate').html();
var compiledListTemplate = Template7.compile(listTemplate);











