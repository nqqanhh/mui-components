import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Divider,
  Autocomplete,
  TextField,
  Button,
  ButtonGroup,
  Checkbox,
  Fab,
  RadioGroup,
  FormControlLabel,
  Radio,
  Rating,
  Select,
  MenuItem,
  Slider,
  Switch,
  TransferList,
  ToggleButton,
  ToggleButtonGroup,
  Avatar,
  Badge,
  Chip,
  List,
  ListItem,
  ListItemText,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
  Alert,
  Backdrop,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Skeleton,
  Snackbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AppBar,
  Toolbar,
  Card,
  CardContent,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Breadcrumbs,
  Link,
  Drawer,
  IconButton,
  Menu,
  MenuItem as MUIMenuItem,
  Pagination,
  SpeedDial,
  SpeedDialAction,
  Stepper,
  Step,
  StepLabel,
  Tabs,
  Tab,
  Grid as GridLegacy,
  Stack as LegacyStack,
  ImageList,
  ImageListItem,
  Input,
  ClickAwayListener,
  Modal,
  NoSsr,
  Popover,
  Popper,
  Portal,
  TextareaAutosize,
  Fade,
  useMediaQuery,
  Grow,
  Slide,
  Collapse,
} from "@mui/material";
import {
  useTheme,
  Experimental_CssVarsProvider as CssVarsProvider,
  getInitColorSchemeScript,
  useColorScheme,
} from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { TransitionGroup } from "react-transition-group";

