import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['country'],
  classNameBindings: ['countryDetailHidden'],
  countryDetailHidden: false,
  actions: {
    toggleCountryDetail () {
      return this.toggleProperty('countryDetailHidden');
    },
    toggleNoteDone (note) {
      return this.sendAction('toggleNoteDone', note);
    },
    deleteNote(note) {
      return this.sendAction('deleteNote', note);
    },
    createNote(note) {
      note.country = this.get('country');
      return this.sendAction('createNote', note);
    }
      },

});
