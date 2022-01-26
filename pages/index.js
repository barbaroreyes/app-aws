
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState , useEffect} from 'react'
import Link from  'next/link';
import { DataStore } from '@aws-amplify/datastore';
import { Post } from '../src/models';

export default function Home() {
  const [posts, setPost] = useState([])
  useEffect(()=>{
    fetchPost()
    async function fetchPost( ){
      const postData = await DataStore.query(Post);
      setPost(postData)
  
    }
  },[])
  console.log(posts , 'posts');
  return (
    <div className={styles.container}>
      <h2>Posts</h2>
     {
       posts.map( post =>(
         <Link href = {`/posts/${post.id}`}>
         <a>
           <h1>{post.content}</h1>
        </a></Link>
        
       ))
     }
    </div>
  )
}
