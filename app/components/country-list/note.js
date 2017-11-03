import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['countryNoteCompleted'],
  countryNoteCompleted: Ember.computed.alias('note.done'),
  actions: {
    toggleDone () {
      return this.sendAction('toggleNoteDone', this.get('note')); //send up to shopping list component
    },
    deleteNote() {
      return this.sendAction('deleteNote', this.get('note'));
    }
  },
});
