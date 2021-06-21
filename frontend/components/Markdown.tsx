import React from "react";
import ReactMarkdown from "react-markdown";
import classNames from "utils/classNames";

interface MarkdownProps {
  className?: string;
  children: any;
}

const Markdown: React.FC<MarkdownProps> = ({
  className,
  children,
}: MarkdownProps) => {
  const styles = className ? className : "";
  return (
    <ReactMarkdown className={classNames("markdown", styles)}>
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
