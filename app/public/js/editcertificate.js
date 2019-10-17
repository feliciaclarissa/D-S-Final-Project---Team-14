var certificateEditsApp = new Vue({
  el: '#certificateEditsApp',
  data: {
    editCertificate: {},
  },
  methods: {
    handleEdit() {
      fetch('api/certification/edit.php', {
       method:'POST',
       body: JSON.stringify(this.editCertificate),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
      })
      .then ( response => response.json() )
      .then ( json => { certificationRecord.certifications = json });
      this.handleReset();
    },
    handleReset() {
      this.editCertificate = {
        certification_agency: '',
        exp_period: ''
      }
    }
  }, // end methods
  created() {
    this.handleReset();
    this.handleEdit();

  }
});
