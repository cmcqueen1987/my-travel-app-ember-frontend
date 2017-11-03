import Ember from 'ember';
export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('country', params.country_id);
  },
  actions: {
   editCountry (country) {
      country.save()
      .then(() => {
        this.get('flashMessages').warning('Country Edited');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('Editing failed');
      });

    }
  }
});
