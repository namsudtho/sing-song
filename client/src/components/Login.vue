<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                prepend-icon="person"
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                v-model="password"
                :rules="passwordRules"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <v-alert v-if="error" :value="true" color="error" icon="warning" v-html="error" />
              <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                large
                color="primary"
                :disabled="!valid"
                @click="login"
              >
                Login
              </v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Authentication from '@/services/Authentication'

export default {
  data () {
    return {
      valid: true,
      password: '',
      email: '',
      error: null,
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be at least 8 characters in length'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    async login () {
      if (this.$refs.form.validate()) {
        try {
          const response = await Authentication.login({
            email: this.email,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          this.$router.push({
            name: 'songs'
          })
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
