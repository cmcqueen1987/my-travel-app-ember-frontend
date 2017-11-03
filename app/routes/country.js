import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('country', params.country_id);
  },
  actions: {
  toggleNoteDone(note) {
    note.toggleProperty('done');
    note.save();
  },
  deleteNote(note) {
    note.destroyRecord();
  },
  createNote(note){

    let newNote = this.get('store').createRecord('note', note);
    newNote.save();
    // let newItem = this.get('store').createRecord
  }
}
});
