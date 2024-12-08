import React from "react";
import Tag from "./Tag";
const Tags :React.FC<{tags:string}>=({tags})=>{
    return (
      <>
        {tags.split(",").map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </>
    );
  }

export default Tags;
