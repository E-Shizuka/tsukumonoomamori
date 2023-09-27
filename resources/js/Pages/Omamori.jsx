import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Footer from "../components/FooterLogin";
export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="つくものお守り " />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg">
                        <h2>つくもののお守り 銀座きもの装 </h2>
                        <p>このお守りが出来上がるまで</p>
                        <p>出品者情報（銀座いせよし）紹介</p>
                        <p>初めて着物の購入を検討している方へメッセージ</p>
                    </div>
                </div>
            </div>
            <style>
                {`
                    .custom-button {
                        background-color: #f19072; /* ボタンの背景色 */
                        color: black; /* ボタンのテキスト色 */
                        padding: 8px 16px; /* ボタンのパディング */
                        border-radius: 4px; /* ボタンの角丸 */
                        border: none; /* ボーダーなし */
                        margin: 0.5rem;
                    }

                    .custom-button:hover {
                        background-color: #d3381c; /* ホバー時の背景色 */
                        color: white; /* ボタンのテキスト色 */
                    }
                    .bg_color_sub {
                        background-color: #fff1cf;
                    }

                                `}
            </style>
            <Footer />
        </AuthenticatedLayout>
    );
}
