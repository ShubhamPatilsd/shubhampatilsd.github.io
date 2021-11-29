import React from "react";
import { MessageSquare, ThumbsUp } from "@geist-ui/react-icons";

class BlogContribution extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: "35em", marginBottom: "2rem" }}>
        <p style={{ margin: "0", fontSize: "16px" }}>
          <small>
            {this.props.date.toLocaleDateString(undefined, {
              dateStyle: "long",
            })}
          </small>
        </p>

        <h3 style={{ margin: "0" }}>
          <a
            className="no-underline"
            href={this.props.link}
            rel="noreferrer"
            target="_blank"
          >
            {this.props.blog ? "📝 " : ""}
            {this.props.title + " ->"}
          </a>
        </h3>

        <p style={{ margin: "0", fontSize: "18px" }}>
          <small>{this.props.desc}</small>
        </p>
        <div style={{ display: "flex" }}>
          <div
            style={{
              marginRight: "1rem",
              padding: "0.4rem",
              fontSize: "18px",

              alignItems: "center",
              display: "flex",
            }}
          >
            <small
              style={{
                alignItems: "center",
                display: "flex",
                fontSize: "12px",
                color: "lightgrey",
              }}
            >
              <ThumbsUp color="lightgrey" size={20} className="blogpost-icon" />
              {this.props.reactions} reactions
            </small>
          </div>

          <div
            style={{
              margin: "0",
              padding: "0.4rem",
              fontSize: "18px",

              alignItems: "center",
              display: "flex",
            }}
          >
            <small
              style={{
                alignItems: "center",
                display: "flex",
                fontSize: "12px",
                color: "lightgrey",
              }}
            >
              <MessageSquare
                color="lightgrey"
                className="blogpost-icon"
                size={20}
              />
              {this.props.comments} comments
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogContribution;
