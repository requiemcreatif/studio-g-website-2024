export async function fetchApi() {
  //const wordpressApiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/posts`
  );
  console.log("res", res);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json();
}
