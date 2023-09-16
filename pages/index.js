import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import data from '@/utils/data';
import ProductItem from '@/components/ProductItem';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug} />
        ))}
      </div>
    </Layout>
  );
}
