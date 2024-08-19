import KnivesView from '../../../views/admin/knives/KnivesView.vue'
import AddKnivesView from '../../../views/admin/knives/AddKnivesView.vue'

export default [
    {
        path: 'knives',
        name: 'knivesView',
        component: KnivesView
    },
    {
        path: 'knives/add',
        name: 'addKnives',
        component: AddKnivesView
    },
    {
        path: 'knives/edit/:id',
        name: 'editKnives',
        component: AddKnivesView
    }
]