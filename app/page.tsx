import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="container">
                <img src="Logo CATRAH.jpg" alt="Logo" className="logo" />
                <div className="description">
                    Selamat datang di website kami! Jelajahi dan temukan informasi menarik.
                </div>
                <Link href="/halaman" className="start-button">Mulai</Link>
            </div>
        </>
    );
}
