import Link from 'next/link';
import Style from './halaman.module.css'; 
import React from 'react';

const Halaman = () => {
    return (
        <div className="container">
            <h1>Selamat Datang di Website Transaksi</h1>
            <Link href="/transaksi">
                <div className={Style.startButton}>Masukan Transaksi</div>
            </Link>
            <Link href="/cekTransaksi">
                <div className={Style.startButton}>Cek Transaksi</div>
            </Link>
        </div>
    );
}

export default Halaman;
