'use client';

import React, { useState, FormEvent } from 'react';
import Style from './cekTransaksi.module.css';
import { db, collection, query, where, getDocs , storage} from '../firebaseClient'; 
import { Timestamp } from 'firebase/firestore'; 
type Transaction = 
{
    username: string;
    date: Date;
    amount: number;
    imageUrl: string;
};

const CekTransaksi = () => 
    {
    const [username, setUsername] = useState('');
    const [date, setDate] = useState('');
    const [transaction, setTransaction] = useState<Transaction | null>(null);
    const [error, setError] = useState<string>('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await fetchTransactions();
    };

    const fetchTransactions = async () => {
        try {
            const transactionsCol = collection(db, 'transactions');
            const q = query(transactionsCol, where('username', '==', username), where('date', '==', Timestamp.fromDate(new Date(date))));
            const querySnapshot = await getDocs(q);
    
            if (!querySnapshot.empty) {
                let foundTransaction: Transaction | null = null;
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    foundTransaction = 
                    {
                        username: data.username,
                        date: data.date.toDate(),
                        amount: data.amount,
                        imageUrl: data.imageUrl || '' 
                    };
                });
                setTransaction(foundTransaction);
                setError('');
            } else 
            {
                setTransaction(null);
                setError('Transaksi tidak ditemukan untuk nama dan tanggal tersebut.');
            }
        } catch (error) {
            console.error('Error fetching transactions:', error); 
            setError('Terjadi kesalahan saat mengambil transaksi. Mohon coba lagi.');
        }
    };
    

    return (
        <div className={Style.container}>
            <h1 className={Style.heading}>Cek Transaksi</h1>
            <p className={Style.description}>Halaman ini dirancang untuk memudahkan pengguna dalam memantau transaksi dengan cepat dan efisien. Silakan masukkan Username dan Tanggal Transaksi yang ingin Anda periksa.</p>
            <form onSubmit={handleSubmit} className={Style.form}>
                <div className={Style.formGroup}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className={Style.formGroup}>
                    <label htmlFor="date">Tanggal Transaksi:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={Style.submitButton}>Submit</button>
            </form>

            {transaction && (
                <div className={Style.result}>
                    <h2>Detail Transaksi</h2>
                    <p>Username: {transaction.username}</p>
                    <p>Tanggal Transaksi: {transaction.date.toLocaleDateString()} {transaction.date.toLocaleTimeString()}</p>
                    <p>Jumlah Transaksi: {transaction.amount}</p>
                    <img src={transaction.imageUrl} alt="Gambar Transaksi" />
                </div>
            )}

            {error && (
                <div className={Style.error}>
                    <p>{error}</p>
                </div>
            )}

            <a href="/halaman" className={Style.backButton}>Kembali ke Halaman Utama</a>
        </div>
    );
};

export default CekTransaksi;
