import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs/index'
import SongView from '@/components/Songs/SongView'
import SongShow from '@/components/Songs/SongShow'
import SongAdd from '@/components/Songs/SongAdd'
import SongEdit from '@/components/Songs/SongEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/songs',
      component: Songs,
      children: [
        {
          path: '/songs',
          name: 'songs',
          component: SongView
        },
        {
          path: '/song/:songId',
          name: 'songshow',
          component: SongShow
        },
        {
          path: '/songs/add',
          name: 'songadd',
          component: SongAdd
        },
        {
          path: '/songs/edit/:songId',
          name: 'songedit',
          component: SongEdit
        }
      ]
    }
  ]
})
