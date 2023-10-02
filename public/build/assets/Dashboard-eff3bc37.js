import{r as o,a as x,j as e,b as h}from"./app-3c7e9641.js";import{A as p}from"./AuthenticatedLayout-ec31ab5a.js";import{F as u}from"./FooterLogin-49cb9727.js";import"./Dropdown-8850899f.js";import"./transition-3127a4f2.js";function w({auth:c}){const t=new URLSearchParams(window.location.search),r=t.get("p")-1,l=t.get("p"),[s,d]=o.useState([]),[a,i]=o.useState(!0);return o.useEffect(()=>{x.get("/plans").then(n=>{d(n.data.plans),i(!1)}).catch(n=>{console.error(n),i(!1)})},[]),e.jsxs(p,{user:c.user,children:[e.jsx(h,{title:"ご案内"}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx("div",{className:"overflow-hidden sm:rounded-lg",children:a?e.jsx("p",{children:"Loading..."}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"開運の旅へ"}),e.jsx("h3",{children:s&&s[r].plan_name}),e.jsx("h3",{children:"【全体の流れ】"}),e.jsx("h4",{children:s&&s[r].first_title}),e.jsx("p",{children:s&&s[r].first_instruction}),e.jsx("h4",{children:s&&s[r].second_title}),e.jsx("p",{children:s&&s[r].second_instruction}),e.jsx("h4",{children:s&&s[r].third_title}),e.jsx("p",{children:s&&s[r].third_instruction}),e.jsx("h4",{children:s&&s[r].last_title}),e.jsx("p",{children:s&&s[r].last_instruction})]})}),e.jsxs("div",{className:" overflow-hidden sm:rounded-lg",children:[e.jsx("h3",{children:"【注意事項】"}),e.jsx("p",{children:"開運の旅へ出発する際に、以下の注意事項を守りましょう。これらのアドバイスは、パワースポットを訪れる際に大切なポイントです。"}),e.jsx("p",{children:"服装について"}),e.jsx("p",{children:"パワースポットへ向かう際は、歩きやすい服装を選びましょう。また、お守りは洋服の上から羽織ること"}),e.jsx("p",{children:"パワースポットでの禁止事項について"}),e.jsx("p",{children:"パワースポットにあるものは、神聖なものであり、その場所にとどまるべきです。石ころや葉っぱひとつにも、特別な意味が込められています。これらを外部に持ち出すことは、ルール違反であり、神域への不敬です。自然と神聖な場所を尊重しましょう。"}),e.jsx("p",{children:"常識外れの行動をすると、因果応報の原則に従い、それがあなたに返ってくることがあります。せっかくの開運の旅ですので、パワースポットでの行動には留意し、神様や自然に感謝の気持ちを忘れずに持ちましょう。"}),e.jsx("p",{children:"パワースポット巡りは素晴らしい経験ですが、その場所とその力を尊重し、感謝の心を持って訪れることが大切です。安全で幸せな旅をお楽しみください。"})]}),e.jsxs("div",{className:"max-w-7xl mx-auto p-6 lg:p-8 flex justify-center items-center mb-5",children:[e.jsx("button",{onClick:()=>{window.location.href=route("experience")},className:"custom-button",children:"戻る"}),e.jsx("button",{onClick:()=>{window.location.href=route("plan-login")+`?p=${l}`},className:"go-button",children:"出かける"})]})]})}),e.jsx("style",{children:`
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

                                `}),e.jsx(u,{})]})}export{w as default};
