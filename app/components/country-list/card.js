import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteCountry () {
    return this.sendAction('deleteCountry', this.get('country'));
     }
  }
});
