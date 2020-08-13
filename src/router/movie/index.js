export default{
    path:'/movie',
    component:() => import('@/views/Movie'),
    children :[
    {
        path:'city',
        component:()=>import('@/components/City')
    },
    {
        path:'search',
        component:()=>import('@/components/Search')
    },
    {
        path:'comingSoon',
        component:()=>import('@/components/ComingSoon')
    },
    {
        path:'nowPlaying',
        component:()=>import('@/components/Nowplaying')
    },
    {
        path:'/movie',
        redirect:'/movie/nowPlaying'
    }
    ]
}