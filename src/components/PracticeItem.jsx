
function PracticeItem({item}){
    return (
        <div className="practice__boxs">
        <div className="practice__box-svg">
            <img src={`/${item.icon}`} alt={item.title}  />
        </div>
        <h4 className="practice__box-title" key={item.title}>Intellectual Property</h4>
        <p className="practice__box-title2" key={item.subtitle}>
        Intellectual Property law deals with laws to protect creators and owners of inventions, writing, music, designs and other works.
        </p>
        <button className="practice__box-link">Learn More</button>
         </div>
    )
}

export default PracticeItem