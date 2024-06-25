import React from 'react';
import styles from './halaman.module.css';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <img src="/CATRAH.png" alt="Catrah Logo" className={styles.logo} />
                <h1 className={styles.title}>Silakan Pilih yang ingin kamu gunakan!!</h1>
            </header>
            <div className={styles.options}>
                <div className={styles.option}>
                    <img src="/CekTransaksi.png" alt="Cek Transaksi" />
                    <button className={styles.btn}>Ayo Cek transaksimu</button>
                </div>
                <div className={styles.option}>
                    <img src="/Transaksi.png" alt="Masukan Transaksi" />
                    <button className={styles.btn}>Ayo Masukan transaksimu</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
