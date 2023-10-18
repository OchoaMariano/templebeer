// export async function generateStaticParams() {
//    const posts = await fetch('https://.../posts').then((res) => res.json())
//   
//    return posts.map((post) => ({
//      slug: post.slug,
//    }))
//}

export function generateStaticParams() {
    return [{ slug: '1' }, { slug: '2' }, { slug: '3' }]
}

export default function Page({ params }) {
    // ...
    return <div>Post {params.slug}</div>
}