/* eslint-disable @typescript-eslint/no-unused-vars */
import BoxHeader from '@/components/BoxHeader';
import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api';
import { useTheme } from '@mui/material';
import { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Line, Legend, LineChart, BarChart, Bar, Rectangle } from 'recharts';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

const Row1 = (props: Props) => {
    const { palette } = useTheme()
    const { data } = useGetKpisQuery()
    console.log("🚀 ~ Row1 ~ data:", data)

    const revenueExpenses = useMemo(() => {
        return (
            data && data[0].monthlyData.map(({ month, revenue, expenses }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue,
                    expenses: expenses,
                }
            })
        );
    }, [data])

    const revenueProfit = useMemo(() => {
        return (
            data && data[0].monthlyData.map(({ month, revenue, expenses }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue,
                    profit: (revenue - expenses).toFixed(2),
                }
            })
        );
    }, [data])

    const revenue = useMemo(() => {
        return (
            data && data[0].monthlyData.map(({ month, revenue }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue,
                }
            })
        );
    }, [data])

    return (
        <>
            <DashboardBox gridArea="a">
                <BoxHeader title="Revenue and Expenses" subtitle='top line represents revenue, bottom line represents expenses' sidetext='+4%' />
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={revenueExpenses}
                        margin={{
                            top: 15,
                            right: 25,
                            left: -10,
                            bottom: 60,
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <defs>
                            <linearGradient id='colorRevenue' x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.5} />
                                <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />

                            </linearGradient>
                            <linearGradient id='colorExpenses' x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.5} />
                                <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />

                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }} />
                        <YAxis axisLine={{ strokeWidth: "0" }} tickLine={false} style={{ fontSize: "10px" }} domain={[8000, 23000]} />
                        <Tooltip />
                        <Area type="monotone" dataKey="revenue" dot={true} stroke={palette.primary.main} fillOpacity={1} fill="url(#colorRevenue)" />
                        <Area type="monotone" dataKey="expenses" dot={true} stroke={palette.primary.main} fillOpacity={1} fill="url(#colorExpenses)" />

                    </AreaChart>
                </ResponsiveContainer>
            </DashboardBox>
            <DashboardBox gridArea="b">
                <BoxHeader title="Profit and Revenue" subtitle='top line represents revenue, bottom line represents expenses' sidetext='+4%' />
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={revenueProfit}
                        margin={{
                            top: 20,
                            right: 0,
                            left: -10,
                            bottom: 55,
                        }}
                    >
                        <CartesianGrid vertical={false} stroke={palette.grey[800]} />
                        <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }} />
                        <YAxis yAxisId="left" axisLine={false} tickLine={false} style={{ fontSize: "10px" }} />
                        <YAxis yAxisId="right" orientation='right' axisLine={false} tickLine={false} style={{ fontSize: "10px" }} />
                        <Tooltip />
                        <Legend height={20} wrapperStyle={{
                            margin: '0 0 10px 0'
                        }} />
                        <Line yAxisId="left" type="monotone" dataKey="profit" stroke={palette.tertiary[500]} />
                        <Line type="monotone" yAxisId="right" dataKey="revenue" stroke={palette.primary.main} />

                    </LineChart>
                </ResponsiveContainer>
            </DashboardBox>
            <DashboardBox gridArea="c">
                <ResponsiveContainer width="100%" height="100%">
                    <BoxHeader title='Revenue Month by Month' subtitle='Graph representing revenue month by month' sidetext='+4%' />
                    <BarChart
                        width={500}
                        height={300}
                        data={revenue}
                        margin={{
                            top: 17,
                            right: 15,
                            left: -5,
                            bottom: 58,
                        }}
                    >
                        <defs>
                            <linearGradient id='colorRevenue' x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.8} />
                                <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />

                            </linearGradient>
                            <linearGradient id='colorExpenses' x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.5} />
                                <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />

                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} stroke={palette.grey[800]} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} style={{ fontSize: "10px" }} />
                        <YAxis axisLine={false} tickLine={false} style={{ fontSize: "10px" }} />
                        <Tooltip />
                        <Bar dataKey="revenue" fill="url(#colorRevenue)" />
                        {/* <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} /> */}
                    </BarChart>
                </ResponsiveContainer>
            </DashboardBox>
        </>
    )
}

export default Row1