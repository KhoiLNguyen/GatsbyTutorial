import React from 'react'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { graphql } from 'gatsby'
import Head from '../components/head'

// export const query = graphql`
//     query (
//         $slug: String!
//     ) {
//         markdownRemark (
//             fields: {
//                 slug: {
//                     eq: $slug
//                 }
//             }
//         ) {
//             frontmatter {
//                 title
//                 date
//             }
//             html
//             timeToRead
//         }
//     }
// `

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost (slug: {eq: $slug}) {
            title
            actualDate: publishedDate(formatString: "MMMM Do, YYYY")
            fromNowDate: publishedDate(fromNow: true)
            body {
                json
            }
        }
    }
`

const Blog = (props) => {
    const { title, actualDate, fromNowDate } = props.data.contentfulBlogPost
    const postContent = props.data.contentfulBlogPost.body.json
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url}/>
            }
        }
    }

    return (
        <Layout>
            <Head title={title}/>
            <h1>{title}</h1>
            <p>{actualDate} - {fromNowDate}</p>
            {documentToReactComponents(postContent, options)}
        </Layout>
    )
}

export default Blog