import "./Pictures.css"

export default function Pictures() {
    return (
        <div className="flex-container">
        <div className="img-row">
          <div className="img-item"><img src="images/photo-2.jfif" alt="Image" /></div>
          <div className="img-item"><img src="images/photo-3.jfif" alt="Image" /></div>
          <div className="img-item"><img src="images/photo-4.jfif" alt="Image" /></div>
        </div>
        <div className="img-row">
          <div className="img-item"><img src="images/photo-5.jfif" alt="Image"   /></div>
          <div className="img-item rounded-father"><img src="images/photo-mid.jfif" alt="Image"  /></div>
          <div className="img-item"><img src="images/photo-6.jfif" alt="Image"  /></div>
        </div>
        <div className="img-row">
          <div className="img-item"><img src="images/photo-7.jfif" alt="Image"  /></div>
          <div className="img-item"><img src="images/photo-8.jfif" alt="Image"  /></div>
          <div className="img-item"><img src="images/photo-9.jfif" alt="Image"  /></div>
        </div>
        <div className="img-row">
          <div className="img-item"><img src="images/photo-10.jfif" alt="Image"  /></div>
          <div className="img-item"><img src="images/photo-11.jfif" alt="Image"  /></div>
          <div className="img-item"><img src="images/photo-12.jfif" alt="Image"  /></div>
        </div>
      </div>
    )
}

