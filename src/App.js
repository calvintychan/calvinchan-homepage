import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
    <div>
      <div className="container my-3">
        <div className="text-xs-center"><img src="http://moltres.io/images/headshot-calvin.jpg" className="rounded" width="100" alt="Calvin's headshot"/></div>
        <h1 className="display-2 text-xs-center my-3">Calvin Chan</h1>
        <p className="lead text-xs-center"><strong>Technical Product Manager</strong></p>
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <p className="lead text-xs-center">Currently seeking new opportunities in a technical product management role and build and deliver great products that make a positive impact in people&rsquo;s lives.</p>
          </div>
        </div>
      </div>
      <hr/>
      <div className="container">
        <h2 className="text-xs-center mt-3">Work Experience</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="my-2">
              <h3 className="mb-2">Product Manager <small className="text-muted">Spright / Java Beach, Inc.</small></h3>
              <ul>
                <li>Product owner of the Spright mobile application and oversee the design, engineering and business operation.</li>
                <li>Collaborated closely with the co-founders to define product roadmap and strategy derived from the company vision, customer feedback, and metrics analysis.</li>
                <li>Created all wireframes and prototypes of the mobile application.</li>
                <li>Spearheaded all front-end development on the company’s website, landing pages and mobile application using React.js, Redux, and React Native.</li>
              </ul>
            </div>
          </li>
          <li className="list-group-item">
            <div className="my-2">
              <h3 className="mb-2">Director of Engineering <small className="text-muted">OpenWager, Inc.</small></h3>
              <ul>
                <li>Managed a 20-person team across engineering and quality assurance in Romania and the US.</li>
                <li>Launched three game titles across the iOS, Android and Facebook platforms within a six-month span.</li>
                <li>Created and drove a two-week sprint development, quality assurance, and release management process for on-time and quality deliverables.</li>
                <li>Initiated a robust hiring process and doubled the size of the engineering and quality assurance team in the San Francisco headquarters.</li>
              </ul>
            </div>
          </li>
          <li className="list-group-item">
            <div className="my-2">
              <h3 className="mb-2">VP of Engineering <small className="text-muted">MakingFun, Inc.</small></h3>
              <ul>
                <li>Managed three teams with a total of forty engineers and QAs in Argentina and Uruguay.</li>
                <li>Launched four game titles with over 500k daily active players which produced $2mm in revenue.</li>
                <li>Drove and designed a cross-platform authentication system with iOS, Android, Facebook and other social platforms.</li>
                <li>Integrated a robust analytical system tracking over 100mm events per month to measure KPIs such as DAU, MAU, CVR, Retention, ARPDAU, ARPPU, LTV, and etc.</li>
              </ul>
            </div>
          </li>
          <li className="list-group-item">
            <div className="my-2">
              <h3 className="mb-2">Senior Web Engineer <small className="text-muted">MakingFun, Inc.</small></h3>
              <ul>
                <li>Spearheaded the Facebook Social, OpenGraph and Payment API integration.</li>
                <li>Developed an in-house ad tracker to increase spend on user acquisition by 2 fold.</li>
                <li>Developed an in-house email campaign system using SendGrid API to improve overall sales and retention rate by 10%.</li>
              </ul>
            </div>
          </li>
          <li className="list-group-item">
            <div className="my-2">
              <h3 className="mb-2">Web Developer <small className="text-muted">GameFly, Inc. / GameStrata, Inc.</small></h3>
              <ul>
                <li>Led the UI/UX design and all front-end development effort from plan, concept to execution.</li>
                <li>Collaborated with two senior engineers to launch the company’s first online gaming Q&A website in two weeks running Ruby on Rails and MySQL.</li>
                <li>GameFly, Inc. acquired GameStrata, Inc. in October 2008</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <hr/>
      <footer>
        <div className="container">
          <p className="text-xs-center">&copy; Copyright Calvin Chan</p>
        </div>
      </footer>
    </div>
    );
  }
}

export default App;
