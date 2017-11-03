import Ember from 'ember';

export default Ember.Component.extend({
  newNote: {
    content: null,
    done: false
  },
  actions: {
    createNote(){
      this.sendAction('createNote', this.get('newNote'));
      return this.set('newNote.content', null);
      //console.log(this.get('newItem'));
    }
  }
});