export default function AllComponentsDemo() {
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [menuAnchor, setMenuAnchor] = React.useState(null);
  const [value, setValue] = React.useState(0);
  const [rangeValue, setRangeValue] = React.useState([20, 37]);
  const [inputRangeValue, setInputRangeValue] = React.useState(30);
  return (
    <Container sx={{ py: 4 }}>
      {/* Inputs */}
      <Typography variant='h5' gutterBottom>
        Inputs
      </Typography>
      <Stack spacing={2} divider={<Divider />}>
        <Box>
          <Typography variant='subtitle2'>Autocomplete</Typography>
          <Autocomplete
            options={["One", "Two", "Three"]}
            renderInput={(p) => <TextField {...p} label='Chọn' />}
          />
        </Box>
        <Box>
          <Typography variant='subtitle2'>Button </Typography>
          <Stack spacing={2} direction='row'>
            <Button variant='text'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
            {/*  */}
            <Button>Primary</Button>
            <Button disabled>Disabled</Button>
            <Button href='#text-buttons'>Link</Button>
            {/*  */}
          </Stack>
        </Box>
        <Box></Box>
        <Box>
          <Typography variant='subtitle2'>Button + ButtonGroup</Typography>
          <Stack spacing={2} direction='column'>
            <ButtonGroup variant='contained'>
              <Button>One</Button>
              <Button>Two</Button>
            </ButtonGroup>
            <ButtonGroup variant='outlined' aria-label='Basic button group'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup variant='text' aria-label='Basic button group'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button loading>Three</Button>
            </ButtonGroup>
          </Stack>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Icon Button</Typography>
          <IconButton aria-label='delete'>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label='delete' disabled color='primary'>
            <DeleteIcon />
          </IconButton>
          <IconButton color='secondary' aria-label='add an alarm'>
            <AlarmIcon />
          </IconButton>
          <IconButton color='primary' aria-label='add to shopping cart'>
            <AddShoppingCartIcon />
          </IconButton>
        </Box>
        <Box></Box>
        <Box>
          <Typography variant='subtitle2'>Checkbox</Typography>
          <Checkbox defaultChecked />
        </Box>
        <Box>
          <Typography variant='subtitle2'>Floating Action Button</Typography>
          <Fab color='primary'>
            <AddIcon />
          </Fab>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Radio Group</Typography>
          <RadioGroup row defaultValue='a'>
            <FormControlLabel value='a' control={<Radio />} label='A' />
            <FormControlLabel value='b' control={<Radio />} label='B' />
          </RadioGroup>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Rating</Typography>
          <Rating defaultValue={3} />
        </Box>
        <Box>
          <Typography variant='subtitle2'>Select</Typography>
          <Select defaultValue={1}>
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
          </Select>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Slider</Typography>
          <Slider defaultValue={50} />
          <Typography variant='subtitle2'>Step/Discrete</Typography>

          <Slider
            aria-label='Temperature'
            defaultValue={30}
            // getAriaValueText={valuetext}
            valueLabelDisplay='auto'
            shiftStep={30}
            step={10}
            marks
            min={10}
            max={110}
          />
          <Typography variant='subtitle2'>Range</Typography>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={rangeValue}
            onChange={(event, newValue) => setRangeValue(newValue)}
            valueLabelDisplay='auto'
            // getAriaValueText={valuetext}
          />
        </Box>
        <Box>
          <Typography variant='subtitle2'>Switch</Typography>
          <Switch defaultChecked />
        </Box>
        <Box>
          <Typography variant='subtitle2'>Text Field</Typography>
          <TextField label='Name' />
        </Box>
        <Box>
          <Typography variant='subtitle2'>Toggle Button</Typography>
          <ToggleButtonGroup exclusive>
            <ToggleButton value='a'>A</ToggleButton>
            <ToggleButton value='b'>B</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Stack>

      {/* Data Display */}
      <Typography variant='h5' mt={4} gutterBottom>
        Data Display
      </Typography>
      <Stack spacing={2} divider={<Divider />}>
        <Box>
          <Typography variant='subtitle2'>Avatar + Badge</Typography>
          <Badge badgeContent={4} color='secondary'>
            <Avatar>A</Avatar>
          </Badge>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Chip</Typography>
          <Chip label='Example Chip' />
        </Box>
        <Box>
          <Typography variant='subtitle2'>Divider</Typography>
          <Divider />
        </Box>
        <Box>
          <Typography variant='subtitle2'>Icons + Tooltip</Typography>
          <Tooltip title='Info'>
            <InfoIcon />
          </Tooltip>
        </Box>
        <Box>
          <Typography variant='subtitle2'>List</Typography>
          <List>
            <ListItem>
              <ListItemText primary='Item 1' />
            </ListItem>
          </List>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Table</Typography>
          <Table size='small'>
            <TableHead>
              <TableRow>
                <TableCell>A</TableCell>
                <TableCell>B</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>2</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Typography</Typography>
          <Typography variant='body1'>Đây là body1</Typography>
        </Box>
      </Stack>

      {/* Feedback */}
      <Typography variant='h5' mt={4} gutterBottom>
        Feedback
      </Typography>
      <Stack spacing={2} divider={<Divider />}>
        <Box>
          <Typography variant='subtitle2'>Alert</Typography>
          <Alert severity='info'>Thông báo</Alert>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Backdrop + Progress</Typography>
          <Backdrop open={false}>
            <CircularProgress />
          </Backdrop>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Dialog</Typography>
          <Button onClick={() => setDialogOpen(true)}>Mở Dialog</Button>
          <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <DialogTitle>Tiêu đề</DialogTitle>
            <DialogContent>Nội dung</DialogContent>
            <DialogActions>
              <Button onClick={() => setDialogOpen(false)}>Đóng</Button>
            </DialogActions>
          </Dialog>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Skeleton</Typography>
          <Skeleton variant='rectangular' width={210} height={60} />
        </Box>
        <Box>
          <Typography variant='subtitle2'>Snackbar</Typography>
          <Button onClick={() => setSnackOpen(true)}>Mở Snackbar</Button>
          <Snackbar
            open={snackOpen}
            autoHideDuration={2000}
            onClose={() => setSnackOpen(false)}
            message='Snackbar demo'
          />
        </Box>
      </Stack>

      {/* Surfaces */}
      <Typography variant='h5' mt={4} gutterBottom>
        Surfaces
      </Typography>
      <Stack spacing={2} divider={<Divider />}>
        <Box>
          <Typography variant='subtitle2'>Accordion</Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Tiêu đề</Typography>
            </AccordionSummary>
            <AccordionDetails>Nội dung</AccordionDetails>
          </Accordion>
        </Box>
        <Box>
          <Typography variant='subtitle2'>App Bar</Typography>
          <AppBar position='static'>
            <Toolbar>
              <Typography>App Bar Demo</Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Card</Typography>
          <Card>
            <CardContent>
              <Typography>Card content</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Paper</Typography>
          <Paper elevation={3} sx={{ p: 2 }}>
            Paper content
          </Paper>
        </Box>
      </Stack>

      {/* Navigation */}
      <Typography variant='h5' mt={4} gutterBottom>
        Navigation
      </Typography>
      <Stack spacing={2} divider={<Divider />}>
        <Box>
          <Typography variant='subtitle2'>Bottom Navigation</Typography>
          <BottomNavigation value={value} onChange={(_, v) => setValue(v)}>
            <BottomNavigationAction label='Home' icon={<HomeIcon />} />
            <BottomNavigationAction label='Settings' icon={<SettingsIcon />} />
          </BottomNavigation>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Breadcrumbs</Typography>
          <Breadcrumbs>
            <Link underline='hover'>Home</Link>
            <Link underline='hover'>Library</Link>
            <Typography>Data</Typography>
          </Breadcrumbs>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Drawer</Typography>
          <Button onClick={() => setDrawerOpen(true)}>Mở Drawer</Button>
          <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <List>
              <ListItem>
                <ListItemText primary='Item' />
              </ListItem>
            </List>
          </Drawer>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Link</Typography>
          <Link href='#'>Link demo</Link>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Menu</Typography>
          <Button onClick={(e) => setMenuAnchor(e.currentTarget)}>
            Open Menu
          </Button>
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={() => setMenuAnchor(null)}
          >
            <MUIMenuItem>Item 1</MUIMenuItem>
          </Menu>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Pagination</Typography>
          <Pagination count={10} />
        </Box>
        <Box>
          <Typography variant='subtitle2'>Speed Dial</Typography>
          <SpeedDial ariaLabel='SpeedDial' icon={<AddIcon />} direction='up'>
            <SpeedDialAction icon={<EditIcon />} tooltipTitle='Edit' />
            <SpeedDialAction icon={<DeleteIcon />} tooltipTitle='Delete' />
          </SpeedDial>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Stepper</Typography>
          <Stepper activeStep={1}>
            <Step>
              <StepLabel>B1</StepLabel>
            </Step>
            <Step>
              <StepLabel>B2</StepLabel>
            </Step>
          </Stepper>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Tabs</Typography>
          <Tabs value={0}>
            <Tab label='Tab1' />
            <Tab label='Tab2' />
          </Tabs>
        </Box>
      </Stack>

      {/* Layout */}
      <Typography variant='h5' mt={4} gutterBottom>
        Layout
      </Typography>
      <Stack spacing={2} divider={<Divider />}>
        <Box>
          <Typography variant='subtitle2'>Box</Typography>
          <Box sx={{ p: 2, bgcolor: "grey.200" }}>Box content</Box>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Container</Typography>
          <Container sx={{ bgcolor: "grey.100", p: 2 }}>
            Container content
          </Container>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Grid</Typography>
          <Grid container spacing={2}>
            <Grid size={8}>
              <Paper>size=8</Paper>
            </Grid>
            <Grid size={4}>
              <Paper>size=4</Paper>
            </Grid>
            <Grid size={4}>
              <Paper>size=4</Paper>
            </Grid>
            <Grid size={8}>
              <Paper>size=8</Paper>
            </Grid>
          </Grid>
          <Typography variant='subtitle2'>(Multiple Breakpoints)</Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6, md: 8 }}>
              <Paper>xs=6 md=8</Paper>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
              <Paper>xs=6 md=4</Paper>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
              <Paper>xs=6 md=4</Paper>
            </Grid>
            <Grid size={{ xs: 6, md: 8 }}>
              <Paper>xs=6 md=8</Paper>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Stack</Typography>
          <Stack direction='row' spacing={2}>
            <Paper>Item1</Paper>
            <Paper>Item2</Paper>
          </Stack>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Image List</Typography>
          <ImageList cols={3} rowHeight={100}>
            <ImageListItem>
              <img
                src='https://mui.com/static/images/image-list/breakfast.jpg'
                alt='img'
              />
            </ImageListItem>
          </ImageList>
        </Box>
      </Stack>
      <Typography variant='h4' gutterBottom>
        Utils Demo
      </Typography>
      <Stack spacing={3} divider={<Divider />}>
        <ClickAwayListenerDemo />
        <CssBaselineNote />
        <InitColorSchemeScriptDemo />
        <ModalDemo />
        <NoSsrDemo />
        <PopoverDemo />
        <PopperDemo />
        <PortalDemo />
        <TextareaAutosizeDemo />
        <TransitionsDemo />
        <SlideRelativeDemo />
        <SlideDemo />
        <GrowDemo />
        <FadeDemo />
        <TransitionsGroup />
        <UseMediaQueryDemo />
        {/*  */}
      </Stack>
    </Container>
  );
  function ClickAwayListenerDemo() {
    const [open, setOpen] = React.useState(true);
    return (
      <Box>
        <Typography variant='subtitle2'>Click-Away Listener</Typography>
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Paper sx={{ p: 2, bgcolor: open ? "success.light" : "grey.100" }}>
            {open ? "Click bên ngoài để đóng" : "Đã click ra ngoài"}
          </Paper>
        </ClickAwayListener>
      </Box>
    );
  }

  function CssBaselineNote() {
    return (
      <Box>
        <Typography variant='subtitle2'>CSS Baseline</Typography>
        <Typography variant='body2'>
          <b>CssBaseline</b> reset CSS mặc định của trình duyệt. Đặt 1 lần ở App
          root (như trong file này).
        </Typography>
      </Box>
    );
  }

  function InitColorSchemeScriptDemo() {
    return (
      <Box>
        <Typography variant='subtitle2'>InitColorSchemeScript</Typography>
        {getInitColorSchemeScript({ defaultMode: "system" })}
        <CssVarsProvider defaultMode='system'>
          <InnerThemeSwitcher />
        </CssVarsProvider>
      </Box>
    );
  }

  function InnerThemeSwitcher() {
    const { mode, setMode } = useColorScheme();
    return (
      <Paper sx={{ p: 2 }}>
        <Typography variant='body2'>Current mode: {mode}</Typography>
        <Button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          Toggle Mode
        </Button>
      </Paper>
    );
  }

  function ModalDemo() {
    const [open, setOpen] = React.useState(false);
    return (
      <Box>
        <Typography variant='subtitle2'>Modal</Typography>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              p: 2,
              borderRadius: 1,
              boxShadow: 24,
              minWidth: 240,
            }}
          >
            Modal content
          </Box>
        </Modal>
      </Box>
    );
  }

  function NoSsrDemo() {
    return (
      <Box>
        <Typography variant='subtitle2'>No SSR</Typography>
        <NoSsr>
          <Typography variant='body2'>
            Nội dung này chỉ render ở client (NoSsr)
          </Typography>
        </NoSsr>
      </Box>
    );
  }

  function PopoverDemo() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    return (
      <Box>
        <Typography variant='subtitle2'>Popover</Typography>
        <Button onClick={(e) => setAnchorEl(e.currentTarget)}>
          Open Popover
        </Button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <Typography sx={{ p: 2 }}>Popover content</Typography>
        </Popover>
      </Box>
    );
  }

  function PopperDemo() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    return (
      <Box>
        <Typography variant='subtitle2'>Popper</Typography>
        <Button onClick={(e) => setAnchorEl(anchorEl ? null : e.currentTarget)}>
          {open ? "Hide" : "Show"} Popper
        </Button>
        <Popper open={open} anchorEl={anchorEl} placement='bottom-start'>
          <Paper sx={{ p: 1 }}>Popper content</Paper>
        </Popper>
      </Box>
    );
  }

  function PortalDemo() {
    const [open, setOpen] = React.useState(false);

    return (
      <Box>
        <Typography variant='subtitle2'>Portal</Typography>
        <Button onClick={() => setOpen((o) => !o)}>
          {open ? "Unmount" : "Mount"} Portal
        </Button>

        {/* Chỉ mount khi open */}
        {open && (
          <Portal /* container mặc định: document.body */>
            <Paper
              sx={{
                p: 1.5,
                position: "fixed",
                right: 16,
                bottom: 16,
                zIndex: (t) => t.zIndex.modal + 1, // cao hơn modal
                boxShadow: 6,
              }}
            >
              Rendered via Portal (gắn vào cuối document.body)
            </Paper>
          </Portal>
        )}
      </Box>
    );
  }

  function TextareaAutosizeDemo() {
    return (
      <Box>
        <Typography variant='subtitle2'>Textarea Autosize</Typography>
        <TextareaAutosize
          minRows={2}
          maxRows={6}
          placeholder='Nhập nội dung...'
          style={{
            width: 320,
            padding: 8,
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
        />
      </Box>
    );
  }

  function TransitionsDemo() {
    const [open, setOpen] = React.useState(true);
    return (
      <Box>
        <Typography variant='subtitle2'>Transitions (Fade)</Typography>
        <Button onClick={() => setOpen((o) => !o)}>
          {open ? "Hide" : "Show"} Fade
        </Button>
        <Fade in={open} timeout={300}>
          <Paper sx={{ p: 1, mt: 1, width: 200, textAlign: "center" }}>
            Fade content
          </Paper>
        </Fade>
      </Box>
    );
  }
  function TransitionsGroup() {
    return (
      <Box>
        <Typography variant='h6' gutterBottom>
          Transitions
        </Typography>
        <Stack spacing={2}>
          <FadeDemo />
          <GrowDemo />
          <SlideDemo />
          <SlideRelativeDemo />
          <TransitionGroupDemo />
        </Stack>
      </Box>
    );
  }

  /** Fade */
  function FadeDemo() {
    const [open, setOpen] = React.useState(true);
    return (
      <Box>
        <Typography variant='subtitle2'>Fade</Typography>
        <Button onClick={() => setOpen((o) => !o)}>
          {open ? "Hide" : "Show"} Fade
        </Button>
        <Fade in={open} timeout={300}>
          <Paper sx={{ p: 1, mt: 1, width: 220, textAlign: "center" }}>
            Fade content
          </Paper>
        </Fade>
      </Box>
    );
  }

  /** Grow */
  function GrowDemo() {
    const [open, setOpen] = React.useState(true);
    return (
      <Box>
        <Typography variant='subtitle2'>Grow</Typography>
        <Button onClick={() => setOpen((o) => !o)}>
          {open ? "Hide" : "Show"} Grow
        </Button>
        <Grow in={open} timeout={300}>
          <Paper sx={{ p: 1, mt: 1, width: 220, textAlign: "center" }}>
            Grow content
          </Paper>
        </Grow>
      </Box>
    );
  }

  /** Slide (viewport) */
  function SlideDemo() {
    const [open, setOpen] = React.useState(true);
    return (
      <Box>
        <Typography variant='subtitle2'>Slide (direction)</Typography>
        <Button onClick={() => setOpen((o) => !o)}>
          {open ? "Slide Out" : "Slide In"}
        </Button>
        <Box sx={{ height: 8 }} />
        <Slide in={open} direction='up' mountOnEnter unmountOnExit>
          <Paper sx={{ p: 1, width: 260, textAlign: "center" }}>
            Slide from bottom
          </Paper>
        </Slide>
      </Box>
    );
  }

  /** Slide Relative (bên trong container riêng, không so với viewport) */
  function SlideRelativeDemo() {
    const [open, setOpen] = React.useState(true);
    const containerRef = React.useRef(null);

    return (
      <Box>
        <Typography variant='subtitle2'>Slide (relative container)</Typography>
        <Button onClick={() => setOpen((o) => !o)}>
          {open ? "Slide Out" : "Slide In"}
        </Button>

        <Box
          ref={containerRef}
          sx={{
            mt: 1,
            position: "relative", // quan trọng: Slide sẽ tính theo container này
            height: 120,
            border: "1px dashed",
            borderColor: "divider",
            overflow: "hidden",
          }}
        >
          <Slide
            in={open}
            direction='right'
            container={containerRef.current}
            mountOnEnter
            unmountOnExit
          >
            <Paper sx={{ p: 1, position: "absolute", top: 16, left: 16 }}>
              Slide inside container
            </Paper>
          </Slide>
        </Box>
      </Box>
    );
  }

  /** Transition Group (thêm/xóa item có hiệu ứng) */
  function TransitionGroupDemo() {
    const [items, setItems] = React.useState([
      { id: 1, text: "Item A" },
      { id: 2, text: "Item B" },
    ]);
    const [counter, setCounter] = React.useState(3);

    const addItem = () => {
      setItems((prev) => [{ id: counter, text: `Item ${counter}` }, ...prev]);
      setCounter((c) => c + 1);
    };
    const removeItem = (id) =>
      setItems((prev) => prev.filter((i) => i.id !== id));

    return (
      <Box>
        <Typography variant='subtitle2'>Transition Group (Collapse)</Typography>
        <Stack direction='row' spacing={1} sx={{ mb: 1 }}>
          <Button variant='outlined' onClick={addItem}>
            Add item
          </Button>
        </Stack>

        <List dense sx={{ width: 320, bgcolor: "background.paper" }}>
          <TransitionGroup>
            {items.map((item) => (
              <Collapse key={item.id}>
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge='end'
                      onClick={() => removeItem(item.id)}
                      aria-label='delete'
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary={item.text} />
                </ListItem>
              </Collapse>
            ))}
          </TransitionGroup>
        </List>

        <Typography variant='caption' color='text.secondary'>
          (Dùng <code>TransitionGroup</code> + <code>Collapse</code> để animate
          thêm/xóa list item)
        </Typography>
      </Box>
    );
  }
  function UseMediaQueryDemo() {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
    return (
      <Box>
        <Typography variant='subtitle2'>useMediaQuery</Typography>
        <Typography variant='body2'>
          Breakpoint: {isMdUp ? "md+" : "sm-"}
        </Typography>
      </Box>
    );
  }
}
