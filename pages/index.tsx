import React, {FunctionComponent} from "react";
import Link from "next/link";

type PostLinkProps = {
  title?: string;
};

const PostLink: FunctionComponent<PostLinkProps> = ({ title }) => {
  return (
    <li>
      <Link href={`/post?title=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

const About: FunctionComponent = () => {
  return (
    <>
      <h1>This is About page</h1>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </>
  );
};

export default About;
