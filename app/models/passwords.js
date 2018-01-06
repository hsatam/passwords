import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr(),
  password: DS.attr(),
  applicationName: DS.attr(),
  applicationURL: DS.attr()
});
