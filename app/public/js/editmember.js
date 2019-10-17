var memberEditsApp = new Vue({
  el: '#memberEditsApp',
  data: {
    editMember: {},
  },
  methods: {
    handleEdit() {
      fetch('api/member/edit.php', {
       method:'POST',
       body: JSON.stringify(this.editMember),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
      })
      .then ( response => response.json() )
      .then ( json => { memberRecordsApp.members = json });
      this.handleReset();
    },
    handleReset() {
      this.editMember = {
        firstName: '',
        lastName: ''
      }
    }
  }, // end methods
  created() {
    this.handleReset();
    this.handleEdit();

  }
});
