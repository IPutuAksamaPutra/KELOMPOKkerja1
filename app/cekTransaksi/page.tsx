"use client";

import React, { useState, FormEvent } from 'react';
import Style from './cekTransaksi.module.css';

type Transaction = 
{
    username: string;
    date: string;
    amount: number;
    image: string;
};

const CekTransaksi = () => 
{
    const [username, setUsername] = useState('');
    const [date, setDate] = useState('');
    const [transaction, setTransaction] = useState<Transaction | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        
        const transactions: Transaction[] = [
            { username: 'user1', date: '2024-06-25', amount: 100, image: 'https://via.placeholder.com/150' },
            { username: 'user2', date: '2024-06-26', amount: 200, image: 'https://via.placeholder.com/150' },
        ];

       
        const foundTransaction = transactions.find(
            (trans) => trans.username === username && trans.date === date
        );

        if (foundTransaction) {
            setTransaction(foundTransaction);
        } else {
            setTransaction(null);
            alert('Transaksi tidak ditemukan untuk nama dan tanggal tersebut.');
        }
    };

    return (
        <div className={Style.container}>
            <h1>Cek Transaksi</h1>
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
                    <p>Tanggal Transaksi: {transaction.date}</p>
                    <p>Jumlah Transaksi: {transaction.amount}</p>
                    <img src={transaction.image} alt="Gambar Transaksi" />
                </div>
            )}
            <a href="/" className={Style.backButton}>Back to Home</a>
        </div>
    );
};

export default CekTransaksi;
