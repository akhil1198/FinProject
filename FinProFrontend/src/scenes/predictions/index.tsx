// /* eslint-disable @typescript-eslint/no-unused-vars */
// import DashboardBox from '@/components/DashboardBox'
// import FlexBetween from '@/components/FlexBetween'
// import { useGetKpisQuery } from '@/state/api'
// import { Box, Button, Typography, useTheme } from '@mui/material'
// import { useMemo, useState } from 'react'
// import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Label } from 'recharts'

// type Props = {}


// const Predictions = (props: Props) => {
//     const { palette } = useTheme()
//     const [isPredictions, setIsPredictions] = useState(false)
//     const { data: kpiData } = useGetKpisQuery()

//     const formattedData = useMemo(() => {
//         if (!kpiData) {
//             return []
//         }
//         const monthData = kpiData[0].monthlyData
        
//         const formatted = monthData.map(
//             ({ month, revenue, expenses }, i: number) => {
//                 return [i, revenue]
//             }
//         )
//         const regressionLine = regress

//     }, [kpiData])

//     return (
//         <DashboardBox width="100%" height="100%" p="1rem" overflow="hidden">
//             <FlexBetween m="1rem 2.5rem">
//                 <Box>
//                     <Typography variant='h3'>Revenue and Predictions</Typography>
//                     <Typography variant='h5'>Chargetd Revenue and Predicted Revenue based on a simple linear regression model</Typography>
//                 </Box>
//                 <Button onClick={() => setIsPredictions(!isPredictions)} sx={{ color: palette.grey[900], bgcolor: palette.grey[700], boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4" }}>Show Predicted Revenue for Next Year</Button>
//             </FlexBetween>
//             <ResponsiveContainer width="100%" height="100%">
//                 <LineChart
//                     data={formattedData}
//                     margin={{
//                         top: 20,
//                         right: 75,
//                         left: 20,
//                         bottom: 80,
//                     }}
//                 >
//                     <CartesianGrid strokeDasharray="3 3" stroke={palette.grey[800]} />
//                     <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }}>
//                         <Label value="Month" offset={-5} position="insideBottom" />
//                     </XAxis>
//                     <YAxis axisLine={{ strokeWidth: '0' }} tickFormatter={(v) => `$${v}`} style={{ fontSize: "10px" }} domain={[12000, 26000]}>
//                         <Label value="Revenue in USA" angle={-90} offset={-5} position="insideLeft" />

//                     </YAxis>
//                     {/* <YAxis yAxisId="right" orientation='right' axisLine={false} tickLine={false} style={{ fontSize: "10px" }} /> */}
//                     <Tooltip />
//                     <Legend verticalAlign='top' />
//                     <Line type="monotone" dataKey="Actual Revenue" stroke={palette.primary.main} strokeWidth={0} dot={{ strokeWidth: 5 }} />
//                     <Line type="monotone" dataKey="Regression Line" stroke="#8884d8" dot={false} />
//                     {isPredictions && (
//                         <Line type="monotone" dataKey="Predicted Revenue" stroke={palette.secondary[500]} />

//                     )}
//                 </LineChart>
//             </ResponsiveContainer>
//         </DashboardBox>
//     )
// }

// export default Predictions