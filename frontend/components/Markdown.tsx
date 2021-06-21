import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  children: any;
}

const Markdown: React.FC<MarkdownProps> = ({ children }: MarkdownProps) => {
  return <ReactMarkdown className="markdown">{children}</ReactMarkdown>;
};

export default Markdown;
