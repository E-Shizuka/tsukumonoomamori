import GuestLayout from "@/Layouts/GuestLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Footer from "../components/footer";

function CommonContent() {
    return (
        <>
            <Head title="自然の力を体感" />
            <div className="mb-24 bg_color_sub">
                <div className="py-6">
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src="/images/oogosha_oosugi.jpg"
                                alt="natural"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">〇〇旅館</h2>
                            <p>旅館所在地：</p>
                            <p>パワースポット：大杵社の大杉</p>
                            <p>お守り：銀座きもの装</p>
                            <div className="card-actions justify-end">
                                <button
                                    // onClick={() => {
                                    //     window.location.href = route("register");
                                    // }}
                                    onClick={() => {
                                        window.location.href =
                                            route("dashboard");
                                    }}
                                    className="custom-button"
                                >
                                    詳細を見る
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* このボックス毎繰り返す */}
                <div className="py-6">
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src="/images/oogosha_oosugi.jpg"
                                alt="natural"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">〇〇旅館</h2>
                            <p>旅館所在地：</p>
                            <p>パワースポット：大杵社の大杉</p>
                            <p>お守り：銀座きもの装</p>
                            <div className="card-actions justify-end">
                                <button
                                    onClick={() => {
                                        window.location.href =
                                            route("dashboard");
                                    }}
                                    className="custom-button"
                                >
                                    詳細を見る
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function Welcome({ auth }) {
    return (
        <>
            {auth.user ? (
                <AuthenticatedLayout user={auth.user}>
                    <CommonContent />
                </AuthenticatedLayout>
            ) : (
                <GuestLayout>
                    <CommonContent />
                </GuestLayout>
            )}
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
        </>
    );
}
