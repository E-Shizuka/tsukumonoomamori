import{r as c,j as e,b as n}from"./app-58604280.js";import{A as a}from"./AuthenticatedLayout-68690ad6.js";import{F as d}from"./FooterLogin-8562a5c3.js";import"./Dropdown-fdf485d6.js";import"./transition-c6d76b7b.js";function j({auth:t}){const[s,o]=c.useState(null),i=l=>{const r=l.target.files[0];r&&o(URL.createObjectURL(r))};return e.jsxs(a,{user:t.user,children:[e.jsx(n,{title:"自然の力を体感"}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"overflow-hidden sm:rounded-lg",children:[e.jsx("h2",{children:"自然の力を体感"}),e.jsx("p",{children:"〇〇について"}),e.jsx("p",{children:"言い伝え等"}),e.jsx("h3",{children:"ミッション"}),e.jsx("p",{children:"①お参り or 水を飲む or 〇〇を探す"}),e.jsx("p",{children:"ひとことコメント・感想を記録"}),e.jsx("input",{type:"text"}),e.jsx("p",{children:"②写真を撮る"}),e.jsx("input",{type:"file",accept:"image/*",onChange:i}),s&&e.jsxs("div",{children:[e.jsx("h4",{children:"アップロードされた画像プレビュー:"}),e.jsx("img",{src:s,alt:"アップロードされた画像",width:"200"})]})]}),e.jsx("div",{className:"max-w-7xl mx-auto p-6 lg:p-8 flex flex-col items-center mb-5",children:e.jsx("button",{onClick:()=>{window.location.href=route("third-mission")},className:"custom-button",children:"次の体験へ"})})]})}),e.jsx("style",{children:`
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
