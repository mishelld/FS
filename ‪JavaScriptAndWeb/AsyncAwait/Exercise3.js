async function dashboard() {
  try {
    const [usersResponse, postsResponse, commentsResponse] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users`),
      fetch(`https://jsonplaceholder.typicode.com/posts`),
      fetch(`https://jsonplaceholder.typicode.com/comments`),
    ]);

    if (!usersResponse.ok) {
      throw new Error("Users not found");
    }
    if (!postsResponse.ok) {
      throw new Error("Posts not found");
    }
    if (!commentsResponse.ok) {
      throw new Error("comments not found");
    }
    const users = await usersResponse.json();
    const posts = await postsResponse.json();
    const comments = await commentsResponse.json();

    const totalUsers = users.length;
    const totalPosts = posts.length;
    const totalComments = comments.length;

    const groupedPosts = posts.reduce((acc, p) => {
      if (!acc[p.userId]) {
        acc[p.userId] = [];
      }
      acc[p.userId].push(p);
      return acc;
    }, {});
    let sum = 0;
    for (const id of Object.keys(groupedPosts)) {
      sum += groupedPosts[id].length;
    }
    const avgPostsPerUser = sum / Object.keys(groupedPosts).length;
    const groupedComments = comments.reduce((acc, c) => {
      if (!acc[c.postId]) {
        acc[c.postId] = [];
      }
      acc[c.postId].push(c);
      return acc;
    }, {});
    sum = 0;
    for (const id of Object.keys(groupedComments)) {
      sum += groupedComments[id].length;
    }
    const avgCommentsPerPost = sum / Object.keys(groupedComments).length;
    console.log(users);

    return {
      totalUsers,
      totalPosts,
      totalComments,
      avgPostsPerUser,
      avgCommentsPerPost,
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}
const data = await dashboard();
console.log(data);
