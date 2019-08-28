import axios from 'axios';

const url = 'api/posts/';

class TwitterService {
  static getTweets(){
    return new Promise(async (resolve, reject) =>{
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map(post =>({
            ...post,
            createdAt: new Date(post.createdAt)
          }))
        );
      } catch(err) {
        reject(err);
      }
    });
  }

  static insertTweet(text){
    return axios.post(url, {
      text
    });
  }

  static deleteTweet(id) {
    return axios.delete(`${url}${id}`)
  }
  
}

export default TwitterService