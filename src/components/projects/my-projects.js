import React from 'react';

class MyProjects extends React.Component{

  constructor(props){
    super(props);
    this.state = {records: []};
  }

  componentDidMount() {
    fetch('https://api.andrewgwardwell.com/api/formatted-nodes')
        .then(response => response.json())
        .then(records => {
            this.setState({
                records: records.items.reverse()
            })
        })
        .catch(error => console.log(error))
  }

  setSrcSet(value, key){
      var set = value[key].xl_img + ' 1200w,' + value[key].lg_img + '  992w,' + value[key].md_img + '  768w,' + value[key].sm_img + ' 375w';
      return set;
  }

  records(){
    const rs = [];
    this.state.records.map((r) => {
      const tech = r.terms.map(t => {
        return (<span className={`p-2 m-1 badge rounded-pill color-${t.name.toLowerCase()}`} key={t.tid}>{t.name}</span>);
      });
      rs.push(
        <div className="card col-12 col-md-3 p-3 border-light" key={r.nid}>
          <div className='card-body text-start'>
            <h5 className="card-title">{r.title}</h5>
            <div className="image-holder mb-1">
              <img className="card-img-top" srcSet={this.setSrcSet(r, 'responsive_images')} sizes="(min-width:992px) 33vw, 100vw" src={r.responsive_images.md_img} />
            </div>
            <div className="d-flex flex-wrap">
              {tech}
            </div>
          </div>

        </div>
      );
    });
    return rs;
  }

  render() {
    return (
      <>
        <h2>I have worked on:</h2>
        <div className='row'>
          {this.records()}
        </div>
      </>

    )
  };

}

export default MyProjects;