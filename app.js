
var appRest = new Vue({
  el: '#appRest',
  data: {
    contacts: {},
    e: [],
    last_name: '',
    first_name: '',
    email: '',
    website:''
  },
  methods: {
    postContact: function () {
	  	axios.post('http://localhost:3001/api/contacts', {
	  		first_name: this.first_name,
	  		last_name: this.last_name,
	  		email: this.email,
	  		website: this.website
	  	})
	  	.then(response => {})
	  	.catch(e => {
	  		this.errors.push(e)
	  	});
  },

  	getContacts: function () {
      // this.$http.get('http://localhost:3001/api/contacts').then(response => {
	  	axios.get('http://localhost:3001/api/contacts')
  	  	.then(response => {
      // JSON responses are automatically parsed.
	      this.contacts = response.data
	      console.log(this.contacts);
      	})
      	.catch(e => {
      	  this.errors.push(e)
      	  console.log(e);
      	});
    }
}
});


///Figure a way to proc this method with a windows.onload event listener???
appRest.getContacts();
// appRest.postContact();