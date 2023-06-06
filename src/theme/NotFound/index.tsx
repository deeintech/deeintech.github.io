import React from "react"
import Layout from "../Layout"
import { Section } from "../../components/Section"

const NotFound = () => {
  return (
    <Layout title="Page not found">
      <Section>
        <Section.Title size="small">Oops..</Section.Title>
        <Section.Subtitle>
          The page you're looking for doesn't exist!
        </Section.Subtitle>
      </Section>
    </Layout>
  )
}

export default NotFound
