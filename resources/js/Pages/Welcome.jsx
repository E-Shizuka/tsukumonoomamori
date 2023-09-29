import { Link, Head } from "@inertiajs/react";
import Footer from "../Components/Footer";
import Dropdown from "@/Components/Dropdown";

export default function Welcome({ auth, header, phpVersion }) {
    return (
        <>
            <div className="min-h-screen bg_color_sub">
                <nav className="bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="shrink-0 flex items-center">
                                    <Link href="/">
                                        <img
                                            src="images/sakura_logo.svg"
                                            className="h-9 w-auto"
                                            alt="Sakura Logo"
                                        />
                                    </Link>
                                </div>
                            </div>

                            <div className="sm:hidden flex items-center">
                                {/* モバイル用のメニューアイコン */}
                                <button
                                    onClick={() => {
                                        window.location.href = route("login");
                                    }}
                                    type="button"
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                >
                                    ログイン
                                </button>
                            </div>

                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="ml-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    onClick={() => {
                                                        window.location.href =
                                                            route("login");
                                                    }}
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    ログイン
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {header && (
                    <header className="shadow" class="bg_color_sub">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                <Head title="着るお守り" />
                <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center selection:bg-red-500 selection:text-white pb-10 bg_color_sub">
                    <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                        {/* {!auth.user && (
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
                        )} */}
                        {/* {auth.user ? (
                        <>
                            <Link
                                method="post"
                                href={route("logout")}
                                className="custom-button"
                            >
                                ログアウト
                            </Link>
                        </>
                    ) : (
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
                    )} */}
                    </div>

                    <div className="max-w-7xl mx-auto p-6 lg:p-8 flex flex-col items-center">
                        {/* <img
                            src="images/sakura_logo.svg"
                            className="h-16 w-auto"
                        /> */}

                        <div className="mt-2">
                            <h1>
                                「着るお守り」を纏い、神秘な力が宿るパワースポットへの開運の旅へ！
                            </h1>
                        </div>
                        <div className="flex w-full">
                            <div
                                className="w-1/2 justify-center"
                                style={{
                                    backgroundImage:
                                        "url('../../images/furisode.jpg')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "15vh",
                                }}
                            ></div>
                            <div className="w-1/2 flex flex-col justify-center bg_color_main">
                                <h1 className="ml-2">つくものお守り</h1>
                            </div>
                        </div>
                        <div className="mb-8">
                            <p>
                                「着るお守り」には長い年月をかけて磨かれた技術や職人の卓越した技術が息づいています。
                            </p>
                            <p>
                                伝統工芸品には、研究心や向上心、使い手への温かい気持ち、そして品物に対する愛情など、さまざまな想いが込められています。これらの想いが詰まった工芸品には、魂が宿ると言えるでしょう。
                                日本には道具を100年以上も大切に使い続けることで、その道具自体がつくも神として守り神になるという伝承があります。この伝承を元に私たちは「着るお守り」を作りました。このお守りは、大切に愛着をもって使うことで、お守りに宿る魂が皆様の力になってくれることでしょう。
                            </p>
                        </div>
                        {!auth.user && (
                            <div className="mb-16">
                                <button
                                    onClick={() => {
                                        window.location.href =
                                            route("register");
                                    }}
                                    className="custom-button"
                                >
                                    新規登録
                                </button>
                            </div>
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
            </div>
        </>
    );
}
