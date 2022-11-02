import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMonthsList } from '../store/monthsSlice';



const Month = () => {
    const months = useSelector((state) => state.months.monthsList);
    const dispatch = useDispatch();
    //const [months,setMonths] = useState([]);
    const [loading,setLoading] = useState(true);

    const getMonths = async () => {
        const months = await axios.get("/months");
        dispatch(setMonthsList(months.data));
        setLoading(false);
    };

    useEffect(() => {
        getMonths();
    },[]); // not sure why I'm getting an error here!

    if(loading){
        return <p>Loading...</p>
    }else{
        return (
            <div>
                <h1>Movies Page</h1>
                <div>
                    {
                        months.map(month => {
                            return <p key={month.id}>{month.date}</p>
                            //return <p>{month}</p>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Month;