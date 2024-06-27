import styles from './page.module.css';

const Home =() => 
{
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p>Catrah merupakan aplikasi Catatan Transaksi Harian yang dirancang khusus untuk membantu pengguna mencatat transaksi harian dengan mudah dan efisien.</p>
                    <a href="/halaman" className={styles.btn}>
                        Ayo Gunakan Sekarang
                    </a>
                </div>
                <div className={styles.logo}>
                    <img src="/grafis.png" alt="Logo 1" />
                </div>
            </div>
        </div>
    );
}
export default Home;