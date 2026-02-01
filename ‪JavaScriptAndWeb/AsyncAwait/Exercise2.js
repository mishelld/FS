// Starter code structure:
async function getUserWithPosts(userId) {
  // Your implementation here
  // 1. Fetch user from: https://jsonplaceholder.typicode.com/users/${userId}
  // 2. Fetch posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
  // 3. Return combined data
  try {
    const [userResponse, postsResponse] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
    ]);

    if (!userResponse.ok) {
      throw new Error("User not found");
    }
    if (!postsResponse.ok) {
      throw new Error("Posts not found");
    }
    const user = await userResponse.json();
    const posts = await postsResponse.json();

    console.log(user.name);
    console.log(posts);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}
console.log(getUserWithPosts(999));
