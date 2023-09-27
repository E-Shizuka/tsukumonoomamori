import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Footer from "../components/footer";
import YesChecked from "../Components/YesChecked";
export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="mypage " />
            <div className="py-12">
                <div className="sm:fixed top-0 right-0 p-0 flex justify-end items-center space-x-4">
                    <p className="mr-2">投稿可否</p>
                    <YesChecked />
                </div>
                <div className="sm:fixed sm:top-0 sm:right-0 p-0 text-right">
                    <button
                        onClick={() => {
                            window.location.href = route("home");
                        }}
                        className="custom-button"
                    >
                        修正
                    </button>
                </div>
                <div className="mb-8 bg_color_sub">
                    <div className="py-6">
                        <div className="card lg:card-side bg-base-100 shadow-xl">
                            <figure>
                                {/* 写真は自分が撮影したものが出るように */}
                                <img
                                    src="/images/oogosha_oosugi.jpg"
                                    alt="natural"
                                />
                            </figure>
                            <div className="card-body">
                                <p>mission場所　日付</p>
                                <p>ひとことコメント：</p>
                                <p>お守り：銀座きもの装</p>
                            </div>
                        </div>
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
