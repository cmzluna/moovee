import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/graphql",
  headers: {
    Authorization: `bearer ${process.env.TMDB_API_KEY}`,
  },
});

export default async function callApi<T>(query: string, variables: object) {
  try {
    const { data } = await axiosInstance.post<{ data: T }>("", {
      query,
      variables,
    });
    return data;
  } catch (error) {
    console.log("** ERROR => ", error);
    if (axios.isAxiosError(error) && error.response?.data) {
      return Promise.reject(error.response.data);
    }
  }
}
