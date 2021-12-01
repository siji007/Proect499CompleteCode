import Home from './pages/Home'
import FirstQuestionaire from './pages/FirstQuestionaire'
import SuccessPage from '@/pages/SuccessPage'
import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard'
export const routes = [
    {path:'/',component:Home},
    {path: '/questions', component:FirstQuestionaire},
    {path:'/success_page', component:SuccessPage},
    {path:'/login', component:Login},
    {path:'/dashboard', component:Dashboard}
    
];

