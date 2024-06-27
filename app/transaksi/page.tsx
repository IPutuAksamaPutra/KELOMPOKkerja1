// transaksi.js

"use client";

import React, { useState, FormEvent } from 'react';
import { db, storage } from '../firebaseConfig'; // Import db and storage from firebaseConfig
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Style from './transaksi.module.css';

const Transaksi = () => {
    const [username, setUsername] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            // Add transaction data to Firestore
            const docRef = await addDoc(collection(db, 'transactions'), {
                username,
                amount: parseFloat(amount),
                date,
                imageUrl: '' // Placeholder for image URL
            });

            // Upload image to Firebase Storage if there is an image selected
            if (image) {
                const imageRef = ref(storage, `images/${docRef.id}_${image.name}`);
                await uploadBytes(imageRef, image);
                const imageUrl = await getDownloadURL(imageRef);

                // Update document with imageUrl
                await updateDoc(doc(db, 'transactions', docRef.id), {
                    imageUrl
                });
            }

            alert('Data saved successfully!');
            // Reset form
            setUsername('');
            setAmount('');
            setDate('');
            setImage(null);
        } catch (error) {
            console.error("Error adding document: ", error);
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
            <p className={Style.description}>Halaman untuk melakukan transaksi baru.</p>
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
            <a href="/halaman" className={Style.backButton}>Back to Home</a>
        </div>
    );
};

export default Transaksi;
