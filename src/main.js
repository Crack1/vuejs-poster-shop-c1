import Vue from 'vue'
import './style.scss'

import genres from './util/genres'

new Vue({
  el: '#app',
  components: {
    'movie-list': {
      template: `<div id="movie-list"> 
            <div v-for="movie in movies" class="movie" > {{movie.title}} </div>      
      </div>`,
      data() {
        return {
          movies: [{
            title: 'Pulp Fiction'
          },
            {
              title: 'Home Alone'
            },
            {
              title: 'Austin Powers'
            },
            {
              title: 'Batman'
            }
          ]
        }
      }
    },
    'movie-filter': {
      data() {
        return {
        genres}
      },
      template: `<div id="movie-filter">
      <h2>Filter Result </h2>
      <check-filter v-for="genre in genres"></check-filter>
      </div>`,
      components: {
        'check-filter': {
          template: `<div>Filter</div>`
        }
      }
  }}
})
