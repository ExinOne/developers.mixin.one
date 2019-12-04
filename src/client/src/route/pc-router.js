import Dashboard from '../views/dashboard'

export default [
    {
        path: '/',
        component: Dashboard,
        children: [
            {
                path: 'information/:app_number',
                name: 'information',
                component: () => import('../views/dashboard/components/app-information')
            },
            {
                path: 'new',
                name: 'new_app',
                component: () => import('../views/dashboard/components/app-information')
            },
            {
                path: 'wallet/:app_number',
                name: 'wallet',
                component: () => import('../views/dashboard/components/app-wallet')
            },
            {
                path: 'secret/:app_number',
                name: 'secret',
                component: () => import('../views/dashboard/components/app-secret')
            }
        ]
    }
]