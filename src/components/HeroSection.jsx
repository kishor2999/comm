export default function HeroSection(){
    return(
        <>
         <div className="hero-section">
                <div className="max-width">
                    <div className="excat-center">
                    <div className="row">
                        <div className="contianer-left">
                            <p>Welcome Customer</p>
                            <h1 className = "hero-section-title">To Our Shop</h1>
                            <p>Our shop contains all of your favourite clothing items. We have the outfit of your choice, stylish designs and many more. Feel free to explore and buy what youlike. Happy shopping!</p>
                        </div>

                        <div className="container-right">
                           {/* // <img src="https://www.pngkit.com/png/detail/124-1244996_transparent-welcome-anima-image-royalty-free-download-anime.png"></img> */}
                           <img src="/imgcloth/cottonTee.jpeg"></img>
                        </div>
                    </div>
                    </div>
               
                </div>
            </div>
        </>
    )
}