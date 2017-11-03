import Ember from 'ember';

export default Ember.Route.extend({
flashMessages: Ember.inject.service(),

model () {
  return this.get('store').findAll('country');
},
actions: {
  createCountry (country) {
    let newCountry = this.get('store').createRecord('country', country);
      newCountry.save()
      .then(() => {
        this.get('flashMessages').warning('Country Added');
      });

}
}
});
