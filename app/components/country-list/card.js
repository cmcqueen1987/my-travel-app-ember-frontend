import Ember from 'ember';

export default Ember.Component.extend({

classNameBindings: ['countryCompleted'],
countryCompleted: Ember.computed.alias('country.done'),
actions: {
  toggleCountryDone () {
    return this.sendAction('toggleCountryDone', this.get('country')); //send up to shopping list component
  },

    deleteCountry () {
    return this.sendAction('deleteCountry', this.get('country'));
  },
  clicked () {
    this.toggleProperty('show');
  }
}
});
