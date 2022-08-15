class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async mostPopular() {
    try {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=${this.key}`,
        this.getRequestOptions
      );
      const data = await res.json();
      return data.items;
    } catch (error) {
      return console.log(error);
    }
  }

  async search(query) {
    try {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&regionCode=KR&q=${query}&key=${this.key}`,
        this.getRequestOptions
      );
      const data = await res.json();
      return data.items;
    } catch (error) {
      return console.log(error);
    }

    // return fetch(
    //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&regionCode=KR&q=${query}&key=${this.key}`,
    //   this.getRequestOptions
    // )
    //   .then((res) => res.json())
    //   .then((data) => data.items)
    //   .catch((error) => console.log(error));
  }
}

export default Youtube;
