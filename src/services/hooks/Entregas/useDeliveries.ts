import { api } from '@/services/api';
import { useQuery } from "react-query";



export async function getDeliveries (){
    const response = await api.get("/admin/deliveries");
    
    const data = await response.data;
    console.log(data)

    return data;
  }

export function useDeliveries(){
  return useQuery("deliveries", getDeliveries,{
    staleTime:1000*5,
  });
}