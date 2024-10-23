
function ArticlesItem({item}) {
    return (
        <div className="articles__content-boxs">
        <img   src={`/${item.img}`} alt={item.title} />
          <div className="articles__box-data" key={item.data} >December 13, 2020</div>
          <h3 className="articles__box-text" key={item.title}>
          12 Things About Web Design <br/>Your Boss Wants To Know
          </h3>
          <button className="articles__box-link">Learn More</button>
        </div>

            )
}

export default ArticlesItem