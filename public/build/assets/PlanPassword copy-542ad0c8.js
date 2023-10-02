import{r as s,j as o,b as g}from"./app-3780add7.js";import{A as f}from"./AuthenticatedLayout-4b26186b.js";import{F as w}from"./FooterLogin-aa57060c.js";import"./Dropdown-e9417f68.js";import"./transition-532d10fb.js";function S({auth:d}){const a=new URLSearchParams(window.location.search),r="id="+a.get("p"),i=a.get("p"),[n,u]=s.useState(""),[x,m]=s.useState([]),[p,c]=s.useState(!0),[h,l]=s.useState(!1);s.useEffect(()=>{const e=axios.get(`/plan_select?${r}`);Promise.all([e]).then(t=>{m(t[0].data.plan),c(!1)}).catch(t=>{console.error(t),c(!1)})},[]);const b=()=>{x.plan_password===n?(console.log("パスワードが一致しました。"),l(!0)):(console.log("パスワードが一致しません。"),l(!1))};return o.jsxs(f,{user:d.user,children:[o.jsx(g,{title:"癒しのひととき"}),o.jsx("div",{className:"py-12",children:o.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[p?o.jsx("p",{children:"Loading..."}):o.jsx(o.Fragment,{children:o.jsxs("div",{className:"overflow-hidden sm:rounded-lg",children:[o.jsx("p",{children:"プランパスワードを入力してください。"}),o.jsx("input",{type:"text",placeholder:"プランパスワード",value:n,onChange:e=>u(e.target.value)}),o.jsx("button",{onClick:b,className:"custom-button",children:"送信"})]})}),o.jsx("div",{id:"next",className:"max-w-7xl mx-auto p-6 lg:p-8 flex flex-col items-center mb-5",children:h?o.jsx("button",{onClick:()=>{window.location.href=route("first-mission")+`?${r}`},className:"go-button",children:"次の体験へ"}):o.jsx("button",{onClick:()=>{window.location.href=route("dashboard")+`?p=${i}`},className:"custom-button",children:"戻る"})})]})}),o.jsx("style",{children:`
                    .custom-button {
                        background-color: #f19072; /* ボタンの背景色 */
                        color: black; /* ボタンのテキスト色 */
                        padding: 8px 16px; /* ボタンのパディング */
                        border-radius: 4px; /* ボタンの角丸 */
                        border: none; /* ボーダーなし */
                        margin: 0.5rem;
                    }

                    .go-button {
                        background-color: #d3381c; /* ボタンの背景色 */
                        color: white; /* ボタンのテキスト色 */
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

                                `}),o.jsx(w,{})]})}export{S as default};
