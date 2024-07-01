'use client';
import React, { useState, FormEvent } from 'react';
import Style from './transaksi.module.css';
import { db, storage } from '../firebaseClient';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Transaksi = () => {
    const [username, setUsername] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            // Unggah gambar
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
                description,
                imageUrl
            });

            setUsername('');
            setAmount('');
            setDate('');
            setDescription('');
            setImage(null);

            setError('');
            setSuccess('Transaksi berhasil ditambahkan!');

            console.log('Transaction added successfully!');
        } catch (error) {
            console.error('Error adding transaction: ', error);
            setError('Terjadi kesalahan saat menambahkan transaksi. Mohon coba lagi.');
            setSuccess('');
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
                    <label htmlFor="username">Nama:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className={Style.formGroup}>
                    <label htmlFor="date">Tanggal:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div className={Style.formGroup}>
                    <label htmlFor="amount">Jumlah Barang:</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <div className={Style.formGroup}>
                    <label htmlFor="description">Keterangan:</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className={Style.formGroup}>
                    <label htmlFor="image">Bukti Transaksi:</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                <button type="submit" className={Style.submitButton}>Simpan Transaksi</button>
            </form>
            <div className={Style.notifications}>
                {success && (
                    <div className={Style.success}>
                        <p>{success}</p>
                    </div>
                )}
                {error && (
                    <div className={Style.error}>
                        <p>{error}</p>
                    </div>
                )}
            </div>
            <a href="/halaman" className={Style.backButton}>Kembali ke Halaman Utama</a>
        </div>
    );
};

export default Transaksi;
