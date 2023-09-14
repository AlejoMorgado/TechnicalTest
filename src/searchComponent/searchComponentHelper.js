import axios from "axios";

const BASE_URL = "https://torre.ai/api/entities/_searchStream"; 

export async function performSearch(payloadData) {
  try {
    const response = await axios.post(`${BASE_URL}/search`, payloadData);
    return response;
  } catch (error) {
    throw error;
  }
}
