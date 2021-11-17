import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Axios from "axios";
import "./account.css";
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

const Account = () => {
    const [data, setdata] = useState([]);
    const history = useHistory();

    useEffect(() => {
        Axios.get("http://localhost:8000/profile").then((res) => {
            if (true) {
                console.log(res.data);
                setdata(res.data);
            }
            else {
                console.log("fail");
            }
        })


    }, [])


    const downloadHandler = (ele) => {
        Axios.get(`http://localhost:8000/template/${ele}`).then((res) => {
            console.log(res.data);
            console.log(res.data.form1);
            history.push(`/template${res.data.form1}/${res.data.form2.resume_id}`)
        })
    }
    const deleteHandler = (ele) => {
        Axios.get(`http://localhost:8000/template/delete/${ele}`).then((res) => {
            console.log(res);
            if (res.data == true) {
                data.filter(p => {
                    console.log(p);
                    return (p.resume_id != ele);
                })
            }
        })
        window.location.reload();
    }


    return (
        <>
            <div className="account-main">
                <div className="account-left">
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                        <h1 className="account-left-logo">creation</h1>
                    </Link>
                </div>
                <div className="account-right">
                    <div className="account-right-heading">
                        <h2 className="account-right-head"> Dashboard</h2>
                    </div>

                    <div className="account-right-all-data">

                        {data.map((ele) => {
                            console.log(ele.created_date);
                            console.log(ele);
                            if (data.length > 0) {
                                return (
                                    <>
                                        <Card sx={{ maxWidth: 800 }} style={{ margin: "20px" }}>
                                            <CardActionArea>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Created Date {ele.created_date != undefined && ele.created_date.slice(0, 10)}
                                                    </Typography>
                                                    {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button size="small" color="primary" onClick={() => downloadHandler(ele.resume_id)}>
                                                    Download
                                                </Button>
                                            </CardActions>
                                            <CardActions>
                                                <Button size="small" color="primary" onClick={() => deleteHandler(ele.resume_id)}>
                                                    Delete
                                                </Button>
                                            </CardActions>

                                        </Card>


                                        {/* <div style={{cursor:"pointer", backgroundColor:"grey" ,width:"100%"}} onClick={()=>clickHandler(ele.resume_id)}>{ele.created_date!==undefined&&ele.created_date.slice(0,10)}</div> */}

                                    </>
                                )
                            }
                        })}
                        {(data !== undefined && data.length == 0) &&
                            <div class="create-main">
                                <i class="far fa-file-alt fa-5x signature"></i>
                                    <h1 class="create-h1">Create a New Resume</h1>
                                    <Link to="/form1" class="link-to-form1">Create New</Link>
                                    </div>
                        }
                    </div>

                </div>

            </div>

        </>
    )
}

export default Account;
