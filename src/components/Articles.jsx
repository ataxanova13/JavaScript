import ArticlesItem from "./ArticlesItem"
import { articlesData } from "./data";


function Articles() {
    return (
        <div className="articles">
            <div className="container">
                <h2 className="articles__title">Recent Articles</h2>
               <div className="articles__contens">
             {
                articlesData.map(item => (
                    <ArticlesItem  key={item.id} item = {item} />
                ))
             }

               </div>
            </div>
        </div>
    )
}

export default Articles