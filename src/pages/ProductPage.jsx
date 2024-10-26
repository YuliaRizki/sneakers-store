import Product from "../components/Product";
import axios, { Axios } from "axios"
import { API_SERVER } from "../helpers/http-server"
import { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import Swal from "sweetalert2"

export default function ProductPage() {
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    try {

      const { data } = await API_SERVER({
        url: "/getProduct",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`
        }
      })

      setProducts(data)



    } catch (error) {

    }
  }

  const delProduct = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
    if (result.isConfirmed) {
      try {
        const data = await API_SERVER({
          url: `/delete/${id}`,
          method: "Delete",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
          }
        })
        fetchData()

      } catch (error) {
        if (error.response.status === 403) {
          Swal.fire({
            title: "Unauthorized",
            text: "You are not authorized to perform this action",
            icon: "error"
          })
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to delete the product",
            icon: "error"
          })
        }
      }
    }
  }


  const editImage = async (product) => {
    const { value: file } = await Swal.fire({
      title: 'Select image',
      input: 'file',
      inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'Upload your product image'
      },
      showCancelButton: true
    });

    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const formData = new FormData();
        formData.append('postImage', file);

        try {
          await axios.patch(`http://api.yuliarizki.com/upload/${product.id}`, formData, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'multipart/form-data'
            }
          });

          Swal.fire({
            title: 'Success!',
            text: 'Image has been uploaded',
            icon: 'success'
          });

          fetchData();
        } catch (error) {
          console.log(error);
          console.log(error.response);
          if (error.response) {
            const statusCode = error.response.status;


            if (statusCode === 403) {
              Swal.fire({
                title: 'Unauthorize!',
                text: `You can't edit this product`,
                icon: 'error'
              });
            } else {
              Swal.fire({
                title: 'Error!',
                text: 'Failed to upload image',
                icon: 'error'
              });
            }
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };


  useEffect(() => {
    fetchData()
    console.log(products);

  }, [])



  return (
    <>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-black dark:text-gray-400">
          <thead className="text-xm text-black uppercase bg-orange-500 dark:bg-orange-400 dark:text-black-400"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <tr>
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Image</span>Image
              </th>
              <th scope="col" className="px-6 py-3">
                Name

              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Stock
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>

            </tr>
          </thead>
          <tbody>
            {products.map((el) => (

              <tr key={el.id} className="bg-white border-b dark:bg-orange-100 dark:border-gray-800 hover:bg-orange-100 dark:hover:bg-orange-300">
                <td className="p-4">
                  <img
                    src={el.imgUrl}
                    className="w-16 md:w-32 max-w-full max-h-full"

                  />
                  <button
                    onClick={() => editImage(el)}
                    className="bg-red-500 text-black ">
                    Edit Image
                  </button>
                </td>
                <td className="px-6 py-4 font-semibold text-black-900 dark:text-black">
                  {el.name}
                </td>
                <td className="px-6 py-4 font-semibold text-black-900 dark:text-black">
                  {el.description}
                </td>
                <td className="px-6 py-4 font-semibold text-black-900 dark:text-black">
                  {el.price}
                </td>
                <td className="px-6 py-4 text-black">
                  <p

                    className="font-medium text-red-600 dark:text-red-500"
                  >
                    {el.stock}
                  </p>

                </td>
                <td>
                  <div
                    className="flex flex-col gap-3">
                    <Link to={`update/${el.id}`} >
                      <button
                        className="bg-orange-400 text-black ">
                        Edit
                      </button>
                    </Link>

                    <button
                      onClick={() => delProduct(el.id)}
                      className="bg-red-500 text-black ">
                      Delete
                    </button>

                  </div>

                </td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>

    </>
  )
}