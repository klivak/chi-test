<template>
  <section class="container">

    <div class="row">
      <div class="col-md-12 text-center">
        <h1>Test 1: Online Bank Account</h1>
        <hr>
      </div>
    </div>

    <div class="row" v-show="!formSubmited">
      <div class="col-md-6">

        <div class="row">

          <div class="col-md-12">
            <h3>Enter information:</h3>
            <hr>
          </div>

          <div class="col-md-12">
            <form @submit.prevent="userSubmit">
              <h5>Personal Information</h5>

              <div class="column is-12">
                <label class="label">Title</label>
                <p class="control has-icon has-icon-right">
                  <input name="title" v-model="user.personalInformation.title" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('title') }"
                    type="text" placeholder="Title">
                  <i v-show="errors.has('title')" class="fa fa-warning"></i>
                  <span v-show="errors.has('title')" class="help is-danger">{{ errors.first('title') }}</span>
                </p>
              </div>

              <div class="column is-12">
                <label class="label">First Name</label>
                <p class="control has-icon has-icon-right">
                  <input name="firstName" v-model="user.personalInformation.firstName" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('firstName') }"
                    type="text" placeholder="First Name">
                  <i v-show="errors.has('firstName')" class="fa fa-warning"></i>
                  <span v-show="errors.has('firstName')" class="help is-danger">{{ errors.first('firstName') }}</span>
                </p>
              </div>

              <div class="column is-12">
                <label class="label">Middle Name</label>
                <p class="control has-icon has-icon-right">
                  <input name="middleName" v-model="user.personalInformation.middleName" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('middleName') }"
                    type="text" placeholder="Middle Name">
                  <i v-show="errors.has('middleName')" class="fa fa-warning"></i>
                  <span v-show="errors.has('middleName')" class="help is-danger">{{ errors.first('middleName') }}</span>
                </p>
              </div>


              <div class="column is-12">
                <label class="label">Last Name</label>
                <p class="control has-icon has-icon-right">
                  <input name="lastName" v-model="user.personalInformation.lastName" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('lastName') }"
                    type="text" placeholder="Last Name">
                  <i v-show="errors.has('lastName')" class="fa fa-warning"></i>
                  <span v-show="errors.has('lastName')" class="help is-danger">{{ errors.first('lastName') }}</span>
                </p>
              </div>


              <div class="column is-12">
                <label class="label">Email</label>
                <p class="control has-icon has-icon-right">
                  <input name="email" v-model="user.personalInformation.email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }"
                    type="text" placeholder="Email">
                  <i v-show="errors.has('email')" class="fa fa-warning"></i>
                  <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                </p>
              </div>


              <div class="column is-12">
                <label class="label">Mobile Phone</label>
                <p class="control has-icon has-icon-right">
                  <input name="mobilePhone" v-model="user.personalInformation.mobilePhone" v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('mobilePhone') }"
                    type="text" placeholder="Mobile Phone">
                  <i v-show="errors.has('mobilePhone')" class="fa fa-warning"></i>
                  <span v-show="errors.has('mobilePhone')" class="help is-danger">{{ errors.first('mobilePhone') }}</span>
                </p>
              </div>

              <div class="column is-12">
                <label class="label">Home Phone</label>
                <p class="control has-icon has-icon-right">
                  <input name="homePhone" v-model="user.personalInformation.homePhone" v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('homePhone') }"
                    type="text" placeholder="Home Phone">
                  <i v-show="errors.has('homePhone')" class="fa fa-warning"></i>
                  <span v-show="errors.has('homePhone')" class="help is-danger">{{ errors.first('homePhone') }}</span>
                </p>
              </div>


              <div class="column is-12">
                <label class="label">Mailing Address</label>
                <p class="control has-icon has-icon-right">
                  <input name="mailingAddress" v-model="user.personalInformation.mailingAddress" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('mailingAddress') }"
                    type="text" placeholder="Mailing Address">
                  <i v-show="errors.has('mailingAddress')" class="fa fa-warning"></i>
                  <span v-show="errors.has('mailingAddress')" class="help is-danger">{{ errors.first('mailingAddress') }}</span>
                </p>
              </div>



              <div class="column is-12">
                <label class="label">Social Security Number</label>
                <p class="control has-icon has-icon-right">
                  <input name="socialSecurityNumber" v-model="user.personalInformation.socialSecurityNumber" v-validate="'required|numeric'"
                    :class="{'input': true, 'is-danger': errors.has('socialSecurityNumber') }" type="text" placeholder="Social Security Number">
                  <i v-show="errors.has('socialSecurityNumber')" class="fa fa-warning"></i>
                  <span v-show="errors.has('socialSecurityNumber')" class="help is-danger">{{ errors.first('socialSecurityNumber') }}</span>
                </p>
              </div>

              <!-- mailingAddress: '', -->
              <!-- socialSecurityNumber: '' -->

              <button type="submit" class="btn btn-primary">Submit</button>

            </form>

            <button @click="saveData" class="btn btn-secondary">Save</button>

          </div>

        </div>

      </div>



      <div class="col-md-6">
        <h3>Your information:</h3>
        <hr>
        <h5>Personal Information:</h5>
        <p>
          <strong>Title:</strong> {{user.personalInformation.title}}
        </p>
        <p>
          <strong>First Name:</strong> {{user.personalInformation.firstName}}
        </p>
        <p>
          <strong>Middle Name:</strong> {{user.personalInformation.middleName}}
        </p>
        <p>
          <strong>Last Name:</strong> {{user.personalInformation.lastName}}
        </p>

        <p>
          <strong>Email:</strong> {{user.personalInformation.email}}
        </p>

        <p>
          <strong>Mobile Phone:</strong> {{user.personalInformation.mobilePhone}}
        </p>

        <p>
          <strong>Home Phone:</strong> {{user.personalInformation.homePhone}}
        </p>

        <p>
          <strong>Mailing Address:</strong> {{user.personalInformation.mailingAddress}}
        </p>

        <p>
          <strong>Social Security Number:</strong> {{user.personalInformation.socialSecurityNumber}}
        </p>

        <hr>
        <h5>Employment Information:</h5>

        <hr>
        <h5>Account Information:</h5>

        <hr>
        <h5>Documentation:</h5>

      </div>

    </div>

    <div class="row alert alert-info" v-show="formHelpError">
      <div class="col-md-12 ">
        <span>If you have problems sending the form, please contacts us via this phone number
          <a class="alert-link" href="tel:+6600000000">+ 66 000 000 00</a>.</span>
      </div>
    </div>

    <div class="row" v-show="formSubmited">
      <div class="col-md-12">
        <h5>Thank you for apply </h5>
      </div>

      <div class="col-md-12">
        Your account number is ->
        <strong>
          {{user.accountNumber}}
        </strong>
        <span> </span>
      </div>
    </div>


    <div class="panel-body">
      <br>
      <table class="table table-striped table-responsive">
        <thead>
          <tr>
            <th>Number</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile Phone</th>
            <th>Home Phone</th>
            <th>Mailing Adress</th>
            <th>Social Security Number</th>

            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{user.accountNumber}}</td>
            <td>{{user.personalInformation.title}}</td>
            <td>{{user.personalInformation.firstName}}</td>
            <td>{{user.personalInformation.middleName}}</td>
            <td>{{user.personalInformation.lastName}}</td>
            <td>{{user.personalInformation.email}}</td>
            <td>{{user.personalInformation.mobilePhone}}</td>
            <td>{{user.personalInformation.homePhone}}</td>
            <td>{{user.personalInformation.mailingAddress}}</td>
            <td>{{user.personalInformation.socialSecurityNumber}}</td>
            <td>
              <span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeUser(user)">x</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>


  </section>
