import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const InfoPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Info Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae neque reprehenderit aspernatur quo obcaecati nisi alias, quae nesciunt quam magnam assumenda autem ducimus reiciendis excepturi pariatur corrupti aut non sit.</p>
            <Link to='/contact'>Contact</Link>
        </Layout>
    )
}

export default InfoPage
