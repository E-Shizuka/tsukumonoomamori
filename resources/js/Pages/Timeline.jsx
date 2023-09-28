import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Footer from "../Components/Footer";
export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="地元の美食を堪能 " />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg">
                        <h2>地元の美食を堪能 </h2>
                        <p>地元の食材の紹介</p>
                        <p>お店の紹介</p>
                        <p>料理のこだわり</p>
                        <p>料理を食べる</p>
                        <p>写真を撮る</p>
                    </div>

                    <div className="max-w-7xl mx-auto p-6 lg:p-8 flex flex-col items-center mb-5">
                        <button
                            onClick={() => {
                                window.location.href = route("second-mission");
                            }}
                            class="custom-button"
                        >
                            次の体験へ
                        </button>
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
