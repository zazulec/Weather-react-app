import React, { useState } from 'react';


function Home() {

    const [currentWeather, setCurrentWeather] = useState({})

        // downloadCurrentWeather = () => {
        //     fetch()
        // }
   
        return(
            <div>
                <h1>Probably the best weather App in the World</h1>
                <h3>Na tej stronie będziemy wyświetlać główną stronę aplikacji.</h3>
            </div>
        )
}

export default Home;