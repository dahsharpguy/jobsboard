Router.configure({
  layoutTemplate: "masterLayout",
  routeControllerNameConverter: "camelCase"
})

Router.route('/', function () {      // Route is the path after the url
  this.render('home');               // 'home' refers to the home template
}, {
  name: 'home'                       // name is an arbitrary value. Useful for helpers
});

Router.route('/job', function () {
  this.render('job');
}, {
  name: 'job'
});

Router.route('/about', function () {
  this.render('about');
}, {
  name: 'about'
});