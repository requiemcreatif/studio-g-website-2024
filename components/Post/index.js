import { Box,Grid, Typography } from '@mui/material';

const PostComponent = () => {
  return (
    <div>
        <div>
          <h3>This is the post section</h3>
        </div>
        <div>
        {posts?.map(post => (
          <Grid key={post.id} className='p-5 border-2 mb-2'>
            {/* <h3>{post.acf.page_content.page_title}</h3>
            <p>{Parser(post.acf.page_content.home_intro)}</p>
            <h3>{post.acf.page_content.page_title}</h3>
            <p>{Parser(post.acf.page_content.home_intro)}</p> */}
          </Grid>
        ))}
        </div>
    </div>
  )
}

export default index