import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
classNameBindings: ['countryCompleted'],
countryCompleted: Ember.computed.alias('country.done'),
actions: {
  toggleDone () {
    return this.sendAction('toggleCountryDone', this.get('country')); //send up to shopping list component
  },
  actions: {
    deleteCountry () {
    return this.sendAction('deleteCountry', this.get('country'));
     }
  }
});
