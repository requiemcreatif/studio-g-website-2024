import { useQuery } from "@tanstack/react-query";
import getQueryClient from "@/app/utils/getQueryClient";

const fetchPostData = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts`
  );

  console.log("response", response);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useFetchPosts = () => {
  const queryClient = getQueryClient();
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPostData,
    initialData: () => {
      return queryClient.getQueryData(["posts"]);
    },
  });
};
