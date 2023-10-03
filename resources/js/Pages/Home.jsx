import { Link, Head } from "@inertiajs/react";
import Footer from "../components/footerLogin";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="着るお守り" />
                <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center selection:bg-red-500 selection:text-white pb-10 bg_color_sub">
                    <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                        {!auth.user && (
                            <>
                                <button
                                    onClick={() => {
                                        window.location.href = route("login");
                                    }}
                                    className="custom-button"
                                >
                                    ログイン
                                </button>
                            </>
                        )}
                    </div>

                    <div className="max-w-7xl mx-auto p-6 lg:p-8 flex flex-col items-center">
                        <div className="m-2">
                            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                                「着るお守り」を纏い、
                                <br />
                                パワースポットへの開運の旅へ！
                            </h2>
                        </div>
                        <div className="flex w-full my-2">
                            <div
                                className="w-1/2 justify-center"
                                style={{
                                    backgroundImage:
                                        "url('/images/furisode.jpg')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "15vh",
                                }}
                            ></div>
                            <div className="w-1/2 flex flex-col justify-center bg_color_main">
                                <h1 className="font-bold text-xl text-white leading-tight ml-2">
                                    つくものお守り
                                </h1>
                            </div>
                        </div>
                        <div className="bg-white mt-2 rounded p-2 mb-8 ">
                            <p className="text-sm text-gray-800 leading-tight m-2">
                                「着るお守り」には長い年月をかけて磨かれた技術や職人の卓越した技術が息づいています。
                            </p>
                            <p className="text-sm text-gray-800 leading-tight m-2">
                                伝統工芸品には、研究心や向上心、使い手への温かい気持ち、そして品物に対する愛情など、さまざまな想いが込められています。これらの想いが詰まった工芸品には、魂が宿ると言えるでしょう。
                                日本には道具を100年以上も大切に使い続けることで、その道具自体がつくも神として守り神になるという伝承があります。この伝承を元に私たちは「着るお守り」を作りました。このお守りは、大切に愛着をもって使うことで、お守りに宿る魂が皆様の力になってくれることでしょう。
                            </p>
                        </div>
                        {!auth.user && (
                            <button
                                onClick={() => {
                                    window.location.href = route("register");
                                }}
                                className="custom-button"
                            >
                                新規登録
                            </button>
                        )}
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
                    .bg_color_main {
                        background-color: #d3381c;
                        color:white;
                    }
                    .bg_color_sub {
                        background-color: #fff1cf;
                    }

                                `}
                </style>
                <Footer />
            </AuthenticatedLayout>
        </>
    );
}
