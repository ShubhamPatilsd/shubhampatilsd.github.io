import BlogPosts from "./BlogPosts";
import otherData from "../json/contributions.json";
import Contribution from "./Contribution";
import BlogContribution from "./BlogContribution";
import { useEffect, useState } from "react";

function SortedContributions() {
  const [allContribs, setAllContribs] = useState([]);

  useEffect(() => {
    BlogPosts().then((res) => {
      res = res.concat(otherData);
      setAllContribs((allContribs) => allContribs.concat(res));
    });
  }, []);

  //allContribs = allContribs.sort((one,two)=>two.date - one.date)

  return (
    <div>
      {allContribs
        .sort((one, two) => {
          return new Date(two.date) - new Date(one.date);
        })
        .map((contrib, i) => {
          return contrib.type && contrib.type === "blog" ? (
            <BlogContribution
              key={i}
              date={new Date(contrib.date)}
              link={contrib.link}
              title={contrib.title}
              desc={contrib.description}
              reactions={contrib.reactions}
              comments={contrib.comments}
            />
          ) : (
            <Contribution
              key={i}
              date={new Date(contrib.date)}
              link={contrib.link}
              title={contrib.title}
              desc={contrib.description}
            />
          );
        })}
    </div>
  );
}

export default SortedContributions;
