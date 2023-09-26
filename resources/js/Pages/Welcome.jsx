import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="着るお守り" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center selection:bg-red-500 selection:text-white pb-10 bg_color_sub">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            ご案内
                        </Link>
                    ) : (
                        <>
                            <button
                                onClick={() => {
                                    window.location.href = route("login");
                                }}
                                class="custom-button"
                            >
                                ログイン
                            </button>
                        </>
                    )}
                </div>

                <div className="max-w-7xl mx-auto p-6 lg:p-8 flex flex-col items-center mb-5">
                    <img src="images/sakura_logo.svg" className="h-16 w-auto" />

                    <div className="mt-16">
                        <h1>
                            「着るお守り」を纏い、神秘な力が宿るパワースポットへの開運の旅を楽しもう
                        </h1>

                        <p>
                            「着るお守り」には長い年月をかけて磨かれた技術や職人の卓越した技術が息づいています。
                        </p>
                        <p>
                            伝統工芸品には、研究心や向上心、使い手への温かい気持ち、そして品物に対する愛情など、さまざまな想いが込められています。これらの想いが詰まった工芸品には、魂が宿ると言えるでしょう。
                            日本には道具を100年以上も大切に使い続けることで、その道具自体がつくも神として守り神になるという伝承があります。この伝承を元に私たちは「着るお守り」を作りました。このお守りは、大切に愛着をもって使うことで、お守りに宿る魂が皆様の力になってくれることでしょう。
                        </p>
                    </div>
                    {auth.user ? (
                        <button
                            onClick={() => {
                                window.location.href = route("register");
                            }}
                            class="custom-button"
                        >
                            体験の詳細へ
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={() => {
                                    window.location.href = route("register");
                                }}
                                class="custom-button"
                            >
                                体験の詳細へ
                            </button>
                        </>
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
                    .bg_color_sub {
                        background-color: #fff1cf;
                    }

                                `}
            </style>
        </>
    );
}
