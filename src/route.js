import Home from './components/Home'
import FirstQuestionaire from './components/FirstQuestionaire'
import SuccessPage from '@/components/SuccessPage'


export const routes = [
    {path:'/',component:Home},
    {path: '/questions', component:FirstQuestionaire},
    {path:'/success_page', component:SuccessPage}
    
];

