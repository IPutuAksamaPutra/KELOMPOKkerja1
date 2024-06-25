"use client";

import React, { useState, FormEvent } from 'react';
import Style from './transaksi.module.css';

const Transaksi = () => {
    const [username, setUsername] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Transaction Amount:', amount);
        console.log('Transaction Date:', date);
       
    };

    return (
        <div className={Style.container}>
            <h1 className={Style.heading}>Transaksi</h1>
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
                    <label htmlFor="amount">Jumlah Transaksi:</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
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
        </div>
    );
};

export default Transaksi;
