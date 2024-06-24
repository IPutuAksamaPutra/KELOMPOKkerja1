import Link from 'next/link';
import Style from './page.module.css'; 
export default function Home() {
    return (
        <div className={Style.container}>
            <img src="/CATRAH.png" alt="Logo" className={Style.logo} />
            <div className={Style.description}>
            Catrah merupakan aplikasi Catatan Transaksi Harian yang dirancang khusus untuk membantu pengguna mancatat transaksi harian dengan mudah dan efisien.
            </div>
            <Link href="/halaman">
                <div className={Style.startButton}>Gunakan Sekarang!!</div> 
            </Link>
        </div>
    );
}
