Jobs = new Mongo.Collection('jobs');

Jobs.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },

  description: {
    type: String,
    label: "Description",
     min: 0
  },

  category: {
    type: String,
    autoform: {
      options: function(){
        return[
        {value: 'fellows', label:'Teaching Fellow'},
        {value: 'web', label:'Web Developer'},
        {value: 'kitchen', label:'Kitchen'},
        {value: 'mobile', label:'Mobile Developer'},
        {value: 'other', label:'Other'}
        ]
      }
    }
  },

	email: { 
	type: String, 
  	regEx: SimpleSchema.RegEx.Email,
  	label: "E-mail address" 
  	},

//   picture: {
//     type: String,
//     autoform: {
//       afFieldInput: {
//         type: 'fileUpload',
//         collection: 'Images'
//     }
//   },
//   label: 'Choose File'
// },

    owner:{
    type: String,
    autoform:{
      omit: true
    },
    autoValue: function(){
      return Meteor.userId();
    }
  } 	
}));