'use client';
import React, { useState, FormEvent } from 'react';
import Style from './transaksi.module.css';
import { db, storage } from '../firebaseClient';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Transaksi = () => 
    {
    const [username, setUsername] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [error, setError] = useState<string>('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            // ungah gambar//
            let imageUrl = null;
            if (image) {
                const storageRef = ref(storage, `images/${image.name}`);
                await uploadBytes(storageRef, image);
                imageUrl = await getDownloadURL(storageRef);
            }

            await addDoc(collection(db, 'transactions'), {
                username,
                amount: parseFloat(amount),
                date: new Date(date),
                imageUrl
            });

            setUsername('');
            setAmount('');
            setDate('');
            setImage(null);

            console.log('Transaction added successfully!');
        } catch (error) {
            console.error('Error adding transaction: ', error);
            setError('Terjadi kesalahan saat menambahkan transaksi. Mohon coba lagi.');
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    return (
        <div className={Style.container}>
            <h1 className={Style.heading}>Transaksi</h1>
            <p className={Style.description}>Halaman ini memudahkan pengguna mencatat transaksi dengan cepat. Pengguna dapat mengisi nama, jumlah, tanggal, dan mengunggah bukti transaksi, sehingga catatan keuangan tetap terorganisir dan akurat.</p>
            <form onSubmit={handleSubmit} className={Style.form}>
                <div className={Style.formGroup}>
                    <label htmlFor="username">Nama Anda:</label>
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
                <div className={Style.formGroup}>
                    <label htmlFor="image">Upload Image:</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                <button type="submit" className={Style.submitButton}>Submit</button>
            </form>
            {error && (
                <div className={Style.error}>
                    <p>{error}</p>
                </div>
            )}
            <a href="/halaman" className={Style.backButton}>Kembali ke Halaman Utama</a>
        </div>
    );
};

export default Transaksi;
