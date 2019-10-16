var certificationRecord = new Vue({
  el: '#certificationRecord',
  data: {
    certifications: [],
    recordCertification: {}
  },
  methods: {
    fetchCertifications() {
      fetch('api/certification/index.php')
      .then(response => response.json())
      .then(json => { certificationRecord.certifications = json })
    },
    handleSubmit(event) {
      fetch('api/certification/post.php', {
        method:'POST',
        body: JSON.stringify(this.recordCertification),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then(response => response.json())
      .then(json => { certificationRecord.certifications.push(json[0]) })
      .catch(err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      });

      this.handleReset();
      this.fetchCertifications();
    },
    handleReset() {
      this.recordCertification = {
        certification_name: '',
        certification_agency: '',
        exp_period: ''
      }
    }
    // handleRowClick(patient) {
    //   patientTriageApp.patient = patient;
  }, // end methods
  created() {
    this.handleReset();
    this.fetchCertifications();
  }
});
