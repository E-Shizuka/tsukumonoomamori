import{j as o,b as a}from"./app-086e6157.js";import{A as t}from"./AuthenticatedLayout-121bfeb2.js";import m from"./DeleteUserForm-fe87083b.js";import l from"./UpdatePasswordForm-e9e19599.js";import i from"./UpdateProfileInformationForm-7a5d49ef.js";import"./Dropdown-544993f0.js";import"./transition-e6286a32.js";import"./TextInput-ef5c4732.js";import"./InputLabel-9d74a525.js";import"./PrimaryButton-bb55db5c.js";function j({auth:s,mustVerifyEmail:r,status:e}){return o.jsxs(t,{user:s.user,header:o.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"プロフィール"}),children:[o.jsx(a,{title:"プロフィール"}),o.jsx("div",{className:"py-12",children:o.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:[o.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:o.jsx(i,{mustVerifyEmail:r,status:e,className:"max-w-xl"})}),o.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:o.jsx(l,{className:"max-w-xl"})}),o.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:o.jsx(m,{className:"max-w-xl"})}),o.jsx("div",{className:"flex justify-center mb-16",children:o.jsx("button",{onClick:()=>{window.location.href=route("home")},className:"custom-button",children:"ホームへ戻る"})})]})}),o.jsx("style",{children:`
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
                                `})]})}export{j as default};
