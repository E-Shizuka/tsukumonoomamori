import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        lastname: "",
        firstname: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="開運の旅へ" />
            <div className="max-w-7xl mx-auto p-6 lg:p-8 flex flex-col items-center">
                <div className="mt-4">
                    <h1 className="font-bold text-gray-800 leading-tight m-2 mb-5">
                        開運の旅へようこそ
                    </h1>

                    <p className="text-sm text-gray-800 leading-tight m-2">
                        このアプリではパワースポットのご案内とパワースポットの巡り方をご案内しています。
                    </p>
                    <p className="text-sm text-gray-800 leading-tight m-2">
                        パワースポットは基本的にはその場所に行くだけでパワーを得ることができますが、そのパワーを自分の中に取り込み、ここぞというときにその力を発揮させるためには正しい手順で行くと良いとされています。
                    </p>
                    <p className="text-sm text-gray-800 leading-tight m-2">
                        そのため、手順に沿ってミッションをご用意していますのでミッションにそってパワースポットを巡ってください。
                        またにはミッション写真撮影もございます。
                        神様のお力を、写真に残すことで、そのパワーを持って帰らせていただけますので、あなたの日常に取り入れてください。また、あなたの旅の思い出として大切にしてください。
                    </p>
                    <p className="text-sm text-gray-800 leading-tight m-2">
                        このアプリはパワースポットの巡り方や進行を管理し、旅の記録を共有できます。下記よりユーザー登録をして、開運の旅を楽しみましょう！
                    </p>
                </div>
            </div>
            <form onSubmit={submit}>
                <div>
                    <InputLabel
                        htmlFor="name"
                        value="ユーザー名（ニックネーム）"
                    />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="flex">
                    <div>
                        <InputLabel htmlFor="lastname" value="姓" />

                        <TextInput
                            id="lastname"
                            name="lastname"
                            value={data.lastname}
                            className="mt-1 block w-full"
                            autoComplete="lastname"
                            isFocused={true}
                            onChange={(e) =>
                                setData("lastname", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.lastname}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="firstname" value="名" />

                        <TextInput
                            id="firstname"
                            name="firstname"
                            value={data.firstname}
                            className="mt-1 block w-full"
                            autoComplete="firstname"
                            isFocused={true}
                            onChange={(e) =>
                                setData("firstname", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.firstname}
                            className="mt-2"
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="メールアドレス" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="パスワード" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="確認用パスワード"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 m-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        ログインはこちらから
                    </Link>

                    <button className="custom-button" disabled={processing}>
                        新規登録
                    </button>
                </div>
            </form>
            <style>
                {`
                    .custom-button {
                        background-color: #f19072; /* ボタンの背景色 */
                        color: black; /* ボタンのテキスト色 */
                        padding: 8px 16px; /* ボタンのパディング */
                        border-radius: 4px; /* ボタンの角丸 */
                        border: none; /* ボーダーなし */
                    }

                    .custom-button:hover {
                        background-color: #d3381c; /* ホバー時の背景色 */
                        color: white; /* ボタンのテキスト色 */
                    }

                                `}
            </style>
        </GuestLayout>
    );
}
