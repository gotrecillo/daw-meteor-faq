Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  // Home
  this.route('questions', {
    path: '/',
    template: 'questions'
  })
});
