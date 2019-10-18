var memberRecordsApp = new Vue({
  el: '#memberRecordsApp',
  data: {
    members: [],
    recordMember: {},
  },
  methods: {
    fetchMembers() {
      fetch('api/member/fetch.php')
      .then(response => response.json())
      .then(json => { memberRecordsApp.members = json })
    },
    handleSubmit(event) {
      fetch('api/member/create.php', {
       method:'POST',
       body: JSON.stringify(this.recordMember),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
      })
      .then ( response => response.json() )
      .then ( json => {memberRecordsApp.members.push(json[0])})
      .catch(err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
        });
      this.handleReset();
      // this.fetchMembers();
    },
    handleReset() {
      this.recordMember = {
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        radioNumber: '',
        stationNumber: '',
        email: '',
        position: '',
        phoneNumber: '',
        address: '',
        startDate: '',
        isActive: ''
      }
    },
    handleDelete(c) {
      fetch('api/member/delete.php', {
       method:'POST',
       body: JSON.stringify(c),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
      })
      .then ( response => response.json() )
      .then ( json => { memberRecordsApp.members = json });
      memberEditsApp.handleReset();
    },
    handleRowClick(member) {
      memberEditsApp.editMember = member;
    }
  }, // end methods
  created() {
    this.handleReset();
    this.fetchMembers();

  }
});
