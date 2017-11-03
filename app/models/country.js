import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  hidden: DS.attr('boolean')
});
