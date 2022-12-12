import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  const [isShowLink, setShowLink] = useState(false);
  const onClick = () => {
    setShowLink(true)
  } 
  const myLoader = ({ src, width, quality }) => {
    return `https://yaimg.yanolja.com/v5/2022/10/27/17/640/${src}`
  }
  return (
    <Layout>
      <Head>
        <title>First Post!</title>
      </Head>
      <h1>First Post</h1>
      {isShowLink && <h2>
        <Link href="/">Back to home</Link><br>/</br>
        <Link href="/posts/second-post">Second page!</Link>
      </h2>}
      <button onClick={onClick}>show link</button>
      <Image
        loader={myLoader}
        src="635aba2a669cf3.90133746.jpg"
        // src="/images/profile.jpeg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
    />
    </Layout>
  );
}