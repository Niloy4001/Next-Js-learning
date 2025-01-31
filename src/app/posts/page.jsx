import Link from "next/link"


export const fetchData = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()
  return data
}

 



const PostsAll =async () => {
    const posts = await fetchData()
  return (
    <div className="w-[90%] mx-auto">
       <h2 className="text-3xl font-bold text-center mb-6">All posts</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`}
            key={post.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden p-4 transition transform hover:scale-105"
          >
           
            <div className="p-4 flex flex-col">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-600 text-sm mt-2">
                {post.body}
              </p>
            
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PostsAll