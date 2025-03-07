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
    cpu: number | null;
  }>({
    rtx4090: null,
    rtx5090: null,
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

      const cpuPrices = data.instance_types
        .filter(instance => instance.variants.find(variant => variant.gpu_count === 0) !== undefined)
        .map(instance => instance.variants[0].cost_per_hour / instance.variants[0].cpu_count);

      setLowestPrices({
        rtx4090: rtx4090Prices.length > 0 ? Math.min(...rtx4090Prices) : null,
        rtx5090: rtx5090Prices.length > 0 ? Math.min(...rtx5090Prices) : null,
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