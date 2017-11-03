import Ember from 'ember';

export default Ember.Component.extend({
  newCountry: {
    title: null,
    hidden: false
  },
  actions: {
    createCountry () {
      this.sendAction('createCountry', this.get('newCountry'));
      this.set('newCountry.title', null);
     }
  }
});
