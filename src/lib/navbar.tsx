"use client"

import { NavBarItems } from "@/assets/data/navData";
import { Menu } from "@mui/icons-material";
import { Box, Drawer, Grid2, IconButton, List, ListItem, Typography, useMediaQuery, useTheme } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

const AppBar = dynamic(() => import("@mui/material/AppBar"), {
    ssr: false
})

const DesktopNavView = () => {
    return (
        <Grid2
            container
            direction={"row-reverse"}
            spacing={3}
        >
            {
                NavBarItems.filter((item) => item.enabled).reverse().map((item) => {
                    return (
                        <Grid2 key={`nav-ele-${item.id}`}>
                            <Link style={{ textDecoration: "none" }} href={`#${item.id}`} passHref>
                                <Typography
                                    sx={{
                                        color: '#1f2a38',
                                        '&:hover': {
                                            color: '#2664eb',
                                            cursor: 'pointer'
                                        }
                                    }}
                                >
                                    {item.text}
                                </Typography>
                            </Link>
                        </Grid2>
                    )
                })
            }
        </Grid2>
    )
}

const MobileNavView = () => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen((curr) => !curr);
    }
    return (
        <>
            <IconButton onClick={toggleDrawer}>
                <Menu />
            </IconButton>
            <Drawer
                anchor="right"
                open={open}
                onToggle={toggleDrawer}
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
            >
                <Box
                    sx={{
                        paddingRight: '2rem',
                        paddingTop: '2rem'
                    }}
                >
                    <List>
                        {
                            NavBarItems
                                .filter(item => item.enabled)
                                .map(
                                    item => <ListItem key={`nav-mo-ele-list-${item.id}`}>
                                        <Link style={{ textDecoration: "none" }} href={`#${item.id}`} passHref>
                                            <Typography
                                                sx={{
                                                    color: '#1f2a38',
                                                    '&:hover': {
                                                        color: '#2664eb',
                                                        cursor: 'pointer'
                                                    }
                                                }}
                                            >
                                                {item.text}
                                            </Typography>
                                        </Link>
                                    </ListItem>
                                )
                        }
                    </List>
                </Box>
            </Drawer>
        </>
    )
}

export default function NavBar() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <AppBar sx={{ backgroundColor: '#ffffff' }} position="fixed">
            <Box sx={{
                padding: '1rem'
            }}>
                <Grid2
                    sx={{
                        "justifyContent": "space-between",
                        "alignItems": "center",
                        "color": '#2664eb'
                    }}
                    direction={"row"}
                    container
                >
                    <Grid2>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: '1.5rem',
                                lineHeight: '2rem'
                            }}
                        >
                            {`BuildWithAman`}
                        </Typography>
                    </Grid2>
                    <Grid2>
                        {isMobile ? <MobileNavView /> : <DesktopNavView />}
                    </Grid2>
                </Grid2>
            </Box>
        </AppBar>
    )
}