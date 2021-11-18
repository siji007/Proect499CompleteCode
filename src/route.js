import Home from './components/Home'
import FirstQuestionaire from './components/FirstQuestionaire'
import SuccessPage from '@/components/SuccessPage'


export const routes = [
    {path:'/',component:Home},
    {path: '/section_1', component:FirstQuestionaire},
    {path:'/success_page', SuccessPage}
    
];

