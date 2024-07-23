import { Box, useMediaQuery } from '@mui/material'
import Row1 from './row1'
import Row2 from './row2'
import Row3 from './row3'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

const gridTemplateLargeScreen = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"
`
// grid templates for small screen is just going to be 1 column hence just one letter for every grid
const gridTemplateSmallScreen = `
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "d"
    "d"
    "d"
    "e"
    "e"
    "f"
    "f"
    "f"
    "g"
    "g"
    "g"
    "h"
    "h"
    "h"
    "i"
    "i"
    "j"
    "j"

`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Dashboard = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return (
        <Box width="100%" height="100%" display="grid" gap="1.5rem"
            sx={
                isAboveMediumScreens ? {
                    // gridtemplatecolumns are settings for screen being split into 3 horizontal sections each of 370px wide
                    gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
                    gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
                    gridTemplateAreas: gridTemplateLargeScreen
                } : {
                    // gridtemplatecolumns are settings for small screen being split into 1 horizontal section
                    gridAutoColumns: "1fr",
                    gridAutoRows: "80px",
                    gridTemplateAreas: gridTemplateSmallScreen
                }
            }
        >

            <Row1 />
            <Row2 />
            <Row3 />
        </Box>
    )
}

export default Dashboard