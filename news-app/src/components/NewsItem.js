import React from 'react'
const NewsItem =(props)=> {
    let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className='my-3'>
        <div className="card">
        <span className="badge text-bg-info font-monospace">{source}</span>
          <img src={imageUrl?imageUrl:"https://st3.depositphotos.com/11245678/36021/i/450/depositphotos_360215620-stock-photo-breaking-news-rendering-virtual-set.jpg"} className="card-img-top" alt='...'/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p> 
            <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
}
export default NewsItem