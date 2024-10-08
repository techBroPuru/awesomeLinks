import Head from 'next/head';
import { links } from '../data/links';
import { AwesomeLink } from '../components/AwesomeLink';
import {gql, useQuery} from '@apollo/client'

const AllLinksQuery=gql`
query allLinksQuery($first:Int, $after:String){
links(first:$first, after:$after){
pageInfo{
endCursor
hasNextPage
}
edges{
cursor
node{
imageUrl
url
title
category
description
id
}
}
}
}
`

export default function Home() {
const {data,error, loading, fetchMore }=useQuery(AllLinksQuery,{variables:{
  first:2,
},
});
if(loading) return <p>Loading....</p>
if(error) return <p>Oops, something went wrong {error.message}</p>

const {endCursor, hasNextPage}=data.links.pageInfo
  return (
    <div>
      <Head>
        <title>Awesome Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-5xl my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.links.edges.map((item:any) => (
            <AwesomeLink
              key={item.node.id}
              url={item.node.url}
              id={item.node.id}
              category={item.node.category}
              title={item.node.title}
              description={item.node.description}
              imageUrl={item.node.imageUrl}
            />
          ))}
        </div>
        {hasNextPage ? (
          <button
          className="px-4 py-2 bg-blue-500 text-white rounded my-10"
          onClick={()=>{
            fetchMore({
              variables:{after:endCursor},
              updateQuery:(prevResult,{fetchMoreResult})=>{
                fetchMoreResult.links.edges=[
                  ...prevResult.links.edges,
                  ...fetchMoreResult.links.edges,
                ]
                return fetchMoreResult;
              }
            })
          }}>more</button>
        ):(
          <p className='my-10 text-center font-medium'>
            You've reached the end!{" "}
          </p>
        )}
      </div>
    </div>
  );
}