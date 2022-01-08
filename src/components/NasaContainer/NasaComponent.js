import React from 'react'
import NasaCard from '../Card/NasaCard'
import './styles.css'
const NasaComponent = (props) => {
    return (
        <ul>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {props.dataSet.map((data, idx) => (
                <NasaCard key={idx} url = {data.url} title={data.title} explanation={data.explanation}  date={data.date} />
            ))}
        </div>
        </ul>
    )
}

export default NasaComponent
