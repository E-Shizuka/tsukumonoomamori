import{r as i,j as e,b as n}from"./app-15fbdc5e.js";import{A as a}from"./AuthenticatedLayout-53921660.js";import{F as d}from"./FooterLogin-fbad3fc9.js";import"./Dropdown-a2a34237.js";import"./transition-b2926e51.js";function j({auth:t}){const[s,o]=i.useState(null),l=c=>{const r=c.target.files[0];r&&o(URL.createObjectURL(r))};return e.jsxs(a,{user:t.user,children:[e.jsx(n,{title:"地元の美食を堪能 "}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"overflow-hidden sm:rounded-lg",children:[e.jsx("h2",{children:"地元の美食を堪能 "}),e.jsx("p",{children:"地元の食材の紹介"}),e.jsx("p",{children:"お店の紹介"}),e.jsx("p",{children:"料理のこだわり"}),e.jsx("p",{children:"①料理を食べる"}),e.jsx("p",{children:"ひとことコメント・感想を記録"}),e.jsx("input",{type:"text"}),e.jsx("p",{children:"②写真を撮る"}),e.jsx("input",{type:"file",accept:"image/*",onChange:l}),s&&e.jsxs("div",{children:[e.jsx("h4",{children:"アップロードされた画像プレビュー:"}),e.jsx("img",{src:s,alt:"アップロードされた画像",width:"200"})]})]}),e.jsx("div",{className:"max-w-7xl mx-auto p-6 lg:p-8 flex flex-col items-center mb-5",children:e.jsx("button",{onClick:()=>{window.location.href=route("last-mission")},className:"custom-button",children:"次の体験へ"})})]})}),e.jsx("style",{children:`
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

                                `}),e.jsx(d,{})]})}export{j as default};
