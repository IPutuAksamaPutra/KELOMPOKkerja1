import React from 'react';
import styles from './halaman.module.css';

const HomePage = () => 
{
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <img src="/CATRAH.png" alt="Catrah Logo" className={styles.logo} />
                <h1 className={styles.title}>Silakan Pilih yang ingin kamu gunakan!!</h1>
            </header>
            <div className={styles.options}>
                <div className={styles.option}>
                    <img src="/CekTransaksi.png" alt="Cek Transaksi" />
                    <a href="/cekTransaksi" className={styles.btn}>
                        <button className={styles.btn}>Ayo Cek transaksimu</button>
                    </a>
                </div>
                <div className={styles.option}>
                    <img src="/Transaksi.png" alt="Masukan Transaksi" />
                    <a href="/transaksi" className={styles.btn}>
                        <button className={styles.btn}>Masukan transaksimu</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
