/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";
import { Box, Preview, Head2, Authors, Head3, Description } from './styles';

const JournalList = ({journalFetch}) => {
    return (
        <Box>
           {journalFetch.map((blog) => (
        <Preview key={blog.id}>
            <Head2 primary>{ blog.journaltype }</Head2>
            <Head2>{ blog.title }</Head2>
            <Authors>
            {blog.authors.map((author) => (
                <Head3 secondary>{author},</Head3>
            ))}
            </Authors>
            <Description>
            <Head3>{blog.topic} |</Head3>
            <Head3>ISSN: {blog.issn}</Head3>
            </Description>
            <Head3><span style={{color: "#EC8D20"}}>First Published: </span>{blog.published}</Head3>
            
        </Preview>
       ))}
    </Box>
    )
}

export default JournalList;