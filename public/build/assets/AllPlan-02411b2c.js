import{j as s,r as o,a as l,b as h}from"./app-58604280.js";import{G as j}from"./GuestLayout-be406da9.js";import{A as p}from"./AuthenticatedLayout-68690ad6.js";import{F as f}from"./FooterLogin-5c41cec9.js";import{F as g}from"./Footer-862549fd.js";import"./Dropdown-fdf485d6.js";import"./transition-c6d76b7b.js";function i(){const[r,d]=o.useState([]),[a,m]=o.useState([]),[x,c]=o.useState(!0);return o.useEffect(()=>{const e=l.get("/plans"),t=l.get("/planlist");Promise.all([e,t]).then(([n,u])=>{d(n.data.plans),m(u.data.data),c(!1)}).catch(n=>{console.error(n),c(!1)})},[]),console.log(r),console.log(a),s.jsxs(s.Fragment,{children:[s.jsx(h,{title:"体験プラン一覧"}),s.jsx("div",{className:"mb-24 bg_color_sub",children:x?s.jsx("p",{children:"Loading..."}):s.jsx(s.Fragment,{children:a&&a.map((e,t)=>s.jsx("div",{className:"py-6",children:s.jsxs("div",{className:"card lg:card-side bg-base-100 shadow-xl",children:[s.jsx("figure",{children:s.jsx("img",{src:`../images/${e.plan_image}`})}),s.jsxs("div",{className:"card-body",children:[s.jsx("h2",{className:"card-title",children:e.ryokan_name}),s.jsx("p",{children:e.ryokan_prefectures}),s.jsx("p",{children:e.plan_name}),s.jsx("p",{children:e.omamori_name}),s.jsx("div",{className:"card-actions justify-end",children:s.jsx("button",{onClick:()=>{window.location.href=route("dashboard")+`?p=${e.plan_id}`},className:"custom-button",children:"詳細を見る"})})]})]})},t))})})]})}function P({auth:r}){return s.jsxs(s.Fragment,{children:[r.user?s.jsx(p,{user:r.user,children:s.jsx(i,{})}):s.jsx(j,{children:s.jsx(i,{})}),s.jsx("style",{children:`
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