</template>

<script>
import Firebase from 'firebase';
import toastr from 'toastr';
import Vue from 'vue';

let config = {
  apiKey: 'AIzaSyA-MauD4R1qYBIelcxrz8jd0er45jbPZa4',
  authDomain: 'numeric-marker-100508.firebaseapp.com',
  databaseURL: 'https://numeric-marker-100508.firebaseio.com',
  storageBucket: 'numeric-marker-100508.appspot.com',
  messagingSenderId: '376340369406'
};

let app = !Firebase.apps.length ? Firebase.initializeApp(config) : Firebase.app();

let db = app.database();

let usersRef = db.ref('users');

export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css'
      }
    ]
  },
  firebase: {
    users: usersRef
  },
  data() {
    return {
      formSubmited: false,
      formHelpError: false,
      user: {
        accountNumber: '',
        personalInformation: {
          title: '',
          firstName: '',
          middleName: '',
          lastName: '',
          homePhone: '',
          mobilePhone: '',
          email: '',
          mailingAddress: '',
          socialSecurityNumber: ''
        }
      }
    };
  },
  methods: {
    userSubmit() {
      this.user.accountNumber = Date.now();
      this.$validator.validateAll().then(result => {
        if (result) {
          usersRef.push(this.user);

          // this.user.personalInformation.title = '';
          // this.user.personalInformation.firstName = '';
          // this.user.personalInformation.middleName = '';
          // this.user.personalInformation.lastName = '';
          // this.user.personalInformation.Email = '';

          toastr.clear();
          toastr.success('Your information was send successfully');
          // alert('Form Submitted!');
          this.formSubmited = !this.formSubmited;
          this.formHelpError = false;

          Vue.localStorage.set('firstName', '');

          return;
        }

        this.formHelpError = true;

        toastr.warning('Your have some errors');
      });

      // Send data to the server or update your stores and such.
    },
    removeUser: function(user) {
      usersRef.child(user['.key']).remove();
    },
    saveData: function() {
      // console.log('you clicked SAVE');
      Vue.localStorage.set('accountNumber', this.user.accountNumber);
      Vue.localStorage.set('title', this.user.personalInformation.title);
      Vue.localStorage.set('firstName', this.user.personalInformation.firstName);
      Vue.localStorage.set('middleName', this.user.personalInformation.middleName);
      Vue.localStorage.set('lastName', this.user.personalInformation.lastName);
      Vue.localStorage.set('email', this.user.personalInformation.email);
      Vue.localStorage.set('mobilePhone', this.user.personalInformation.mobilePhone);
      Vue.localStorage.set('homePhone', this.user.personalInformation.homePhone);
      Vue.localStorage.set('mailingAddress', this.user.personalInformation.mailingAddress);
      Vue.localStorage.set(
        'socialSecurityNumber',
        this.user.personalInformation.socialSecurityNumber
      );

      // console.log(Vue.localStorage.set('firstName', this.user.personalInformation.firstName));
    }
  },
  mounted() {
    if (process.browser) {
      this.user.accountNumber = Vue.localStorage.get('accountNumber', '');
      this.user.personalInformation.title = Vue.localStorage.get('title', '');
      this.user.personalInformation.firstName = Vue.localStorage.get('firstName', '');
      this.user.personalInformation.middleName = Vue.localStorage.get('middleName', '');
      this.user.personalInformation.lastName = Vue.localStorage.get('lastName', '');
      this.user.personalInformation.email = Vue.localStorage.get('email', '');
      this.user.personalInformation.mobilePhone = Vue.localStorage.get('mobilePhone', '');
      this.user.personalInformation.homePhone = Vue.localStorage.get('homePhone', '');
      this.user.personalInformation.mailingAddress = Vue.localStorage.get('mailingAddress', '');
      this.user.personalInformation.socialSecurityNumber = Vue.localStorage.get(
        'socialSecurityNumber',
        ''
      );
    }
  },
  components: {
    // AppComponent
  }
};
</script>

<style scoped>
p {
  margin-bottom: 0;
}

.btn {
  margin: 0.75rem;
}
</style>
