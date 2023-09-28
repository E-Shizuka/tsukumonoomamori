import{j as s,a as o}from"./app-a88c6e07.js";import{G as c}from"./GuestLayout-8d33512d.js";import{A as a}from"./AuthenticatedLayout-3616050d.js";import{F as i}from"./FooterLogin-aab1b872.js";import{F as d}from"./Footer-e7af7fa1.js";import"./Dropdown-731d5928.js";import"./transition-ef4b0f2d.js";function e(){return s.jsxs(s.Fragment,{children:[s.jsx(o,{title:"自然の力を体感"}),s.jsxs("div",{className:"mb-24 bg_color_sub",children:[s.jsx("div",{className:"py-6",children:s.jsxs("div",{className:"card lg:card-side bg-base-100 shadow-xl",children:[s.jsx("figure",{children:s.jsx("img",{src:"../images/oogosha_oosugi.jpg",alt:"natural"})}),s.jsxs("div",{className:"card-body",children:[s.jsx("h2",{className:"card-title",children:"〇〇旅館"}),s.jsx("p",{children:"旅館所在地："}),s.jsx("p",{children:"パワースポット：大杵社の大杉"}),s.jsx("p",{children:"お守り：銀座きもの装"}),s.jsx("div",{className:"card-actions justify-end",children:s.jsx("button",{onClick:()=>{window.location.href=route("dashboard")},className:"custom-button",children:"詳細を見る"})})]})]})}),s.jsx("div",{className:"py-6",children:s.jsxs("div",{className:"card lg:card-side bg-base-100 shadow-xl",children:[s.jsx("figure",{children:s.jsx("img",{src:"../images/oogosha_oosugi.jpg",alt:"natural"})}),s.jsxs("div",{className:"card-body",children:[s.jsx("h2",{className:"card-title",children:"〇〇旅館"}),s.jsx("p",{children:"旅館所在地："}),s.jsx("p",{children:"パワースポット：大杵社の大杉"}),s.jsx("p",{children:"お守り：銀座きもの装"}),s.jsx("div",{className:"card-actions justify-end",children:s.jsx("button",{onClick:()=>{window.location.href=route("dashboard")},className:"custom-button",children:"詳細を見る"})})]})]})})]})]})}function u({auth:r}){return s.jsxs(s.Fragment,{children:[r.user?s.jsx(a,{user:r.user,children:s.jsx(e,{})}):s.jsx(c,{children:s.jsx(e,{})}),s.jsx("style",{children:`
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

                                `}),r.user?s.jsx(i,{}):s.jsx(d,{})]})}export{u as default};
