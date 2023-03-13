import { api } from './../api';
import { useQuery } from "react-query";

type Dashboard ={
  users:[],
  deliveries:[],
  files:[],
  shipped:[],
  lastUses:[]
}

export async function getDashboard ():Promise<Dashboard[]>{
    const response = await api.get("/admin");
    
    const data = await response.data;

    return data;
  }

export function useDashboard(){
  return useQuery("users", getDashboard,{
    staleTime:1000*5,
  });
}