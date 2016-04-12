Template.questions.helpers({
  questions: function(){
    return Questions.find({}).map((question, index) => Object.assign({}, question, { i: index }));
  },

  equals: function(v1, v2) {
    return (v1 === v2);
  }
})
