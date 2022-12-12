import {useState} from 'react';
import Link from 'next/link';

export default function FirstPost({ title }) {
  const [isShowLink, setShowLink] = useState(false);
  const onClick = () => {
    setShowLink(true)
  } 
  return (
    <>
      <h1>{title} Post</h1>
      {isShowLink && <h2>
        <Link href="/">Back to home</Link>
      </h2>}
      <button onClick={onClick}>show link</button>
    </>
  );
}

export async function getServerSideProps(context) {
    return {
      props: {
        title: 'Second'
      }, // will be passed to the page component as props
    }
  }

