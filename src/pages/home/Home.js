import React from "react";
import MyCard from "../../components/Card/Card";

const Home = (props) => {
    return (
        <div>
            {
            Object.entries(props.heroes).map(([key, value]) => {
                return(
                    <MyCard heroe={value} key={key}/>
                )
            })
            }
        </div>
        
    )
}

export default Home;