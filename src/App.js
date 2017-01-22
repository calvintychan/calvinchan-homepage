import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container mb-3">
          <h1 className="display-1 my-3">Calvin Chan</h1>
          <p className="lead">Programmer, lifelong learner, technology entrepreneur and love building useful product.</p>
          <p>I am a web designer turned programmer. I started programming in Ruby but now I write everything in <a href="https://github.com/calvintychan">JavaScript</a>.</p>
          <p>I have been working with Silicon Valley startups since 2008. I love the fast-paced environment.</p>
          <p>I prefer listening on Audible to reading books.</p>
          <p>The technology I am currently following are: <a href="https://facebook.github.io/react/" target="_blank">React &amp; React Native</a>, <a href="https://serverless.com" target="_blank">Serverless</a>, <a href="https://graphql.org/" target="_blank">Graphql</a> and <a href="http://meteor.com" target="_blank">Meteor</a>.</p>
          <p>I am currently available for freelance and consulting work. You can connect with me on <a href="https://twitter.com/calvintychan" target="_blank">Twitter</a>, <a href="https://linkedin.com/in/calvintychan" target="_blank">Linkedin</a>, and <a href="https://github.com/calvintychan" target="_blank">Github</a>. Happy to grab a coffee too if you are in the area.</p>
        </div>
        <hr />
        <footer>
          <p className="text-xs-center">&copy; 2005 – 2017.</p>
        </footer>
      </div>
    );
  }
}

export default App;
