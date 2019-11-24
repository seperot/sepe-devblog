import Helmet from 'react-helmet';
import React from 'react';

import userConfig from '../../config';

import Layout from './layout';

import Card from '../components/Card';
import Container from '../components/ContainerHome';
import Pagination from '../components/Pagination';
import Summary from '../components/Summary';

const IndexPage = ({ pageContext }) => {
  const { group, index, pageCount } = pageContext;
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  return (
    <Layout>
      <Container>
        <Helmet
          title={`${userConfig.title} | ${userConfig.author}`}
        >
          <meta
            name="description"
            content={`${userConfig.title} | ${userConfig.description}`}
          />
        </Helmet>
        <div class="postsection">
        {group.map(({ node }) => (
          <Card key={node.fields.slug}>
            <Summary
              date={node.frontmatter.date}
              title={node.frontmatter.title}
              excerpt={node.excerpt}
              image={node.frontmatter.featuredImage}
              slug={node.fields.slug}
            />
          </Card>
        ))}
        </div>
        <Pagination
          isFirst={index === 1}
          isLast={index === pageCount}
          nextUrl={nextUrl}
          previousUrl={previousUrl}
        />
      </Container>
    </Layout>
  );
};

const Layout = ({ slug, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `}
    render={data => (
      <Helmet title={data.site.siteMetadata.title}>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={`${data.site.siteMetadata.siteUrl}${slug}twitter-card.jpg`}
        />
      </Helmet>
      { /* ... */ }
    )}
  />
);

export default IndexPage;
