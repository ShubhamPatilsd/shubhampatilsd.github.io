// import Contribution from './Contribution';
// import {useState, useEffect} from 'react'

async function BlogPosts() {
  let posts = [];
  let newPosts = [];

  const response = await fetch(
    "https://dev.to/api/articles?username=shubhampatilsd"
  );
  posts = await response.json();

  newPosts = posts.map((post) => {
    return {
      title: `📝 ${post.title} ${
        post.canonical_url && post.canonical_url.includes("medium")
          ? "(Originally from Medium)"
          : ""
      }`,

      date: post.published_timestamp,
      link: post.url,
      description: post.description,
      type: "blog",
      reactions: post.public_reactions_count,
      comments: post.comments_count,
    };
  });

  return newPosts;
}

export default BlogPosts;
