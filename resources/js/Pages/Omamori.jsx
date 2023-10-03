import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Footer from "../components/FooterLogin";
export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="つくものお守り " />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg mb-4">
                        <h2 className="font-semibold text-gray-800 leading-tight m-2">
                            つくもののお守り 銀座きもの装{" "}
                        </h2>
                        <p className="text-sm text-gray-800 leading-tight m-2">
                            きものを知り尽くした千谷みゑが考案した独自のフォルムと結び紐で誰でも簡単に着られますし、帯をしなくても着られます。
                        </p>
                        <p className="text-sm text-gray-800 leading-tight m-2">
                            現代風にアレンジはしていても、生地や縫製、染めや刺繍などは一流の職人の仕事。帯を締めて本格的なきものとして着られます。
                        </p>
                    </div>
                    <div className="overflow-hidden sm:rounded-lg mb-4">
                        <h2 className="font-semibold text-gray-800 leading-tight m-2">
                            出品者情報（銀座いせよし）紹介
                        </h2>
                        銀座いせよしは2009年、匠の手仕事による「きもの」を、若い方やきもの初心者に向けて、気軽に見ていただけるよう創業しました。千谷みゑがデザインしたきものや和小物、千谷みゑが好む品をそろえたお店です。
                    </div>
                    <div className="overflow-hidden sm:rounded-lg mb-4">
                        <h2 className="font-semibold text-gray-800 leading-tight m-2">
                            初めて着物の購入を検討している方へメッセージ
                        </h2>
                        <p className="text-sm text-gray-800 leading-tight m-2">
                            めぐる季節を自然とともに生き、日々の節目を大事にしてきた日本の文化には、人々が幸せに楽しく暮らせるヒントや知恵がたくさん含まれていると、私は思っています。海外から見た日本も少しだけ経験し、その意識は年を重ねるごとに深くなっています。きものは和の文化の一つです。目をつぶり、耳をふさいでいても体感できる身体の内側の和体験です。ここから少しずつ、皆様と広がっていくことができましたら誠に嬉しく存じます。どうぞ、お気軽に足をお運びくださいませ。
                        </p>
                    </div>
                    <div className="overflow-hidden sm:rounded-lg mb-4">
                        <p className="text-sm font-semibold text-gray-800 leading-tight m-2">
                            店名
                        </p>
                        <p className="text-sm text-gray-800 leading-tight m-2">
                            銀座いせよし
                        </p>
                        <p className="text-sm font-semibold text-gray-800 leading-tight m-2">
                            住所
                        </p>
                        <p className="text-sm text-gray-800 leading-tight m-2">
                            〒104-0061
                        </p>
                        <p className="text-sm text-gray-800 leading-tight m-2">
                            東京都中央区銀座８丁目１０−３
                        </p>
                        <p className="text-sm text-gray-800 leading-tight m-2">
                            銀座三鈴ビル 6階
                        </p>
                        <p className="text-sm font-semibold text-gray-800 leading-tight m-2">
                            電話番号
                        </p>
                        <p className="text-sm text-gray-800 leading-tight m-2">
                            03-6228-5875
                        </p>
                        <p className="text-sm text-gray-800 leading-tight m-2">
                            ※お手数ですがご来店の前にお電話くださいませ
                        </p>
                        <p className="text-sm font-semibold text-gray-800 leading-tight m-2">
                            営業時間
                        </p>
                        <p className="text-sm text-gray-800 leading-tight m-2">
                            月・水: 13:30-19:00
                            <br />
                            火・木・金: 11:30-19:00
                            <br />
                            土曜: 11:30-18:00
                            <br />
                            定休日: 日曜・祝日
                        </p>
                        <div className="max-w-7xl mx-auto p-6 lg:p-8 flex flex-col items-center mb-5">
                            <button
                                onClick={() => {
                                    window.open(
                                        "https://iseyoshi.com/",
                                        "_blank",
                                        "noopener,noreferrer"
                                    );
                                }}
                                className="custom-button"
                            >
                                銀座いせよしのウェブサイトへ
                            </button>
                        </div>
                    </div>
                    <div className="mb-24"></div>
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
