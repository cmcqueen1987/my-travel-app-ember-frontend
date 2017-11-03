import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('country', params.country_id);
  },
  actions: {

  },
});
