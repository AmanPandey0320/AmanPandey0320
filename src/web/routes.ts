import PortFolio from "./pages/portfolio";

interface route {
    key:number,
    path:string,
    component?:any,
    exact:boolean
    redirect?:boolean,
    to?:string
}

const routes:route[] = [
    {
        key:1,
        path:"/portfolio",
        component:PortFolio,
        exact:true,
    },
    {
        key:2,
        path:"/",
        exact:true,
        redirect:true,
        to:"/portfolio"
    }
]

export default routes;