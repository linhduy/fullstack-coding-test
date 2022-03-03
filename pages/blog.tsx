import React from "react";
import Head from "next/head";
import { collection } from "firebase/firestore";
import { db } from '../firebase/firebaseApp';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Divider, Heading, Spinner } from "@chakra-ui/react";
import BlogGrid from "components/BlogGrid";
import BlogCard from "components/BlogCard";
import styles from '../styles/Blog.module.css'

const Blog = () => {
  const [articles, articlesloading, articleserror] = useCollection(
    collection(db, 'articles'),
    {}
  );

  return <div className={styles.container}>
    <Head>
      <title>Coding Test</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <Heading as='h2' size='xl' mt={5}>
        Blog
      </Heading>
      <Divider my={7}/>
      {
        articlesloading && <Spinner />
      }
      {
        !articlesloading && <BlogGrid>
        {
          articles && articles.docs.map((doc) => {
            const article = doc.data();
            return <BlogCard
              key={doc.id}
              title={article.title}
              content={article.content}
              imageUrl={article.imageUrl}
              imageAlt={article.imageAlt}
            />
          })
        }
      </BlogGrid>
      }
      {
        articleserror && <div>Loading articles failed</div>
      }
    </main>
  </div>
  
}

export default Blog;