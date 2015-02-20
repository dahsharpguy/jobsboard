Router.configure({
  layoutTemplate: "masterLayout",
  routeControllerNameConverter: "camelCase"
})

Router.route('/', function () {      // Route is the path after the url
  this.render('home');               // 'home' refers to the home template
}, {
  name: 'home'                       // name is an arbitrary value. Useful for helpers
});

Router.route('/about', function () {
  this.render('about');
}, 
{
  name: 'about'
});


Router.route('/job', function () {
  this.render('job');
}, 
{
  name: 'job',
  
  data: function(){
  	return {
  		job: Job.find().fetch(),
  	}
  }

});

  Router.route('/job/jobTitle/', function () {
  this.render('job');
}, 
{
  name: 'jobTitle',

  data: function() { 
  return {               
  		job: Jobs.find({jobTitle: this.params.title}).fetch(), 
 
  	}
  }
})

//  Router.route('/job/jobDescription/:_id', function(){
//  this.render('jobDescription');

// },
// {
// 	name: 'jobDescription',

// 	data: function () {
// 		var_id = this.params_id;

// 		return{
// 			job: Job.findOne(_id)
// 		}
// 	}
// });