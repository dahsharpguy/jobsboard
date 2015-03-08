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
})

Router.route('/jobs', function () {
  this.render('jobs');
}, 
{
  name: 'jobs',
  data: function(){
    return {
       jobs: Jobs.find().fetch()
   }
  }
});

Router.route('/jobs/:category/', function () {
	this.render('jobs');

},

{
	name: 'jobsCategory',
	data: function(){
		return {
			 jobs: Jobs.find({category: this.params.category}).fetch().reverse(),
			pageTitle: 'category:' + this.params.category

		}
	}
})


Router.route('/jobs/detail/:_id', function(){
	this.render('jobsDetail');
},
{
	name: 'jobsDetail',
	data: function(){
		var _id = this.params._id;
		return{
			jobs: Jobs.findOne(_id),
			applications: Applications.find({jobs: _id}).fetch()
		}
	}
})

Router.route('/dashboard', function(){
  this.render('dashboard');
},{
  name: 'dashboard',
  data: function(){
    if (Meteor.userId()){
      return {
        jobs: Jobs.find({owner: Meteor.userId()}).fetch()
      }
    }
  }
})


