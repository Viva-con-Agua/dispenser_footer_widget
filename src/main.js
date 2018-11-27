// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { WidgetBottomNavigation } from 'vca-widget-navigation'

Vue.use(WidgetBottomNavigation)

/* eslint-disable no-new */
new Vue({
  el: '#footer-widget',
  components: { WidgetBottomNavigation },
  template: '<WidgetBottomNavigation />'
})
