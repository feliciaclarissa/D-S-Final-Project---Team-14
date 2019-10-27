var reportsApp = new Vue({
  el: '#reportsApp',
  data: {
    members: [],
    },

  methods: {
    handleGet() {
      fetch('api/reports/index.php')
      .then ( response => response.json() )
      .then ( json => { reportsApp.members = json });
    },
  }, // end methods
  created() {
    this.handleGet();


  }
});
