import { useState, useEffect } from "react";
 import { useMutation } from "@tanstack/react-query";
 import { apiRequest } from "@/lib/cloudrift";
 
 interface InstanceTypeInfo {
   name: string;
   brand_short: string;
   variants: {
     cost_per_hour: number;
     gpu_count: number;
     cpu_count: number;
     available_nodes: number;
   }[];
 }
 
 interface ListInstanceTypeResponse {
   instance_types: InstanceTypeInfo[];
 }
 
 const fetchInstanceTypes = async (): Promise<ListInstanceTypeResponse> => {
   const response = await apiRequest<{ data: ListInstanceTypeResponse }>(
     "/api/v1/instance-types/list",
     false,
     {selector: "All"}
   );
   return response.data;
 };
 
 const useLowestPrices = () => {
   const [lowestPrices, setLowestPrices] = useState<{
     rtx4090: number | null;
     rtx5090: number | null;
     rtx6000: number | null;
     l40: number | null;
     a100: number | null;
     h100: number | null;
     h200: number | null;
     cpu: number | null;
   }>({
     rtx4090: null,
     rtx5090: null,
     rtx6000: null,
     l40: null,
     a100: null,
     h100: null,
     h200: null,
     cpu: null
   });
   const [loading, setLoading] = useState<boolean>(true);
 
   const mutation = useMutation<ListInstanceTypeResponse, Error>({
     mutationFn: async () => {
       return fetchInstanceTypes();
     },
     onSuccess: (data) => {
       const rtx4090Prices = data.instance_types
         .filter(instance => instance.brand_short.includes('4090'))
         .map(instance => instance.variants[0].cost_per_hour / instance.variants[0].gpu_count);
 
       const rtx5090Prices = data.instance_types
         .filter(instance => instance.brand_short.includes('5090'))
         .map(instance => instance.variants[0].cost_per_hour / instance.variants[0].gpu_count);
 
       const rtx6000Prices = data.instance_types
         .filter(instance => instance.brand_short.includes('6000'))
         .map(instance => instance.variants[0].cost_per_hour / instance.variants[0].gpu_count);
 
       const l40 = data.instance_types
         .filter(instance => instance.brand_short.includes('L40'))
         .map(instance => instance.variants[0].cost_per_hour / instance.variants[0].gpu_count);
 
       const a100 = data.instance_types
         .filter(instance => instance.brand_short.includes('A100'))
         .map(instance => instance.variants[0].cost_per_hour / instance.variants[0].gpu_count);
 
       const h100 = data.instance_types
         .filter(instance => instance.brand_short.includes('H100'))
         .map(instance => instance.variants[0].cost_per_hour / instance.variants[0].gpu_count);
 
       const h200 = data.instance_types
         .filter(instance => instance.brand_short.includes('H200'))
         .map(instance => instance.variants[0].cost_per_hour / instance.variants[0].gpu_count);
 
       const cpuPrices = data.instance_types
         .filter(instance => instance.variants.find(variant => variant.gpu_count === 0) !== undefined)
         .map(instance => instance.variants[0].cost_per_hour / instance.variants[0].cpu_count);
 
       setLowestPrices({
         rtx4090: rtx4090Prices.length > 0 ? Math.min(...rtx4090Prices) : null,
         rtx5090: rtx5090Prices.length > 0 ? Math.min(...rtx5090Prices) : null,
         rtx6000: rtx6000Prices.length > 0 ? Math.min(...rtx6000Prices) : null,
         l40: l40.length > 0 ? Math.min(...l40) : null,
         a100: a100.length > 0 ? Math.min(...a100) : null,
         h100: h100.length > 0 ? Math.min(...h100) : null,
         h200: h200.length > 0 ? Math.min(...h200) : null,
         cpu: cpuPrices.length > 0 ? Math.min(...cpuPrices) : null
       });
       setLoading(false);
     },
     onError: () => {
       setLoading(false);
     },
   });
 
   useEffect(() => {
     mutation.mutate();
   }, []);
 
   return { lowestPrices, loading };
 };
 export { useLowestPrices };