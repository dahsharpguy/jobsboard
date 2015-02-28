AutoForm.hooks({
    insertJobsForm:{
        onSuccess: function(operation,result,template){
            Router.go ('jobs')
        },
        OnError: function(operation,error,template){
            alert(error)
        }
    }
});
