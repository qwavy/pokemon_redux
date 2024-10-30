import React from 'react';
import {useGetAllPokemonsQuery} from "./services/pokemon.js";
import {Card, Table} from "antd";


const App = () => {

    const columns = [
        {
            title:"Url",
            dataIndex:"url",
            key:"url",
            render: (text) => <a href={text} className="text-blue-500">{text}</a>,
        },
        {
            title:"Name",
            dataIndex:"name",
            key:"name"
        },
    ]

    const {data,error,isLoading} = useGetAllPokemonsQuery()

    if(error) return <h1>`error + ${error.message}`</h1>



    if(isLoading) return <h1>Loagind</h1>
    return (
        <div  className="flex justify-center gap-12">
            <Table className="w-[500px]" dataSource={data.results} columns={columns}/>
        </div>
    );
};

export default App;