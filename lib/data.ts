import axios from "axios";

export const getSpecificUser = async (userId: string | null) => {
  try {
    const response = await axios.get(`/api/profile/${userId}`);

    return response;
  } catch (error) {
    console.log(error);
  }
};
