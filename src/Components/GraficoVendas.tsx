import React from "react";
import { IVenda } from "../Context/DataContext";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
 
type VendaDia = {
    data: string
    pago: number
    processando: number
    falha: number
}

function transformData (data: IVenda[]): VendaDia[] {
    const dias = data.reduce((acc: {[key: string]: VendaDia}, item) => {
        const dia = item.data.split(' ')[0];
        if(!acc[dia]) {
            acc[dia] = {
                data: dia,
                pago: 0,
                falha: 0,
                processando: 0,
            }
        } 
        acc[dia][item.status] += item.preco;
        return acc;
    }, {})

    return Object.values(dias).map(dia => ({ ...dia, data: dia.data.substring(5) }));
}

const GraficoVendas = ({data}: {data: IVenda[]}) => {
    const transformedData = transformData(data);
    return (
        <div>
            <ResponsiveContainer height={400} width="99%">
                <LineChart data={transformedData}>
                    <XAxis dataKey="data"/>
                    <YAxis />
                    <Tooltip  />
                    <Legend /> 
                    <Line type="monotone" dataKey="pago" stroke="#8884d8" strokeWidth={3} />
                    <Line type="monotone" dataKey="processando" stroke="#82ca9d" strokeWidth={3} />
                    <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3}  />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default GraficoVendas;