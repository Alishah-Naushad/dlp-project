import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function API(props){
    const [res, setRes] = useState('');

    const url = 'https://7da2-34-132-219-136.ngrok-free.app/index';
    const requestConfig = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }

    function query(){
        const formData = new FormData();
        
        formData.append('file', props.image)
        
        axios.post(url, formData, requestConfig)
        .then((response) => {
            // console.log(response?.data.response)
            setRes(response.data.response)
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <button className='verify-btn' onClick={query}>
                Verify
            </button>
            {
                res != '' ?
                <>
                    <h1 className='verification-text' style={{color: res=='Verified' ? '#4BB543 ': '#B00020'}}>
                        {res}
                    </h1>
                    <div>
                        <p className="sub-sub-heading">Visit <a href="https://huggingface.co/AliShah07/segformer-b0-finetuned-segments-stamp-verification2/">the model page</a> to learn more</p>
                    </div>
                </>
                : null
            }
        </>
    )
}

export default API;