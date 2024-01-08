/* eslint-disable react/prop-types */
import { useState } from "react";
import { AppBar,Container,Menu, MenuItem, IconButton, Stack, Typography, useMediaQuery, Dialog } from "@mui/material"
import { NAVBAR_HEIGHT } from "../../constants"
import { useTheme } from "@emotion/react";
import useScrollPosition from "../../hooks/useScrollButton";
import { navbarContent } from "../../utils/content";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallMadeIcon from "@mui/icons-material/CallMade";
import LanguageIcon from "@mui/icons-material/Language";
import LaunchButton from "../Buttons/LaunchButton";
import MenuIcon from "@mui/icons-material/Menu";


const { Logo } = navbarContent

// custom component
const LinkButton = ({children, ...props}) => (
  <Stack 
  direction="row"
  alignItems= "center"
  spacing={0.2}
  sx={{cursor: "pointer",
   color: "text.secondary",
   "&:hover": {color: "text.primary"}
  }}
  {...props}
  >{children}</Stack>
)

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  const theme = useTheme()
  const isMobile =  useMediaQuery(theme.breakpoints.down("lg"))

  const openMenu = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onOpenHandler =() => setOpen(true)
  // const onCloseHandler =() => setOpen(false) 
  return (
    <AppBar
    elevation={0}
    sx={{height: NAVBAR_HEIGHT,
       bgcolor: scrollPosition > 10? "rgba(7,7,16,7)" : "transparent",
       backdropFilter: scrollPosition > 10 && "blur(60px)",
      }}
    >
      <Container>
        <Stack 
          direction="row"
         alignItems="center"
          flexWrap="wrap"
          justifyContent="space-between"
          >
        {/* Logo */}
        <img src={Logo} style={{height: "100%", objectFit: "contain"}} />

        {/* links */}
        {!isMobile &&(
        <Stack 
        direction="row" 
        alignItems="center" 
        justifyContent="center" 
        spacing={6}
        sx={{flex: 1}}
        flexWrap="wrap"

        >
          <LinkButton 
            aria-controls = "basic-menu" //which is giong to bind where we are clicking and items display below it
            aria-haspopup="true"
            aria-expanded={openMenu  ? "true": undefined}
            onClick={handleClick}
          >
            <Typography variant="body2">Products</Typography>
             <KeyboardArrowDownIcon fontSize="small"/>
          </LinkButton>
          {/* dropdown items */}

          <Menu id ="basic-menu" 
          // the below anchor deterine whwere thr items are to be displayed
           anchorEl={anchorEl}
          open = {openMenu }
          onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Career</MenuItem>
            <MenuItem onClick={handleClose}>blogs</MenuItem>
            <MenuItem onClick={handleClose}>Helpcenter</MenuItem>
          </Menu>

          <LinkButton 
            aria-controls = "basic-menu" //which is giong to bind where we are clicking and items display below it
            aria-haspopup="true"
            aria-expanded={openMenu  ? "true": undefined}
            onClick={handleClick}
          >
            <Typography variant="body2">Developers</Typography>
             <KeyboardArrowDownIcon fontSize="small"/>
          </LinkButton>
          <Menu id ="basic-menu" 
          // the below anchor deterine whwere thr items are to be displayed
           anchorEl={anchorEl}
          open = {openMenu }
          onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Developers</MenuItem>
            <MenuItem onClick={handleClose}>Developers</MenuItem>
            <MenuItem onClick={handleClose}>Developers</MenuItem>
          </Menu>

          <LinkButton>
            <Typography variant="body2">Contact</Typography>
             <KeyboardArrowDownIcon fontSize="small"/>
          </LinkButton>

          <LinkButton>
            <Typography variant="body2">About</Typography>
             <KeyboardArrowDownIcon fontSize="small"/>
          </LinkButton>

          <LinkButton spacing={0.5}>
            <Typography variant="body2">Blogs</Typography>
             <CallMadeIcon sx={{fontSize: 13}}/>
          </LinkButton>
        </Stack>
        )}

        {/* Action buttons */}
       { isMobile? (
        <>
        <IconButton onClick= {onOpenHandler}>
          <MenuIcon sx={{color: "text.secondary"}}/>
        </IconButton>
        <Dialog 
        open = {open}
        fullScreen
        fullWidth
        >
          <Stack
          direction="row"
          spacing={5}
          alignItems="center"
         >
          <LinkButton spacing={0.5}>
            <LanguageIcon fontSize="small"/>
            <Typography variant="body2">EN</Typography>
          </LinkButton>

          <LaunchButton sx={{borderRadius: 3}}/>
          </Stack> 
        </Dialog>
        </>
       )  : ( <Stack
          direction="row"
          spacing={5}
          alignItems="center"
         >
          <LinkButton spacing={0.5}>
            <LanguageIcon fontSize="small"/>
            <Typography variant="body2">EN</Typography>
          </LinkButton>

          <LaunchButton sx={{borderRadius: 3}}/>
          </Stack> 
          )}
        </Stack>
      </Container>
    </AppBar>
  )
}

export default Navbar