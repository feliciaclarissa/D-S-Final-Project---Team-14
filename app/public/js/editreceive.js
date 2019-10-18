var receiveEditsApp = new Vue({
  el: '#receiveEditsApp',
  data: {
    editReceive: {},
  },
  methods: {
    handleEdit() {
      fetch('api/enrollment/edit.php', {
       method:'POST',
       body: JSON.stringify(this.editReceive),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
      })
      .then ( response => response.json() )
      .then ( json => { receiveRecordsApp.receive = json });
      this.handleReset();
    },
    handleReset() {
      this.editReceive = {
        certificateStartDate: '',
        certificateEndDate: ''
      }
    }
  }, // end methods
  created() {
    this.handleReset();
    this.handleEdit();
  }
});
