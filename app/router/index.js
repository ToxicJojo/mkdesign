import Vue from 'vue'
import Router from 'vue-router'

import KeyboarEditor from '../components/editor/KeyboardEditor.vue'
import LayoutWizard from '../components/editor/wizards/LayoutWizard.vue'
import BoardColorWizard from '../components/editor/wizards/BoardColorWizard.vue'
import FontWizard from '../components/editor/wizards/FontWizard.vue'
import KeycapColorWizard from '../components/editor/wizards/KeycapColorWizard.vue'
import FontColorWizard from '../components/editor/wizards/FontColorWizard.vue'
import LegendPlacementWizard from '../components/editor/wizards/LegendPlacementWizard.vue'
import DetailKeycapColorWizard from '../components/editor/wizards/DetailKeycapColorWizard.vue'
import DetailWizard from '../components/editor/wizards/DetailWizard.vue'
import LoadKeyboard from '../components/editor/util/LoadKeyboard.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { 
      path: '/editor',
      name: 'editor',
      component: KeyboarEditor,
      children: [
        {
          path: 'keyboard/:id',
          component: LoadKeyboard
        },
        {
          path: 'start',
          component: null,
        },
        {
          path: 'layout',
          name: 'layout',
          component: LayoutWizard,
        },
        {
          path: 'board',
          name: 'board',
          component: BoardColorWizard,
        },
        {
          path: 'font',
          name: 'font',
          component: FontWizard,
        },
        {
          path: 'keycapColor',
          name: 'keycapColor',
          component: KeycapColorWizard,
        },
        {
          path: 'fontColor',
          name: 'fontColor',
          component: FontColorWizard,
        },
        {
          path: 'legendPlacement',
          name: 'legendPlacement',
          component: LegendPlacementWizard,
        },
        {
          path: 'detailKeycapColor',
          name: 'detailKeycapColor',
          component: DetailKeycapColorWizard,
        },
        {
          path: 'detail',
          name: 'detail',
          component: DetailWizard,
        },
      ],
    },
  ],
})

export default router
