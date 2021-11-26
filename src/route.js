import Home from './components/Home'
import FirstQuestionaire from './components/FirstQuestionaire'
import SuccessPage from '@/components/SuccessPage'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
export const routes = [
    {path:'/',component:Home},
    {path: '/questions', component:FirstQuestionaire},
    {path:'/success_page', component:SuccessPage},
    {path:'/login', component:Login},
    {path:'/dashboard', component:Dashboard}
    
];

