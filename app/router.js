import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('countries');
  this.route('country', { path: '/countries/:country_id' });
  this.route('edit', { path: '/countries/:country_id/edit' });
});

export default Router;
