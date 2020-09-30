import * as React from "react";
import { withRouter } from 'next/router'
import {FunctionComponent} from "react";
type PostProps = {
    router?: any
}

const Post: FunctionComponent<PostProps> = ({ router }) => {
    return (
        <>
            <h1>{router.query.title}</h1>
            <p>This is the blog post content.</p>
        </>
    )
};

export default withRouter(Post)