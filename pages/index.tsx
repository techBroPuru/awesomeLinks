import Head from 'next/head';
import { links } from '../data/links';

  return (
    <div>
      <Head>
        <title>Awesome Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto max-w-5xl my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.links.edges.map(({ node }: { node: Node }) => (
            <Link href={`/link/${node.id}`}>
              <AwesomeLink
                key={node.id}
                title={node.title}
                category={node.category}
                url={node.url}
                id={node.id}
                description={node.description}
                imageUrl={node.imageUrl}
              />
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
