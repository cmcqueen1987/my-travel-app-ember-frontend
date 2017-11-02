import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  model () {
    return RSVP.Promise.resolve({});
  },

  actions: {
    signIn (credentials) {
      this.get('auth').signIn(credentials)
      //.then(() => this.transitionTo('application'))
      .then(() => {
        credentials.password = null;
        credentials.email = null;

        this.transitionTo('application');

      this.get('flashMessages')
      .success('Thanks for signing in!');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
});
