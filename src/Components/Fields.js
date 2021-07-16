import { Grid,Container,TextField,Button } from '@material-ui/core'
import React, { useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/core'
import Weather from './Weather'
import axios from 'axios'
import './Style.css'

const useStyles = makeStyles({
    input:{
        color:'white',
        fontWeight:'bold'
    }
})

function Fields() {
    const [data,setData] = useState([])
    const [city,setCity] = useState('')
    const [country,setCountry] = useState('')
    let [cityname,setCityName] = useState()
    let [countryname,setCountryName] = useState()
    const classes = useStyles()
    const APIKEY='90bfa957d5559eb9b624130304d15ba4'

    
    console.log(cityname,countryname)
    useEffect(()=>{
        const setDatas = async () => {
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${APIKEY}`)
            .then(res=>{
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        setDatas()
    },[])

    const setDatas = async () => {
        setCityName(city)
        setCountryName(country)
        if(city === '' && country === ''){
            alert('Enter The City And Country Name')
        }
        else{
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKEY}`)
            .then(res=>{
                setData(
                    [{
                       city_name:res.data.name,
                       country_name:res.data.sys.country,
                       temp:res.data.main.temp,
                       temp_min:res.data.main.temp_min,
                       temp_max:res.data.main.temp_max,
                       description:res.data.weather[0].description,
                       weather_id:res.data.weather[0].id,
                       icon:res.data.weather[0].icon,
                    }]
                )
                
            }).catch(err=>{
                console.log(err)
            })
        }
    }

    console.log(data)

    return (
        <Container>
            <Grid container>
                <Grid item md={4} sm={12} xs={12} style={{padding:'20px 10px 20px 10px'}}>
                    <TextField 
                        variant='standard'
                        color="primary" 
                        defaultValue={city}
                        placeholder='Enter City'
                        InputProps={{
                            className: classes.input
                        }}
                        onChange={(e)=>
                        setCity(e.target.value)
                        }
                        fullWidth
                        required    
                        />
                </Grid>

                <Grid item md={4} sm={12} xs={12} style={{padding:'20px 10px 20px 10px'}}>
                    <TextField 
                        variant='standard' 
                        color='primary' 
                        placeholder='Enter Country' 
                        defaultValue={country}
                        InputProps={{
                            className: classes.input
                        }}
                        onChange={e=>setCountry(e.target.value)}
                        fullWidth
                        required    
                        />
                </Grid>

                <Grid item md={4} sm={12} xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Button variant='contained' color='primary' onClick={setDatas} style={{backgroundColor:'#cf9700'}}>GET WEATHER</Button>
                </Grid>
            </Grid>

            {
               (cityname === undefined || countryname === undefined)?(
                   null
               ):(
                   <div className='weather'> 
                        {
                            data.map(data=>(
                                <Weather data={data}/>
                            ))
                        }
                   </div>
               )
            }    
       </Container>
    )
}

export default Fields
