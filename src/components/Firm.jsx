import ClientIcon from "../assets/icons/ClientIcon"


function Firm() {
    return (
        <div className="firm">
         <div className="container">
         <div className="firm__wrap">
                <h1 className="firm__title">
                The team at McKinley always delivers thoughtful  <br/> and professional legal services in a timely manner.
                <p className="firm__subtitle">John Smith, Tax Law Client</p>
                </h1>
               
                <div className="firm__icon"><ClientIcon/></div>
            </div>
         </div>
        </div>
    )
}

export default Firm