import Head from 'next/head';

import Layout from '../components/ui/layout';
import HeroBlock from '../home/hero-block';
import MotivationBlock from '../home/motivation-block';
import ArticlesBlock from '../home/articles-block';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Easybank - Home</title>
        <meta name='description' content='Easybank home' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <HeroBlock />
      <MotivationBlock />
      <ArticlesBlock />
    </Layout>
  );
}
