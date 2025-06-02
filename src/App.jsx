import React, { useEffect, useState } from 'react'
import { supabase } from './supabaseClient.jsx'

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('product')
      .select('id, name, price, category(name)')

    if (error) {
      console.error('Gagal ambil data:', error.message)
    } else {
      setProducts(data)
    }
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Daftar Produk</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Nama Produk</th>
            <th>Kategori</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.category?.name || 'Tidak Ada Kategori'}</td>
              <td>{parseFloat(item.price).toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
              })}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
