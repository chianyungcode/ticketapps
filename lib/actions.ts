import axios, { AxiosResponse } from "axios";
import prismadb from "./prismadb";
import { type Event } from "@prisma/client";

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
    const { data } = await axios.get(apiUrl);

    return data;
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
  return response.data;
};
