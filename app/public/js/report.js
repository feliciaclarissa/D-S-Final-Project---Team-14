var receiveRecordsApp = new Vue({
  el: '#receiveRecordsApp',
  data: {
    receive: [],
    receive_reportTwo: [],
    members: [],
    certifications: [],
    filter: {
      certificationID: '',
      radioNumber: '',
      stationNumber: ''
    }
  },
  methods: {
    fetchreceive() {
      fetch('api/report/index.php')
      .then(response => response.json())
      .then(json => { receiveRecordsApp.receive = json })
    },
    fetchCertifications() {
      fetch('api/certification/index.php')
      .then(response => response.json())
      .then(json => { receiveRecordsApp.certifications = json })
    },
    fetchreceiveTwo() {
      fetch('api/report/index_reportTwo.php')
      .then(response => response.json())
      .then(json => { receiveRecordsApp.receive_reportTwo = json })
    },
    fetchMembers() {
      fetch('api/member/fetch.php')
      .then(response => response.json())
      .then(json => { receiveRecordsApp.members = json })
    }
    // handleSubmit(event) {
    //   TODO:
    //   fetch('api/enrollment/post.php', {
    //    method:'POST',
    //    body: JSON.stringify(this.recordReceive),
    //    headers: {
    //      "Content-Type": "application/json; charset=utf-8"
    //    }
    //   })
    //   .then ( response => response.json() )
    //   .then ( json => {
    //     receiveRecordsApp.receive.push(json[0]);
    //   })
    //   .catch(err => {
    //     console.error('RECORD POST ERROR:');
    //     console.error(err);
    //     });
    //   this.handleReset();
    //   // this.fetchreceive();
    // },
    // handleDelete(r) {
    //   fetch('api/enrollment/delete.php', {
    //    method:'POST',
    //    body: JSON.stringify({enrollmentID: r.enrollmentID}),
    //    headers: {
    //      "Content-Type": "application/json; charset=utf-8"
    //    }
    //   })
    //   .then ( response => response.json() )
    //   .then ( json => { receiveRecordsApp.receive = json });
    //   receiveEditsApp.handleReset();
    // },
    // handleReset() {
    //   this.recordReceive = {
    //     enrollmentID: '',
    //     memberID: '',
    //     certificationID: '',
    //     certificateIsActive: '',
    //     certificateStartDate: '',
    //     certificateEndDate: ''
    //   }
    // },
    // handleRowClick(receive) {
    //   receiveEditsApp.editReceive = receive;
    // }
    // handleRowClick(patient) {
    //   patientTriageApp.patient = patient;
    // }
  }, // end methods
  created() {
    // this.handleReset();
    this.fetchreceive();
    this.fetchMembers();
    this.fetchCertifications();
    this.fetchreceiveTwo();
  }
});
