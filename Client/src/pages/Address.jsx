import React, { useContext, useState } from 'react';
import { MyContext } from '../App';
import AccountSidebar from '../components/AccountSidebar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { MenuItem, Select } from '@mui/material';

const Address = () => {

    const [open, setOpen] = useState(false);
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState(false)


    const [formFields, setFormFields] = useState({
        address_line: "",
        city: "",
        state: "",
        pincode: "",
        country: "",
        mobile: "",
        status: true,
        userId: "",

    })

    const context = useContext(MyContext);

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setFormFields(() => {
            return {
                ...formFields,
                [name]: value
            }
        })
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        // setAddress('');
    };

    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
        setFormFields((prevState) => ({
            ...prevState,
            status: event.target.value
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        if (formFields.address_line.trim() === "") {
            context.openAlertBox("error", "Please enter address line 1!");
            setIsLoading(false);
            return;
        }

        if (formFields.city.trim() === "") {
            context.openAlertBox("error", "Please enter city!");
            setIsLoading(false);
            return;
        }

        if (formFields.state.trim() === "") {
            context.openAlertBox("error", "Please enter state!");
            setIsLoading(false);
            return;
        }

        if (formFields.pincode.trim() === "") {
            context.openAlertBox("error", "Please enter pincode!");
            setIsLoading(false);
            return;
        }

        if (formFields.country.trim() === "") {
            context.openAlertBox("error", "Please enter country!");
            setIsLoading(false);
            return;
        }

        if (!formFields.mobile || formFields.mobile.trim() === "") {
            context.openAlertBox("error", "Please enter mobile number!");
            setIsLoading(false);
            return;
        }

        // Add API Here
    }

    return (
        <section className="py-10 w-full">
            <div className="container flex gap-5">
                <div className="col1 w-full md:w-[25%]">
                    <AccountSidebar />
                </div>

                <div className="col w-full md:w-[75%]">
                    <div className="card bg-white p-5 shadow-md rounded-md">
                        <h2 className="pb-3">Address</h2>
                        <hr />

                        <div
                            className="mt-5 border border-dashed border-gray-400 p-4 cursor-pointer text-center rounded-md hover:bg-gray-100 transition"
                            onClick={handleOpen}
                        >
                            Add New Address
                        </div>
                    </div>
                </div>
            </div>

            <Dialog open={open}  PaperProps={{ className: "customDialogPaper" }}>
                <DialogTitle>Add Address</DialogTitle>
                <form className=' p-8 py-3 pb-8' onSubmit={handleSubmit}>
                    <div className="flex items-center gap-5 mb-5">
                        <div className="col w-[100%]">
                            <TextField
                                className="w-full"
                                label="Address Line 1"
                                variant="outlined"
                                size="small"
                                name='address_line'
                                value={formFields.address_line}
                                onChange={onChangeInput}
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-5 mb-5">
                        <div className="col w-[50%]">
                            <TextField
                                className="w-full"
                                label="city"
                                variant="outlined"
                                size="small"
                                name='city'
                                value={formFields.city}
                                onChange={onChangeInput}
                            />
                        </div>

                        <div className="col w-[50%]">
                            <TextField
                                className="w-full"
                                label="state"
                                variant="outlined"
                                size="small"
                                name='state'
                                value={formFields.state}
                                onChange={onChangeInput}
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-5 mb-5">
                        <div className="col w-[50%]">
                            <TextField
                                className="w-full"
                                label="pincode"
                                variant="outlined"
                                size="small"
                                name='pincode'
                                value={formFields.pincode}
                                onChange={onChangeInput}
                            />
                        </div>

                        <div className="col w-[50%]">
                            <TextField
                                className="w-full"
                                label="country"
                                variant="outlined"
                                size="small"
                                name='country'
                                value={formFields.country}
                                onChange={onChangeInput}
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-5 mb-5">
                        <div className="col w-[50%]">
                            <PhoneInput
                                defaultCountry="in"
                                value={phone}
                                //disabled={isLoading}
                                onChange={(phone) => {
                                    setPhone(phone);
                                    setFormFields((prev) => ({
                                        ...prev,
                                        mobile: phone
                                    }));
                                }}
                            />
                        </div>

                        <div className="col w-[50%]">
                            <Select
                                value={status}
                                onChange={handleChangeStatus}
                                displayEmpty
                                inputProps={{ "aria-label": "Without label" }}
                                size="small"
                                className="w-full"
                            >
                                <MenuItem value={true}>True</MenuItem>
                                <MenuItem value={false}>False</MenuItem>
                            </Select>
                        </div>
                    </div>

                    <div className='flex items-center justify-between gap-16 px-32'>
                        <Button type='submit' className='btn-Org w-full' >Save</Button>
                        <Button className='btn-rg w-full' onClick={handleClose}>Cancle</Button>

                    </div>
                </form>
            </Dialog>
        </section>
    );
};

export default Address;
