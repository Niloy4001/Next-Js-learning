

export const getPost = async(id) => {
 
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data

}


const PostDetails =async ({params}) => {
    const id =await params.id
    const post = await getPost(id)
    console.log(post);
    
  return (
    <div>{
       JSON.stringify(post)
        
        }</div>
  )
}

export default PostDetails