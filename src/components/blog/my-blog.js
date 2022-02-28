import React from 'react';

class MyPosts extends React.Component{

  constructor(props){
    super(props);
    this.state = {posts: []};
  }

  componentDidMount() {
    fetch('https://api.andrewgwardwell.com/api/formatted-blog-posts')
        .then(response => response.json())
        .then(posts => {
            this.setState({
                posts: posts.items
            })
        })
        .catch(error => console.log(error))
  }

  posts(){
    const ps = [];
    this.state.posts.map((p) => {
      ps.push(
        <div className="card col-12 col-md-3" key={p.nid}>
            <h5 className="card-title">{p.title}</h5>
        </div>
      );
    });
    return ps;
  }

  render() {
    return (
      <>
      <h2>I write about:</h2>
      <div className="posts row">
          {this.posts()}
      </div>
      </>

    )
  };

}

export default MyPosts;