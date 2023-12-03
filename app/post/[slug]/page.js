"use client";

import { useParams } from "next/navigation";
import { useFetchPosts } from "@/internal-api/postData";
import Parser from "html-react-parser";
const PostPage = () => {
  const { slug } = useParams();
  //console.log("slug", slug);
  const { data, isLoading, error } = useFetchPosts(slug);
  console.log("data", data);

  const postDetails = data?.find((post) => post.slug === slug);
  //console.log("postDetails", postDetails);
  return (
    <div>
      <h1>Post Page</h1>
      <h2>{slug}</h2>
      {/* {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>} */}
      <div className=" mt-10">
        {postDetails && (
          <>
            <h3 className=" text-white text-xl py-5">
              {postDetails.title.rendered}
            </h3>
            <div className=" text-white font-thin">
              {Parser(postDetails.content.rendered)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PostPage;
