import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editCountry () {
      this.sendAction('editCountry', this.get('country'));
     }
  }
});
