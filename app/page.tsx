import styles from './page.module.css';

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>Selamat Datang di Catrah</h1>
                <div className={styles.content}>
                    <p>Catrah merupakan aplikasi Catatan Transaksi Harian yang dirancang khusus untuk membantu pengguna mencatat transaksi harian dengan mudah dan efisien.</p>
                    <a href="/halaman" className={styles.btn}>
                        Ayo Gunakan Sekarang
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
