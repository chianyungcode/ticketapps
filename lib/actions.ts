import axios from "axios";
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
