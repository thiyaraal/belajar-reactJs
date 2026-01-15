import { useState, useEffect } from "react";
import type { PartnerLeaveModel } from "../models/userModel";
import { PartnerLeaveService } from "../services/userService";

export const userPartnerLeaveViewModel = () => {
  const [data, setData] = useState<PartnerLeaveModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await PartnerLeaveService.getAll();
      setData(result);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    data,
    loading,
    error,
    reload: loadData,
  };
};
