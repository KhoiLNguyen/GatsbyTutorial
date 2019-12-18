import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate,
                    order: DESC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        actualDate: publishedDate(formatString: "MMMM Do, YYYY")
                        fromNowDate: publishedDate(fromNow: true)
                    }
                }
            }
        }
    `)
    const blogs = data.allContentfulBlogPost.edges

    return (
        <Layout>
            <Head title="Blog"/>
            <h1>Blog</h1>
            <p>Here are our latest blog posts</p>
            <ol className={blogStyles.posts}>
                {blogs.map(blog => 
                    <li key={blog.node.actualDate} className={blogStyles.post}>
                        <h2>{blog.node.title}</h2>
                        <p>Date posted: {blog.node.actualDate}</p>
                        <p>{blog.node.fromNowDate}</p>
                        <Link to={`/blog/${blog.node.slug}`}>Read post!</Link>
                    </li>
                )}
            </ol>
        </Layout>
    )
}

export default BlogPage