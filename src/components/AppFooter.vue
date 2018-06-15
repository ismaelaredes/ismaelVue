
<!--fixed-->
<template>
  <v-footer height="auto" >
    <v-card flat tile class="flex">
      <v-card-title class="teal white--text mt-4">
       <!-- <strong class="subheading">Get connected with us on social networks!</strong>-->
        <!--<v-spacer></v-spacer>-->

        <v-btn flat icon color="blue lighten-2">
          <v-icon>thumb_up</v-icon>
        </v-btn>

        <v-btn flat icon color="red lighten-2">
          <v-icon>thumb_down</v-icon>
        </v-btn>

        <v-btn flat icon class="material-icons">
          <v-icon> track_changes</v-icon>
        </v-btn>
            

      </v-card-title>
     
      <v-card-text class="grey lighten-3">
        <v-layout>
          <v-flex
            v-for="(col, i) in rows"
            :key="i"
            xs3
          >
            <span class="body-2" v-text="col.title.toUpperCase()"></span>
            <div
              v-for="(child, i) in col.children"
              :key="i"
              v-text="child"
            ></div>
          </v-flex>
          <!--<v-flex xs3 layout column>
            <span class="body-2">CONTACT</span>
            <div>
              <v-icon size="18px" class="mr-3">fas fa-home</v-icon>
              New York, NY 10012, US
            </div>
            <div>
              <v-icon size="18px" class="mr-3">fas fa-envelope</v-icon>
              info@example.com
            </div>
            <div>
              <v-icon size="18px" class="mr-3">fas fa-phone</v-icon>
              + 01 234 567 88
            </div>
            <div>
              <v-icon size="18px" class="mr-3">fas fa-print</v-icon>
              + 01 234 567 89
            </div>

          </v-flex>-->
  

        </v-layout>
      </v-card-text>
      <v-card-actions class="grey lighten-2 justify-center">
        &copy;2018 — <strong>Footer</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
      rows: [
        {
          title: 'ABOUT TICKELAB',
          children: ['--------_--------','Lorem ipsum dolor sit amet consectetur adipiscing elit. In erat' + 
         'nulla, suscipit nec nunc sed, cotngue feugiat diam. Suspendisse'+
         'ultricies, ante eu hendrerit per, ipsum risus egestas leo, et auctor augue justo ut arcu']
        },
        {
          title: 'CaTEGORIES',
          children: ['--------_--------','Nunc ac erat gravida','Lorem Ipsum','Vivamus pretium','Proin lectus lacus','Praesent imperdiet non']
        },
        {
          title: 'LATEST ARTICLES',
          children: ['--------_--------','Nunc ac erat gravida','Lorem ipsum','Vivamus pretium','Proin lectus lacus','Praesent imperdiet non']
        },
        {
          title: 'NEWSLETTER',
          children: ['--------_--------','Lorem ipsum dolor sit amet,',' consectetur adipiscing elit']
        }
      ]
    })
  }
</script>