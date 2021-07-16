import { Container } from '@material-ui/core'
import React from 'react'
import './Style.css'

function Weather({...data}) {

    const temp = Math.floor(`${data.data.temp - 273.15}`)
    const minTemp = Math.floor(`${data.data.temp_min - 273.15}`)
    const maxTemp = Math.floor((`${data.data.temp_max - 273.15}`))
    console.log(data)
    var img = ` http://openweathermap.org/img/wn/${data.data.icon}@2x.png` 

    return (
        <Container>
            <p className='text'>{data.data.city_name},{data.data.country_name}</p>
            <div style={{marginTop:'-20px',marginBottom:'-20px'}}>
                <img src={img} alt='No Icon URL' style={{height:'100px'}}/>
            </div>

            <div style={{marginTop:'10px'}}>
                <p className='text'>
                    {temp}&deg;C
                </p>
            </div>        
            
            <div style={{marginTop:'10px'}}>
                <p className='text'>
                    <span style={{paddingRight:'10px'}}>Min:{minTemp}&deg;C</span>
                    <span style={{paddingLeft:'10px'}}>Max:{maxTemp}&deg;C</span>
                </p>
            </div>

            <div style={{marginTop:'10px'}}>
                <p className='text'>
                    {data.data.description}
                </p>
            </div>
        </Container>
    )
}

export default Weather
