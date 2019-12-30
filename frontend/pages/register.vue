<template>
  <div class="container col-md-6 mt-5">
    <h2>Register</h2>
    <form class="p-4" @submit.prevent="submit">
      <div class="form-group">
        <label for="loginName">Name</label>
        <input v-model="form.name" type="text" class="form-control" id="loginName" placeholder="name" autofocus>
        <small class="form-text text-danger" v-if="errors.name"> {{errors.name[0]}} </small>
      </div>
      <div class="form-group">
        <label for="loginEmail">Email address</label>
        <input v-model.trim="form.email" type="email" class="form-control" id="loginEmail" placeholder="email@example.com">
        <small class="form-text text-danger" v-if="errors.email"> {{errors.email[0]}} </small>
      </div>
      <div class="form-group">
        <label for="loginPassword">Password</label>
        <input v-model.trim="form.password" type="password" class="form-control" id="loginPassword" placeholder="Password">
        <small class="form-text text-danger" v-if="errors.password"> {{errors.password[0]}} </small>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
  export default {
    middleware: ['guest'],

    data() {
      return {
        form: {
          name: '',
          email: '',
          password: ''
        }
      }
    },
    methods: {
      async submit() {
        try {

          await this.$axios.$post('auth/register', this.form);
          await this.$auth.loginWith('local', {
            data: {
              email: this.form.email,
              password: this.form.password,
            }
          });
          this.$router.push('/');

        } catch (e) {

          return;
        }
      }
    }
  }
</script>
