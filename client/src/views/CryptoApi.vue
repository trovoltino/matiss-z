<template>
  <div class="crypto">
    <div class="crypto-wrap">
      <h1>Crytpo information daily</h1>
      <h2>cryptoData</h2>
    </div>
    <div class="create-post">
      <label for="create-post">Say something...</label>
      <input type="text" id="create-post" v-model="text" placeholder="Create a post">
      <button @click="createTweet">Post!</button>
    </div>
    <div class="tweet-container">
      <h2>Tweets you love</h2>
      <p class="error" v-if="error">{{ error }}</p>
      <div class="tweets"
        v-for="(tweet, index) in tweets"
        v-bind:item="tweet"
        v-bind:index="index"
        v-bind:key="tweet._id"
        @dblclick="deleteTweet(tweet._id)"
      >
        {{ `${tweet.createdAt.getDate()}/${tweet.createdAt.getMonth()}/${tweet.createdAt.getFullYear()}` }}
        <p class="text">{{ tweet.text }}</p>
        <p>{{ index }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import TwitterService from '../TwitterService.js';

export default {
  name: 'TweetComponent',
  components: {
  },
  data() {
    return {
      tweets: [],
      error: '',
      text: ''
    }
  },
  async created(err) {
    try {
      this.tweets = await TwitterService.getTweets();
    } catch {
      this.error = err.message;
    }
  },
  methods: {
    async createTweet() {
      await TwitterService.insertTweet(this.text);
      this.tweets = await TwitterService.getTweets();
    },
    async deleteTweet(id) {
      await TwitterService.deleteTweet(id);
      this.tweets = await TwitterService.getTweets();
    }
  }
}
</script>

<style>

.crypto-wrap{
  display: none;
  position: relative;
  top: 10%;
  left:5%;
  border: 3px gray groove;
  width: 600px;
  height: 400px;
  overflow: auto;
}
.tweet-container {
  display: flex;
  flex-direction: column;
  height: 600px;
  overflow: auto;
  align-items: center;
}
.tweets {
  border: 2px rgb(90, 90, 255) groove;
  width: 30%;
}
</style>
