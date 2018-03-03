import Vue from 'vue'
import Router from 'vue-router'

import KeyboarEditor from '../components/editor/KeyboardEditor.vue'
import LayoutWizard from '../components/editor/wizards/LayoutWizard.vue'
import BoardColorWizard from '../components/editor/wizards/BoardColorWizard.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { 
      path: '/editor',
      name: 'editor',
      component: KeyboarEditor,
      children: [
        {
          path: 'start',
          component: null,
        },
        {
          path: 'layout',
          component: LayoutWizard,
        },
        {
          path: 'board',
          component: BoardColorWizard,
        }
      ],
    },
  ],
})

export default router
