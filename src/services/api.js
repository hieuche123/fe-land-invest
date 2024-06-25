import instance from "../utils/axios-customize";

export const callLogin = (userName, password) => {
    return instance.post('/api/login',
    {
        Username:userName, 
        Password:password
    })
}

// export const callRegister = (registerUsername, registerFullName, registerPassword, registerGender, registerLatitude, registerLongitude, registeravatarLink, registerEmail, registerLastLoginIP) => {
//     return instance.post('/api/register',
//     {
//         Username:registerUsername,
//         FullName:registerFullName,
//         Password:registerPassword,
//         Gender:registerGender,
//         Latitude:registerLatitude,
//         Longitude:registerLongitude,
//         avatarLink: registeravatarLink,
//         Email:registerEmail,
//         LastLoginIP:registerLastLoginIP
//     })
// }

export const callRegister = (registerUsername, registerFullName, registerPassword, registerGender, registerLatitude, registerLongitude, registeravatarLink, registerEmail, registerLastLoginIP) => {
    const payload = {
        Username:registerUsername,
        FullName:registerFullName,
        Password:registerPassword,
        Gender:registerGender,
        Latitude:registerLatitude,
        Longitude:registerLongitude,
        avatarLink: registeravatarLink,
        Email:registerEmail,
        LastLoginIP:registerLastLoginIP
    };

    console.log('Payload:', payload);

    return instance.post('/api/register', payload)
        .then(response => response.data)
        .catch(error => {
            if (error.response) {
                console.error('Error Response Data:', error.response.data);
            }
            throw error;
        });
};

export const callLogout = () => {
    return instance.post('/api/logout')
}

// export const logoutUser = async () => {
//     try {
//         await instance.post('/api/logout');
//         localStorage.removeItem('access_token');
//         localStorage.removeItem('refresh_token');
//         console.log('Logout successful');
//     } catch (error) {
//         console.error('Logout error:', error);
//         if (error.response) {
//             console.error('Response error:', error.response.data);
//         } else if (error.request) {
//             console.error('Request error:', error.request);
//         } else {
//             console.error('Error:', error.message);
//         }
//         throw error;
//     }
// };

export const callRefeshToken = () => {
    return instance.post('/refresh_token')
}

export const callforgotPassword = (email) => {
    return instance.post('/api/forgotPassword',
    {
        Email:email, 

    })
}



export const searchQueryAPI = (query) => {
    return instance.get(`/api/zonings/view?name=${encodeURIComponent(query)}`);
}
export const fetchProvinces = async () => {
    try {
        const response = await instance.get('/api/provinces/view/');
       return response.data;
    }
    catch (error) {
        console.error('Error fetching provinces: ', error)
        return [];
    }
}
export const fetchDistrictsByProvinces = async (ProvinceID) => {
    try {
        const response = await instance.get(`/api/districts/Byprovince/${ProvinceID}`)
        return response.data
    }
    catch (error) {
        console.error('Error fetching districts', error)
        return 
    }
}

export const ViewlistBox = () => {
    return instance.get(`/api/box/viewlist_box`);
}

export const ViewlistPost = () => {
    return instance.get(`/api/forum/view_allpost`);
}

export const UpdateBox = (BoxID, BoxName, Description, avatarLink) => {
    return instance.patch(`/api/box/change_description${BoxID}`);
}

export const CreateBox = (BoxName, Description, avatarLink) => {
    return instance.post('/api/box/add_box',{BoxName, Description, avatarLink});
}

// export const callCreateUser = (fullName, email, password, phone) => {
//     return axios.post('/api/v1/user',{fullName, email, password, phone})
// }


//fetch data
export const fetchFilteredAuctions = async (filters) => {
    const mockAuctions = [
      {
        id: 1,
        assetName: 'Tài sản 1',
        organization: '',
        ownerName: 'Chủ sở hữu 1',
        province: 'Hà Nội',
        district: 'Chương mỹ',
        fromDateAuction: 'Mon Jun 24 2024 00:00:00 GMT+0700 (Giờ Đông Dương)',
        toDateAuction: 'Wed Jun 26 2024 00:00:00 GMT+0700 (Giờ Đông Dương)',
        fromDateAnnouncement: 'Mon Jun 24 2024 00:00:00 GMT+0700 (Giờ Đông Dương)',
        toDateAnnouncement: 'Tue Jun 25 2024 00:00:00 GMT+0700 (Giờ Đông Dương)',
        fromPrice: 1000,
        toPrice: 2000,
      },
    ];
  
    return mockAuctions.filter(auction => {
      return Object.keys(filters).every(key => {
        if (!filters[key]) return true;
        if (key === 'fromDateAuction' || key === 'toDateAuction' ||
            key === 'fromDateAnnouncement' || key === 'toDateAnnouncement') {
          return new Date(auction[key]) >= new Date(filters[key]);
        }
        return auction[key] === filters[key];
      });
    });
  };