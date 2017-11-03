import Ember from 'ember';

export default Ember.Component.extend({
  show: false,
  newCountry: {
    name: null,
    hidden: false
  },
  actions: {
    createCountry () {
      this.sendAction('createCountry', this.get('newCountry'));
      this.set('newCountry.name', null);
    },
    pressed () {
      this.toggleProperty('show');
    }
  }
});
