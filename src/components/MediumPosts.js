
// import Contribution from './Contribution';
// import {useState, useEffect} from 'react'




async function MediumPosts(){
    let posts = []
    let newPosts = []
    
    const response = await fetch("https://medium-feed.shubhampatilsd.workers.dev")
    const data = await response.json()
          
    posts=data.data.posts;
            
          
      

    newPosts=posts.map((post)=>{return {
        title: `📝 ${post.title}`,
        description: post.description,
        date: post.createdAt,
        link: post.url

    }})
    
    return newPosts;
    
    
}

export default MediumPosts;