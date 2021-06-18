
// import Contribution from './Contribution';
// import {useState, useEffect} from 'react'




async function MediumPosts(){
    let posts = []
    let newPosts = []
    
    const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40shubhampatilsd")
    const data = await response.json()
          
    posts=data.items;
            
          
      

    newPosts=posts.map((post)=>{return {
        title: `📝 ${post.title}`,
        
        date: post.pubDate,
        link: post.link

    }})
    
    return newPosts;
    
    
}

export default MediumPosts;