import{j as s,r as a,a as i,b as h}from"./app-237fc0c5.js";import{G as j}from"./GuestLayout-cf3223d6.js";import{A as p}from"./AuthenticatedLayout-ca844a3a.js";import{F as f}from"./FooterLogin-6b0d7a72.js";import{F as g}from"./Footer-a208605b.js";import"./Dropdown-db4c145d.js";import"./transition-1a9a0c3a.js";function l(){const[r,d]=a.useState([]),[n,m]=a.useState([]),[x,c]=a.useState(!0);return a.useEffect(()=>{const e=i.get("/plans"),o=i.get("/planlist");Promise.all([e,o]).then(([t,u])=>{d(t.data.plans),m(u.data.data),c(!1)}).catch(t=>{console.error(t),c(!1)})},[]),s.jsxs(s.Fragment,{children:[s.jsx(h,{title:"体験プラン一覧"}),s.jsx("div",{className:"mb-24 bg_color_sub",children:x?s.jsx("p",{children:"Loading..."}):s.jsx(s.Fragment,{children:n&&n.map((e,o)=>s.jsx("div",{className:"py-6",children:s.jsxs("div",{className:"card lg:card-side bg-base-100 shadow-xl",children:[s.jsx("figure",{children:s.jsx("img",{src:`../images/${e.plan_image}`})}),s.jsxs("div",{className:"card-body",children:[s.jsx("h2",{className:"card-title",children:e.ryokan_name}),s.jsx("p",{children:e.ryokan_prefectures}),s.jsx("p",{children:e.plan_name}),s.jsx("p",{children:e.omamori_name}),s.jsx("div",{className:"card-actions justify-end",children:s.jsx("button",{onClick:()=>{window.location.href=route("dashboard")+`?p=${e.plan_id}`},className:"custom-button",children:"詳細を見る"})})]})]})},o))})})]})}function P({auth:r}){return s.jsxs(s.Fragment,{children:[r.user?s.jsx(p,{user:r.user,children:s.jsx(l,{})}):s.jsx(j,{children:s.jsx(l,{})}),s.jsx("style",{children:`
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

                                `}),r.user?s.jsx(f,{}):s.jsx(g,{})]})}export{P as default};
