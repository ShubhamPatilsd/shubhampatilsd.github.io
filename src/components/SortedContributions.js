import MediumPosts from "./MediumPosts"
import otherData from "../json/contributions.json"
import Contribution from "./Contribution"
import { useEffect,useState } from "react"


function SortedContributions(){
        const [allContribs, setAllContribs] = useState([])
        
        useEffect(()=>{
            MediumPosts().then(
                res=>{
                    res = res.concat(otherData)
                    setAllContribs(allContribs.concat(res))
                
                }
                )
            
            
            
        },[])
        
        
        
        //allContribs = allContribs.sort((one,two)=>two.date - one.date)
        
       return <div>
       {allContribs.sort((one,two)=>{return new Date(two.date) - new Date(one.date)}).map((contrib, i)=>{return <Contribution key={i} date={new Date(contrib.date)} link={contrib.link} title={contrib.title} desc={contrib.description}/>})}
       </div>
}

export default SortedContributions;