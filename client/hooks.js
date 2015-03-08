AutoForm.addHooks(null,	{
onError: function(operation,error,template){
console.log('Error: ' + error);
}
})

// Hooks for application
AutoForm.hooks({
insertApplicationForm: {
onSuccess: function(operation, result, template) {
Router.go('jobs')
},
onError: function(operation, error, template) {
alert(error)
}
}
});



AutoForm.hooks({
insertApplicationForm: {
formToDoc: function(doc, ss, formId) {
console.log(doc);
doc.jobs = Router.current().params._id;
console.log(doc);
return doc;
}
}
});

//User Id Hooks for jobs and  application
AutoForm.hooks({
insertJobsForm: {
onSuccess: function(operation, result, template) {
Router.go('jobs')
},
onError: function(operation, error, template) {
alert(error)
}
}
});
 