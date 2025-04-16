import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import Layout from '../../components/layout/Layout'
import Loader from '../../components/loader/Loader'

function Order() {
  const userid = JSON.parse(localStorage.getItem('user')).user.uid
  const context = useContext(myContext)
  const { mode, loading, order } = context

  return (
    <Layout>
      {loading && <Loader />}
      <div className={`min-h-screen py-10 ${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <h1 className="text-3xl font-bold text-center mb-10">My Orders</h1>
        {
          order.filter(obj => obj.userid === userid).length > 0 ? (
            order.filter(obj => obj.userid === userid).map((order, index) => (
              <div key={index} className="mx-auto max-w-6xl mb-10 px-4">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Order #{index + 1}</h2>
                {
                  order.cartItems.map((item, idx) => (
                    <div key={idx} className={`flex flex-col sm:flex-row items-center gap-4 bg-white ${mode === 'dark' ? 'bg-gray-800 text-white' : ''} p-4 rounded-lg shadow-md mb-4`}>
                      <img src={item.imageUrl} alt={item.title} className="w-full sm:w-40 h-32 object-cover rounded" />
                      <div className="flex-1 w-full">
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="text-sm mt-1">{item.description}</p>
                        <p className="text-sm font-semibold mt-2">Price: ₹{item.price}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            ))
          ) : (
            <div className="text-center mt-20">
              <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-300">You have not placed any orders yet.</h2>
            </div>
          )
        }
      </div>
    </Layout>
  )
}

export default Order
