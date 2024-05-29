import React, { useState } from 'react';
import {
    Avatar,
    Button,
    Container,
    Typography,
    IconButton,
    FormControl,
    InputLabel,
    Input,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import Appbar from '../Components/Appbar';
import { useLocation } from 'react-router-dom';
import { updateUserProfile } from '../service/api';
import { useNavigate } from "react-router-dom";

function EditProfile() {
    const location = useLocation();
    const { currentUser } = location.state || {};
    const navigate = useNavigate();
    const [nickname, setNickname] = useState(currentUser?.nickname || '');
    const [gender, setGender] = useState(currentUser?.gender || '');
    const [picture, setPicture] = useState(null);

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handlePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPicture(file);
        }
    };

    const handleSave = async () => {
        const formData = new FormData();
        formData.append('nickname', nickname);
        formData.append('gender', gender);
        formData.append('sub', currentUser.sub);
        if (picture) {
            formData.append('picture', picture);
        }

        try {
            await updateUserProfile(formData);
            alert('Profile updated successfully!');
            navigate('/profile');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile.');
        }
    };

    const handleEditPictureClick = () => {
        document.getElementById('picture-input').click();
    };

    return (
        <>
            <Appbar currentUser={currentUser}/>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '9rem', position: 'relative' }}>
                <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '400', fontSize: '3rem' }}>
                    Edit Profile
                </Typography>
            </Container>

            <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem', position: 'relative' }}>
                <Avatar
                    src={picture ? URL.createObjectURL(picture) : `http://localhost:8000/${currentUser.picture}`}
                    alt="Profile Photo"
                    sx={{ width: '10rem', height: '10rem' }}
                />
                <IconButton sx={{ position: 'absolute', right: '30rem', top: '7.5rem' }} onClick={handleEditPictureClick}>
                    <EditIcon />
                </IconButton>
                <input
                    type="file"
                    id="picture-input"
                    style={{ display: 'none' }}
                    onChange={handlePictureChange}
                    accept="image/*"
                />
            </Container>

            <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <FormControl sx={{ width: '50%' }}>
                    <InputLabel htmlFor="username-input">Username</InputLabel>
                    <Input
                        type='text'
                        name='nickname'
                        id="username-input"
                        value={nickname}
                        onChange={handleNicknameChange}
                    />
                </FormControl>
            </Container>

            <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <FormControl sx={{ width: '50%' }}>
                    <InputLabel htmlFor="gender-input">Gender</InputLabel>
                    <Input
                        type='text'
                        id="gender-input"
                        name="gender"
                        value={gender}
                        onChange={handleGenderChange}
                    />
                </FormControl>
            </Container>

            <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <Button variant="contained" onClick={handleSave}>Save</Button>
            </Container>
        </>
    );
}

export default EditProfile;
