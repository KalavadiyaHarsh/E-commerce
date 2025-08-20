import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;


// export const postData = async (url, formData) => {
//     try {
//         const response = await fetch(apiUrl + url, {
//             method: 'POST',
//             headers: {
//                 'Authorization': `Bearer ${localStorage.getItem("token")}`,
//                 'Content-Type': 'application/json',
//             },

//             body: JSON.stringify(formData)
//         });

//         if(response.ok){
//             const data = await response.json();
//             return data;
//         }else {
//             const errorData = await response.json();
//             return errorData;
//         }


//     } catch (error) {
//         console.log(error)
//     }
// }

export const postData = async (url, formData) => {
  try {
    const token = localStorage.getItem("token"); // Or "accesstoken", based on your project
    const headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(apiUrl + url, {
      method: 'POST',
      headers,
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error in postData:", error);
    return { success: false, error };
  }
};


// export const fetchDataFromApi = async (url) => {
//     try {
//         const response = await axios.get(apiUrl + url, {
//             headers: {
//                 'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`,
//                 'Content-Type': 'application/json',
//             },
//         });

//         return response.data;

//     } catch (error) {
//         console.log(error);
//         return error;
//     }
// }

export const fetchDataFromApi = async (url) => {
  try {
    const token = localStorage.getItem("accesstoken");

    const headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await axios.get(apiUrl + url, { headers });

    return response.data;

  } catch (error) {
    console.error("Error in fetchDataFromApi:", error);
    return { success: false, error };
  }
};



export const uploadImage = async (url, updatedData) => {
  try {
    const response = await axios.put(apiUrl + url, updatedData, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;

  } catch (error) {
    console.error("Error in editData:", error);
    return { success: false, error };
  }
}

export const uploadImages = async (url, formData) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const headers = {
      'Content-Type': 'multipart/form-data',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await axios.post(apiUrl + url, formData, { headers });
    return response.data;

  } catch (error) {
    console.error("Error in uploadImage:", error);
    return { success: false, error };
  }
}



// export const editData = async (url, updatedData) => {
//      try {
//         const response = await axios.put(apiUrl + url, updatedData, {
//             headers: {
//                 'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`,
//                 'Content-Type': 'application/json',
//             },
//         });
//         return response.data;

//     } catch (error) {
//         console.error("Error in editData:", error);
//         return { success: false, error };
//     }
// }

export const editData = async (url, updatedData) => {
  try {
    const token = localStorage.getItem("accesstoken");

    const headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await axios.put(apiUrl + url, updatedData, { headers });

    return response.data;

  } catch (error) {
    console.error("Error in editData:", error);
    return { success: false, error };
  }
};



export const deleteImages = async (url, imageUrl) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await axios.delete(apiUrl + url, { headers });
    return response.data;

  } catch (error) {
    console.error("Error in uploadImage:", error);
    return { success: false, error };
  }
};


export const deleteData = async (url) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await axios.delete(apiUrl + url, { headers });
    return response.data;

  } catch (error) {
    console.error("Error in Data:", error);
    return { success: false, error };
  }
};

// export const deleteMultipleData = async (url, ids) => {
//   try {
//     const token = localStorage.getItem("accesstoken");
//     const headers = {
//       'Content-Type': 'application/json',
//     };
//     if (token) {
//       headers['Authorization'] = `Bearer ${token}`;
//     }
//     const response = await axios.delete(apiUrl + url, {
//       headers,
//       data: { ids }, // Sending ids in the request body
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error in deleteMultipleData:", error);
//     return { success: false, error };
//   }
// }

export const deleteMultipleData = async (url, ids) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const headers = {
      'Content-Type': 'application/json',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await axios.delete(apiUrl + url, {
      headers,
      data: ids,  // 👈 body ko config ke andar bhejna chahiye
    });
    return response.data;
  } catch (error) {
    console.error("Error in deleteMultipleData:", error);
    return { success: false, error };
  }
}


