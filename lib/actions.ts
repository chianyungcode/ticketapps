import axios, { AxiosResponse } from "axios";
import prismadb from "./prismadb";

export const getSpecificUser = async (userId: string | null) => {
  try {
    const response = await axios.get(`/api/profile/${userId}`);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllEvent = async () => {
  const data = await prismadb.event.findMany();

  return data;
};

// Buatan sendiri

export const getSpecificData = async (apiUrl: string) => {
  try {
    const response = await axios.get(apiUrl);
    const actualdata = response.data;

    return actualdata;
  } catch (error) {
    console.log(error);
  }
};

// Buatan sendiri
type postNewDataProps<TData> = {
  data: TData;
  apiEndpoint: string;
};

export const postNewData = async <TData>({
  apiEndpoint,
  data,
}: postNewDataProps<TData>): Promise<AxiosResponse> => {
  const response = await axios.post(apiEndpoint, data);
  return response;
};
