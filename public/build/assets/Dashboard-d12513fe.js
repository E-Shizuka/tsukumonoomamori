import{r as i,a as m,j as t,b as x}from"./app-15fbdc5e.js";import{A as g}from"./AuthenticatedLayout-53921660.js";import{F as h}from"./FooterLogin-fbad3fc9.js";import"./Dropdown-a2a34237.js";import"./transition-b2926e51.js";function N({auth:r}){const l=new URLSearchParams(window.location.search),s=l.get("p")-1,d=l.get("p"),[e,o]=i.useState([]),[c,n]=i.useState(!0);return i.useEffect(()=>{m.get("/plans").then(a=>{o(a.data.plans),n(!1)}).catch(a=>{console.error(a),n(!1)})},[]),t.jsxs(g,{user:r.user,children:[t.jsx(x,{title:"ご案内"}),t.jsx("div",{className:"py-12",children:t.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[t.jsx("div",{className:"overflow-hidden sm:rounded-lg",children:c?t.jsx("p",{children:"Loading..."}):t.jsxs(t.Fragment,{children:[t.jsx("h2",{className:"title font-semibold text-2xl text-gray-800 leading-tight ml-2 my-4",children:"開運の旅へ！"}),t.jsxs("h3",{className:"font-semibold text-lg text-gray-800 leading-tight m-2",children:["体験プラン：",e&&e[s].plan_name]}),t.jsx("h3",{className:"font-semibold text-gray-800 leading-tight my-2",children:"【全体の流れ】"}),t.jsxs("div",{className:"bg-white m-2 rounded p-2",children:[t.jsx("h3",{className:"font-semibold text-gray-800 leading-tight m-2",children:e&&e[s].first_title}),t.jsx("p",{className:"text-sm text-gray-800 leading-tight m-2",children:e&&e[s].first_instruction})]}),t.jsxs("div",{className:"bg-white m-2 rounded p-2",children:[t.jsx("h3",{className:"font-semibold text-gray-800 leading-tight m-2",children:e&&e[s].second_title}),t.jsx("p",{className:"text-sm text-gray-800 leading-tight m-2",children:e&&e[s].second_instruction})]}),t.jsxs("div",{className:"bg-white m-2 rounded p-2",children:[t.jsx("h3",{className:"font-semibold text-gray-800 leading-tight m-2",children:e&&e[s].third_title}),t.jsx("p",{className:"text-sm text-gray-800 leading-tight m-2",children:e&&e[s].third_instruction})]}),t.jsxs("div",{className:"bg-white m-2 rounded p-2",children:[t.jsx("h3",{className:"font-semibold text-gray-800 leading-tight m-2",children:e&&e[s].last_title}),t.jsx("p",{className:"text-sm text-gray-800 leading-tight m-2",children:e&&e[s].last_instruction})]})]})}),t.jsxs("div",{className:" overflow-hidden sm:rounded-lg",children:[t.jsx("h3",{className:"font-semibold text-gray-800 leading-tight my-2",children:"【注意事項】"}),t.jsx("p",{className:"text-sm text-gray-800 leading-tight m-2",children:"開運の旅へ出発する際に、以下の注意事項を守りましょう。これらのアドバイスは、パワースポットを訪れる際に大切なポイントです。"}),t.jsx("p",{className:"text-sm text-gray-800 leading-tight m-2",children:"服装について"}),t.jsx("p",{className:"text-sm text-gray-800 leading-tight m-2",children:"パワースポットへ向かう際は、歩きやすい服装を選びましょう。また、お守りは洋服の上から羽織ること"}),t.jsx("p",{className:"text-sm text-gray-800 leading-tight m-2",children:"パワースポットでの禁止事項について"}),t.jsx("p",{className:"text-sm text-gray-800 leading-tight m-2",children:"パワースポットにあるものは、神聖なものであり、その場所にとどまるべきです。石ころや葉っぱひとつにも、特別な意味が込められています。これらを外部に持ち出すことは、ルール違反であり、神域への不敬です。自然と神聖な場所を尊重しましょう。"}),t.jsx("p",{className:"text-sm text-gray-800 leading-tight m-2",children:"常識外れの行動をすると、因果応報の原則に従い、それがあなたに返ってくることがあります。せっかくの開運の旅ですので、パワースポットでの行動には留意し、神様や自然に感謝の気持ちを忘れずに持ちましょう。"}),t.jsx("p",{className:"text-sm text-gray-800 leading-tight m-2",children:"パワースポット巡りは素晴らしい経験ですが、その場所とその力を尊重し、感謝の心を持って訪れることが大切です。安全で幸せな旅をお楽しみください。"})]}),t.jsxs("div",{className:"max-w-7xl mx-auto p-6 lg:p-8 flex justify-center items-center mb-5",children:[t.jsx("button",{onClick:()=>{window.location.href=route("experience")},className:"custom-button",children:"戻る"}),t.jsx("button",{onClick:()=>{window.location.href=route("plan-login")+`?p=${d}`},className:"go-button",children:"出かける"})]})]})}),t.jsx("style",{children:`
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

                    .title {
                        color: #d3381c; /* 赤 */
                    }
                    .bg_color_sub {
                        background-color: #fff1cf;
                    }

                                `}),t.jsx(h,{})]})}export{N as default};
