import React,{useEffect} from 'react'
import axios from '../../axios'
function Show() {
    const [data, setdata] = React.useState([])
    
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("/Movie")
            setdata(res.data)
        }
        fetchData()
    },[])
    console.log(data)
    return(
        
        <div className="form-main">
            <table>
                <tr>
                    <th>MovieId</th>
                    <th>MovieName</th>
                    <th>MovieLocation</th>
                </tr>
            {
            data.map((item,i) => (
                <tr>
                    <td>{item.MovieId}</td>
                    <td>{item.MovieName}</td>
                    <td>{item.Location}</td>
                </tr>
            ))}
            </table>
        </div>
    )
}

export default Show