import { api } from '@/services/api';
import { useQuery } from "react-query";



export async function getUsers (){
    const response = await api.get("/admin/users");
    
    const data = await response.data;
    console.log(data)

    return data;
  }

export function useUsers(){
  return useQuery("users", getUsers,{
    staleTime:1000*5,
  });
}