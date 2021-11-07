import Home from './components/Home'
import FirstQuestionaire from './components/FirstQuestionaire'
import SecondQuestionaire from '@/components/SecondQuestionaire'

export const routes = [
    {path:'/',component:Home},
    {path: '/section_1', component:FirstQuestionaire},
    {path: '/section_2', component:SecondQuestionaire}
];

