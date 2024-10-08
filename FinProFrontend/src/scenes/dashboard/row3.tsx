import BoxHeader from '@/components/BoxHeader'
import DashboardBox from '@/components/DashboardBox'
import FlexBetween from '@/components/FlexBetween'
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from '@/state/api'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid, GridCellParams } from '@mui/x-data-grid'
import { useMemo } from 'react'
import { Cell, Pie, PieChart } from 'recharts'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Row3 = (props: Props) => {
    const { palette } = useTheme()
    const { data: productData } = useGetProductsQuery()
    const { data: kpiData } = useGetKpisQuery()
    const { data: transactionData } = useGetTransactionsQuery()
    const pieColors = [palette.primary[800], palette.primary[500]]
    // console.log("🚀 ~ Row3 ~ transactionsData:", transactionData)

    const pieChartData = useMemo(() => {
        if (kpiData) {
            const totalExpenses = kpiData[0].totalExpenses
            return Object.entries(kpiData[0].expensesByCategory).map(([key, value]) => {
                return [
                    {
                        name: key,
                        value: value,
                    },
                    {
                        name: `${key} of total`,
                        value: totalExpenses - value,
                    },
                ]
            })
        }
    }, [kpiData])

    const productColumns = [
        {
            field: "_id",
            headerName: "id",
            flex: 1,
        },
        {
            field: "expense",
            headerName: "Expense",
            flex: 0.5,
            renderCell: (params: GridCellParams) => `$${params.value}`
        },
        {
            field: "price",
            headerName: "Price",
            flex: 0.5,
            renderCell: (params: GridCellParams) => `$${params.value}`
        },
    ]

    const transactionColumns = [
        {
            field: "_id",
            headerName: "id",
            flex: 1,
        },
        {
            field: "buyer",
            headerName: "Buyer",
            flex: 0.67,
        },
        {
            field: "amount",
            headerName: "Amount",
            flex: 0.35,
            renderCell: (params: GridCellParams) => `$${params.value}`
        },
        {
            field: "productIds",
            headerName: "Count",
            flex: 0.35,
            renderCell: (params: GridCellParams) => (params.value as Array<string>).length
        },
    ]

    return (
        <>
            <DashboardBox gridArea="g">
                <BoxHeader
                    title='List of Products'
                    sidetext={`${productData?.length} products`}
                />
                <Box
                    mt="0.5rem"
                    p="0 0.5rem"
                    height="75%"
                    sx={{
                        "& .MuiDataGrid-root": {
                            color: palette.grey[300],
                            border: "none",
                        },
                        "&. MuiDataGrid-cell": {
                            borderBottom: `1px solid ${palette.grey[800]} !important`,

                        },
                        "& .MuiDataGrid-columnHeader": {
                            borderBottom: `1px solid ${palette.grey[400]} !important`,
                            background: "#2D2D33",

                        },
                        "& .MuiDataGrid-columnSeparator": {
                            visibility: "hidden"
                        },
                    }}
                >

                    <DataGrid columnHeaderHeight={25} rowHeight={35} hideFooter={true} rows={productData || []} columns={productColumns} />
                </Box>
            </DashboardBox>
            <DashboardBox gridArea="h">
                <BoxHeader
                    title='Recent Orders'
                    sidetext={`${transactionData?.length} latest transactions`}
                />
                <Box
                    mt="1rem"
                    p="0 0.5rem"
                    height="80%"
                    sx={{
                        "& .MuiDataGrid-root": {
                            color: palette.grey[300],
                            border: "none",
                        },
                        "&. MuiDataGrid-cell": {
                            borderBottom: `1px solid ${palette.grey[800]} !important`,

                        },
                        "& .MuiDataGrid-columnHeader": {
                            borderBottom: `1px solid ${palette.grey[400]} !important`,
                            background: "#2D2D33",

                        },
                        "& .MuiDataGrid-columnSeparator": {
                            visibility: "hidden"
                        },
                    }}
                >

                    <DataGrid columnHeaderHeight={25} rowHeight={35} hideFooter={true} rows={transactionData || []} columns={transactionColumns} />
                </Box>
            </DashboardBox>
            <DashboardBox gridArea="i">
                <BoxHeader title='Expense Breakdown by Category' sidetext='+4%' />
                <FlexBetween gap="1.5rem" pr="1rem" textAlign="center">
                    {pieChartData?.map((data, i) => (
                        <Box key={`${data[0].name}-${i}`}>
                            <PieChart
                                width={110}
                                height={100}
                            >
                                <Pie
                                    stroke='none'
                                    data={data}
                                    innerRadius={18}
                                    outerRadius={35}
                                    paddingAngle={2}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={pieColors[index]} />
                                    ))}
                                </Pie>
                            </PieChart>
                            <Typography variant='h5'>{data[0].name}</Typography>
                        </Box>
                    ))}
                </FlexBetween>
            </DashboardBox>
            <DashboardBox gridArea="j">
                <BoxHeader title='Overall Summary and Explanation Data' sidetext='+14%' />
                <Box margin="1.25rem 1rem 0.4rem 1rem" bgcolor={palette.primary[800]} borderRadius="1rem" height="15px">

                    <Box
                        height="15px"
                        bgcolor={palette.primary[600]}
                        borderRadius="1rem"
                        width="40%"
                    ></Box>
                    <Typography variant='h6' margin="1rem">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</Typography>
                </Box>
            </DashboardBox>
        </>
    )
}

export default Row3