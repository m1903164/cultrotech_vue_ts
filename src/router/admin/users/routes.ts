import UsersView from '../../../views/admin/users/UsersView.vue'
import AddUsersView from '../../../views/admin/users/AddUsersView.vue'

export default [
    {
        path: `users`,
        name: 'usersView',
        component: UsersView
    },
    {
        path: 'users/add',
        name: 'addUsers',
        component: AddUsersView,
    }
]