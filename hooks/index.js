import { useRouteMatch } from "react-router"

export const  useCreateRoutePath = ()=>{
  const match = useRouteMatch();

  if(!Boolean(match.path)) return null;
  
  return (subPath)=>{
    return `${match.path}/${subPath}`
  }
}