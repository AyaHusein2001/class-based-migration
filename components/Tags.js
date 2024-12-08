import React from "react";
import Tag from "./Tag";
class Tags extends React.Component {
  render() {
    return (
      <>
        {this.props.tags.split(",").map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </>
    );
  }
}
export default Tags;
