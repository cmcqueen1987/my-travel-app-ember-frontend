import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  createRecord(store, type, record){
    const api = this.get('host');
    console.log(record);
    const serialized = this.serialize(record);
    // console.log('no id', serialized)
    const countryId = serialized.country_id;
    const url = api + '/countries/' + countryId + '/notes';
    // const url = `$(api)/lists/$(list_id)
    const data = {note: serialized};
    return this.ajax(url, 'POST', {data});
  }
});
