import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['country'],
  classNameBindings: ['countryDetailHidden'],
  countryDetailHidden: false,
  actions: {
  toggleCountryDetail () {
        return this.toggleProperty('countryDetailHidden');
      },
      toggleCountryDone (country) {
        return this.sendAction('toggleCountryDone', country);
      }
      },

});
