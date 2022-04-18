import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { AppBar, Toolbar, Collapse, alpha, decomposeColor } from '@material-ui/core'
import IconButton from '@mui/material/IconButton'
import SortIcon from '@mui/icons-material/Sort'
import Color from 'color'
import Axios from 'axios'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Typography from '@mui/material/Typography'
import { Link as Scroll } from 'react-scroll'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import TextField from '@mui/material/TextField'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    appbar: {
        backgroundColor: alpha("#3f51b5", 0.55),
        fontFamily: 'Montserrat',
        textAlign: 'left',
        fontStyle: 'italic',
        color: '#fff',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem'
    },
    centerText: {
        color: '#fff',
        fontFamily: 'Montserrat',
        fontStyle: 'italic',
        fontSize: '4.5rem',
    },
    underCenterText: {
        color: '#fff',
        fontFamily: 'Montserrat',
        fontStyle: 'italic',
        fontSize: '2rem',
    },
    container: {
        textAlign: 'center',
    },
    downButton: {
        color: '#fff',
        fontSize: '4rem',
    },
    menus: {
        color: '#fff',
        backgroundColor: '#ddd',
    },
    login: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    adminConsoleText: {
        fontSize: 11
    },
});

export default function Header() {
    const classes = useStyles();
    const [checked,setChecked] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [newUser, setNewUser] = React.useState(false);

    const [adminEmail, setAdminEmail] = useState("");
    const [adminPass, setAdminPass] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("")
    const [invalid, setInvalid] = useState("");
    
    const [addCustId, setAddCustId] = useState("");
    const [addCustFname, setAddCustFname] = useState("");
    const [addCustLname, setAddCustLname] = useState("")
    const [addCustEmail, setAddCustEmail] = useState("");
    const [addCustPass, setAddCustPass] = useState("");
    const [addCustAddress, setAddCustAddress] = useState("")
    const [addCustCity, setAddCustCity] = useState("")
    const [addCustState, setAddCustState] = useState("")
    const [addCustZip, setAddCustZip] = useState("")

    const [updateCustFname,   setUpdateCustFname] = useState("");
    const [updateCustLname,   setUpdateCustLname] = useState("")
    const [updateCustEmail,   setUpdateCustEmail] = useState("");
    const [updateCustPass,    setUpdateCustPass] = useState("");
    const [updateCustAddress, setUpdateCustAddress] = useState("")
    const [updateCustCity,    setUpdateCustCity] = useState("")
    const [updateCustState,   setUpdateCustState] = useState("")
    const [updateCustZip,     setUpdateCustZip] = useState("")
    
    const [addEmpId, setAddEmpId] = useState("");
    const [addEmpFname, setAddEmpFname] = useState("");
    const [addEmpLname, setAddEmpLname] = useState("")
    const [addEmpEmail, setAddEmpEmail] = useState("");
    const [addEmpPass, setAddEmpPass] = useState("");
    const [addEmpStartDate, setAddEmpStartDate] = useState("");

    const [updateEmpFname, setUpdateEmpFname] = useState("");
    const [updateEmpLname, setUpdateEmpLname] = useState("")
    const [updateEmpEmail, setUpdateEmpEmail] = useState("");
    const [updateEmpPass, setUpdateEmpPass] = useState("");
    const [updateEmpStartDate, setUpdateEmpStartDate] = useState("");

    const [addArtistId, setAddArtistId] = useState("");
    const [addArtistName,     setAddArtistName] = useState("");
    const [addArtistHometown, setAddArtistHometown] = useState("");
    const [addArtistCountry,  setAddArtistCountry] = useState("");
    const [addArtistDob,      setAddArtistDob] = useState("");
    const [addArtistEmail,    setAddArtistEmail] = useState("");

    const [updateArtistName, setUpdateArtistName] = useState("");
    const [updateArtistHometown, setUpdateArtistHometown] = useState("");
    const [updateArtistCountry, setUpdateArtistCountry] = useState("");
    const [updateArtistDob, setUpdateArtistDob] = useState("");
    const [updateArtistEmail, setUpdateArtistEmail] = useState("");

    const [addPaymentId, setAddPaymentId] = useState("");
    const [addPaymentCustId, setAddPaymentCustId] = useState("");
    const [addPaymentDate, setAddPaymentDate] = useState("");
    const [addPaymentMethod, setAddPaymentMethod] = useState("");
    const [addPaymentPrice, setAddPaymentPrice] = useState("");
    const [addPaymentMuseumId, setAddPaymentMuseumId] = useState("");
    const [addPaymentPieceId, setAddPaymentPieceId] = useState("");
    
    const [updatePaymentDate,  setUpdatePaymentDate] = useState("");
    const [updatePaymentMethod, setUpdatePaymentMethod] = useState("");
    const [updatePaymentPrice, setUpdatePaymentPrice] = useState("");

    const [addMuseumId, setAddMuseumId] = useState("");
    const [addMuseumName, setAddMuseumName] = useState("");
    const [addMuseumAddress, setAddMuseumAddress] = useState("");
    const [addMuseumCity, setAddMuseumCity] = useState("");
    const [addMuseumState, setAddMuseumState] = useState("");
    const [addMuseumZip, setAddMuseumZip] = useState("");
    const [addMuseumQuantity, setAddMuseumQuantity] = useState("");

    const [updateMuseumName,     setUpdateMuseumName] = useState("");
    const [updateMuseumAddress,  setUpdateMuseumAddress] = useState("");
    const [updateMuseumCity,     setUpdateMuseumCity] = useState("");
    const [updateMuseumState,    setUpdateMuseumState] = useState("");
    const [updateMuseumZip,      setUpdateMuseumZip] = useState("");
    const [updateMuseumQuantity, setUpdateMuseumQuantity] = useState("");

    const [addPieceId, setAddPieceId] = useState("")
    const [addPieceTitle, setAddPieceTitle] = useState("")
    const [addPieceYear, setAddPieceYear] = useState("")
    const [addPieceDesc, setAddPieceDesc] = useState("")
    const [addPiecePrice, setAddPiecePrice] = useState("")
    const [addPieceStatus, setAddPieceStatus] = useState("")
    const [addPieceType, setAddPieceType] = useState("")
    const [addPieceArtistId, setAddPieceArtistId] = useState("")
    const [addPieceDate, setAddPieceDate] = useState("")
    const [addPieceMuseumId, setAddPieceMuseumId] = useState("")

    const [updatePieceTitle,  setUpdatePieceTitle] = useState("")
    const [updatePieceDesc,   setUpdatePieceDesc] = useState("")
    const [updatePiecePrice,  setUpdatePiecePrice] = useState("")
    const [updatePieceStatus, setUpdatePieceStatus] = useState("")
    const [updatePieceDate,   setUpdatePieceDate] = useState("")

    const [userList, setUserList] = useState([])
    const [artistList, setArtistList] = useState([])
    const [employeeList, setEmployeeList] = useState([])
    const [museumList, setMuseumList] = useState([])
    const [paymentList, setPaymentList] = useState([])
    const [pieceList, setPieceList] = useState([])
    const [availablePieceList, setAvailablePieceList] = useState([])
    const [adminDialog, setAdminDialog] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [interested, setInterested] = useState(false)

    const [customerView, setCustomerView] = useState(false)
    const [artistView, setArtistView] = useState(false)
    const [employeeView, setEmployeeView] = useState(false)
    const [museumView, setMuseumView] = useState(false)
    const [paymentView, setPaymentView] = useState(false)
    const [pieceView, setPieceView] = useState(false)

    const [addCustomer, setAddCustomer] = useState(false)
    const [addEmployee, setAddEmployee] = useState(false)
    const [addArtist, setAddArtist] = useState(false)
    const [addPayment, setAddPayment] = useState(false)
    const [addMuseum, setAddMuseum] = useState(false)
    const [addPiece, setAddPiece] = useState(false)

    useEffect(()=> {
        setChecked(true);
        Axios.get('http://localhost:3001/api/get/customer').then((response) => {
            //console.log(response.data)
            setUserList(response.data)
        })

        Axios.get('http://localhost:3001/api/get/artist').then((response) => {
            //console.log(response.data)
            setArtistList(response.data)
        })

        Axios.get('http://localhost:3001/api/get/employee').then((response) => {
            //console.log(response.data)
            setEmployeeList(response.data)
        })

        Axios.get('http://localhost:3001/api/get/museum').then((response) => {
            //console.log(response.data)
            setMuseumList(response.data)
        })

        Axios.get('http://localhost:3001/api/get/POS').then((response) => {
            //console.log(response.data)
            setPaymentList(response.data)
        })

        Axios.get('http://localhost:3001/api/get/piece').then((response) => {
            //console.log(response.data)
            setPieceList(response.data)
        })

        Axios.get('http://localhost:3001/api/get/piece/user').then((response) => {
            //console.log(response.data)
            setAvailablePieceList(response.data)
        })
    }, []);

    const submitAddCustomer = () => {
        Axios.post("http://localhost:3001/api/insert/customer", {
            Id: addCustId, 
            Fname: addCustFname, 
            Lname: addCustLname, 
            email: addCustEmail, 
            pass: addCustPass, 
            address: addCustAddress, 
            city: addCustCity, 
            state: addCustState, 
            zip: addCustZip
        }).then(() => {
            alert('successful insert')
        })
        setAddCustomer(false)
    }

    const updateCustomer = (id) => {
        Axios.put(`http://localhost:3001/api/update/customer/${id}`, {
            Fname: updateCustFname,
            Lname: updateCustLname,
            email: updateCustEmail,
            pass: updateCustPass,
            address: updateCustAddress,
            city: updateCustCity,
            state: updateCustState,
            zip: updateCustZip
        })
    }

    const submitAddEmployee = () => {
        Axios.post("http://localhost:3001/api/insert/employee", {
            Id: addEmpId,
            Fname: addEmpFname,
            Lname: addEmpLname,
            email: addEmpEmail,
            pass: addEmpPass,
            startDate: addEmpStartDate
        })
        setAddEmployee(false)
    }

    const updateEmployee = (id) => {
        Axios.put(`http://localhost:3001/api/update/employee/${id}`, {
            Fname: updateEmpFname,
            Lname: updateEmpLname,
            email: updateEmpEmail,
            pass: updateEmpPass,
            startDate: updateEmpStartDate
        })
    }

    const deleteEmployee = (id) => {
        Axios.delete(`http://localhost:3001/api/delete/employee/${id}`);
    }
    
    const submitAddArtist = () => {
        Axios.post("http://localhost:3001/api/insert/artist", {
            Id: addArtistId,
            name: addArtistName,
            hometown: addArtistHometown,
            country: addArtistCountry,
            dob: addArtistDob,
            email: addArtistEmail
        })
    }

    const updateArtist = (id) => {
        Axios.put(`http://localhost:3001/api/update/artist/${id}`, {
            name: updateArtistName,
            hometown: updateArtistHometown,
            country: updateArtistCountry,
            dob: updateArtistDob,
            email: updateArtistEmail
        })
    }

    const submitAddPayment = () => {
        Axios.post("http://localhost:3001/api/insert/POS", {
            id: addPaymentId,
            date: addPaymentDate,
            method: addPaymentMethod,
            price: addPaymentPrice,
            custId: addPaymentCustId,
            museumId: addPaymentMuseumId,
            pieceId: addPaymentPieceId
        })
    }

    const updatePayment = (id) => {
        Axios.put(`http://localhost:3001/api/update/POS/${id}`, {
            date: updatePaymentDate,
            method: updatePaymentMethod,
            price: updatePaymentPrice
        })
    }

    const submitAddMuseum = () => {
        Axios.post("http://localhost:3001/api/insert/museum", {
            id: addMuseumId,
            name: addMuseumName,
            address: addMuseumAddress,
            city: addMuseumCity,
            state: addMuseumState,
            zip: addMuseumZip,
            quantity: addMuseumQuantity
        })
    }

    const updateMuseum = (id) => {
        Axios.put(`http://localhost:3001/api/update/museum/${id}`, {
            name: updateMuseumName,
            address: updateMuseumAddress,
            city: updateMuseumCity,
            state: updateMuseumState,
            zip: updateMuseumZip,
            quantity: updateMuseumQuantity
        })
    }

    const updatePiece = (id) => {
        Axios.put(`http://localhost:3001/api/update/piece/${id}`, {
            title: updatePieceTitle,
            desc: updatePieceDesc,
            price: updatePiecePrice,
            status: updatePieceStatus,
            dateAdded: updatePieceDate
        })
    }

    const submitAddPiece = () => {
        Axios.post("http://localhost:3001/api/insert/piece", {
            id: addPieceId,
            title: addPieceTitle,
            year: addPieceYear,
            artistId: addPieceArtistId,
            desc: addPieceDesc,
            price: addPiecePrice,
            date: addPieceDate,
            status: addPieceStatus,
            museumId: addPieceMuseumId,
            type: addPieceType
        })
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleDialogOpen = () => {
        setAnchorEl(null);
        setOpen(true);
    }

    const handleDialogClose = () => {
        setOpen(false);
    }

    const handleNewUser = () => {
        setOpen(false)
        setNewUser(true)
    }

    const handleNewUserClose = () => {
        setNewUser(false)
    }

    const handleAdminDialogOpen = () => {
        setAdminDialog(true)
    }

    const handleAdminDialogClose = () => {
        setAdminDialog(false)
    }

    const handleAdminLogin = () => {
        {employeeList.map((val) => {
            if((adminEmail === val.EMPLOYEE_EMAIL) && (adminPass === val.EMPLOYEE_PASS)) {
                setAdminDialog(false)
                setIsAdmin(true)
            }
        })}
    }

    const handleUserLogin = () => {
        {userList.map((val) => {
            if((userEmail === val.CUSTOMER_EMAIL) && (userPass == val.CUSTOMER_PASS)) {
                setIsUser(true)
            }
        })}
    }

    const handleAdminConsoleClose = () => {
        setIsAdmin(false)
    }

    const handleCustomerView = () => {
        setCustomerView(true)
    }

    const handleCustomerViewClose = () => {
        setCustomerView(false)
    }

    const handleArtistView = () => {
        setArtistView(true)
    }

    const handleArtistViewClose = () => {
        setArtistView(false)
    }

    const handleEmployeeView = () => {
        setEmployeeView(true)
    }

    const handleEmployeeViewClose = () => {
        setEmployeeView(false)
    }

    const handleMuseumView = () => {
        setMuseumView(true)
    }

    const handleMuseumViewClose = () => {
        setMuseumView(false)
    }

    const handlePaymentView = () => {
        setPaymentView(true)
    }

    const handlePaymentViewClose = () => {
        setPaymentView(false)
    }

    const handleAddPayment = () => {
        setAddPayment(true)
    }

    const handleAddPaymentClose = () => {
        setAddPayment(false)
    }

    const handleAddCustomer = () => {
        setAddCustomer(true)
    }

    const handleAddCustomerClose = () => {
        setAddCustomer(false)
    }

    const handleAddEmployee = () => {
        setAddEmployee(true)
    }

    const handleAddEmployeeClose = () => {
        setAddEmployee(false)
    }

    const handleAddArtist = () => {
        setAddArtist(true)
    }

    const handleAddArtistClose = () => {
        setAddArtist(false)
    }

    const handleAddMuseum = () => {
        setAddMuseum(true)
    }

    const handleAddMuseumClose = () => {
        setAddMuseum(false)
    }

    const handleIsUser = () => {
        setIsUser(true)
    }

    const handleIsUserClose = () => {
        setIsUser(false)
    }

    const handleInvalidClose = () => {
        setInvalid(false)
    }

    const handlePieceView = () => {
        setPieceView(true)
    }

    const handlePieceViewClose = () => {
        setPieceView(false)
    }

    const handleAddPiece = () => {
        setAddPiece(true)
    }

    const handleAddPieceClose = () => {
        setAddPiece(false)
    }

    const handleInterested = () => {
        setInterested(true)
    }

    const handleInterestedClose = () => {
        setInterested(false)
    }

    return (
        <div className={classes.root} id="header">
            <AppBar elevation={10} className={classes.appbar}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>Galleria</h1>
                        <IconButton
                            onClick={handleMenu}
                        >
                            <SortIcon className={classes.icon} />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <Scroll to="gallery" smooth={true}>
                                <MenuItem onClick={handleMenuClose}>View Gallery</MenuItem>
                            </Scroll>
                            <MenuItem onClick={handleDialogOpen}>Customer Login</MenuItem>
                            <MenuItem onClick={handleAdminDialogOpen}>Admin Login</MenuItem>
                        </Menu>
                        
                        
                        <Dialog open={open} onClose={handleDialogClose}>
                            <DialogTitle>Login</DialogTitle>
                            <DialogContent className={classes.login}>
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="email"
                                    label="Email Address"
                                    type="email"
                                    variant="standard"
                                    onChange={(e) => {
                                        setUserEmail(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="password"
                                    label="Password"
                                    type="password"
                                    variant="standard"
                                    onChange={(e) => {
                                        setUserPass(e.target.value)
                                    }}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleUserLogin}>Login</Button>
                                <Button onClick={handleNewUser}>Not Signed Up Yet?</Button>
                                <Button onClick={handleDialogClose}>Close</Button>
                            </DialogActions>
                        </Dialog>
                        
                        
                        <Dialog open={adminDialog} onClose={handleAdminDialogClose}>
                            <DialogTitle>Administrator Login</DialogTitle>
                            <DialogContent className={classes.login}>
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="admin email"
                                    label="Email Address"
                                    type="email"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAdminEmail(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="password"
                                    label="Password"
                                    type="password"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAdminPass(e.target.value)
                                    }}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleAdminLogin}>Login</Button>
                                <Button onClick={handleAdminDialogClose}>Close</Button>
                            </DialogActions>
                        </Dialog>
                        
                        
                        <Dialog open={invalid} onClose={handleInvalidClose}>
                            <DialogContent className={classes.login}>
                                <Typography>Incorrect email or password.</Typography>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleInvalidClose}>Close</Button>
                            </DialogActions>
                        </Dialog>


                        <Dialog open={newUser} onClose={handleNewUserClose}>
                            <DialogContent>
                                <Typography>
                                    Please contact an administrator to create an account.
                                </Typography>
                            </DialogContent>
                        </Dialog>
                        
                        
                        <Dialog open={isAdmin}>
                            <DialogTitle>Admin Console</DialogTitle>
                            <Button onClick={handleCustomerView}>Customers</Button>
                            <Button onClick={handleArtistView}>Artists</Button>
                            <Button onClick={handlePieceView}>Pieces</Button>
                            <Button onClick={handleEmployeeView}>Employees</Button>
                            <Button onClick={handleMuseumView}>Museums</Button>
                            <Button onClick={handlePaymentView}>POS</Button>
                            <br />
                            <Button onClick={handleAdminConsoleClose}>Close</Button>
                            <br />
                        </Dialog>

                        <Dialog open={isUser}>
                            <DialogTitle>Available Pieces</DialogTitle>
                            <DialogContent>
                                {availablePieceList.map((val) => {
                                    return <h5>
                                        Title: {val.PIECE_TITLE} <br />
                                        Description: {val.PIECE_DESCRIPTION} <br />
                                        Price: {val.PIECE_PRICE} <br />
                                        Type: {val.PIECE_TYPE} <br />
                                    <br />
                                    </h5>
                                })}
                            </DialogContent>
                            <Button onClick={handleInterested}>Interested?</Button>
                            <Button onClick={handleIsUserClose}>Close</Button>
                            <br />
                        </Dialog>


                        <Dialog open={interested} onClose={handleInterestedClose}>
                            <DialogContent>
                                <Typography>
                                    Please contact an administrator to make an offer.
                                </Typography>
                            </DialogContent>
                        </Dialog>
                        
                        
                        <Dialog open={artistView}>
                            <DialogTitle>Artists</DialogTitle>
                            <DialogContent>
                                {artistList.map((val) => {
                                    return <div>
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.ARTIST_NAME}
                                            label="Name"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateArtistName(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.ARTIST_EMAIL}
                                            label="Email"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateArtistEmail(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.ARTIST_HOMETOWN}
                                            label="Hometown"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateArtistHometown(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.ARTIST_COUNTRY}
                                            label="Country"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateArtistCountry(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.ARTIST_DOB}
                                            label="Date of Birth"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateArtistDob(e.target.value)
                                            }}
                                        />&nbsp;
                                        <div>
                                            <Button onClick={() => {updateArtist(val.ARTIST_ID)}}>Update</Button>
                                        </div>
                                    <br />
                                    </div>
                                })}
                            </DialogContent>
                            <Button onClick={handleAddArtist}>Add Artist</Button>
                            <Button onClick={handleArtistViewClose}>Close</Button>
                            <br />
                        </Dialog>
                        

                        <Dialog open={addArtist}>
                            <DialogTitle>Add Artist</DialogTitle>
                            <DialogContent sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add Artist ID"
                                    label="Artist ID"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddArtistId(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add Artist name"
                                    label="Artist Name"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddArtistName(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add Artist email"
                                    label="Email"
                                    type="email"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddArtistEmail(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add Artist hometown"
                                    label="Artist Hometown"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddArtistHometown(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add Artist country"
                                    label="Artist Country"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddArtistCountry(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add Artist dob"
                                    label="Artist Date of Birth"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddArtistDob(e.target.value)
                                    }}
                                />
                                <br />
                                <Button onClick={submitAddArtist}>Submit</Button>
                                <Button onClick={handleAddArtistClose}>Close</Button>
                            </DialogContent>
                        </Dialog>


                        <Dialog open={pieceView}>
                            <DialogTitle>Pieces</DialogTitle>
                            <DialogContent>
                                {pieceList.map((val) => {
                                    return <div>
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            value={val.PIECE_ID}
                                            label="Piece ID"
                                            variant="standard"
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.PIECE_TITLE}
                                            label="Piece Name"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdatePieceTitle(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            value={val.PIECE_YEAR}
                                            label="Piece Year"
                                            variant="standard"
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.PIECE_DESCRIPTION}
                                            label="Piece Description"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdatePieceDesc(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.PIECE_PRICE}
                                            label="Price"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdatePiecePrice(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.PIECE_STATUS}
                                            label="Status"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdatePieceStatus(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            value={val.PIECE_TYPE}
                                            label="Status"
                                            variant="standard"
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.DATE_ADDED}
                                            label="Date Added"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdatePieceDate(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            value={val.ARTIST_ID}
                                            label="Artist ID"
                                            variant="standard"
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            value={val.MUSEUM_ID}
                                            label="Museum Id"
                                            variant="standard"
                                        />&nbsp;
                                        <div>
                                            <Button onClick={() => {updatePiece(val.PIECE_ID)}}>Update</Button>
                                        </div>
                                    <br />
                                    </div>
                                })}
                            </DialogContent>
                            <Button onClick={handleAddPiece}>Add Piece</Button>
                            <Button onClick={handlePieceViewClose}>Close</Button>
                            <br />
                        </Dialog>


                        <Dialog open={addPiece}>
                            <DialogTitle>Add Piece</DialogTitle>
                            <DialogContent>
                                    <div>
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            label="Piece ID"
                                            variant="standard"
                                            onChange={(e) => {
                                                setAddPieceId(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            label="Piece Name"
                                            variant="standard"
                                            onChange={(e) => {
                                                setAddPieceTitle(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            label="Piece Year"
                                            variant="standard"
                                            onChange={(e) => {
                                                setAddPieceYear(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            label="Piece Description"
                                            variant="standard"
                                            onChange={(e) => {
                                                setAddPieceDesc(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            label="Price"
                                            variant="standard"
                                            onChange={(e) => {
                                                setAddPiecePrice(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            label="Status"
                                            variant="standard"
                                            onChange={(e) => {
                                                setAddPieceStatus(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            label="Type"
                                            variant="standard"
                                            onChange={(e) => {
                                                setAddPieceType(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            label="Date Added"
                                            variant="standard"
                                            onChange={(e) => {
                                                setAddPieceDate(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            label="Artist ID"
                                            variant="standard"
                                            onChange={(e) => {
                                                setAddPieceArtistId(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            label="Museum Id"
                                            variant="standard"
                                            onChange={(e) => {
                                                setAddPieceMuseumId(e.target.value)
                                            }}
                                        />&nbsp;
                                    <br />
                                    </div>
                                    <br />
                            </DialogContent>
                            <Button onClick={submitAddPiece}>Submit</Button>
                            <Button onClick={handleAddPieceClose}>Close</Button>
                            <br />
                        </Dialog>


                        
                        <Dialog open={customerView}>
                            <DialogContent sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <h2>Customers</h2>
                                {userList.map((val) => {
                                    return <div> <br />
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.CUSTOMER_FNAME}
                                            label="First Name"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateCustFname(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.CUSTOMER_LNAME}
                                            label="Last Name"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateCustLname(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.CUSTOMER_EMAIL}
                                            label="Email"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateCustEmail(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.CUSTOMER_PASS}
                                            label="Password"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateCustPass(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.CUSTOMER_ADDRESS}
                                            label="Address"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateCustAddress(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.CUSTOMER_CITY}
                                            label="City"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateCustCity(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.CUSTOMER_STATE}
                                            label="State"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateCustState(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.CUSTOMER_ZIP}
                                            label="Zipcode"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateCustZip(e.target.value)
                                            }}
                                        />&nbsp;
                                        
                                        <div>
                                            <Button onClick={() => {updateCustomer(val.CUSTOMER_ID)}}>Update</Button>
                                        </div>
                                    </div>
                                })}
                            </DialogContent>
                            <Button onClick={handleAddCustomer}>Add Customer</Button>
                            <Button onClick={handleCustomerViewClose}>Close</Button>
                            <br />
                        </Dialog>
                                               
                        
                        <Dialog open={addCustomer}>
                            <DialogTitle>Add Customer</DialogTitle>
                            <DialogContent sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add customer ID"
                                    label="Customer ID"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddCustId(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add customer first name"
                                    label="Customer First Name"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddCustFname(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add customer last name"
                                    label="Customer Last Name"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddCustLname(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add customer email"
                                    label="Email"
                                    type="email"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddCustEmail(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="password"
                                    label="Password"
                                    type="password"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddCustPass(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add customer address"
                                    label="Customer Street Address"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddCustAddress(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add customer city"
                                    label="Customer City"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddCustCity(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add customer state"
                                    label="Customer State"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddCustState(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add customer zip"
                                    label="Customer Zip Code"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddCustZip(e.target.value)
                                    }}
                                />
                                <br />
                                <Button onClick={submitAddCustomer}>Submit</Button>
                                <Button onClick={handleAddCustomerClose}>Close</Button>
                            </DialogContent>
                        </Dialog>
                        
                        
                        <Dialog open={employeeView}>
                            <DialogTitle>Employees</DialogTitle>
                            <DialogContent sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>
                                {employeeList.map((val) => {
                                    return <div>
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.EMPLOYEE_FNAME}
                                            label="First Name"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateEmpFname(e.target.value)
                                            }}
                                        />
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.EMPLOYEE_LNAME}
                                            label="Last Name"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateEmpLname(e.target.value)
                                            }}
                                        />
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.EMPLOYEE_EMAIL}
                                            label="Email"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateEmpEmail(e.target.value)
                                            }}
                                        />
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.EMPLOYEE_PASS}
                                            label="Password"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateEmpPass(e.target.value)
                                            }}
                                        />
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.EMPLOYEE_START_DATE}
                                            label="Start Date"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateEmpStartDate(e.target.value)
                                            }}
                                        />
                                        <div>
                                            <Button onClick={() => {updateEmployee(val.EMPLOYEE_ID)}}>Update</Button>
                                            <Button onClick={() => {deleteEmployee(val.EMPLOYEE_ID)}}>Delete</Button>
                                        </div>
                                   </div>
                                })}
                            </DialogContent>
                            <Button onClick={handleAddEmployee}>Add Employee</Button>
                            <Button onClick={handleEmployeeViewClose}>Close</Button>
                            <br />
                        </Dialog>
                        
                        
                        <Dialog open={addEmployee}>
                            <DialogTitle>Add Employee</DialogTitle>
                            <DialogContent sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add employee ID"
                                    label="Employee ID"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddEmpId(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add Employee first name"
                                    label="Employee First Name"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddEmpFname(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add Employee last name"
                                    label="Employee Last Name"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddEmpLname(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add Employee email"
                                    label="Email"
                                    type="email"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddEmpEmail(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="password"
                                    label="Password"
                                    type="password"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddEmpPass(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="employee start date"
                                    label="Start Date"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddEmpStartDate(e.target.value)
                                    }}
                                />
                                <br />
                                <Button onClick={submitAddEmployee}>Submit</Button>
                                <Button onClick={handleAddEmployeeClose}>Close</Button>
                            </DialogContent>
                        </Dialog>


                        <Dialog open={museumView}>
                            <DialogTitle>Museums</DialogTitle>
                            <DialogContent>
                                {museumList.map((val) => {
                                    return <div> 
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.MUSEUM_NAME}
                                            id="museum name"
                                            label="Museum Name"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateMuseumName(e.target.value)
                                            }}
                                        />
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.MUSEUM_STREET_ADDRESS}
                                            id="museum address"
                                            label="Museum Street Address"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateMuseumAddress(e.target.value)
                                            }}
                                        />
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.MUSEUM_CITY}
                                            id="museum city"
                                            label="Museum City"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateMuseumCity(e.target.value)
                                            }}
                                        />
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.MUSEUM_STATE}
                                            id="museum state"
                                            label="Museum State"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateMuseumState(e.target.value)
                                            }}
                                        />
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.MUSEUM_ZIP}
                                            id="museum zip"
                                            label="Museum Zipcode"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateMuseumZip(e.target.value)
                                            }}
                                        />
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.MUSEUM_QUANTITY}
                                            id="museum quantity"
                                            label="Museum Quantity"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdateMuseumQuantity(e.target.value)
                                            }}
                                        />
                                        <div>
                                            <Button onClick={() => {updateMuseum(val.MUSEUM_ID)}}>Update</Button>
                                        </div>
                                        <br />
                                    </div>
                                })}
                            </DialogContent>
                            <Button onClick={handleAddMuseum}>Add Museum</Button>
                            <Button onClick={handleMuseumViewClose}>Close</Button>
                            <br />
                        </Dialog>


                        <Dialog open={addMuseum}>
                            <DialogTitle>Add Museum</DialogTitle>
                            <DialogContent>
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add museum id"
                                    label="Museum ID"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddMuseumId(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add museum name"
                                    label="Museum Name"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddMuseumName(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add museum address"
                                    label="Museum Street Address"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddMuseumAddress(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add museum city"
                                    label="Museum City"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddMuseumCity(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add museum state"
                                    label="Museum State"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddMuseumState(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="museum zip"
                                    label="Museum Zipcode"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddMuseumZip(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add museum quantity"
                                    label="Museum Quantity"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddMuseumQuantity(e.target.value)
                                    }}
                                />
                            </DialogContent>
                            <Button onClick={submitAddMuseum}>Add Museum</Button>
                            <Button onClick={handleAddMuseumClose}>Close</Button>
                            <br />
                        </Dialog>
                        
                        
                        <Dialog open={paymentView}>
                            <DialogTitle>Payments</DialogTitle>
                            <DialogContent>
                                {paymentList.map((val) => {
                                    return <div>
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.PAYMENT_DATE}
                                            label="Payment Date"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdatePaymentDate(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.PAYMENT_METHOD}
                                            label="Payment Method"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdatePaymentMethod(e.target.value)
                                            }}
                                        />&nbsp;
                                        <TextField 
                                            autoFocus
                                            margin="dense"
                                            defaultValue={val.PAYMENT_PRICE}
                                            label="Payment Price"
                                            variant="standard"
                                            onChange={(e) => {
                                                setUpdatePaymentPrice(e.target.value)
                                            }}
                                        />&nbsp;
                                        <div>
                                            <Button onClick={() => {updatePayment(val.PAYMENT_ID)}}>Update</Button>
                                        </div>
                                        <br />
                                    </div>
                                })}
                            </DialogContent>
                            <Button onClick={handleAddPayment}>Add Payment</Button>
                            <Button onClick={handlePaymentViewClose}>Close</Button>
                            <br />
                        </Dialog>


                        <Dialog open={addPayment}>
                            <DialogTitle>Add Payment</DialogTitle>
                            <DialogContent sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add payment ID"
                                    label="Payment ID"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddPaymentId(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add payment date"
                                    label="Date"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddPaymentDate(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add payment price"
                                    label="Payment Price"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddPaymentPrice(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add Payment method"
                                    label="Payment Method"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddPaymentMethod(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add customer id"
                                    label="Customer ID"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddPaymentCustId(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    label="Museum ID"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddPaymentMuseumId(e.target.value)
                                    }}
                                />
                                <TextField 
                                    autoFocus
                                    margin="dense"
                                    id="add piece id"
                                    label="Piece ID"
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddPaymentPieceId(e.target.value)
                                    }}
                                />
                                <br />
                                <Button onClick={submitAddPayment}>Submit</Button>
                                <Button onClick={handleAddPaymentClose}>Close</Button>
                            </DialogContent>
                        </Dialog>



                </Toolbar>
            </AppBar>
            <Collapse 
                in={checked}
                { ... (checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}
            >
                <div className={classes.container}>
                    <h1 className={classes.centerText}>From our gallery</h1>
                    <h1 className={classes.underCenterText}>to your home.</h1>
                    <br />
                    <Scroll to="center-card" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.downButton} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    )
}